# More Functional Angular

This repository contains an experiment to determine if a modern (>=v18) Angular application can be structured similarly to other contemporary frameworks. The experiment heavily utilizes [Standalone Components](https://angular.dev/guide/components/importing#standalone-components), moving away from the typical `NgModule` structure and adopting a more modern architecture. The Angular style guide does not currently provide recommendations for Standalone Applications [(see here)](https://angular.dev/style-guide#app-root-module). This experiment aims to suggest a possible guideline.

## Experiments

The repository includes the following features, experiments, and DX improvements:

-   Uses [Bun](https://bun.sh) as a package manager. (Unfortunately, Bun is not supported as a runtime yet.)
-   Uses a Prettier configuration to ensure correct formatting of the new Angular Control Flow.
-   Employs modern Angular Control Flow.
-   Utilizes modern Angular development tools (EsBuild, Vite).
-   Structures the application to align more closely with a typical Vite setup.
-   Provides aliases for `./src/lib/components`, `./src/pages`, `./src/lib`.
-   Organizes files based on intended usage rather than modules.
-   Employs only Standalone components, with no constructor injection and no use of the Angular Common Module.
-   Imports necessary parts of the Common module standalone (e.g., JSON Pipe).
-   Implements exclusively lazy-loaded routing.
-   Removes Zone.js 🥳.
-   Slims down Angular boilerplate files.

The repository features a small application demonstrating basic authentication, forms, HTTP, and routing flow.

## Testing Locally

To test locally, clone the repository, install the dependencies using `bun install`, and start the application with `bun dev`.

## Reasoning

Angular has recently made strides to change the way an Angular application is structured. Several previous Injectables have been converted to functional (e.g., Guards, Interceptors) along with Standalone Components, Pipes, and Directives. All these changes enable the creation of a truly module-less Angular application.
