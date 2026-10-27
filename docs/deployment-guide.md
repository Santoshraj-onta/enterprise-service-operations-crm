# Deployment guide

## Development
- Create an unmanaged solution and configure the publisher prefix.
- Add tables, columns, relationships, forms, views, app, security roles, and environment variables.
- Build and register plug-ins.
- Add JavaScript web resources and form event handlers.
- Create flows and use connection references.
- Run all test cases.

## Test / production
- Export a managed solution for downstream environments when appropriate.
- Set environment-variable values and connection references after import.
- Confirm service identities and security roles.
- Run smoke tests and validate flow ownership/connection status.
- Document rollback plan and release version.

## Release checklist
- [ ] All components are solution-aware
- [ ] No hard-coded environment URLs or credentials
- [ ] Plug-in steps are registered once and verified
- [ ] Flows have correct connection references
- [ ] Security reviewed using least privilege
- [ ] Test cases executed and results recorded
- [ ] Version number and release notes updated
