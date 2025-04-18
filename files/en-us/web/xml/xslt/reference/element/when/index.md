---
title: <xsl:when>
slug: Web/XML/XSLT/Reference/Element/when
page-type: xslt-element
sidebar: xmlsidebar
---

The `<xsl:when>` element always appears within an `<xsl:choose>` element, acting like a case statement.

## Syntax

```xml
<xsl:when test=EXPRESSION>
  TEMPLATE
</xsl:when>
```

### Required Attributes

- `test`
  - : Specifies a boolean expression to be evaluated. If true, the contents of the element are processed; if false, they are ignored.

### Optional Attributes

None.

### Type

Subinstruction, always appears within an `<xsl:choose>` element.

## Specifications

XSLT, section 9.2.

## Gecko support

Supported.
