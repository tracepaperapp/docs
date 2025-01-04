
![[aspiration.png]]

# The Story Behind Tracepaper: Discovering a Path to Building SaaS Products

Creating a SaaS-worthy product is an ambition many of us share. The idea of building something robust, scalable, and always available is exciting, especially when it’s driven by a personal vision. But as I found out, turning this ambition into reality—on a part-time basis and a hobby budget—posed some unique challenges. This is the story of how Tracepaper was shaped, not as a premeditated solution, but as the result of grappling with these challenges firsthand.

## Serverless: A Solution That Introduced New Problems

When I first set out to build a SaaS product, my focus was clear: I needed something that would meet the demands of modern users while staying within the constraints of my limited time and budget. **Serverless technology** seemed like the obvious choice. With AWS’s pay-as-you-go model, I could avoid the upfront costs of infrastructure. Even better, serverless promised scalability and robustness, ensuring my product could grow alongside its users.

At first, it felt like I had found the perfect tool. But as I dug deeper, I started encountering problems I hadn’t anticipated. Serverless requires a shift in thinking. Instead of worrying about servers, I found myself diving into the intricacies of distributed systems—things like event-driven architecture, retries, eventual consistency, and handling cold starts. What was supposed to make my life easier was starting to feel overwhelming.

![[monolith-microservices-serverless.png]]
This was the first turning point: realizing that **serverless solved infrastructure problems but shifted the focus to distributed system design**, increasing cognitive load. For someone trying to build something meaningful on a part-time schedule, this complexity was daunting.
[[What Serverless Solves – and What It Introduces|Read more]].
## The Insight: Focus on Functional, Not Repetitive Technical Work

As I wrestled with these challenges, I began to ask myself a different question: **What do I actually want to spend my time on?** The answer was obvious. I didn’t want to focus on technical implementation details. I wanted to focus on the **functional aspects** of my product—the parts that actually solve user problems.

It’s not that I lacked the expertise. Over time, I’d built up the skills needed to setup a fitting serverless design. But I realized I didn’t want to repeat the same technical “tricks” over and over again. I needed a way to minimize the mental overhead, so I could direct my energy toward what mattered most.

## Low-Code: A Shift in Perspective

This realization led to the next turning point: the potential of **low-code**. But not in the way it’s often marketed. For me, the value of low-code wasn’t about writing fewer lines of code. It was about reducing the **cognitive load** required to build and maintain a system. I want a monolithic programming model for a distributed application. 
![[story-Monolithic model.drawio.png]]
I began experimenting with the idea of using a **model** as the primary artifact. Instead of writing code directly, what if the model could drive the system? This would mean:
- The model would always be the **source of truth**, keeping it aligned with the code.
- Developers wouldn’t need to dive into infrastructure details—they could work at a higher level of abstraction.
- Changes to the application would always flow through the model, ensuring consistency and making the system easier to reason about.

This was the seed that eventually grew into **Tracepaper**. At its core, Tracepaper is a code generator that takes a model and produces a deployable serverless application. It doesn’t eliminate all the challenges of serverless development, but it significantly lowers the barriers, allowing developers to focus on their domain rather than the underlying infrastructure.
[[Why Tracepaper Uses a Code Generator Instead of Runtime Interpretation]].

## Iterating Toward a Solution

Of course, the journey didn’t end there. Building Tracepaper was itself an iterative process. Early versions were crude and overly rigid. The challenge was finding the balance between abstraction and flexibility—enough abstraction to reduce complexity, but not so much that it constrained creativity.

One of the key decisions was making the model the **single source of truth**. If you want to change the behavior of your application, you don’t edit the generated code—you edit the model. This ensures that the model and code remain in sync, reducing the risk of divergence.

This approach wasn’t without its trade-offs. It required rethinking how development workflows should look. But it also brought clarity: by focusing on the model, we could shift our energy away from the technical noise and toward the functional domain.

But we selected a complex deployment model, and our modeling concepts must align with this model to prevent our abstractions from becoming dangerous illusions.  

