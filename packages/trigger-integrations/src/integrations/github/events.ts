import { TriggerEvent } from "@trigger.dev/sdk";
import { github } from "@trigger.dev/providers";

export function issueEvent(params: {
  repo: string;
}): TriggerEvent<typeof github.schemas.issues.issuesEventSchema> {
  return {
    metadata: {
      type: "WEBHOOK",
      service: "github",
      name: "issues",
      filter: {
        service: ["github"],
        payload: {
          repository: {
            full_name: [params.repo],
          },
        },
        event: ["issues"],
      },
      source: github.schemas.WebhookSourceSchema.parse({
        subresource: "repository",
        scopes: ["repo"],
        repo: params.repo,
        events: ["issues"],
      }),
    },
    schema: github.schemas.issues.issuesEventSchema,
  };
}

export function issueCommentEvent(params: {
  repo: string;
}): TriggerEvent<typeof github.schemas.issuesComments.issueCommentEventSchema> {
  return {
    metadata: {
      type: "WEBHOOK",
      service: "github",
      name: "issue_comment",
      filter: {
        service: ["github"],
        payload: {
          repository: {
            full_name: [params.repo],
          },
        },
        event: ["issue_comment"],
      },
      source: github.schemas.WebhookSourceSchema.parse({
        subresource: "repository",
        scopes: ["repo"],
        repo: params.repo,
        events: ["issue_comment"],
      }),
    },
    schema: github.schemas.issuesComments.issueCommentEventSchema,
  };
}

export function pullRequestEvent(params: {
  repo: string;
}): TriggerEvent<typeof github.schemas.pullRequest.pullRequestEventSchema> {
  return {
    metadata: {
      type: "WEBHOOK",
      service: "github",
      name: "pull_request",
      filter: {
        service: ["github"],
        payload: {
          repository: {
            full_name: [params.repo],
          },
        },
        event: ["pull_request"],
      },
      source: github.schemas.WebhookSourceSchema.parse({
        subresource: "repository",
        scopes: ["repo"],
        repo: params.repo,
        events: ["pull_request"],
      }),
    },
    schema: github.schemas.pullRequest.pullRequestEventSchema,
  };
}

export function pullRequestCommentEvent(params: {
  repo: string;
}): TriggerEvent<
  typeof github.schemas.pullRequestComments.pullRequestReviewCommentEventSchema
> {
  return {
    metadata: {
      type: "WEBHOOK",
      service: "github",
      name: "pull_request_review_comment",
      filter: {
        service: ["github"],
        payload: {
          repository: {
            full_name: [params.repo],
          },
        },
        event: ["pull_request_review_comment"],
      },
      source: github.schemas.WebhookSourceSchema.parse({
        subresource: "repository",
        scopes: ["repo"],
        repo: params.repo,
        events: ["pull_request_review_comment"],
      }),
    },
    schema:
      github.schemas.pullRequestComments.pullRequestReviewCommentEventSchema,
  };
}
