An aggregate reflects a domain concept, a collection of data (state) and behavior to manipulate the data. The data is internally encapsulated, so the only way to induce a state change is by invoking behavior.

Modeling an aggregate involves two activities:

1. Modeling the [[Aggregate Data Model |data model]].
2. Modeling [[Behavior |behavior]] on the model.

---

> A concept from DDD opinionated to optimize cognitive load, focusing on the concepts rather than the underlying technology. It abstracts the Command/Compute part of our CQRS architecture.

# Advanced Features of an Aggregate

## Event Store Time-to-Live (TTL)

The Event Store Time-to-Live (TTL) is an advanced configuration setting for aggregates that specifies the duration, in seconds, for which events associated with the aggregate should be retained in the event store. This feature is particularly useful in scenarios where certain events become irrelevant or obsolete after a specified period. The default TTL is -1 seconds which translates to indefinitely.

The TTL setting allows system architects and developers to manage the lifecycle of events within the event store effectively. By setting an expiration time for events related to an aggregate, the system can automatically purge older events beyond the specified TTL. This helps in maintaining a lean and efficient event store by removing outdated data that no longer contributes to the current state or history of the aggregate.

### Benefits

- **Optimized Event Storage**: Helps in managing storage space by automatically removing events that are no longer relevant.
    
- **Compliance and Governance**: Supports compliance requirements by ensuring that sensitive or outdated data is removed from the system in a timely manner.
    
- **Performance**: Improves performance by reducing the volume of data that needs to be processed and queried over time.
    

### Considerations

- **Event Retention Policies**: Define appropriate TTL values based on business needs and regulatory requirements.
    
- **Data Archival**: Consider integrating TTL with data archival strategies to maintain historical data beyond the event store.
    

### Summary

The Event Store Time-to-Live (TTL) configuration for aggregates enhances the management and efficiency of event-driven architectures. By setting TTL values, systems can automatically manage event data retention, ensuring that only relevant and current information is maintained in the event store while optimizing storage resources and improving overall system performance.