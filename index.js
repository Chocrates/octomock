const winston = require('winston')
class octomock {
    constructor(){
        this.logger = new winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            transports: [ new winston.transports.Console()]
        })

        this.defaultContext = {
            payload: {
                issue: {
                    body: "",
                    user: {}
                }
            }
        }

        this.mockFunctions = {
            createInvitation: jest.fn(),
            getContents: jest.fn(),
            setFailed: jest.fn((message) => { logger.error(`MOCK ERROR: ${message}`)}),
            debug: jest.fn(message => {logger.info(`MOCK DEBUG: ${message}`)}),
            info: jest.fn(message => {logger.info(`MOCK INFO: ${message}`)}),
            setOutput: jest.fn()
        }

        this.mockGitHubImplementation = {
            context: {},
            GitHub: class {
                constructor() {
                    this.orgs = {
                        createInvitation: mockFunctions.createInvitation 
                    }
                    this.repos = {
                        getContents: mockFunctions.getContents
                    }
                }
            }
        }

        this.mockCoreImplementation = {
            debug: mockFunctions.debug,
            info: mockFunctions.info,
            setFailed: mockFunctions.setFailed,
            setOutput: mockFunctions.setOutput
        }
    }

    updateGitHubImplementation(implementation){
        this.mockGitHubImplementation = implementation
    }

    getGitHubImplementation(){
        return this.mockGitHubImplementation
    }

    getCoreImplementation(){
        return this.mockCoreImplementation
    }

    updateCoreImplementation(implementation){
        this.mockCoreImplementation = implementation
    }

    resetMocks(){
        for(let func in this.mockFunctions) {
            this.mockFunctions[func].mockClear()
        }
    }

    updateContext(context){
        for(let property in context){
            this.mockGitHubImplementation.context[property] = context[property]
        } 
    }

    getContext(){
        return this.mockGitHubImplementation.context
    }
    
    setup(){
        jest.mock('@actions/github', () => { return this.mockGitHubImplementation }, {virtual: true})
        jest.mock('@actions/core', () => { return  this.mockCoreImplementation }, {virtual: true})
        updateContext(defaultContext)
    }
}

module.exports = { octomock }
