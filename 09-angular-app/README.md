# Tour of Pranksters

## Introduction

This is a Tour of Heroes app (Angular's tutorial application) with some bugs. This project has been created to emphasize the power of well configured tools (Typescript, ESLint and Angular).

## Getting started

```sh
nvm install
npm install
npm start
```

## How to play

If you build this project and run it straight away, you will face minor and major bugs while not having any single error or warning in your codebase.

To fix these bugs, copy `tsconfig.strict.json` into `tsconfig.json` and remove `"**/*"` in `ignorePatterns` properties from `.eslintrc.json`. Then Angular, ESLint and Typescript will guide you to the victory.
