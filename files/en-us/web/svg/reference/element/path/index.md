---
title: <path>
slug: Web/SVG/Reference/Element/path
page-type: svg-element
browser-compat: svg.elements.path
sidebar: svgref
---

The **`<path>`** [SVG](/en-US/docs/Web/SVG) element is the generic element to define a shape. All the basic shapes can be created with a path element.

## Usage context

{{svginfo}}

## Attributes

- {{SVGAttr("d")}}
  - : This attribute defines the shape of the path.
    _Value type_: **\<string>**; _Default value_: `''`; _Animatable_: **yes**
- {{SVGAttr("pathLength")}}
  - : This attribute lets authors specify the total length for the path, in user units.
    _Value type_: [**\<number>**](/en-US/docs/Web/SVG/Guides/Content_type#number); _Default value_: _none_; _Animatable_: **yes**

## DOM Interface

This element implements the {{domxref("SVGPathElement")}} interface.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG basic shapes: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
- [The MDN SVG "Getting Started" tutorial: Path](/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)
