# Microsoft Todo

## Setting up locally

Please refer to the document: [Setup](./docs/setup.md)

## Architecture

```
common
  | components
  | containers
  | store
modules
  | module
    | components
    | containers
    | store
```

## Naming convention

- Components: `./ComponentFolder/ComponentName.tsx`
- Containers: `./ContainerFolder/ContainerName.tsx`
- Store:
  - `./modules/module/store/index.ts`
  - `./modules/module/store/interfaces.ts`
  - `./modules/module/store/types.ts`
  - `./modules/module/store/services.ts`

## Environments

| Environments | Branch  | URL                                                                        |
| ------------ | ------- | -------------------------------------------------------------------------- |
| Staging      | develop | https://staging.ms-todo.changani.me |
| Production   | main    | https://ms-todo.changani.me                 |
