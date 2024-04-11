# React + TypeScript + Vite

## Adding Statsig

1. Create a ".env.local" file at the top level directory.
2. Add `VITE_STATSIG_CLIENT_SDK_KEY=<your-statsig-client-key>` to the ".env.local" file.
   ![image](https://github.com/mattvpham/vite-statsig-project/assets/2607918/5c2948ef-9d16-466d-ae4a-d16df4a8d12e)

4. Make sure you have a `cta_gate` gate created in Statsig:
   ![image](https://github.com/mattvpham/vite-statsig-project/assets/2607918/9bbf1dad-6c02-4450-9072-a0b6775a1a29)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
