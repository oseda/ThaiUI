# ThaiUI

ThaiUI aims to be an open-source, framework-agnostic design system for Thai civic tech and government websites and web applications.

## Goals and principles

- ThaiUI should be usable without build tooling or build scripts. Should be directly usable with CDN, e.g. `<link rel="stylesheet" href="https://thaiui.org/thaiui.css" />`.
- ThaiUI should work with any CSS frameworks, e.g. with utility-class based CSS frameworks out of the box. (e.g. Tailwind, UnoCSS)
- ThaiUI should expose a set of classes that is overrideable via CSS variables or utility classes, akin to DaisyUI. It should also expose CSS variables defining the design system's colors, spacings, etc.
- ThaiUI should be compatible with [Tailwind](https://tailwindcss.org), [UnoCSS](https://unocss.dev) and other frameworks. It should provide the base configuration for users of utility-class based frameworks (e.g. `tailwind.config.js` or `uno.config.ts`) to make use of ThaiUI's CSS variables for consistent styling out of the box.
- ThaiUI should provide basic set of ready-to-use templates and themes for common use cases, e.g. landing page, forms.
- ThaiUI should be JS framework agnostic, i.e. it must be usable with vanila JavaScript, React, Vue, Svelte, etc. ThaiUI should expose a set of bindings for each popular frameworks, yet usable with Vanilla HTML.
- ThaiUI should expose a set of components and templates, both in base HTML form and framework-binding form.

## Structure

```txt
apps/
  docs/       # documentation site, built with Astro and ThaiUI
packages/
  css/        # css stylesheets
  react/      # react bindings
  components/ # framework-agnostic components
```

## References

- [New Zealand Design System](https://design-system-alpha.digital.govt.nz/components/FlexGrid)
