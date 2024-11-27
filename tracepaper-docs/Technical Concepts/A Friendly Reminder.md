> [!quote] **Tracepaper doesn’t remove the need for thinking!**
> If anything, it pushes you to think more deeply about your functional domain.

It helps you focus on critical questions like:

- What are the access patterns for my data?
- How do we ensure data consistency?
- Which concepts are closely related, and which are independent?
- Who should have access to the data, and should we use role-based access control?

These are challenging, context-specific questions that only you can answer because they require a deep understanding of your domain.

What **Tracepaper** *does* handle for you is the technical implementation of these decisions, such as:

- Translating your functional model into a working [[GraphQL API]] using [[AWS AppSync]].
	- Configuring [[AWS Cognito]] for Identity and Access Management (IAM).
	- Managing [[asynchronous command handling]].
- Implementing your [[mental model]] in a functioning [[CQRS]] architecture:
	- Using [[AWS Lambda]] to handle compute (CPU/Memory).
	- Utilizing [[AWS EventBridge]] as a message broker.
	- Designing [[Single-Table Design]] patterns for [[AWS DynamoDB]].
	- Including [[event sourcing]] workflows.

---

## What Does This Look Like in Practice?

Here’s an example of what Tracepaper handles in our own test model:

- **101** [[Command|Commands]]
- **19** [[Aggregate|Aggregates]] across 3 [[Subdomain|Subdomains]]:
	- Including **150** [[Behavior#Test Case|Behavior Tests]]
- **100** [[Aggregate Data Model#The Events|Domain Event Definitions]]
- **15** [[Notifier|Notifiers]]
- **37** [[View|Views]]
- **3** [[Projection|Projections]]
- **22** black-box API [[Scenario|Test Scenarios]]

This entire model is described in our [[domain specific language]] as **8,698 lines of XML**, which is then converted into **63,836 lines of code**:

- **17,617 lines of Python**: Primarily reflecting your functional domain, with ~2,000 lines for the [[technical platform]].
- **20,590 lines of CloudFormation**: [[Infrastructure as Code]] that connects everything.
- **22,629 lines of test code**: Representing the 150 behavior tests.
- **3,039 lines of Quality Gate instructions**: Representing the 22 test scenarios.

> [!info] Nuance
> Since we use a [[Code Generator|code generator]], we prioritize **readability** over strict deduplication.  
> While professional development might produce fewer lines of code, it often requires a team with a much broader skill set.

---

## "This all looks very complex"

Yes, because it is. A lot of the complexity stems from our choice to optimize for a [[Serverless Architecture]] to reduce runtime costs and operational overhead. Read [[The Story Behind Tracepaper]] to understand how we came to the Tracepaper Architecture.

### Cost estimator

<iframe src="/static/calculator"
	style="background: transparent;" allowtransparency="true" frameborder="0"
	width="100%" height="350"></iframe>