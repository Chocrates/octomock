global.mockFunctions = {
    mockBleh: jest.fn()
}

const mockImpl = {
    context: {},
    GitHub: class {
        constructor() {
            this.bleh = mockFunctions.mockBleh
        }
    }
}

const setup = () => {
    console.log('inside setup')
    jest.setMock('@actions/github', () => {
        return mockImpl
    })
}

module.exports = { setup, mockImpl }
