# Plug-in build and registration notes

1. Create a Class Library project targeting a framework/runtime supported by the current Dataverse plug-in tooling and your organization.
2. Add the Microsoft.CrmSdk.CoreAssemblies NuGet package.
3. Add the source under `src/plugins/`.
4. Build the assembly.
5. Register the assembly using the Plug-in Registration Tool or supported Power Platform tooling.
6. Register the `ServiceRequestValidationPlugin` on:
   - Message: `Create`
   - Primary table: actual logical name for Service Request
   - Stage: `PreOperation`
   - Mode: `Synchronous`
7. Add an `Update` step for only the columns needed by the validation, if desired. Configure filtering attributes to reduce unnecessary executions.
8. Test from the model-driven app and via a Web API update.

Before registration, confirm the logical table name in your environment. The sample assumes `escrm_servicerequest`; change it if your actual name differs.

## Troubleshooting
- Enable plug-in trace logging in a development environment.
- Check the exception message and trace details.
- Verify the step's message, table, stage, mode, and filtering attributes.
- Avoid registering the same assembly/step multiple times unintentionally.
