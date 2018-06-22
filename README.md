# comingSoonJS

A simple 'coming soon' plugin

## Example

```code
Basic

$(Selector).comingSoon();

Basic with options

$(Selector).comingSoon({
    title: "Coming Soon",
    partingLine: true, // true => Visilble // false => Not visible
    date: "2018-12-31", // YYYY-MM-DD
    time: "18:00:00", // hh:mm:ss
    backgroundColor: "#000",
    backgroundImage: "/path/to/image",
    color: "#fff",
    context: "Our new website will be come after the deadline"
});
```