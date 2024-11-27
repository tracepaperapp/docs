
Patterns are [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) that can be used while modelling commands to ensure a specific pattern for String fields e.g.

### LowercasedOnly

```regexp
^[a-z]+$
```

### Date

```regexp
^(?:20)\d{2}-\d{2}-\d{2}$
```

### Extending patters

Patterns may reference each-other e.g.

```regexp
^{{LowercasedOnly}}:arn:{{LowercasedOnly}}$
```