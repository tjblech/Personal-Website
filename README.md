# TJ Blechman — Portfolio

A static personal portfolio presenting selected software, product, and hardware work.

## Design direction

The visual system combines industrial materials, engineering instrumentation, and restrained product-design conventions. Copper identifies primary interaction, phosphor green communicates live or available states, amber marks work in progress, and technical blue supports structural interface elements.

## Architecture

The homepage is deliberately self-contained: its CSS, JavaScript, favicon, and primary project image are embedded in `index.html`. This makes the page resilient on GitHub Pages and when previewed locally, while requiring no package manager, framework, or build step.

## Pages

- `index.html` — portfolio homepage and interactive workbench
- `resume.html` — print-ready web résumé
- `404.html` — fallback redirect

## Deployment

The repository is compatible with GitHub Pages as a plain static site.
