---
title: "HTMLLinkElement: sheet property"
short-title: sheet
slug: Web/API/HTMLLinkElement/sheet
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.sheet
---

{{APIRef("HTML DOM")}}

The **`sheet`** read-only property of the {{domxref("HTMLLinkElement")}} interface
contains the stylesheet associated with that element.

A stylesheet is associated to an `HTMLLinkElement` if `rel="stylesheet"` is used with `<link>`.

## Value

A {{DOMxRef("StyleSheet")}} object, or `null` if none is associated with the element.

## Examples

```html
<link rel="stylesheet" href="styles.css" />
```

The `sheet` property of the `HTMLLinkElement` object will return the {{domxref("StyleSheet")}} object describing `styles.css`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