**Looking at AWS's philosophy for distributed systems:**  
1. **Distributed systems should be asynchronous, hence event-driven.**  
2. **A resilient and evolvable distributed system is composed of small, isolated components.**  
We achieve the second principle by connecting [[Serverless Architecture|serverless]] components like **AppSync**, **EventBridge**, **Lambda**, and **DynamoDB**, which form the backbone of our architecture.  

The most significant technical shift is decoupling the control flow from the data flow by transitioning from a direct call/request-response model to a publish/subscribe model, making the entire system 100% event-driven in alignment with the first principle.  

To ensure functional clarity and technical scalability, we leverage the **[[CQRS]] pattern (Command Query Responsibility Segregation)**. This allows us to implement a clear separation between mutation and reading models through various decoupling mechanisms. For reading, we further differentiate between internal models, used for aggregate state management, and external models, optimized for API responses and persistence. This ensures the system remains highly adaptable to evolving requirements while maintaining a strong separation of concerns.  

This approach guarantees both resilience and flexibility, allowing the system to scale and adapt as requirements change.

![[story-CQRS-only.png]]

Lastly, we had to select an API style to expose the application. The shortlist consisted of **[[GraphQL API|REST vs. GraphQL]]**. AWS supports both, but considering our architecture’s split between **commands** and **views**—where the two models don’t necessarily have a 100% overlap—and the asynchronous nature of our system, we determined that **GraphQL** is a better fit.

In our architecture:
- A **mutation** is treated as a **request-for-change**, accepted with minimal validation for asynchronous processing.  
- However, it may result in a **functional error** if the functional concept (the aggregate) isn’t in the correct state to apply the request.

This design aligns more naturally with GraphQL’s flexibility:
- GraphQL allows us to model **queries** and **mutations** independently.
- It ensures the API integrates seamlessly with the rest of our **event-driven architecture**.
- GraphQL **subscriptions** enable real-time updates for key business functionality, including:

  1. **Track & Trace Information:**  
     Subscriptions expose the behavioral flows affected by the event chain of a change request. Clients receive updates on the processing status, whether it succeeded or failed with a functional error. In the case of a failure, the message includes a detailed functional error message defined during modeling.

  2. **Notifications:**  
     Subscriptions also notify clients when a view processes an update. These messages include:  
       - A status indicating it is an "updated" notification.  
       - A reference to the **view type**.  
       - A **functional key** for the specific view object.  

     During modeling, views can be explicitly excluded from this mechanism (e.g., when the functional key contains sensitive information), as notifications are broadcast to all clients.  

  3. **Custom Notifications from Notifiers:**  
     Notifications can also be triggered by **Notifiers**, where the exact broadcast moments are explicitly modeled. This provides flexibility for defining custom notifications based on specific domain behaviors.

With our desired technical architecture aligned with the selected serverless runtime, and ensuring it was designed to support model evolution, we proceeded to craft modeling concepts to address all functional concerns. After careful consideration, we finalized five core concepts, as outlined in the diagram below: **Commands, Aggregates, Views, Projections, and Notifiers**.

![[story-CQRS.drawio.png]]

## What Tracepaper Became

While I’ve described this journey as if it were a series of linear steps—carefully aligning the technical architecture, modeling concepts, and code generator—the reality was far more nuanced. It was a **learning journey**, where the model, architecture, and generator evolved together. Along the way, we navigated a maze filled with technical experiments, proofs of concept (PoCs), and dead ends—ideas that were too expensive, too difficult, or simply impossible. These experiences were invaluable for my own growth, but the details are likely noise that would obscure the bigger picture for you, the reader.

**Tracepaper** is the result of that journey. It’s not a magic bullet or a one-size-fits-all solution. Instead, it’s a tool shaped by the challenges we faced and the lessons we learned. Its goal is simple: to help small teams like ours focus on building what matters, without being bogged down by the complexity of modern software development.

Looking back, the process of building Tracepaper taught me as much about my own priorities as it did about technology. It reaffirmed that every solution introduces new challenges and that the key is finding tools that align with your goals, not just your problems.

If you’re navigating similar challenges, I hope this story resonates with you. The tools we choose shape not just what we build but how we think about building. For me, Tracepaper is more than a tool—it’s a reminder to keep things simple, stay focused, and always build with purpose.

![[maze.png]]