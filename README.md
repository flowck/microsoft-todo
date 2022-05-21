# MicrosoftTodo

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=flowck_microsoft-todo&metric=alert_status)](https://sonarcloud.io/dashboard?id=flowck_microsoft-todo)
[![CI](https://github.com/flowck/microsoft-todo/actions/workflows/ci.yml/badge.svg)](https://github.com/flowck/microsoft-todo/actions/workflows/ci.yml)
[![Deploy to Staging](https://github.com/flowck/microsoft-todo/actions/workflows/staging-deployment.yml/badge.svg)](https://github.com/flowck/microsoft-todo/actions/workflows/staging-deployment.yml)
[![Deploy to Production](https://github.com/flowck/microsoft-todo/actions/workflows/production-deployment.yml/badge.svg)](https://github.com/flowck/microsoft-todo/actions/workflows/production-deployment.yml)

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

| Environments | Branch  | URL                                 |
| ------------ | ------- | ----------------------------------- |
| Staging      | develop | https://staging.ms-todo.changani.me |
| Production   | main    | https://ms-todo.changani.me         |

## Stack

- [ ] React
- [ ] Typescript
- [ ] Redux
- [ ] Redux-Persist
- [ ] Redux-Logger
- [ ] Styled-Components
