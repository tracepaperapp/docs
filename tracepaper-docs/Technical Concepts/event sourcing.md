---
title: Event Sourcing
---
## Event Sourcing in Tracepaper

**Event Sourcing** is an architectural pattern where all changes to the application's state are stored as a sequence of immutable events. Instead of persisting the current state directly, the state is derived by replaying these events. This approach provides several benefits, such as auditability, replayability, and flexibility in evolving data models.

In **Tracepaper**, Event Sourcing is central to how state changes occur. It enables the evolution of internal and external query models without requiring data migrations. By storing only the facts (events), runtime views can be recalculated as needed, allowing perspectives and transformation logic to evolve over time.

---

### How Event Sourcing Works in Tracepaper

1. **Domain Event Schema**:
   - Events are defined within the **aggregate** as simple data models.
   - Each event has a unique name (e.g., `UserCreated`) and a collection of attributes (e.g., `String`, `Boolean`).
   - Default values ensure backward compatibility when events evolve.

2. **Mappings to Aggregate Document**:
   - Each domain event is mapped to an **aggregate document** (an in-memory view model).
   - Root attributes use simple operations like `set/add/subtract`, while nested collections are stored as dictionaries with business keys for easy retrieval.

3. **Event Store**:
   - The **Event Store** (using AWS DynamoDB) is the single source of truth. It ensures redundancy and provides features like point-in-time recovery.
   - Configuration options, such as event time-to-live (TTL) and key management, abstract technical complexities, allowing you to focus on functional modeling.

---

### Benefits of Event Sourcing

1. **Historical Accuracy**: Provides a complete, immutable history for audit trails and debugging.
2. **Data Consistency**: Ensures ordered state changes and reliable state reconstruction.
3. **Scalability and Performance**: Supports asynchronous processing and optimized read models.
4. **Flexibility**: Enables evolving views and projections without modifying historical events.
5. **Alignment with CQRS**: Fits naturally with Command Query Responsibility Segregation, separating read and write concerns.

---

### Example: Bank Account

- **Events**: `"Deposit $100"`, `"Withdraw $50"`
- **State Reconstruction**: 
  - Initial balance: `$0`
  - Replay `"Deposit $100"` → `$100`
  - Replay `"Withdraw $50"` → `$50`
- **Current balance**: `$50`

---

### Best Practices

- Avoid manual intervention in the Event Store unless absolutely necessary.
- Always back up the database before making manual changes (Yes... I learned this the hard way ;)). 

---

### Further Reading

To deepen your understanding of Event Sourcing:
- [Martin Fowler's Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html)
- [Microsoft Event Sourcing Pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/event-sourcing)
- [AWS DynamoDB Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)