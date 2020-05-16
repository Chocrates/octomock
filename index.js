/* global jest */
const winston = require('winston');
const fs = require('fs');
const path = require('path');

class octomock {
  constructor() {
    this.logger = new winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    });

    this.defaultContext = {
      payload: {
        issue: {
          body: '',
          user: {},
        },
      },
    };

    let mockFunctions = (this.mockFunctions = {
      orgs: {
        list: jest.fn(),
        get: jest.fn(),
        update: jest.fn(),
        listBlockedUsers: jest.fn(),
        checkBlockedUser: jest.fn(),
        blockUser: jest.fn(),
        unblockUser: jest.fn(),
        listHooks: jest.fn(),
        createHook: jest.fn(),
        getHook: jest.fn(),
        updateHook: jest.fn(),
        deleteHook: jest.fn(),
        pingHook: jest.fn(),
        listInstallations: jest.fn(),
        listPendingInvitations: jest.fn(),
        createInvitation: jest.fn(),
        listInvitationTeams: jest.fn(),
        listMembers: jest.fn(),
        checkMembership: jest.fn(),
        removeMember: jest.fn(),
        getMembership: jest.fn(),
        addOrUpdateMembership: jest.fn(),
        removeMembership: jest.fn(),
        listOutsideCollaborators: jest.fn(),
        removeOutsideColalborator: jest.fn(),
        convertMemberToOutsideCollaborator: jest.fn(),
        listPublicMembers: jest.fn(),
        checkPublicMembership: jest.fn(),
        publicizeMembership: jest.fn(),
        concealMembership: jest.fn(),
        listMemberships: jest.fn(),
        getMembershipForAuthenticatedUser: jest.fn(),
        updateMembership: jest.fn(),
        listForAuthenticatedUser: jest.fn(),
        listForUser: jest.fn(),
      },
      repos: {
        listForOrg: jest.fn(),
        createInOrg: jest.fn(),
        get: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
        enableAutomatedSecurityFixes: jest.fn(),
        disableAutomatedSecurityFixes: jest.fn(),
        listBranches: jest.fn(),
        getBranch: jest.fn(),
        getBranchProtection: jest.fn(),
        updateBranchProtection: jest.fn(),
        removeBranchProtection: jest.fn(),
        getProtectedBranchAdminEnforcement: jest.fn(),
        addProtectedBranchAdminEnforcement: jest.fn(),
        removeProtectedBranchAdminEnforcement: jest.fn(),
        getProtectedBranchPullRequestReviewEnforcement: jest.fn(),
        updateProtectedBranchPullRequestReviewEnforcement: jest.fn(),
        removeProtectedBranchPullRequestReviewEnforcement: jest.fn(),
        getProtectedBranchRequiredSignatures: jest.fn(),
        addProtectedBranchRequiredSignatures: jest.fn(),
        removeProtectedBranchRequiredSignatures: jest.fn(),
        getProtectedBranchRequiredStatusChecks: jest.fn(),
        updateProtectedBranchRequiredStatusChecks: jest.fn(),
        removeProtectedBranchRequiredStatusChecks: jest.fn(),
        listProtectedBranchRequiredStatusChecksContexts: jest.fn(),
        replaceProtectedBranchRequiredStatusChecksContexts: jest.fn(),
        addProtectedBranchRequiredStatusChecksContexts: jest.fn(),
        removeProtectedBranchRequiredStatusChecksContext: jest.fn(),
        getProtectedBranchRestrictions: jest.fn(),
        removeProtectedBranchRestrictions: jest.fn(),
        getAppsWithAccessToProtectedBranch: jest.fn(),
        listAppsWithAccessToProtectedBranch: jest.fn(),
        replaceProtectedBranchAppRestrictions: jest.fn(),
        addProtectedBranchAppRestrictions: jest.fn(),
        removeProtectedBranchAppRestrictions: jest.fn(),
        getTeamsWithAccessToProtectedBranch: jest.fn(),
        listProtectedBranchTeamRestrictions: jest.fn(),
        listTeamsWithAccessToProtectedBranch: jest.fn(),
        replaceProtectedBranchTeamRestrictions: jest.fn(),
        addProtectedBranchTeamRestrictions: jest.fn(),
        removeProtectedBranchTeamRestrictions: jest.fn(),
        getUsersWithAccessToProtectedBranch: jest.fn(),
        listProtectedBranchUserRestrictions: jest.fn(),
        listUsersWithAccessToProtectedBranch: jest.fn(),
        replaceProtectedBranchUserRestrictions: jest.fn(),
        addProtectedBranchUserRestrictions: jest.fn(),
        removeProtectedBranchUserRestrictions: jest.fn(),
        listCollaborators: jest.fn(),
        checkCollaborator: jest.fn(),
        addCollaborator: jest.fn(),
        removeCollaborator: jest.fn(),
        getCollaboratorPermissionLevel: jest.fn(),
        listCommitComments: jest.fn(),
        getCommitComment: jest.fn(),
        updateCommitComment: jest.fn(),
        deleteCommitComment: jest.fn(),
        listCommits: jest.fn(),
        listBranchesForHeadCommit: jest.fn(),
        listCommentsForCommit: jest.fn(),
        createCommitComment: jest.fn(),
        listPullRequestAssociatedWithCommit: jest.fn(),
        getCommit: jest.fn(),
        getCombinedStatusForRef: jest.fn(),
        listStatusesForRef: jest.fn(),
        retrieveCommunityProfileMetrics: jest.fn(),
        compareCommits: jest.fn(),
        getContents: jest.fn(),
        createOrUpdateFile: jest.fn(),
        createFile: jest.fn(),
        updateFile: jest.fn(),
        deleteFile: jest.fn(),
        listContributors: jest.fn(),
        listDeployments: jest.fn(),
        createDeployment: jest.fn(),
        getDeployment: jest.fn(),
        listDeploymentStatuses: jest.fn(),
        createDeploymentStatus: jest.fn(),
        getDeploymentStatus: jest.fn(),
        createDispatchEvent: jest.fn(),
        listDownloads: jest.fn(),
        getDownload: jest.fn(),
        deleteDownload: jest.fn(),
        listForks: jest.fn(),
        createFork: jest.fn(),
        listHooks: jest.fn(),
        createHook: jest.fn(),
        getHook: jest.fn(),
        updateHook: jest.fn(),
        deleteHook: jest.fn(),
        pingHook: jest.fn(),
        testPushHook: jest.fn(),
        listInvitations: jest.fn(),
        deleteInvitation: jest.fn(),
        updateInvitation: jest.fn(),
        listDeployKeys: jest.fn(),
        addDeployKey: jest.fn(),
        getDeployKey: jest.fn(),
        removeDeployKey: jest.fn(),
        listLanguages: jest.fn(),
        merge: jest.fn(),
        getPages: jest.fn(),
        enablePagesSite: jest.fn(),
        disablePagesSite: jest.fn(),
        updateInformationAboutPagesSite: jest.fn(),
        requestPageBuild: jest.fn(),
        listPagesBuilds: jest.fn(),
        getLatestPagesBuild: jest.fn(),
        getPagesBuild: jest.fn(),
        getReadme: jest.fn(),
        listReleases: jest.fn(),
        createRelease: jest.fn(),
        getReleaseAsset: jest.fn(),
        updateReleaseAsset: jest.fn(),
        deleteReleaseAsset: jest.fn(),
        getLatestRelease: jest.fn(),
        getReleaseByTag: jest.fn(),
        getRelease: jest.fn(),
        updateRelease: jest.fn(),
        deleteRelease: jest.fn(),
        listAssetsForRelease: jest.fn(),
        uploadReleaseAsset: jest.fn(),
        getCodeFrequencyStats: jest.fn(),
        getCommitActivityStats: jest.fn(),
        getContributorsStats: jest.fn(),
        getParticipationStats: jest.fn(),
        getPunchCardStats: jest.fn(),
        createStatus: jest.fn(),
        listTags: jest.fn(),
        listTeams: jest.fn(),
        listTopics: jest.fn(),
        replaceTopics: jest.fn(),
        getClones: jest.fn(),
        getTopPaths: jest.fn(),
        getTopReferrers: jest.fn(),
        getViews: jest.fn(),
        transfer: jest.fn(),
        checkVulnerabilityAlerts: jest.fn(),
        enableVulnerabilityAlerts: jest.fn(),
        disableVulnerabilityAlerts: jest.fn(),
        getArchiveLink: jest.fn(),
        createUsingTemplate: jest.fn(),
        listPublic: jest.fn(),
        list: jest.fn(),
        createForAuthenticatedUser: jest.fn(),
        listInvitationsForAuthenticatedUser: jest.fn(),
        acceptInvitation: jest.fn(),
        declineInvitation: jest.fn(),
        listForUser: jest.fn(),
        getCommitRefSha: jest.fn(),
        uploadReleaseAsset: jest.fn(),
      },
      issues: {
        list: jest.fn(),
        listForOrg: jest.fn(),
        listAssignees: jest.fn(),
        checkAssignee: jest.fn(),
        listForRepo: jest.fn(),
        create: jest.fn(),
        listCommentsForRepo: jest.fn(),
        getComment: jest.fn(),
        updateComment: jest.fn(),
        deleteComment: jest.fn(),
        listEventsForRepo: jest.fn(),
        getEvent: jest.fn(),
        get: jest.fn(),
        update: jest.fn(),
        addAssignees: jest.fn(),
        removeAssignees: jest.fn(),
        listComments: jest.fn(),
        createComment: jest.fn((message, status) => true),
        listEvents: jest.fn(),
        listLabelsOnIssue: jest.fn(),
        addLabels: jest.fn(),
        replaceLabels: jest.fn(),
        removeLabels: jest.fn(),
        removeLabel: jest.fn(),
        lock: jest.fn(),
        unlock: jest.fn(),
        listEventsForTimeline: jest.fn(),
        listLabelsForRepo: jest.fn(),
        createLabel: jest.fn(),
        getLabel: jest.fn(),
        updateLabel: jest.fn(),
        deleteLabel: jest.fn(),
        listMilestonesForRepo: jest.fn(),
        createMilestone: jest.fn(),
        getMilestone: jest.fn(),
        updateMilestone: jest.fn(),
        deleteMilestone: jest.fn(),
        listLabelsForMilestone: jest.fn(),
        listForAuthenticatedUser: jest.fn(),
        updateLabel: jest.fn(),
      },
      actions: {
        cancelWorkflowRun: jest.fn(),
        createOrUpdateSecretForRepo: jest.fn(),
        createRegistrationToken: jest.fn(),
        createRemoveToken: jest.fn(),
        deleteArtifact: jest.fn(),
        deleteSecretFromRepo: jest.fn(),
        downloadArtifact: jest.fn(),
        getArtifact: jest.fn(),
        getPublicKey: jest.fn(),
        getSecret: jest.fn(),
        getSelfHostedRunner: jest.fn(),
        getWorkflow: jest.fn(),
        getWorkflowJob: jest.fn(),
        getWorkflowRun: jest.fn(),
        listArtifactsForRepo: jest.fn(),
        listDownloadsForSelfHostedRunnerApplication: jest.fn(),
        listJobsForWorkflowRun: jest.fn(),
        listRepoWorkflowRuns: jest.fn(),
        listRepoWorkflows: jest.fn(),
        listSecretsForRepo: jest.fn(),
        listSelfHostedRunnersForRepo: jest.fn(),
        listWorkflowJobLogs: jest.fn(),
        listWorkflowRunArtifacts: jest.fn(),
        listWorkflowRunLogs: jest.fn(),
        listWorkflowRuns: jest.fn(),
        reRunWorkflow: jest.fn(),
        removeSelfHostedRunner: jest.fn(),
      },
      core: {
        exportVariable: jest.fn(),
        setSecret: jest.fn(),
        addPath: jest.fn(),
        getInput: jest.fn(value => value),
        setOutput: jest.fn(),
        setFailed: jest.fn(message => {
          this.logger.error(`MOCK FAILED: ${message}`);
        }),
        debug: jest.fn(message => {
          this.logger.info(`MOCK DEBUG: ${message}`);
        }),
        error: jest.fn(message => {
          this.logger.error(`MOCK ERROR: ${message}`);
        }),
        warning: jest.fn(message => {
          this.logger.info(`MOCK WARNING: ${message}`);
        }),
        info: jest.fn(message => {
          this.logger.info(`MOCK INFO: ${message}`);
        }),
        startGroup: jest.fn(),
        endGroup: jest.fn(),
        group: jest.fn(),
        saveState: jest.fn(),
        getState: jest.fn(),
      },
    });

    this.mockGitHubImplementation = {
      context: {},
      GitHub: class {
        constructor() {
          this.orgs = {
            list: mockFunctions.orgs.list,
            get: mockFunctions.orgs.get,
            update: mockFunctions.orgs.update,
            listBlockedUsers: mockFunctions.orgs.listBlockedUsers,
            checkBlockedUser: mockFunctions.orgs.checkBlockedUser,
            blockUser: mockFunctions.orgs.blockUser,
            unblockUser: mockFunctions.orgs.unblockUser,
            listHooks: mockFunctions.orgs.listHooks,
            createHook: mockFunctions.orgs.createHook,
            getHook: mockFunctions.orgs.getHook,
            updateHook: mockFunctions.orgs.updateHook,
            deleteHook: mockFunctions.orgs.deleteHook,
            pingHook: mockFunctions.orgs.pingHook,
            listInstallations: mockFunctions.orgs.listInstallations,
            listPendingInvitations: mockFunctions.orgs.listPendingInvitations,
            createInvitation: mockFunctions.orgs.createInvitation,
            listInvitationTeams: mockFunctions.orgs.listInvitationTeams,
            listMembers: mockFunctions.orgs.listMembers,
            checkMembership: mockFunctions.orgs.checkMembership,
            removeMember: mockFunctions.orgs.removeMember,
            getMembership: mockFunctions.orgs.getMembership,
            addOrUpdateMembership: mockFunctions.orgs.addOrUpdateMembership,
            removeMembership: mockFunctions.orgs.removeMembership,
            listOutsideCollaborators:
              mockFunctions.orgs.listOutsideCollaborators,
            removeOutsideColalborator:
              mockFunctions.orgs.removeOutsideColalborator,
            convertMemberToOutsideCollaborator:
              mockFunctions.orgs.convertMemberToOutsideCollaborator,
            listPublicMembers: mockFunctions.orgs.listPublicMembers,
            checkPublicMembership: mockFunctions.orgs.checkPublicMembership,
            publicizeMembership: mockFunctions.orgs.publicizeMembership,
            concealMembership: mockFunctions.orgs.concealMembership,
            listMemberships: mockFunctions.orgs.listMemberships,
            getMembershipForAuthenticatedUser:
              mockFunctions.orgs.getMembershipForAuthenticatedUser,
            updateMembership: mockFunctions.orgs.updateMembership,
            listForAuthenticatedUser:
              mockFunctions.orgs.listForAuthenticatedUser,
            listForUser: mockFunctions.orgs.listForUser,
          };

          this.repos = {
            listForOrg: mockFunctions.repos.listForOrg,
            createInOrg: mockFunctions.repos.createInOrg,
            get: mockFunctions.repos.get,
            update: mockFunctions.repos.update,
            delete: mockFunctions.repos.delete,
            enableAutomatedSecurityFixes:
              mockFunctions.repos.enableAutomatedSecurityFixes,
            disableAutomatedSecurityFixes:
              mockFunctions.repos.disableAutomatedSecurityFixes,
            listBranches: mockFunctions.repos.listBranches,
            getBranch: mockFunctions.repos.getBranch,
            getBranchProtection: mockFunctions.repos.getBranchProtection,
            updateBranchProtection: mockFunctions.repos.updateBranchProtection,
            removeBranchProtection: mockFunctions.repos.removeBranchProtection,
            getProtectedBranchAdminEnforcement:
              mockFunctions.repos.getProtectedBranchAdminEnforcement,
            addProtectedBranchAdminEnforcement:
              mockFunctions.repos.addProtectedBranchAdminEnforcement,
            removeProtectedBranchAdminEnforcement:
              mockFunctions.repos.removeProtectedBranchAdminEnforcement,
            getProtectedBranchPullRequestReviewEnforcement:
              mockFunctions.repos
                .getProtectedBranchPullRequestReviewEnforcement,
            updateProtectedBranchPullRequestReviewEnforcement:
              mockFunctions.repos
                .updateProtectedBranchPullRequestReviewEnforcement,
            removeProtectedBranchPullRequestReviewEnforcement:
              mockFunctions.repos
                .removeProtectedBranchPullRequestReviewEnforcement,
            getProtectedBranchRequiredSignatures:
              mockFunctions.repos.getProtectedBranchRequiredSignatures,
            addProtectedBranchRequiredSignatures:
              mockFunctions.repos.addProtectedBranchRequiredSignatures,
            removeProtectedBranchRequiredSignatures:
              mockFunctions.repos.removeProtectedBranchRequiredSignatures,
            getProtectedBranchRequiredStatusChecks:
              mockFunctions.repos.getProtectedBranchRequiredStatusChecks,
            updateProtectedBranchRequiredStatusChecks:
              mockFunctions.repos.updateProtectedBranchRequiredStatusChecks,
            removeProtectedBranchRequiredStatusChecks:
              mockFunctions.repos.removeProtectedBranchRequiredStatusChecks,
            listProtectedBranchRequiredStatusChecksContexts:
              mockFunctions.repos
                .listProtectedBranchRequiredStatusChecksContexts,
            replaceProtectedBranchRequiredStatusChecksContexts:
              mockFunctions.repos
                .replaceProtectedBranchRequiredStatusChecksContexts,
            addProtectedBranchRequiredStatusChecksContexts:
              mockFunctions.repos
                .addProtectedBranchRequiredStatusChecksContexts,
            removeProtectedBranchRequiredStatusChecksContext:
              mockFunctions.repos
                .removeProtectedBranchRequiredStatusChecksContext,
            getProtectedBranchRestrictions:
              mockFunctions.repos.getProtectedBranchRestrictions,
            removeProtectedBranchRestrictions:
              mockFunctions.repos.removeProtectedBranchRestrictions,
            getAppsWithAccessToProtectedBranch:
              mockFunctions.repos.getAppsWithAccessToProtectedBranch,
            listAppsWithAccessToProtectedBranch:
              mockFunctions.repos.listAppsWithAccessToProtectedBranch,
            replaceProtectedBranchAppRestrictions:
              mockFunctions.repos.replaceProtectedBranchAppRestrictions,
            addProtectedBranchAppRestrictions:
              mockFunctions.repos.addProtectedBranchAppRestrictions,
            removeProtectedBranchAppRestrictions:
              mockFunctions.repos.removeProtectedBranchAppRestrictions,
            getTeamsWithAccessToProtectedBranch:
              mockFunctions.repos.getTeamsWithAccessToProtectedBranch,
            listProtectedBranchTeamRestrictions:
              mockFunctions.repos.listProtectedBranchTeamRestrictions,
            listTeamsWithAccessToProtectedBranch:
              mockFunctions.repos.listTeamsWithAccessToProtectedBranch,
            replaceProtectedBranchTeamRestrictions:
              mockFunctions.repos.replaceProtectedBranchTeamRestrictions,
            addProtectedBranchTeamRestrictions:
              mockFunctions.repos.addProtectedBranchTeamRestrictions,
            removeProtectedBranchTeamRestrictions:
              mockFunctions.repos.removeProtectedBranchTeamRestrictions,
            getUsersWithAccessToProtectedBranch:
              mockFunctions.repos.getUsersWithAccessToProtectedBranch,
            listProtectedBranchUserRestrictions:
              mockFunctions.repos.listProtectedBranchUserRestrictions,
            listUsersWithAccessToProtectedBranch:
              mockFunctions.repos.listUsersWithAccessToProtectedBranch,
            replaceProtectedBranchUserRestrictions:
              mockFunctions.repos.replaceProtectedBranchUserRestrictions,
            addProtectedBranchUserRestrictions:
              mockFunctions.repos.addProtectedBranchUserRestrictions,
            removeProtectedBranchUserRestrictions:
              mockFunctions.repos.removeProtectedBranchUserRestrictions,
            listCollaborators: mockFunctions.repos.listCollaborators,
            checkCollaborator: mockFunctions.repos.checkCollaborator,
            addCollaborator: mockFunctions.repos.addCollaborator,
            removeCollaborator: mockFunctions.repos.removeCollaborator,
            getCollaboratorPermissionLevel:
              mockFunctions.repos.getCollaboratorPermissionLevel,
            listCommitComments: mockFunctions.repos.listCommitComments,
            getCommitComment: mockFunctions.repos.getCommitComment,
            updateCommitComment: mockFunctions.repos.updateCommitComment,
            deleteCommitComment: mockFunctions.repos.deleteCommitComment,
            listCommits: mockFunctions.repos.listCommits,
            listBranchesForHeadCommit:
              mockFunctions.repos.listBranchesForHeadCommit,
            listCommentsForCommit: mockFunctions.repos.listCommentsForCommit,
            createCommitComment: mockFunctions.repos.createCommitComment,
            listPullRequestAssociatedWithCommit:
              mockFunctions.repos.listPullRequestAssociatedWithCommit,
            getCommit: mockFunctions.repos.getCommit,
            getCombinedStatusForRef:
              mockFunctions.repos.getCombinedStatusForRef,
            listStatusesForRef: mockFunctions.repos.listStatusesForRef,
            retrieveCommunityProfileMetrics:
              mockFunctions.repos.retrieveCommunityProfileMetrics,
            compareCommits: mockFunctions.repos.compareCommits,
            getContents: mockFunctions.repos.getContents,
            createOrUpdateFile: mockFunctions.repos.createOrUpdateFile,
            createFile: mockFunctions.repos.createFile,
            updateFile: mockFunctions.repos.updateFile,
            deleteFile: mockFunctions.repos.deleteFile,
            listContributors: mockFunctions.repos.listContributors,
            listDeployments: mockFunctions.repos.listDeployments,
            createDeployment: mockFunctions.repos.createDeployment,
            getDeployment: mockFunctions.repos.getDeployment,
            listDeploymentStatuses: mockFunctions.repos.listDeploymentStatuses,
            createDeploymentStatus: mockFunctions.repos.createDeploymentStatus,
            getDeploymentStatus: mockFunctions.repos.getDeploymentStatus,
            createDispatchEvent: mockFunctions.repos.createDispatchEvent,
            listDownloads: mockFunctions.repos.listDownloads,
            getDownload: mockFunctions.repos.getDownload,
            deleteDownload: mockFunctions.repos.deleteDownload,
            listForks: mockFunctions.repos.listForks,
            createFork: mockFunctions.repos.createFork,
            listHooks: mockFunctions.repos.listHooks,
            createHook: mockFunctions.repos.createHook,
            getHook: mockFunctions.repos.getHook,
            updateHook: mockFunctions.repos.updateHook,
            deleteHook: mockFunctions.repos.deleteHook,
            pingHook: mockFunctions.repos.pingHook,
            testPushHook: mockFunctions.repos.testPushHook,
            listInvitations: mockFunctions.repos.listInvitations,
            deleteInvitation: mockFunctions.repos.deleteInvitation,
            updateInvitation: mockFunctions.repos.updateInvitation,
            listDeployKeys: mockFunctions.repos.listDeployKeys,
            addDeployKey: mockFunctions.repos.addDeployKey,
            getDeployKey: mockFunctions.repos.getDeployKey,
            removeDeployKey: mockFunctions.repos.removeDeployKey,
            listLanguages: mockFunctions.repos.listLanguages,
            merge: mockFunctions.repos.merge,
            getPages: mockFunctions.repos.getPages,
            enablePagesSite: mockFunctions.repos.enablePagesSite,
            disablePagesSite: mockFunctions.repos.disablePagesSite,
            updateInformationAboutPagesSite:
              mockFunctions.repos.updateInformationAboutPagesSite,
            requestPageBuild: mockFunctions.repos.requestPageBuild,
            listPagesBuilds: mockFunctions.repos.listPagesBuilds,
            getLatestPagesBuild: mockFunctions.repos.getLatestPagesBuild,
            getPagesBuild: mockFunctions.repos.getPagesBuild,
            getReadme: mockFunctions.repos.getReadme,
            listReleases: mockFunctions.repos.listReleases,
            createRelease: mockFunctions.repos.createRelease,
            getReleaseAsset: mockFunctions.repos.getReleaseAsset,
            updateReleaseAsset: mockFunctions.repos.updateReleaseAsset,
            deleteReleaseAsset: mockFunctions.repos.deleteReleaseAsset,
            getLatestRelease: mockFunctions.repos.getLatestRelease,
            getReleaseByTag: mockFunctions.repos.getReleaseByTag,
            getRelease: mockFunctions.repos.getRelease,
            updateRelease: mockFunctions.repos.updateRelease,
            deleteRelease: mockFunctions.repos.deleteRelease,
            listAssetsForRelease: mockFunctions.repos.listAssetsForRelease,
            uploadReleaseAsset: mockFunctions.repos.uploadReleaseAsset,
            getCodeFrequencyStats: mockFunctions.repos.getCodeFrequencyStats,
            getCommitActivityStats: mockFunctions.repos.getCommitActivityStats,
            getContributorsStats: mockFunctions.repos.getContributorsStats,
            getParticipationStats: mockFunctions.repos.getParticipationStats,
            getPunchCardStats: mockFunctions.repos.getPunchCardStats,
            createStatus: mockFunctions.repos.createStatus,
            listTags: mockFunctions.repos.listTags,
            listTeams: mockFunctions.repos.listTeams,
            listTopics: mockFunctions.repos.listTopics,
            replaceTopics: mockFunctions.repos.replaceTopics,
            getClones: mockFunctions.repos.getClones,
            getTopPaths: mockFunctions.repos.getTopPaths,
            getTopReferrers: mockFunctions.repos.getTopReferrers,
            getViews: mockFunctions.repos.getViews,
            transfer: mockFunctions.repos.transfer,
            checkVulnerabilityAlerts:
              mockFunctions.repos.checkVulnerabilityAlerts,
            enableVulnerabilityAlerts:
              mockFunctions.repos.enableVulnerabilityAlerts,
            disableVulnerabilityAlerts:
              mockFunctions.repos.disableVulnerabilityAlerts,
            getArchiveLink: mockFunctions.repos.getArchiveLink,
            createUsingTemplate: mockFunctions.repos.createUsingTemplate,
            listPublic: mockFunctions.repos.listPublic,
            list: mockFunctions.repos.list,
            createForAuthenticatedUser:
              mockFunctions.repos.createForAuthenticatedUser,
            listInvitationsForAuthenticatedUser:
              mockFunctions.repos.listInvitationsForAuthenticatedUser,
            acceptInvitation: mockFunctions.repos.acceptInvitation,
            declineInvitation: mockFunctions.repos.declineInvitation,
            listForUser: mockFunctions.repos.listForUser,
            getCommitRefSha: mockFunctions.repos.getCommitRefSha,
            uploadReleaseAsset: mockFunctions.repos.uploadReleaseAsset,
          };

          this.issues = {
            list: mockFunctions.issues.list,
            listForOrg: mockFunctions.issues.listForOrg,
            listAssignees: mockFunctions.issues.listAssignees,
            checkAssignee: mockFunctions.issues.checkAssignee,
            listForRepo: mockFunctions.issues.listForRepo,
            create: mockFunctions.issues.create,
            listCommentsForRepo: mockFunctions.issues.listCommentsForRepo,
            getComment: mockFunctions.issues.getComment,
            updateComment: mockFunctions.issues.updateComment,
            deleteComment: mockFunctions.issues.deleteComment,
            listEventsForRepo: mockFunctions.issues.listEventsForRepo,
            getEvent: mockFunctions.issues.getEvent,
            get: mockFunctions.issues.get,
            update: mockFunctions.issues.update,
            addAssignees: mockFunctions.issues.addAssignees,
            removeAssignees: mockFunctions.issues.removeAssignees,
            listComments: mockFunctions.issues.listComments,
            createComment: mockFunctions.issues.createComment,
            listEvents: mockFunctions.issues.listEvents,
            listLabelsOnIssue: mockFunctions.issues.listLabelsOnIssue,
            addLabels: mockFunctions.issues.addLabels,
            replaceLabels: mockFunctions.issues.replaceLabels,
            removeLabels: mockFunctions.issues.removeLabels,
            removeLabel: mockFunctions.issues.removeLabel,
            lock: mockFunctions.issues.lock,
            unlock: mockFunctions.issues.unlock,
            listEventsForTimeline: mockFunctions.issues.listEventsForTimeline,
            listLabelsForRepo: mockFunctions.issues.listLabelsForRepo,
            createLabel: mockFunctions.issues.createLabel,
            getLabel: mockFunctions.issues.getLabel,
            updateLabel: mockFunctions.issues.updateLabel,
            deleteLabel: mockFunctions.issues.deleteLabel,
            listMilestonesForRepo: mockFunctions.issues.listMilestonesForRepo,
            createMilestone: mockFunctions.issues.createMilestone,
            getMilestone: mockFunctions.issues.getMilestone,
            updateMilestone: mockFunctions.issues.updateMilestone,
            deleteMilestone: mockFunctions.issues.deleteMilestone,
            listLabelsForMilestone: mockFunctions.issues.listLabelsForMilestone,
            listForAuthenticatedUser:
              mockFunctions.issues.listForAuthenticatedUser,
            updateLabel: mockFunctions.issues.updateLabel,
          };

          this.actions = {
            cancelWorkflowRun: mockFunctions.actions.cancelWorkflowRun,
            createOrUpdateSecretForRepo:
              mockFunctions.actions.createOrUpdateSecretForRepo,
            createRegistrationToken:
              mockFunctions.actions.createRegistrationToken,
            createRemoveToken: mockFunctions.actions.createRemoveToken,
            deleteArtifact: mockFunctions.actions.deleteArtifact,
            deleteSecretFromRepo: mockFunctions.actions.deleteSecretFromRepo,
            downloadArtifact: mockFunctions.actions.downloadArtifact,
            getArtifact: mockFunctions.actions.getArtifact,
            getPublicKey: mockFunctions.actions.getPublicKey,
            getSecret: mockFunctions.actions.getSecret,
            getSelfHostedRunner: mockFunctions.actions.getSelfHostedRunner,
            getWorkflow: mockFunctions.actions.getWorkflow,
            getWorkflowJob: mockFunctions.actions.getWorkflowJob,
            getWorkflowRun: mockFunctions.actions.getWorkflowRun,
            listArtifactsForRepo: mockFunctions.actions.listArtifactsForRepo,
            listDownloadsForSelfHostedRunnerApplication:
              mockFunctions.actions.listDownloadsForSelfHostedRunnerApplication,
            listJobsForWorkflowRun:
              mockFunctions.actions.listJobsForWorkflowRun,
            listRepoWorkflowRuns: mockFunctions.actions.listRepoWorkflowRuns,
            listRepoWorkflows: mockFunctions.actions.listRepoWorkflows,
            listSecretsForRepo: mockFunctions.actions.listSecretsForRepo,
            listSelfHostedRunnersForRepo:
              mockFunctions.actions.listSelfHostedRunnersForRepo,
            listWorkflowJobLogs: mockFunctions.actions.listWorkflowJobLogs,
            listWorkflowRunArtifacts:
              mockFunctions.actions.listWorkflowRunArtifacts,
            listWorkflowRunLogs: mockFunctions.actions.listWorkflowRunLogs,
            listWorkflowRuns: mockFunctions.actions.listWorkflowRuns,
            reRunWorkflow: mockFunctions.actions.reRunWorkflow,
            removeSelfHostedRunner:
              mockFunctions.actions.removeSelfHostedRunner,
          };
        }
      },
    };

    this.mockCoreImplementation = {
      exportVariable: this.mockFunctions.core.exportVariable,
      setSecret: this.mockFunctions.core.setSecret,
      addPath: this.mockFunctions.core.addPath,
      getInput: this.mockFunctions.core.getInput,
      setOutput: this.mockFunctions.core.setOutput,
      setFailed: this.mockFunctions.core.setFailed,
      debug: this.mockFunctions.core.debug,
      error: this.mockFunctions.core.error,
      warning: this.mockFunctions.core.warning,
      info: this.mockFunctions.core.info,
      startGroup: this.mockFunctions.core.startGroup,
      endGroup: this.mockFunctions.core.endGroup,
      group: this.mockFunctions.core.group,
      saveState: this.mockFunctions.core.saveState,
      getState: this.mockFunctions.core.getState,
    };
  }

  updateGitHubImplementation(implementation) {
    this.mockGitHubImplementation = implementation;
  }

  getGitHubImplementation() {
    return this.mockGitHubImplementation;
  }

  getCoreImplementation() {
    return this.mockCoreImplementation;
  }

  updateCoreImplementation(implementation) {
    this.mockCoreImplementation = implementation;
  }

  resetMocks() {
    for (let ctx in this.mockFunctions) {
      for (let func in this.mockFunctions[ctx]) {
        this.mockFunctions[ctx][func].mockClear();
      }
    }
  }

  updateContext(context) {
    for (let property in context) {
      this.mockGitHubImplementation.context[property] = context[property];
    }
  }

  getContext() {
    return this.mockGitHubImplementation.context;
  }

  loadContext(file) {
    const absolute_file_path =
      __dirname.indexOf('node_modules/@chocrates/octomock') != -1
        ? path.join(__dirname, file)
        : path.join(__dirname, '../../../', file);
    const raw = fs.readFileSync(absolute_file_path, 'utf8');
    this.mockGitHubImplementation.context.payload = JSON.parse(raw);
  }

  loadFixture(file) {
    return JSON.parse(
      fs.readFileSync(path.join(__dirname, '../../../', file), 'utf8'),
    );
  }

  loadPushContext() {
    this.loadContext('./fixtures/push.json');
  }

  loadIssueCommentContext({
    action = 'created',
    issueNumber = 1,
    issueAuthorLogin = 'Chocrates',
  }) {
    this.loadContext('./fixtures/issue_comment.json');
    this.mockGitHubImplementation.context.payload.action = action;
    this.mockGitHubImplementation.context.payload.issue.number = issueNumber;
    this.mockGitHubImplementation.context.payload.issue.user.login = issueAuthorLogin;
  }

  loadLabelContext({ action = 'created' }) {
    this.loadContext('./fixtures/label.json');
    this.mockGitHubImplementation.context.payload.action = action;
  }

  loadIssueContext({
    action = 'opened',
    issueBody = 'Body',
    issueNumber = 1,
    issueAuthorLogin = 'Chocrates',
  }) {
    this.loadContext('./fixtures/issue_created.json');
    this.mockGitHubImplementation.context.payload.action = action;
    this.mockGitHubImplementation.context.payload.issue.body = issueBody;
    this.mockGitHubImplementation.context.payload.issue.number = issueNumber;
    this.mockGitHubImplementation.context.payload.issue.user.login = issueAuthorLogin;
  }

  loadIssueLabeledContext({
    action = 'labeled',
    issueBody = 'Body',
    issueNumber = 1,
    issueAuthorLogin = 'Chocrates',
  }) {
    this.loadContext('./fixtures/issue_labeled.json');
    this.mockGitHubImplementation.context.payload.action = action;
    this.mockGitHubImplementation.context.payload.issue.body = issueBody;
    this.mockGitHubImplementation.context.payload.issue.number = issueNumber;
    this.mockGitHubImplementation.context.payload.issue.user.login = issueAuthorLogin;
  }

  setup() {
    jest.mock(
      '@actions/github',
      () => {
        return this.mockGitHubImplementation;
      },
      { virtual: true },
    );
    jest.mock(
      '@actions/core',
      () => {
        return this.mockCoreImplementation;
      },
      { virtual: true },
    );
    this.updateContext(this.defaultContext);
  }
}

module.exports = { octomock };
