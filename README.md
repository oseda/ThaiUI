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

## Ideas for experimentation

- Can we build framework-agnostic JavaScript code as web components?
  - Idea: [Preact](https://preactjs.com/guide/v10/web-components) supports creating web components, and it has a 3KB runtime. However, the `preact-custom-element` library has not been updated for 3 years now.

- Should we base ThaiUI on an existing CSS framework that is well maintained and easily overrideable?
  - For reference, Singapore forks Bootstrap 4 and build on top of it; Current version is [Bootstrap 5](https://getbootstrap.com).
  - Although, some developers are reluctant to use Singapore's design system due to it's dependencies on Bootstrap -- difficult to override unless you compile the Sass sources yourself.
  - [Bootstrap 5](https://getbootstrap.com) solves this by making use of CSS variables and utility classes.
- Use [Sindre Sorhus' Modern Normalizer](https://github.com/sindresorhus/modern-normalize) for CSS normalization.
  - [modern-normalize.css](https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css)
- Can we compose a design system based on `@apply` utility classes, so the users of our framework does not need to use Tailwind?
  - Idea: using TailwindCSS to compile to classes, with CSS variables as base. Same as how DaisyUI works. DaisyUI uses a combination of `@apply`-ing tailwind utility classes with CSS variables. See how the [DailyUI build](https://cdnjs.cloudflare.com/ajax/libs/daisyui/3.5.1/styled.css) compiles to vanilla CSS, so the design system consumer does not need to use Tailwind.
  - Alternative: using UnoCSS's `@unocss/transformer-directives` to compile `@apply` to regular classes.
  - DaisyUI code
    - [styled/button.css](https://github.com/saadeghi/daisyui/blob/master/src/components/styled/button.css)
    - [styled/card.css](https://github.com/saadeghi/daisyui/blob/master/src/components/styled/card.css)

## References

- [New Zealand Design System](https://design-system-alpha.digital.govt.nz/components/FlexGrid)
