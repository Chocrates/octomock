declare module "octomock" {
    export interface octomock {
        logger: any,
        defaultContext: any,
        mockFunctions: any,
        mockGitHubImplementation: any,
        mockCoreImplementation: any,
        updateGitHubImplementation: Function,
        getGitHubImplementation: Function,
        getCoreImplementation: Function,
        updateCoreImplementation: Function,
        resetMocks: Function,
        updateContext: Function,
        getContext: Function,
        setup: Function
    }
}
