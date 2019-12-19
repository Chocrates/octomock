const winston = require('winston')
const logger = new winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [ new winston.transports.Console()]
})

const defaultContext = {
    payload: {
        issue: {
            body: "",
            user: {}
        }
    }
}

global.mockFunctions = {
    createInvitation: jest.fn(),
    getContents: jest.fn(),
    setFailed: jest.fn((message) => { logger.error(`MOCK ERROR: ${message}`)}),
    debug: jest.fn(message => {logger.info(`MOCK DEBUG: ${message}`)}),
    info: jest.fn(message => {logger.info(`MOCK INFO: ${message}`)}),
    setOutput: jest.fn()
}

let mockGitHubImplementation = {
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

let mockCoreImplementation = {
    debug: mockFunctions.debug,
    info: mockFunctions.info,
    setFailed: mockFunctions.setFailed,
    setOutput: mockFunctions.setOutput
}

global.updateGitHubImplementation = (implementation) => {
        mockGitHubImplementation = implementation
}

global.getGitHubImplementation = () => {
    return mockGitHubImplementation
}

global.getCoreImplementation = () => {
    return mockCoreImplementation
}

global.updateCoreImplementation = (implementation) => {
        mockCoreImplementation = implementation
}

global.resetMocks = () => {
    for(let func in mockFunctions) {
        mockFunctions[func].mockClear()
    }
}

global.updateContext = (context) => {
    for(let property in context){
        mockGitHubImplementation.context[property] = context[property]
    } 
}

global.getContext = () => {
    return mockGitHubImplementation.context
}

const setup = () => {
    jest.mock('@actions/github', () => { return mockGitHubImplementation }, {virtual: true})
    jest.mock('@actions/core', () => { return  mockCoreImplementation }, {virtual: true})
    updateContext(defaultContext)
}

module.exports = { setup }
