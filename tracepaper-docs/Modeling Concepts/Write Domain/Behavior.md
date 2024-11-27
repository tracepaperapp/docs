## Overview

Behavior flows define the lifecycle and interactions of aggregates within a system. They encapsulate the business logic required to handle events and commands, ensuring consistent state transitions and proper handling of complex workflows. By defining how an aggregate responds to various inputs, behavior flows help maintain system integrity and align with business rules.

## General

Behavior is a response to an event emited within the domain this may be an ActorEvent (Command) or a DomainEvent (From an other entity), which can lead to changes in the state of an aggregate.

- **Name**: A unique identifier for the command.
- **Create Command**: (Optional) Indicates if this should be the initial behavior of a new instance of the aggregate. If the instance with the specific business key is already present in the database the execution will fail.

## Trigger

A trigger specifies the conditions under which a command is activated. It listens for specific events and uses the data from these events to execute the corresponding behavior flow.

- **Source**: The event that activates the command.
- **Key Field**: The primary field used to correlate the incoming event with the correct aggregate instance.
- **Mapping**: Transfers data from the event to the flow variable fields. Optionally event-fields can be marked as `part of the idempotency key` giving you the ability to model functional idempotency.

## Processors

Processors are essential components within behavior flows that perform specific operations. They manage validations, data transformations, event emissions, and other logical actions to ensure that the behavior executes correctly and that aggregates maintain consistent state transitions. Each processor type serves a unique function and has specific attributes to support its operations.

## Processor Types

## Emit Event

The `emit-event` processor is responsible for generating and emitting domain events, which signal that a significant change or action has occurred within the system. This processor type includes a reference specifying the event to be emitted, and a mapping mechanism that transfers flow-variables to the event fields.

## Code

The `code` processor allows for custom logic to be executed within the behavior flow. This processor is used when predefined processor types do not cover the required operation. It includes the code (inline) or script (global) to be executed, and optionally, inputs or parameters required by the script.

## Validator

The `validator` processor checks specific conditions and ensures they are met before proceeding. If the condition fails, an exception or error is triggered, preventing the behavior from executing further. This processor type includes the condition to be checked, typically expressed as a logical expression, and the message or exception to be raised if the condition is not met. If a functional exception is raised, no events will be persisted to the event store. So a validator may also validate on the instance state after emit-event processors are already applied, it will still prevent the state transition.

## Set Variable

The `set-variable` processor assigns values to variables (in memory) within the behavior flow. This can be used to store intermediate results, configuration values, or other data needed for subsequent processing steps. This processor type includes the name of the variable to be set, and the expression or value used to determine the variable's value.

## Update Key

The `update-key` processor updates the business key of an aggregate instance. This is useful for operations that require changing the identifier or key used to access an aggregate instance. This processor type includes the field in the aggregate to be updated, and the new value to be assigned to the key field.

## Test Case

Test cases validate the behavior of a command by defining inputs, expected domain events, and resulting state changes. They ensure that the command performs as intended and that the aggregate's state transitions correctly.

- **Name**: A unique identifier for the test case.
- **Trigger Event**: The event that initiates the test case.
- **Input**: Defines the input data for the command.
    - **Name**: The name of the input field.
    - **Value**: The value assigned to the input field.
    - **Type**: The data type of the input field.
- **Expected Domain Event**: Specifies the expected event to be emitted by the command.
    - **Field**: Defines the expected values for fields in the emitted event.
- **State**: (Optional) The initial state of the aggregate before executing the command.
- **Expected State**: The expected state of the aggregate after executing the command.
    - **Primary Key (pk)**: The key identifying the aggregate instance.
    - **State Data**: The expected state data of the aggregate.

## Summary

Behavior flows are essential for managing the lifecycle and interactions of aggregates. By defining commands, triggers, mappings, processors, and test cases, behavior flows ensure that business logic is consistently applied, state transitions are correctly managed, and the system's behavior aligns with the intended domain model. Understanding and modeling behavior flows are crucial for implementing robust, maintainable, and scalable systems.