# awesome-a11y

> A personal collection of resources, notes, and references for web accessibility

## Table of Contents

- [Components](#components)
- [Patterns](#patterns)
- [Attributes](#attributes)
- [Concepts](#concepts)
- [Links & Resources](#links--resources)

## Components

This section contains information around specific components and how they might be built accessibly or challenges that one may run into.

- [Notifications](#notifications)
- [Tooltip](#tooltip)
- [Tree View](#tree-view)

### Notifications

**Links & Resources**

- https://www.youtube.com/watch?v=W5YAaLLBKhQ

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

## Attributes

This section contains information around ways in which an attribute may be used on an element in a way that may or may not be problematic.

### The `title` attribute

Usage of the `title` attribute is problematic as the information is not exposed in an accessible way. From the HTML Spec:

> Relying on the title attribute is currently discouraged as many user agents do not expose the attribute in an accessible manner as required by this specification (e.g., requiring a pointing device such as a mouse to cause a tooltip to appear, which excludes keyboard-only users and touch-only users, such as anyone with a modern phone or tablet).

https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute

**Links & Resources**

- https://www.tpgi.com/using-the-html-title-attribute-updated/
- https://developer.yoast.com/blog/dont-rely-title-attribute/

## Contepts

This section contains information around different concepts as they relate to web accessibility. These are broader techniques that should be supported or considered when building for the web.

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

## Links & Resources

**Resources**

- [WAI ARIA](https://w3c.github.io/aria/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Techniques for WCAG 2.2](https://www.w3.org/WAI/WCAG21/Techniques/)
- [a11ysupport](https://a11ysupport.io/)
  - Check the support of various features across screen readers, browsers, and devices

**Blogs**

- https://adrianroselli.com/
- https://sarahmhigley.com/
- https://www.scottohara.me/

**Tools**

- [Accessibility Insights](https://accessibilityinsights.io/)
- [axe](https://www.deque.com/axe/)
- [Equal Access Toolkit](https://www.ibm.com/able/toolkit)

## Abbreviations

| Abbrevation | Word or phrase                                                                                          |
| :---------- | :------------------------------------------------------------------------------------------------------ |
| APG         | Authoring Practices Guide, see [Link](https://www.w3.org/WAI/ARIA/apg/)                                 |
| ARIA        | Accessible Rich Interactive Applications, see [Link](https://www.w3.org/WAI/standards-guidelines/aria/) |
| WAI         | Web Accessibility Initiative, see [Link](https://www.w3.org/WAI/)                                       |
