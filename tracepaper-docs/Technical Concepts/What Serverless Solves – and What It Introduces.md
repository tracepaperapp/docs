When transitioning to **serverless architecture**, it’s easy to focus on the immediate benefits: no need to manage servers, scalability out of the box, and cost-efficiency through "scale to zero." However, serverless also introduces a **fundamental shift** in how you think about and design your systems. 

The diagram below illustrates the same application deployed using three different models: a monolith, microservices, and serverless. While all three models retain the same functional decomposition (simple interfaces between components), their deployment approaches significantly impact complexity, runtime control, and cognitive load.

![[monolith-microservices-serverless.png]]
### **Key Observations from the Diagram**:
1. **Monolith**  
   - Communication between components happens locally (dashed lines), making calls fast and predictable.
   - Deployment and scaling are tied to the entire application, limiting runtime control but keeping infrastructure simple.

2. **Microservices**  
   - Functionality is split into distinct microservices, communicating over the network (thicker arrows).
   - Introduces runtime control for individual services, but network calls are inherently less reliable and slower than local calls.
   - Debugging and monitoring distributed systems add complexity.

3. **Serverless**  
   - Each function operates independently, typically triggered by events or API calls, with all communication over the network.
   - Provides **maximum runtime control** and flexibility (e.g., scaling individual functions), but each added function increases the need for distributed systems expertise.
   - New issues like **cold starts**, **event tracing**, and **state management** must be addressed.

---

### **The New Problem: Cognitive Load**

While serverless excels at reducing operational overhead and offering near-infinite scalability, **it doesn’t remove complexity—it moves it.** As the saying goes, **“You can’t remove complexity, only move it.”** This shift requires developers to adopt a new mindset and deal with challenges such as:
- **Distributed systems design:** Understanding retries, eventual consistency, and asynchronous workflows.
- **Cold starts:** Functions that haven’t been invoked recently may take longer to execute.
- **Event-driven complexity:** Tracing and debugging across multiple independently triggered functions can be daunting.
- **Vendor lock-in:** Reliance on serverless offerings (e.g., AWS Lambda) makes migration challenging.

---

### **Functional Perspective: Serverless as Accidental Complexity**

From a **functional perspective**, the additional complexity introduced by serverless can often feel like **accidental complexity**. This is because much of the technical overhead required to make serverless work says little about the domain itself. Here’s why:
1. **Not Domain-Specific:**  
   - Challenges like retries, eventual consistency, and state management stem from the distributed nature of serverless systems but have no direct relationship to the functional intent of the system (e.g., placing an order, generating an invoice).
2. **Unclear Intent:**  
   - The complexity feels like "noise" from a functional viewpoint, as its purpose isn’t immediately apparent in the context of the business domain.
3. **Infrastructure Overhead:**  
   - Serverless introduces details such as cold starts and event tracing that are essential for the runtime but irrelevant to the problem the system is trying to solve.

---

### **How Tracepaper Tackles This Problem**

Tracepaper was designed to help **mitigate the cognitive load** introduced by serverless, without sacrificing its advantages. By using a **model-driven approach**, it abstracts much of the accidental complexity:
1. **Model-Driven Design:** The model becomes the single source of truth, focusing on functional intent rather than infrastructure details.
2. **Abstracted Serverless Details:** Serverless intricacies like retries, event triggers, and scaling are managed automatically by the code generator.
3. **Functional Clarity:** Developers can work at a higher level of abstraction, ensuring that the system's design aligns with its domain goals.

By focusing on the functional domain and minimizing technical noise, Tracepaper allows teams to harness the benefits of serverless architecture while reducing the accidental complexity that often accompanies it.