const winston = require('winston')
const fs = require('fs')
const path = require('path')

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

        let mockFunctions = this.mockFunctions = {
            createInvitation: jest.fn(),
            getContents: jest.fn(),
            setFailed: jest.fn((message) => { this.logger.error(`MOCK ERROR: ${message}`)}),
            debug: jest.fn(message => {this.logger.info(`MOCK DEBUG: ${message}`)}),
            info: jest.fn(message => {this.logger.info(`MOCK INFO: ${message}`)}),
            setOutput: jest.fn(),
            getInput: jest.fn(value => value),
            createComment: jest.fn((message, status) => true),
            closeIssue: jest.fn()
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

                    this.issues = {
                        createComment: mockFunctions.createComment,
                        closeIssue: mockFunctions.closeIssue
                    }
                }
            }
        }

        this.mockCoreImplementation = {
            debug: this.mockFunctions.debug,
            info: this.mockFunctions.info,
            setFailed: this.mockFunctions.setFailed,
            setOutput: this.mockFunctions.setOutput,
            getInput: this.mockFunctions.getInput
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

    loadContext(file) {
        const raw = fs.readFileSync(path.join(__dirname, 'file'), 'utf8')
        this.mockGitHubImplementation.context = JSON.parse(raw) 
    }
    
    setup(){
        jest.mock('@actions/github', () => { return this.mockGitHubImplementation }, {virtual: true})
        jest.mock('@actions/core', () => { return  this.mockCoreImplementation }, {virtual: true})
        this.updateContext(this.defaultContext)
    }
}

module.exports = { octomock }
