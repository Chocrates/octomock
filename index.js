jest.mock("@actions/core");
jest.mock("@actions/github");

const { GitHub, context } = require("@actions/github");
const core = require("@actions/core");
const winston = require('winston')

class OctoMock {
    constructor(functionDefaults, environmentDefaults, logLevel = 'info'){
        this.logger = new winston.createLogger({
            level: logLevel,
            format: winston.format.json(),
            transports: [ new winston.transports.Console()]
        })
        this.functions = {
            createInvitation: jest.fn(),
            getContents: jest.fn(),
            setFailed: jest.fn((message) => { this.logger.error(`MOCK ERROR: ${message}`)}),
            setOutput: jest.fn(),
            debug: jest.fn(message => {this.logger.info(`MOCK DEBUG: ${message}`)})
        }
        this.owner = 'testOwner'
        this.repo = 'testRepo'

        for(let property in this.functions){
            if(property in functionDefaults){
                this.functions[property] = functionDefaults[property]
            }
        }

        process.env.GITHUB_REPOSITORY = `${this.owner}/${this.repo}`

        for(let property in environmentDefaults){
            process.env[property] = environmentDefaults
        }

        GitHub.mockImplementation(() => {
            return {
            repos: {
                getContents: this.functions.getContents
            },
            orgs: {
                createInvitation: this.functions.createInvitation
            }
            }
        });

        core.debug = this.functions.debug;
        core.setFailed = this.functions.setFailed;
        core.setOutput = this.functions.setOutput;

        context.repo = {
            owner: this.owner,
            repo: this.repo
        };
    }

    resetMocks(){
        jest.resetModules();
        for(let method in this.functions){
            this.functions[method].mockClear()
        }
    }

}

module.exports = { core, GitHub, context, OctoMock };
