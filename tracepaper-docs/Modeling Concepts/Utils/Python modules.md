
Python modules are usable scripts that define methods that are accessible from:

- Behavior flows
- Automations

```python
def behavior_or_notifier_function(flow):
    # May set a flow variable
    flow.myVariable = "Hello World!"

    # And has access to flow variables
    print(flow.myVariable)

    # And has also access to the [[aggregate]] document
    print(flow.entity)
    print(flow.entity.entityField)
```

It is a simple function but it does provide you access to all variables available to the flow execution.