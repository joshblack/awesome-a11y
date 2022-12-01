# awesome-a11y

> A personal collection of resources, notes, and references for web accessibility

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Links & Resources](#links--resources)
- [Screen Readers](#screen-readers)
  - [JAWS](#jaws)
  - [NVDA](#nvda)
  - [TalkBack](#talkback)
  - [VoiceOver](#voiceover)
- [Concepts](#concepts)
  - [Windows High Contrast Mode](#windows-high-contrast-mode)
    - [Focus styles](#focus-styles)
  - [Forced Colors Mode](#forced-colors-mode)
  - [Speech Recognition](#speech-recognition)
  - [Landmarks](#landmarks)
- [Patterns](#patterns)
  - [Disclosure](#disclosure)
  - [Roving tabindex](#roving-tabindex)
  - [Skeletons](#skeletons)
  - [Visually Hidden](#visually-hidden)
  - [Responsive Type](#responsive-type)
- [Attributes](#attributes)
  - [The `aria-current` attribute](#the-aria-current-attribute)
  - [The `title` attribute](#the-title-attribute)
  - [The `placeholder` attribute](#the-placeholder-attribute)
- [Focus](#focus)
- [Elements](#elements)
  - [SVG](#svg)
- [Components](#components)
  - [Accordion](#accordion)
  - [Breadcrumb](#breadcrumb)
  - [Button](#button)
  - [Combobox](#combobox)
  - [DataTable](#datatable)
  - [Link](#link)
  - [Modal Dialog](#modal-dialog)
  - [Notifications](#notifications)
  - [Pagination](#pagination)
  - [Switch](#switch)
  - [Tooltip](#tooltip)
  - [Tree View](#tree-view)
- [Abbreviations](#abbreviations)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

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
- https://inclusive-components.design/

**Tools**

- [Accessibility Insights](https://accessibilityinsights.io/)
- [axe](https://www.deque.com/axe/)
- [Equal Access Toolkit](https://www.ibm.com/able/toolkit)

**Videos**

- [A11ycasts with Rob Dodson](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

**Talks**

- https://talks.hiddedevries.nl/7336XA/slides
  - Approaching accessibility from an organization
  - How to move accessibility earlier on in the process

**Newsletters**

- [Accessibility Weekly](https://a11yweekly.com/)

**Design Systems**

| Name                   | Homepage                              | Repo                                            |
| :--------------------- | :------------------------------------ | :---------------------------------------------- |
| GOV.UK Design System   | https://design-system.service.gov.uk/ | https://github.com/alphagov/govuk-design-system |
| U.S. Web Design System | https://designsystem.digital.gov/     | https://github.com/uswds/uswds                  |

## Screen Readers

**Getting started**

- https://www.sarasoueidan.com/blog/testing-environment-setup/

**Training**

- https://app.pluralsight.com/library/courses/accessibility-testing-and-screen-reader/table-of-contents

### JAWS

| Command                                 | Description                          | Source                                                                 |
| :-------------------------------------- | :----------------------------------- | :--------------------------------------------------------------------- |
| Press JAWS Key + Spacebar, then press H | View JAWS speech history             | [Link](https://mobile.twitter.com/aardrian/status/1144576648634912768) |
| Press Shift + JAWS Key + F1             | Announce accessibility info from DOM | [Link](https://mobile.twitter.com/aardrian/status/1144585392211054594) |

**Links & Resources**

- https://www.freedomscientific.com/training/jaws/getting-started/
- https://mobile.twitter.com/aardrian/status/1516755145622794244

### NVDA

**Links & Resources**

- https://www.youtube.com/watch?v=Jao3s_CwdRU

### TalkBack

**Links & Resources**

- https://www.youtube.com/watch?v=0Zpzl4EKCco

### VoiceOver

**Links & Resources**

- https://www.youtube.com/watch?v=5R-6WvAihms
- https://apps.apple.com/us/app/screenreader/id1610318073

## Concepts

This section contains information around different concepts as they relate to web accessibility. These are broader techniques that should be supported or considered when building for the web.

- [Windows High Contrast Mode](#windows-high-contrast-mode)
- [Forced Colors Mode](#forced-colors-mode)
- [Speech Recognition](#speech-recognition)

### Windows High Contrast Mode

**Checklist**

- [ ] Enable Windows High Contrast Mode
- [ ] Verify that the piece of UI that you're testing for is visible, including any interactions
- [ ] Make sure to adjust the Windows High Contrast Mode theme to verify that the keywords adapt to user preference

#### Focus styles

When authoring focus styles, in particular with `box-shadow`, it's important to note that Windows High Contrast Mode will ignore these changes ([Reference](https://sarahmhigley.com/writing/whcm-quick-tips/)). One recommendation from Sarah Higley is to use a transparent outline along with `box-shadow` (or other custom focus styles). This transparent outline should match the width of your custom focus styles and will be visible when WHCM is turned on.

**Links & Resources**

- https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/
- https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/
- https://sarahmhigley.com/writing/whcm-quick-tips/
- https://adrianroselli.com/2017/11/os-high-contrast-versus-inverted-colors.html
- https://www.smashingmagazine.com/2022/03/windows-high-contrast-colors-mode-css-custom-properties/
- https://www.maxability.co.in/2021/06/13/windows-high-contrast-mode-and-accessibility-testing/

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

| Tool                      | Operating System | Integration |
| :------------------------ | :--------------- | :---------- |
| Dragon Naturally Speaking | Windows          | Third-party |
| Speech Recognition        | Windows          | Built-in    |
| Voice Control             | macOS            | Built-in    |
| Voice Control             | iOS              | Built-in    |
| Voice Access              | Android          | Built-in    |

**Interaction Patterns**

- Dictation command
- Voice command
- Mouse Grids
- Show labels or names

**Techniques**

**Links & Resources**

- https://www.youtube.com/watch?v=2g9X-QPgZgo

### Landmarks

**Links & Resources**

- https://www.nomensa.com/blog/how-aria-landmark-roles-help-screen-reader-users

## Patterns

This section contains information around ways in which a component, or set of components, may be used and how that pattern may or may not be problematic.

### Disclosure

> A disclosure is a widget that enables content to be either collapsed (hidden) or expanded (visible).

[Source](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)

**Links & Resources**

- https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
- https://adrianroselli.com/2020/05/disclosure-widgets.html

### Roving tabindex

**Links & Resources**

- https://www.youtube.com/watch?v=uCIC2LNt0bk

### Skeletons

**Links & Resources**

- https://adrianroselli.com/2020/11/more-accessible-skeletons.html

### Visually Hidden

**Links & Resources**

- https://www.tpgi.com/the-anatomy-of-visually-hidden/

### Responsive Type

**Links & Resources**

- https://adrianroselli.com/2019/12/responsive-type-and-zoom.html

## Attributes

This section contains information around ways in which an attribute may be used on an element in a way that may or may not be problematic.

### The `aria-current` attribute

**Links & Resources**

- https://tink.uk/using-the-aria-current-attribute/

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

## Focus

https://w3c.github.io/aria/#managingfocus

- Tab order
- Roving tabindex
- `aria-activedescendant`
- Determining initial focus
  - Sometimes it's helpful to have the "selected" item be the initial focus candidate
  - It's important to remove `disabled`, hidden, or otherwise unavailable items from initial focus candiates
- Restoring focus
  - It's important to remember what the last active element was in order to restore focus to it

## Elements

### SVG

Generally, the structure of an svg icon should match the following:

```html
<svg aria-hidden="true" focusable="false">
  <!-- ... -->
</svg>
```

- `aria-hidden` is set to `"true"` to hide the decorative icon
- `focusable` is set to `"false"` to make this element inert in IE11 and Edge

An `<svg>` element may use an `aria-label` along with `role="img"` if used as the contents of a control, like a `<button>`, where the label should be communicated.

If interactive, the `<svg>` element must provide a label, `tabindex`, and use `role="img"`:

```html
<svg aria-label="Icon label" role="img" tabindex="0" focusable="true">
  <!-- ... -->
</svg>
```

An `<svg>` element may use `aria-labelledby` with `<title>` to provide a label instead of `aria-label`.

**References**

- https://allyjs.io/tutorials/focusing-in-svg.html

## Components

This section contains information around specific components and how they might be built accessibly or challenges that one may run into.

### Accordion

[APG](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)

**Links & Resources**

- https://github.com/scottaohara/a11y_accordions

### Breadcrumb

**Links & Resources**

- https://github.com/scottaohara/a11y_breadcrumbs

### Button

**Features**

- Variants
  - Primary
  - Secondary
  - Outline / Ghost
- States
  - Default
  - Focus
  - Active
  - Hover
  - Disabled
- Content
  - Text-only
  - Icon-only (with tooltip)
  - Text and icon
- Interesting combinations
  - Disabled button plus tooltip

### Combobox

**Links & Resources**

- https://dequelabs.github.io/combobo/demo/

### DataTable

**Features**

- Row expansion
- Filtering
- Sorting
  - By single column
  - By multiple columns
- Selection
  - Keyboard shortcut: Shift+DownArrow to select a row
- Pagination
- Inline editing
- Virtualization
- Batch actions
- Inline actions

**Links & Resources**

- Sorting
  - https://adrianroselli.com/2021/04/sortable-table-columns.html
  - https://adrianroselli.com/2021/06/multi-column-sortable-table-experiment.html
- Expansion
  - https://adrianroselli.com/2019/09/table-with-expando-rows.html
- Responsiveness
  - https://adrianroselli.com/2020/11/under-engineered-responsive-tables.html
  - https://adrianroselli.com/2017/11/a-responsive-accessible-table.html

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
- https://github.com/KittyGiraudel/a11y-dialog

### Notifications

**Links & Resources**

- https://www.youtube.com/watch?v=W5YAaLLBKhQ
- https://adrianroselli.com/2020/01/defining-toast-messages.html
- https://www.scottohara.me/blog/2019/07/08/a-toast-to-a11y-toasts.html

### Pagination

**Links & Resources**

- https://designsystem.digital.gov/components/pagination/

### Switch

**Usage**

- A switch may have an immediate effect upon activation (`button`)
- A switch may have an effect upon form submission (`<input type="checkbox">`)

**Links & Resources**

- https://www.scottohara.me/note/2019/04/03/switch-script.html
- https://adrianroselli.com/2021/10/switch-role-support.html
- https://adrianroselli.com/2019/08/under-engineered-toggles-too.html
- https://adrianroselli.com/2019/03/under-engineered-toggles.html

### Tooltip

**Links & Resources**

- https://sarahmhigley.com/writing/tooltips-in-wcag-21/
- https://github.com/scottaohara/a11y_tooltips
- https://www.youtube.com/watch?v=lb0_v7D4kbs

### Tree View

**Scenarios**

- Selection (single, multi)
- Navigation
- Leading and trailing visuals and labels
- Dynamically loading in sub-trees

**Discussions**

- https://github.com/w3c/aria/issues/1311

**Design Systems**

| Name                                                    | Guidelines                                                         | CSS                                                             | Web Components | React                                                                                  | Angular                                                |
| :------------------------------------------------------ | :----------------------------------------------------------------- | :-------------------------------------------------------------- | :------------- | :------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| [Carbon Design System](https://carbondesignsystem.com/) | [Link](https://carbondesignsystem.com/components/tree-view/usage/) |                                                                 |                | [Link](https://react.carbondesignsystem.com/?path=/story/components-treeview--default) |
| [Clarity Design System](https://clarity.design/)        |                                                                    |                                                                 |                |                                                                                        | [Link](https://clarity.design/documentation/tree-view) |
| [Spectrum](https://spectrum.adobe.com/)                 |                                                                    | [Link](https://opensource.adobe.com/spectrum-css/treeview.html) |                |                                                                                        |                                                        |

## Abbreviations

| Abbrevation | Word or phrase                                                                                          |
| :---------- | :------------------------------------------------------------------------------------------------------ |
| APG         | Authoring Practices Guide, see [Link](https://www.w3.org/WAI/ARIA/apg/)                                 |
| ARIA        | Accessible Rich Interactive Applications, see [Link](https://www.w3.org/WAI/standards-guidelines/aria/) |
| WAI         | Web Accessibility Initiative, see [Link](https://www.w3.org/WAI/)                                       |
| WHCM        | [Windows High Contrast Mode](#windows-high-contrast-mode)                                               |
