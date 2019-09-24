
# DevFest-Siberia

DevFest Siberia site

## Available scripts

```bash
# Lint only styles
yarn lint:styles
# Lint only scripts
yarn lint:scripts
# Lint all sources
yarn lint
# Run tests with Jest
yarn jest
# Run type checking
yarn typecheck
# Run lint, tests and build
yarn test
# Generate docs for TypeScript sources
yarn build:docs
# Start Storybook
yarn start:storybook
# Build standalone Storybook bundle
yarn build:storybook
# Start development server
yarn start
# Build our bundle for production
yarn build
# Render static pages
yarn render
# Serve files from `build` directory
yarn serve
```

## Environment variables

To be able to build this app, you should provide some environment variables:

```bash
SITE_URL=xxx # for meta info
BASE_URL=xxx # build for subdirectory; <base href=$> and etc.
API_URL=xxx
YANDEX_METRIKA_ID=XXX
GOOGLE_ANALYTICS_ID=XXX
GOOGLE_MAPS_KEY=XXX
```

Optional variables:

```bash
PROXY_API_URI='' # valid URI; not set by default
DISABLE_BROWSER_SYNC=false # boolean; `false` by default
DISABLE_HISTORY_FALLBACK=false # boolean; `false` by default
```

You can create `.env` in project root with this variables.

> This project generated with [generator-trigen-app](https://www.npmjs.com/package/generator-trigen-app)
