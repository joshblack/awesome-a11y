# awesome-a11y

> A personal collection of resources, notes, and references for web accessibility

## Table of Contents

- [Links & Resources](#links--resources)
- [Components](#components)
- [Patterns](#patterns)
- [Attributes](#attributes)
- [Concepts](#concepts)
- [Abbreviations](#abbreviations)

## Links & Resources

**Resources**

- [WAI ARIA](https://w3c.github.io/aria/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Techniques for WCAG 2.2](https://www.w3.org/WAI/WCAG21/Techniques/)
- [a11ysupport](https://a11ysupport.io/)
  - Check the support of various features across screen readers, browsers, and devices
- https://github.com/scottaohara/accessible_components

**Blogs**

- https://adrianroselli.com/
- https://sarahmhigley.com/
- https://www.scottohara.me/

**Tools**

- [Accessibility Insights](https://accessibilityinsights.io/)
- [axe](https://www.deque.com/axe/)
- [Equal Access Toolkit](https://www.ibm.com/able/toolkit)

## Components

This section contains information around specific components and how they might be built accessibly or challenges that one may run into.

- [Accordion](#accordion)
- [Link](#link)
- [Modal Dialog](#modal-dialog)
- [Notifications](#notifications)
- [Tooltip](#tooltip)
- [Tree View](#tree-view)

### Accordion

[APG](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)

**Links & Resources**

- https://github.com/scottaohara/a11y_accordions

### Breadcrumb

**Links & Resources**

- https://github.com/scottaohara/a11y_breadcrumbs

### Link

**Links & Resources**

- [Disabling a link](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)
- https://github.com/scottaohara/aria_links

### Modal Dialog

[APG](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/dialog.html)

**Links & Resources**

- https://github.com/scottaohara/accessible_modal_window
- https://www.scottohara.me/blog/2016/09/07/revised-modal-window.html
- https://www.scottohara.me/blog/2019/03/05/open-dialog.html
- https://www.tpgi.com/the-current-state-of-modal-dialog-accessibility/
- https://adrianroselli.com/2020/10/dialog-focus-in-screen-readers.html

### Notifications

**Links & Resources**

- https://www.youtube.com/watch?v=W5YAaLLBKhQ
- https://adrianroselli.com/2020/01/defining-toast-messages.html
- https://www.scottohara.me/blog/2019/07/08/a-toast-to-a11y-toasts.html

### Tooltip

**Links & Resources**

- https://sarahmhigley.com/writing/tooltips-in-wcag-21/
- https://github.com/scottaohara/a11y_tooltips
- https://www.youtube.com/watch?v=lb0_v7D4kbs

### Tree View

**Discussions**

- https://github.com/w3c/aria/issues/1311

**Design Systems**

| Name                                                    | Guidelines                                                         | CSS                                                             | Web Components | React                                                                                  | Angular                                                |
| :------------------------------------------------------ | :----------------------------------------------------------------- | :-------------------------------------------------------------- | :------------- | :------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| [Carbon Design System](https://carbondesignsystem.com/) | [Link](https://carbondesignsystem.com/components/tree-view/usage/) |                                                                 |                | [Link](https://react.carbondesignsystem.com/?path=/story/components-treeview--default) |
| [Clarity Design System](https://clarity.design/)        |                                                                    |                                                                 |                |                                                                                        | [Link](https://clarity.design/documentation/tree-view) |
| [Spectrum](https://spectrum.adobe.com/)                 |                                                                    | [Link](https://opensource.adobe.com/spectrum-css/treeview.html) |                |                                                                                        |                                                        |

## Patterns

This section contains information around ways in which a component, or set of components, may be used and how that pattern may or may not be problematic.

### Disclosure

> A disclosure is a widget that enables content to be either collapsed (hidden) or expanded (visible).

[Source](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)

**Links & Resources**

- https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
- https://adrianroselli.com/2020/05/disclosure-widgets.html

## Attributes

This section contains information around ways in which an attribute may be used on an element in a way that may or may not be problematic.

- [The `title` attribute](#the-title-attribute)
- [The `placeholder` attribute](#the-placeholder-attribute)

### The `title` attribute

Usage of the `title` attribute is problematic as the information is not exposed in an accessible way. From the HTML Spec:

> Relying on the title attribute is currently discouraged as many user agents do not expose the attribute in an accessible manner as required by this specification (e.g., requiring a pointing device such as a mouse to cause a tooltip to appear, which excludes keyboard-only users and touch-only users, such as anyone with a modern phone or tablet).

https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute

**Links & Resources**

- https://www.tpgi.com/using-the-html-title-attribute-updated/
- https://developer.yoast.com/blog/dont-rely-title-attribute/

### The `placeholder` attribute

**Links & Resources**

- https://www.nngroup.com/articles/form-design-placeholders/
- https://www.maxability.co.in/2016/01/03/placeholder-attribute-and-why-it-is-not-accessible/
- https://www.deque.com/blog/accessible-forms-the-problem-with-placeholders/
- https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research

## Concepts

This section contains information around different concepts as they relate to web accessibility. These are broader techniques that should be supported or considered when building for the web.

- [Forced Colors Mode](#forced-colors-mode)
- [Speech Recognition](#speech-recognition)

### Forced Colors Mode

[Spec](https://w3c.github.io/csswg-drafts/css-color-adjust-1/#forced-colors-mode)

> Forced colors mode is an accessibility feature intended to increase the readability of text through color contrast. Individuals with limited vision often find it more comfortable to read content when there is a particular type of contrast between foreground and background colors.

[Source](https://w3c.github.io/csswg-drafts/css-color-adjust-1/#forced-colors-mode)

**Techniques**

- `forced-colors` media query
- `forced-color-adjust` CSS property
- CSS system colors

**Links & Resources**

- https://www.youtube.com/watch?v=vlx70ABSAP0
- https://a11ytalks.com/posts/2022-APR
- https://polypane.app/blog/forced-colors-explained-a-practical-guide/
- https://www.smashingmagazine.com/2022/03/windows-high-contrast-colors-mode-css-custom-properties/

### Speech Recognition

> Software that helps to control the device with one's voice

**Tools**

| Tool | Operating System | Integration |
| :--- | :--------------- | :---------- |
| Dragon Naturally Speaking | Windows | Third-party |
| Speech Recognition | Windows | Built-in |
| Voice Control | macOS | Built-in |
| Voice Control | iOS | Built-in |
| Voice Access | Android | Built-in |

**Interaction Patterns**

- Dictation command
- Voice command
- Mouse Grids
- Show labels or names

**Techniques**

**Links & Resources**

- https://www.youtube.com/watch?v=2g9X-QPgZgo

## Abbreviations

| Abbrevation | Word or phrase                                                                                          |
| :---------- | :------------------------------------------------------------------------------------------------------ |
| APG         | Authoring Practices Guide, see [Link](https://www.w3.org/WAI/ARIA/apg/)                                 |
| ARIA        | Accessible Rich Interactive Applications, see [Link](https://www.w3.org/WAI/standards-guidelines/aria/) |
| WAI         | Web Accessibility Initiative, see [Link](https://www.w3.org/WAI/)                                       |
