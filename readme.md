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
-   Uses [Valibot](https://valibot.dev) to create models and for typesafety checks

The repository features a small application demonstrating basic authentication, forms, HTTP, and routing flow.

## Testing Locally

To test locally, clone the repository, install the dependencies using `bun install`, and start the application with `bun dev`.

## Reasoning

Angular has recently made strides to change the way an Angular application is structured. Several previous Injectables have been converted to functional (e.g., Guards, Interceptors) along with Standalone Components, Pipes, and Directives. All these changes enable the creation of a truly module-less Angular application.

## Styleguide Propositions

There are several propositions made in this repository:

### 01. Only Standalone Components, Pipes, Directives

Using standalone components removes the need for modules, sliming down the application structure quite a bit.

### 02. Use `inject` instead of constructor injection

Keeping the number of constructor injects zero or minimal enables us to easier extend classes if so desired. It also helps with type inference for the injects as well as just keeping the component clean and tidy.

### 03. Use `loadChildren`/`loadComponent` over `children` and `component`

This allows angular to more efficiently generate different bundles by utilizing bundle splitting. It also works great together with a module less application.

### 04. Use signals for synchronous state management

`Signals` can replace `RXJS` in many cases, where the data is synchronous. Using signals for asynchronous state is trickier, but you can still use `toSignal` to use a observable in a template.

... more to come?
