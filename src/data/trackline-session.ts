/*
  A real trackline session, recorded and replayed.

  Not a mock-up and not a staged animation: this is the exported output of an
  actual Claude Code session run against a small demo project, with the agent
  working unsupervised. Machine-specific paths are stripped; nothing else is
  edited, including the three actions trackline could not see, which are shown
  because an action nobody could look at is not an action that was fine.
*/

export type Evidence = { kind: string; value: string; note?: string };

export type Finding = {
  check: string;
  severity: string;
  summary: string;
  evidence: Evidence[];
  suggestion?: string;
};

export type Step = {
  n: number;
  tool: string;
  paths?: string[];
  command?: string;
  outcome: "clean" | "finding" | "blocked" | "unseen";
  findings?: Finding[];
  unseen?: string[];
};

export type Session = {
  task: string;
  mode: string;
  steps: Step[];
  summary: { actions: number; findings: number; blocked: number; unseen: number };
};

export const session: Session = {
  "task": "Add debounce to the login function in src/auth so it cannot be called more than once a second. Use a well-known library rather than writing it yourself.",
  "mode": "warn",
  "steps": [
    {
      "n": 1,
      "tool": "Bash",
      "outcome": "clean",
      "paths": []
    },
    {
      "n": 2,
      "tool": "Bash",
      "outcome": "finding",
      "findings": [
        {
          "check": "dependency-added",
          "severity": "warn",
          "summary": "installed lodash.debounce, @types/lodash.debounce",
          "evidence": [
            {
              "kind": "command",
              "value": "npm install lodash.debounce && npm install -D @types/lodash.debounce 2>&1 | tail -20",
              "note": "the command run"
            },
            {
              "kind": "rule",
              "value": "lodash.debounce, @types/lodash.debounce",
              "note": "packages added"
            }
          ],
          "suggestion": "confirm this dependency was intended before it is committed"
        }
      ],
      "unseen": [
        "off-limits"
      ],
      "paths": []
    },
    {
      "n": 3,
      "tool": "Write",
      "paths": [
        "src/auth/login.ts"
      ],
      "outcome": "clean"
    },
    {
      "n": 4,
      "tool": "Bash",
      "paths": [
        "(the agent\u2019s own scratch file)"
      ],
      "outcome": "unseen",
      "unseen": [
        "off-limits",
        "dependency-added"
      ]
    },
    {
      "n": 5,
      "tool": "Write",
      "paths": [
        "(the agent\u2019s own scratch file)"
      ],
      "outcome": "clean"
    },
    {
      "n": 6,
      "tool": "Bash",
      "outcome": "clean",
      "paths": []
    }
  ],
  "summary": {
    "actions": 6,
    "findings": 1,
    "blocked": 0,
    "unseen": 3
  }
};
