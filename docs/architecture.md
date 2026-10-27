# Architecture

## High-level request path
1. Agent creates or updates a Service Request in a model-driven app.
2. Form JavaScript provides immediate user feedback; it is not the security boundary.
3. Dataverse plug-ins enforce server-side validation regardless of whether the update comes from the UI, Web API, or a flow.
4. Dataverse stores the request and related work/escalation records.
5. Power Automate sends SLA reminders and coordinates non-transactional notifications.
6. Integration clients use Dataverse Web API or a secured Custom API.

## Design principles
- Server-side validation is authoritative.
- Avoid synchronous external network calls inside plug-ins.
- Use tracing and actionable exceptions.
- Make automation idempotent; guard against repeated triggers.
- Use environment variables and connection references for environment-specific configuration.
- Apply least privilege to users, service principals, and flows.

## Planned components
| Component | Responsibility |
|---|---|
| PreOperation plug-in | Validate request fields and transitions |
| Form JavaScript | Friendly required-field/date messages |
| Power Automate | Notifications and scheduled escalation |
| Web API / Custom API | External system access |
| Security roles | Limit create/read/write/assign privileges |
