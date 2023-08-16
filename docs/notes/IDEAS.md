## Ideas for future experimentation

August 16, 2023.

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
