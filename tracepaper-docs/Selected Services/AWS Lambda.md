**Service Description**: Amazon EventBridge is a serverless event bus service that makes it easy to connect applications using data from your own applications, integrated Software-as-a-Service (SaaS) applications, and AWS services.

**Selection Rationale**: We selected Amazon EventBridge for its seamless integration capabilities across AWS services. It simplifies event-driven architectures by decoupling event producers from consumers and supporting event filtering and transformation. Especially the content based routing is pivotal in our architecture.

**Optimization Goals**:

- **AWS Native & Serverless**: Amazon EventBridge is serverless, handling all infrastructure provisioning and scaling automatically.
- **Minimizing Management and Cost**: It reduces operational overhead by managing event routing and processing, optimizing costs through pay-as-you-go pricing.

**Documentation**: [Amazon EventBridge Documentation](https://docs.aws.amazon.com/eventbridge/latest/userguide/what-is-amazon-eventbridge.html)

**Service Limits**: [Amazon EventBridge Limits](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-quota.html)