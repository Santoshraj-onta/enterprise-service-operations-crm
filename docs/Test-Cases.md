# Test plan

Record actual results only after running the test in your environment.

| ID | Scenario | Expected result | Actual result |
|---|---|---|---|
| SR-001 | Create request with valid subject | Record saves | Not run |
| SR-002 | Create request with blank subject through UI | UI blocks save / shows validation | Not run |
| SR-003 | Create request with blank subject through API | Server-side plug-in rejects it | Not run |
| SR-004 | Subject longer than 200 characters | Rejected with clear message | Not run |
| SR-005 | Update an unrelated field on existing record | Update succeeds if subject is unchanged | Not run |
| SR-006 | Duplicate external request ID | Alternate key rejects duplicate | Not run |
| SR-007 | Agent tries to assign a request without privilege | Operation is denied | Not run |
| SR-008 | Overdue unresolved request | Escalation created once | Not run |
| SR-009 | Flow notification fails | Failure path records safe diagnostic details | Not run |
| SR-010 | Resolved request becomes overdue | No escalation is created | Not run |

## Test execution record
For each run, add date, environment, tester role, steps, result, and evidence. Use synthetic data only.
