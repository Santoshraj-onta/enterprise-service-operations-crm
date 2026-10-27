# Power Automate flow specifications

These are build specifications, not exported flow packages. Create and test each flow in your environment.

## Flow 1 — High-priority request notification
- Trigger: Dataverse — When a row is added, modified or deleted
- Change type: Added or Modified
- Table: Service Request
- Scope: Organization (adjust to requirement)
- Trigger condition/filter: priority is High or Critical; use actual choice values from the environment
- Actions: Get row if needed → send Teams/email notification → update notification marker if designed
- Avoid loops: use trigger filtering and/or a dedicated notification-sent field.

## Flow 2 — SLA escalation
- Trigger: Service Request added or modified
- Condition: request is not Resolved/Cancelled and target resolution time has passed
- Actions: create Escalation History → assign/notify manager → record outcome
- For reliable time-based processing, consider a scheduled flow that queries overdue requests rather than a long Delay for every request.
- Make escalation idempotent so each request is not escalated repeatedly.

## Flow 3 — Integration failure notification
- Use Scopes named `Try` and `Catch`.
- Configure `Catch` to run after failure/timeout of `Try`.
- Log correlation ID, safe error summary, record identifier, and timestamp.
- Never write credentials, access tokens, or sensitive customer payloads to logs.
