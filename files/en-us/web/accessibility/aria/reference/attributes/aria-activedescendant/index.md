---
title: "ARIA: aria-activedescendant attribute"
short-title: aria-activedescendant
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant
page-type: aria-attribute
spec-urls:
  - https://w3c.github.io/aria/#aria-activedescendant
  - https://www.w3.org/TR/wai-aria-1.2/#aria-activedescendant
sidebar: accessibilitysidebar
---

The `aria-activedescendant` attribute identifies the currently active element when focus is on a [`composite`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) widget, [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role), or [`application`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role).

## Description

The `aria-activedescendant` property provides a method of managing focus for assistive technologies on interactive elements when they contain multiple focusable descendants, such as menus, grids, and toolbars. Instead of the screen reader moving focus between owned elements, `aria-activedescendant` can be used on container elements to refer to the currently active element, informing assistive technology users of the currently active element when focused.

With `aria-activedescendant`, the browser keeps the DOM focus on the container element or on an input element that controls the container element. However, the user agent communicates desktop focus events and states to the assistive technology as if the element referenced by `aria-activedescendant` has focus.

This attribute is only relevant on elements with role of [`composite`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) widget, [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role), or [`application`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) whose `id` is referenced as the attribute value.

The attribute manages providing assistive technologies with information as to which element has focus, but doesn't actually create focus. Changing focus and managing the attributes value is done with JavaScript. In addition to managing that attribute value, make sure the currently active descendant is visible and in view (or scrolls into view) when focused.

In setting the value of `aria-activedescendant` on an element with DOM focus, ensure the value refers to an owned element—either a descendant of the element with DOM focus OR a logical descendant as indicated by the [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) attribute.

When the element with DOM focus is a combobox, textbox, or searchbox, include [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) to refer to the element that supports `aria-activedescendant`.

The value of `aria-activedescendant` refers to an owned element of the controlled element. For example, in a combobox, focus may remain on the combobox while the value of `aria-activedescendant` on the combobox element refers to a descendant of a popup listbox that is controlled by the combobox.

> [!NOTE]
> The attribute is supported only on a few roles. For example, `dialog`s do not support `aria-activedescendant`. When a combobox opens a dialog, DOM focus moves into the dialog from the combobox as it is not referenceable with this attribute.

> [!NOTE]
> When a descendant of a `listbox`, `grid`, or `tree` popup is focused, DOM focus remains on the combobox and the combobox has `aria-activedescendant` set to a value that refers to the focused element within the popup.

## Values

- ID reference
  - : takes as its value the `id` of the currently focused element.

## Associated interfaces

- {{domxref("Element.ariaActiveDescendantElement")}}
  - : The `ariaActiveDescendantElement` property is part of each element's interface.
    Its value is an instance of a subclass of {{domxref("Element")}} that reflects the `id` reference in the `aria-activedescendant` attribute ([with some caveats](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- {{domxref("ElementInternals.ariaActiveDescendantElement")}}
  - : The `ariaActiveDescendantElement` property is part of each custom element's interface.
    Its value is an instance of a subclass of {{domxref("Element")}} that reflects the `id` reference in the `aria-activedescendant` attribute ([with some caveats](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Associated roles

Relevant only as an attribute on elements with the following roles:

- [`application`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`composite`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [`group`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

## Specifications

{{Specifications}}
