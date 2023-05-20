## Tailwind CSS - Utilities

A plugin that provides a set of `utility` classes for `Tailwind Css` that you can use with auto-completion in your IDE.

### New sizes added

```
.{w|h|sq}-4.5  => 1.125rem // 18px
.{w|h|sq}-5.5  => 1.375rem // 22px
.{w|h|sq}-6.5  => 1.625rem // 26px
.{w|h|sq}-7.5  => 1.875rem // 30px
.{w|h|sq}-8.5  => 2.125rem // 34px
.{w|h|sq}-9.5  => 2.375rem // 38px
.{w|h|sq}-11   => 2.75rem  // 44px
.{w|h|sq}-13   => 3.25rem  // 52px
.{w|h|sq}-14   => 3.5rem   // 56px
.{w|h|sq}-15   => 3.75rem  // 60px
.{w|h|sq}-18   => 4.5rem   // 72px
```

### Shorter display classes

```
.in-flex  { display: inline-flex }
.in-grid  { display: inline-grid }
.in-block { display: inline-block }
```

### Common flex utils

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
.wrap   { flex-wrap: wrap }
.nowrap { flex-wrap: nowrap }
```

### Directions

```
.dir-ltr { direction: ltr }
.dir-rtl { direction: rtl }
```

### Square Sizes (Width + Height)

```
.sq-{sizeModifier} {
  width: {size};
  height: {size};
}
```

### Misc

```
.rounded-in  { border-radius: inherit }
.no-events   { pointer-events: none }
.all-events  { pointer-events: all }
.auto-events { pointer-events: auto }
```
