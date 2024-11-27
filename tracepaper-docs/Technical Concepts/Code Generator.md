---
title: Why Draftsman Uses a Code Generator
---

## Introduction
Draftsman embraces a **code generation strategy** to transform models created in Tracepaper into fully functional, production-ready systems. This approach is designed to bridge the gap between model definitions and executable software, ensuring efficiency, consistency, and maintainability.

The code generator is the backbone of the **"model-to-runtime"** process, enabling users to focus on their business logic while automating repetitive and error-prone coding tasks.

## Why Use a Code Generator?

### 1. **Avoiding the Pitfalls of No-Code**
While no-code platforms aim to simplify development, they often fall short for complex, scalable systems. As highlighted in our [no-code strategy](https://papers.draftsman.io/no-code-strategy/):
- **Limited Flexibility**: No-code tools can impose constraints that make advanced customization difficult.
- **Opaque Behavior**: Debugging or extending a no-code solution often requires understanding hidden abstractions.
- **Vendor Lock-In**: Proprietary no-code platforms can restrict portability.

Our code generator provides the simplicity of no-code without sacrificing the flexibility and transparency developers need for advanced use cases.

### 2. **Faster Development Cycles**
With code generation, the time from idea to deployment is dramatically reduced:
- Models are defined in a high-level DSL (Domain-Specific Language).
- The generator produces complete, ready-to-deploy infrastructure and business logic.
- Developers can iterate quickly without manually writing boilerplate code.

### 3. **Consistency Across Teams**
Code generation ensures that all system components adhere to consistent patterns and standards, reducing:
- Human error.
- Divergence in coding styles.
- Inconsistencies between environments.

### 4. **We Love Python!**
Our choice of Python as the core language ([read more](https://papers.draftsman.io/we-love-python/)) aligns perfectly with the goals of our code generator:
- **Simplicity**: Python's readable syntax makes the generated code accessible to a wide range of developers.
- **Rich Ecosystem**: The extensive libraries and tools available in Python accelerate development.
- **Performance Meets Flexibility**: Python provides the ideal balance for scalable, flexible solutions.

## What Does the Code Generator Do?

### 1. **Transforms Models into Code**
The generator takes the models defined in Tracepaper's DSL and produces:
- **Infrastructure as Code (IaC)**: For provisioning cloud resources (e.g., AWS CloudFormation templates).
- **Business Logic**: Ready-to-use handlers, projections, and orchestration code.
- **Glue Code**: Integrations between services, databases, and event systems.

### 2. **Ensures Best Practices**
Generated code is optimized for:
- **Performance**: Leveraging efficient patterns and frameworks.
- **Maintainability**: Readable and well-structured output.
- **Security**: Incorporating best practices for access control, encryption, and data handling.

### 3. **Zero-Touch Deployment**
The code generator integrates seamlessly with Draftsman's deployment pipeline:
- Generated artifacts are automatically deployed to staging and production environments.
- Continuous updates are handled via the pipeline, ensuring alignment with the latest model.

### 4. **Supports Evolvability**
Generated code is designed to evolve alongside the model. This ensures:
- **Backward Compatibility**: Existing deployments are not disrupted.
- **Ease of Updates**: Regenerate and redeploy code with minimal effort as models change.

### 5. **Customization Friendly**
While the generator automates the majority of the process, it allows room for customizations:
- Developers can extend or override specific components if needed.
- Generated code serves as a solid foundation, not a limiting framework.

## Conclusion
The Draftsman code generator is more than a productivity tool—it's a philosophy. By automating repetitive tasks and enforcing consistency, it empowers developers to focus on what truly matters: delivering value through innovative systems.

For more insights, check out:
- [Where to Start](https://papers.draftsman.io/where-to-start/)
- [No-Code Strategy](https://papers.draftsman.io/no-code-strategy/)
- [We Love Python](https://papers.draftsman.io/we-love-python/)