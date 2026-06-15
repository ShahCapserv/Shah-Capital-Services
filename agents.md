# Agent Context & Styling Roadmap

## Styling Architecture
Currently, the styling of the application is a hybrid setup:
1. **Bootstrap v5**: Loaded via local CSS (`public/assets/css/bootstrap.min.css`) and CDN JavaScript tags in `src/routes/__root.tsx`.
2. **Custom Template Styles**: Loaded from 20+ stylesheets under `public/assets/css/module-css/`.
3. **Tailwind CSS v4**: Listed in `package.json` dependencies but **not currently configured or compiled** in the Vite build pipeline.

### Critical Note on CSS Imports
* **Do not import CSS files directly** (e.g. `import '../global.css'`) in React files, as doing so with the current large template setup conflicts with the React Compiler's Hot Module Replacement (HMR) and triggers `useMemoCache` / invalid hook call errors in development.
* All styles are loaded via standard `<link>` elements utilizing Vite's `?url` asset import (e.g. `import globalCss from '../global.css?url'`).

---

## Future Roadmap: Shift to Tailwind CSS
We plan to migrate the styling of the entire application to **Tailwind CSS**.
* **Do not remove** the `tailwindcss` dependency from `package.json`.
* **Standard Implementation Policy**: Whenever an agent makes changes or implements new elements in the project code, **always attempt to implement Tailwind utility classes first** instead of Bootstrap/custom CSS. If compiling/using Tailwind classes is currently blocked or causes layout-breaking changes, you may resort to using the existing Bootstrap/custom classes.
* When we shift to Tailwind in the future:
  1. We will need to configure the Tailwind compiler in `vite.config.ts` (using `@tailwindcss/vite` or equivalent plugin).
  2. We will progressively replace the custom template classes and Bootstrap classes inside React/TSX files with Tailwind utility classes.
  3. Once the migration is complete, we can safely remove the static `/public/assets/css` directory and Bootstrap scripts.
