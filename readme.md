# More Functional Angular

This repository contains an experiment to see if a modern (>=v18) Angular application can be structured similarly to other modern frameworks. The experiment heavily utilizes [Standalone Components](https://angular.dev/guide/components/importing#standalone-components), moving away from the typical `NgModule` structure and adopting a more modern architecture. The Angular style guide does not currently provide recommendations for Standalone Applications [(see here)](https://angular.dev/style-guide#app-root-module).

## Experiments

The repository includes the following features, experiments, and DX improvements:

-   Uses [Bun](https://bun.sh) as a package manager. (Unfortunately, Bun is not supported as runtime yet.)
-   Use prettier config to ensure correct formatting of new Angular Control Flow
-   Use modern Angular Control Flow
-   Utilizes modern Angular dev tools (EsBuild, Vite).
-   Structures the application to align more closely with a typical Vite setup.
-   Provides aliases for `./src/components`, `./src/pages`, `./src/lib`.
-   Organizes files based on intended usage rather than modules.
-   Employs only Standalone components, with no constructor injection and no use of the Angular Common Module.
-   Import necessary parts of Common module standalone (JSON Pipe)
-   Implements exclusively lazy-loaded routing.
-   Removes Zone.js 🥳.
-   Slimed down Angular Boilerplate Files

The repository features a small application demonstrating basic authentication, forms, http and routing flow.

## Testing Locally

Clone the repository, install the dependencies using `bun install`, and use `bun dev` to start the application.

## Reasoning

Angular has recently made strides to change the way a Angular Application is structured. There are a certain set of previous Injectable that have been converted to functional (Guards, Interceptors, ...) as well as Standalone Components, Pipes, Directives. All this allows to build a true Module Less Angular Application.
