---
title: "ARIA: aria-errormessage attribute"
short-title: aria-errormessage
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-errormessage
sidebar: accessibilitysidebar
---

The `aria-errormessage` attribute on an object identifies the element(s) that provides an error message for that object.

## Description

When there is a user-created error, you want to let the user know it exists and tell them how to fix it. There are two attributes you need to use: set [`aria-invalid="true"`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) to define the object as being in an error state, then add the `aria-errormessage` attribute with the value being the `id` of the element (or elements) containing the error message text for that object.

The `aria-errormessage` attribute should only be used when the value of an object is not valid; when [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) is set to `true`. If the object is valid and you include the `aria-errormessage` attribute, make sure the element referenced is hidden, as the message it contains is not relevant.

When `aria-errormessage` is relevant, the element(s) it references must be visible so users can see or hear the error message.

Often times, you will want the element with the error message to be an [ARIA live region](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions), such as when an error message is displayed to users after they have provided an invalid value. The error message should describe what is wrong and inform the user what is required to make the object valid. Adding the error message as an ARIA live region informs assistive technologies that the user may benefit from the error message content even if the error message wouldn't otherwise be conveyed to the user.

Include a visible error message and link the invalid object with the `aria-errormessage` attribute if the failure is visually apparent and an explicit description of the error is necessary.

## Example

We create some styles to:

1. Hide all error messages,
2. Make invalid objects appear invalid, and
3. Show error messages that are siblings coming after an invalid object.

We use `aria-invalid="true"` to identify invalid objects:

```css
.errormessage {
  visibility: hidden;
}

[aria-invalid="true"] {
  outline: 2px solid red;
}

[aria-invalid="true"] ~ .errormessage {
  visibility: visible;
}
```

When an object is invalid, we use JavaScript to add `aria-invalid="true"`. The above CSS makes the `.errormessage` following an invalid object become visible.

```html
<p>
  <label for="email">Email address:</label>
  <input
    type="email"
    name="email"
    id="email"
    aria-invalid="true"
    aria-errormessage="err1" />
  <span id="err1" class="errormessage">Error: Enter a valid email address</span>
</p>
```

When we went from valid to invalid, the only JavaScript change for this example was an update to `aria-invalid` on the email input object. As the error message follows the input and becomes visible and available on the accessibility tree, we are able to keep our example simple. We could have also applied an [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) property or used a live region roles such as [`alert`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

## Values

- ID reference list
  - : The `id` or space-separated list of element `id`s that contain the error message for the current element.

## Associated interfaces

- {{domxref("Element.ariaErrorMessageElements")}}
  - : The `ariaErrorMessageElements` property is part of each element's interface.
    Its value is an array of subclasses of {{domxref("Element")}} that reflect the `id` references in the `aria-errormessage` attribute ([with some caveats](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- {{domxref("ElementInternals.ariaErrorMessageElements")}}
  - : The `ariaErrorMessageElements` property is part of each custom element's interface.
    Its value is an array of subclasses of {{domxref("Element")}} that reflect the `id` references in the `aria-errormessage` attribute ([with some caveats](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Associated roles

Used in roles:

- [`application`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`checkbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`radiogroup`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`slider`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`tree`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

Inherits from roles:

- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Specifications

{{Specifications}}

## See also

- CSS {{CSSxref(':invalid')}} pseudoclass
- [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
