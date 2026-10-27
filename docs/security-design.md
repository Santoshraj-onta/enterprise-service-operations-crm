# Security design

## Suggested roles
### Service Agent
- Create/read service requests
- Update permitted request fields
- Create/read work logs
- No broad customization privileges

### Service Manager
- Read requests across the relevant business unit/organization as required
- Assign requests and manage escalations
- Read SLA and reporting data

### CRM Administrator
- Solution customization and configuration privileges
- Use only for approved administrators

## Security checks
- Configure table privileges and access depth deliberately.
- Use teams/ownership and sharing where appropriate.
- Ensure flows run with an intentional connection identity.
- Do not rely on hidden form fields or JavaScript to enforce authorization.
- Test with a real account assigned only the target role.
