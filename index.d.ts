declare module "octomock" {
  class octomock {
    constructor();
    logger: any;
    defaultContext: any;
    mockFunctions: any;
    mockGitHubImplementation: any;
    mockCoreImplementation: any;
    updateGitHubImplementation(implementation: any): void;
    getGitHubImplementation(): any;
    getCoreImplementation(): any;
    updateCoreImplementation(implementation: any): void;
    resetMocks(): void;
    updateContext(context: any): void;
    getContext(): any;
    loadContext(file: string): void;
    loadFixture(file: string): string;
    loadPushContext(): void;
      loadIssueCommentContext({action: string, issueNumber: number, issueAuthorLogin: string}): void;
    loadLabelContext({action: string}): void;
      loadIssueContext({action:string, issueBody: string, issueNumber: number, issueAuthorLogin: string}): void;
      loadIssueLabeledContext({adction: string, issueBody: string, issueNumber: number, issueAuthorLogin: string}): void;
    setup(): void;
  }
}
