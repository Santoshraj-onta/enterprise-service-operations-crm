# Dataverse solution package

This folder is reserved for solution-related documentation and source-control guidance.

A real Dataverse solution ZIP cannot be generated solely from this repository: it must be exported from the Power Platform environment where the tables, forms, views, app, plug-in registrations, environment variables, and flows are configured.

Recommended:
1. Create an unmanaged solution in Development.
2. Add all required components.
3. Export an unmanaged ZIP for development backup.
4. Export a managed ZIP for deployment where appropriate.
5. Store release packages as GitHub Release assets or in an approved private artifact store. Do not commit secrets or production data.
