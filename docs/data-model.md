# Data model specification

Use the publisher prefix configured in your environment. The `escrm_` names below are proposals.

## Service Request — `escrm_servicerequest`
- `escrm_name` — Text, required; primary name, e.g. SR-10001
- `escrm_subject` — Text, required
- `escrm_description` — Multiline text
- `escrm_externalrequestid` — Text; consider an alternate key if the upstream ID is unique
- `escrm_priority` — Choice: Low, Normal, High, Critical
- `escrm_status` — Choice: New, Assigned, In Progress, Waiting on Customer, Resolved, Cancelled
- `escrm_customeraccount` — Lookup to Account (optional if Contact-only scenarios are allowed)
- `escrm_customercontact` — Lookup to Contact
- `escrm_ownerteam` — Lookup to Team if team routing is required
- `escrm_targetresponseby` — Date and time
- `escrm_targetresolutionby` — Date and time
- `escrm_resolvedon` — Date and time
- `escrm_source` — Choice: Portal, Email, Phone, Integration

## SLA Policy — `escrm_slapolicy`
- `escrm_name` — Text, required
- `escrm_priority` — Choice aligned to Service Request priority
- `escrm_responsetargetminutes` — Whole number
- `escrm_resolutiontargetminutes` — Whole number
- `statecode/statuscode` — Standard state/status fields

## Work Log — `escrm_worklog`
- `escrm_name` — Text, required
- `escrm_servicerequest` — Lookup to Service Request, required
- `escrm_workdescription` — Multiline text, required
- `escrm_minutesworked` — Whole number
- `escrm_workedon` — Date and time
- `escrm_workedby` — Lookup to User

## Escalation History — `escrm_escalationhistory`
- `escrm_name` — Text, required
- `escrm_servicerequest` — Lookup to Service Request, required
- `escrm_reason` — Multiline text
- `escrm_escalatedon` — Date and time
- `escrm_escalatedto` — Lookup to User or Team
- `escrm_notificationstatus` — Choice: Pending, Sent, Failed

## Relationships
- Account 1:N Service Requests
- Contact 1:N Service Requests
- Service Request 1:N Work Logs
- Service Request 1:N Escalation History
- SLA Policy 1:N Service Requests is optional; if each request references a policy, add a lookup.

## Important
Choice integer values are environment-specific. Do not hardcode guessed values in JavaScript or plug-ins. Use generated constants or retrieve values from the actual solution.
