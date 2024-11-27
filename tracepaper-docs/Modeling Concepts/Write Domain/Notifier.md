## Overview
Notifiers are predefined processes that are triggered in response to specific events or conditions within a system. They perform actions automatically without direct user intervention, often to notify users or other systems about important events or changes. Notifiers enhance system responsiveness and improve user experience by providing timely and relevant information.

---

## Notifier Definition
A notifier is defined by specifying its name, trigger conditions, and actions to be performed. Notifiers react to events occurring within the system, executing predefined actions when certain conditions are met.

---

## Attributes of a Notifier

### Name
A unique identifier for the notifier.

### Trigger Conditions
Conditions or events that initiate the notifier. These triggers can include:

- **Event-based**: Triggered by specific events such as Commands (ActorEvents) originating from the GraphQL API or domain events published by aggregates.
- **Time-based**: Triggered at specific times or after certain intervals.
- **After-deployment**: Triggered after the application is deployed.

### Actions
Notifiers define the actions to be performed when triggered, encompassing a wide range of activity types.

---

## Activity Types
Notifiers consist of a series of activities that define the specific actions to be performed. These activities interact with various system components or external services. Below is a documentation of possible activity types within notifiers.

---

### Identity and Access Management (IAM - AWS Cognito) Activities
- **create-iam-group**: Creates a new IAM group within the system.  
  *Use Case*: When a new group of users with specific permissions needs to be created.  
- **delete-iam-group**: Deletes an existing IAM group.  
  *Use Case*: When an IAM group is no longer needed.  
- **add-user-to-iam-group**: Adds a user to an IAM group.  
  *Use Case*: Grants a user permissions associated with the IAM group.  
- **remove-user-from-iam-group**: Removes a user from an IAM group.  
  *Use Case*: Revokes permissions from a user.  
- **retrieve-email-from-iam**: Retrieves a user's email address.  
  *Use Case*: For communication purposes.  
- **iam-create-systemuser**: Creates a system user in IAM.  
  *Use Case*: For programmatic system interactions.  
- **iam-create-user**: Creates a new user in IAM.  
  *Use Case*: For onboarding new users.  
- **iam-delete-user**: Deletes a user in IAM.  
  *Use Case*: For removing accounts permanently.  

---

### Communication and Notification Activities
- **render-template**: Renders a template with specified data.  
  *Use Case*: For creating personalized messages or documents.  
- **send-email**: Sends an email using AWS SES.  
  *Use Case*: For notifications, alerts, or other communications.  
- **send-graphql-notification**: Sends a notification via the GraphQL API.  
  *Use Case*: For client or system notifications.

---

### File and Data Operations
- **write-file**: Writes data to a remote file system (AWS S3).  
  *Use Case*: For saving data.  
- **fetch-property**: Fetches a specific property or data point from the system.  
  *Use Case*: For retrieving configuration settings.

---

### Token Management Activities
- **get-token**: Retrieves a token for authentication or authorization.  
  *Use Case*: For accessing secured resources.  
- **get-systemuser-token**: Retrieves a token for a system user.  
  *Use Case*: For system-to-system authentication.

---

### Variable and State Management
- **set-variable**: Sets a flow variable to a specified value.  
  *Use Case*: For storing temporary data or state.

---

### API and External Service Interactions
- **call-internal-api**: Calls an internal GraphQL API endpoint.  
  *Use Case*: For invoking system functions (Commands, Queries, Projections).  
- **HTTP**: Makes an HTTP request to an external service.  
  *Use Case*: For interacting with external APIs.

---

### Miscellaneous Activities
- **code**: Executes custom code.  
  *Use Case*: For complex logic.  
- **invalidate-cdn**: Invalidates a CDN cache.  
  *Use Case*: To ensure updated content is served from AWS CloudFront.  
- **loop**: Repeats a set of activities a specified number of times.  
  *Use Case*: For iterating over collections or repeating actions.

---

## Summary
Notifiers leverage a diverse set of activity types to perform tasks automatically. By combining these activities, systems can create sophisticated workflows that enhance functionality, improve efficiency, and provide timely responses to events and conditions. Understanding these activity types is essential for designing effective notifiers that meet specific business needs.