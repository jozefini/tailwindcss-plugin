## Tailwind CSS - Utilities

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

### New heights, widths and square sizes (2D)

```
.h-{newSizeModifier} {
  height: {size};
}
.w-{newSizeModifier} {
  width: {size};
}
.sq-{sizeModifier} {
  width: {size};
  height: {size};
}
```

### New Square Sizes (Width + Height)

```
.sq-{sizeModifier} {
  width: {size};
  height: {size};
}
```

### Misc

```
.rounded-in { border-radius: inherit }
.no-events { pointer-events: none }
.all-events { pointer-events: all }
.auto-events { pointer-events: auto }
```

### New size added alongside the default ones

```
.{class}-4.5  => 1.125rem // 18px
.{class}-5.5  => 1.375rem // 22px
.{class}-6.5  => 1.625rem // 26px
.{class}-7.5  => 1.875rem // 30px
.{class}-8.5  => 2.125rem // 34px
.{class}-9.5  => 2.375rem // 38px
.{class}-11   => 2.75rem // 44px
.{class}-13   => 3.25rem // 52px
.{class}-14   => 3.5rem // 56px
.{class}-15   => 3.75rem // 60px
.{class}-18   => 4.5rem // 72px
```
