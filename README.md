## Tailwind Css - Utilities

A plugin that provides a set of `utility` classes for `Tailwind Css` that you can use with auto-completion in your IDE.

### Shorter display classes

```
.in-flex { display: inline-flex }
.in-grid { display: inline-grid }
.in-block { display: inline-block }
```

### Mixed flexbox properties

```
.centered {
  justify-content: center;
  align-items: center;
}
.start-center {
  justify-content: flex-start;
  align-items: center;
}
.end-center {
  justify-content: flex-end;
  align-items: center;
}
.center-start {
  justify-content: center;
  align-items: flex-start;
}
.center-end {
  justify-content: center;
  align-items: flex-end;
}
.wrap { flex-wrap: wrap }
.nowrap { flex-wrap: nowrap }
```

### Directions

```
.dir-ltr { direction: ltr }
.dir-rtl { direction: rtl }
```

### New sizings

```
.w-4.5 { width: 1.125rem }
.w-5.5 { width: 1.375rem }
.w-6.5 { width: 1.625rem }
.w-7.5 { width: 1.875rem }
.w-8.5 { width: 2.125rem }
.w-9.5 { width: 2.375rem }
.w-13 { width: 3.25rem }
.w-15 { width: 3.75rem }
.w-18 { width: 4.5rem }
.h-4.5 { height: 1.125rem }
.h-5.5 { height: 1.375rem }
.h-6.5 { height: 1.625rem }
.h-7.5 { height: 1.875rem }
.h-8.5 { height: 2.125rem }
.h-9.5 { height: 2.375rem }
.h-13 { height: 3.25rem }
.h-15 { height: 3.75rem }
.h-18 { height: 4.5rem }
```

### Misc

```
.rounded-in { border-radius: inherit }
.no-events { pointer-events: none }
.all-events { pointer-events: all }
.auto-events { pointer-events: auto }
```
