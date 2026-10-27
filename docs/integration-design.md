# External integration design

## Example
An external customer portal submits a service request with an external request ID.

## Recommended path
1. Authenticate with Microsoft Entra ID using an approved application identity.
2. Call Dataverse Web API or a secured Custom API.
3. Validate required fields and normalize incoming values.
4. Use a unique alternate key for the external request ID when the business key is truly unique.
5. Return a clear success/failure response and correlation ID.
6. Monitor failures and retry transient errors with bounded backoff.

## Reliability and security
- Use least-privilege application users.
- Never embed client secrets in JavaScript, source code, or a public repository.
- Design retries to be idempotent.
- Distinguish validation errors from transient service failures.
- Document API contract, sample payloads, and error responses before implementing the client.
