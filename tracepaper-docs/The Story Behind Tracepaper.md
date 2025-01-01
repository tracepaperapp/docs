
![[aspiration.png]]

# The Story Behind Tracepaper: Discovering a Path to Building SaaS Products

Creating a SaaS-worthy product is an ambition many of us share. The idea of building something robust, scalable, and always available is exciting, especially when it’s driven by a personal vision. But as I found out, turning this ambition into reality—on a part-time basis and a hobby budget—posed some unique challenges. This is the story of how Tracepaper was shaped, not as a premeditated solution, but as the result of grappling with these challenges firsthand.

## Serverless: A Solution That Introduced New Problems

When I first set out to build a SaaS product, my focus was clear: I needed something that would meet the demands of modern users while staying within the constraints of my limited time and budget. **Serverless technology** seemed like the obvious choice. With AWS’s pay-as-you-go model, I could avoid the upfront costs of infrastructure. Even better, serverless promised scalability and robustness, ensuring my product could grow alongside its users.

At first, it felt like I had found the perfect tool. But as I dug deeper, I started encountering problems I hadn’t anticipated. [[What Serverless Solves – and What It Introduces|Serverless requires a shift in thinking.]] Instead of worrying about servers, I found myself diving into the intricacies of distributed systems—things like event-driven architecture, retries, eventual consistency, and handling cold starts. What was supposed to make my life easier was starting to feel overwhelming.]

This was the first turning point: realizing that **serverless solved infrastructure problems but shifted the focus to distributed system design**, increasing cognitive load. For someone trying to build something meaningful on a part-time schedule, this complexity was daunting.

## The Insight: Focus on Functional, Not Repetitive Technical Work

As I wrestled with these challenges, I began to ask myself a different question: **What do I actually want to spend my time on?** The answer was obvious. I didn’t want to focus on technical implementation details. I wanted to focus on the **functional aspects** of my product—the parts that actually solve user problems.

It’s not that I lacked the expertise. Over time, I’d built up the skills needed to handle serverless intricacies. But I realized I didn’t want to repeat the same technical “tricks” over and over again. I needed a way to minimize the mental overhead, so I could direct my energy toward what mattered most.

## Low-Code: A Shift in Perspective

This realization led to the next turning point: the potential of **low-code**. But not in the way it’s often marketed. For me, the value of low-code wasn’t about writing fewer lines of code. It was about reducing the **cognitive load** required to build and maintain a system.

I began experimenting with the idea of using a **model** as the primary artifact. Instead of writing code directly, what if the model could drive the system? This would mean:
- The model would always be the **source of truth**, keeping it aligned with the code.
- Developers wouldn’t need to dive into infrastructure details—they could work at a higher level of abstraction.
- Changes to the application would always flow through the model, ensuring consistency and making the system easier to reason about.

This was the seed that eventually grew into **Tracepaper**. At its core, Tracepaper is a code generator that takes a model and produces a deployable serverless application. It doesn’t eliminate all the challenges of serverless development, but it significantly lowers the barriers, allowing developers to focus on their domain rather than the underlying infrastructure.

## Iterating Toward a Solution

Of course, the journey didn’t end there. Building Tracepaper was itself an iterative process. Early versions were crude and overly rigid. The challenge was finding the balance between abstraction and flexibility—enough abstraction to reduce complexity, but not so much that it constrained creativity.

One of the key decisions was making the model the **single source of truth**. If you want to change the behavior of your application, you don’t edit the generated code—you edit the model. This ensures that the model and code remain in sync, reducing the risk of divergence.

This approach wasn’t without its trade-offs. It required rethinking how development workflows should look. But it also brought clarity: by focusing on the model, we could shift our energy away from the technical noise and toward the functional domain.

## What Tracepaper Became

Tracepaper is the result of this journey. It’s not a magic bullet or a one-size-fits-all solution. Instead, it’s a tool shaped by the challenges we faced and the lessons we learned. Its goal is simple: to help small teams like ours focus on building what matters, without getting bogged down in the complexity of modern software development.

Looking back, the process of building Tracepaper taught me as much about my own priorities as it did about technology. It reaffirmed that every solution introduces new challenges, and that the key is finding tools that align with your goals, not just your problems.

If you’re someone trying to navigate similar challenges, I hope this story resonates with you. The tools we choose shape not just what we build, but how we think about building. For me, Tracepaper is more than a tool—it’s a reminder to keep things simple, stay focused, and always build with purpose.