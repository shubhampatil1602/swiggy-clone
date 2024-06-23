## Best Practices - Code Efficiency

### Lazy loading - to reduce the code bundle size, to build large scale performant application.

- Chunking
- Code Splitting
- Dynamic Bundling
- Dynamic Import
- On Demand Loading

```javascript
const ComponentName = lazy(() => import('./pathOfComponent'));
```

- It is important to wrap lazy loaded component inside `Suspense` else render of that component will be suspended and throw error, bcz react tries to render that component quickly but it takes some time to fetch the data.

```javascript
{
  path: '/route/:id',
    element: (
      <Suspense fallback={<Loading />}>
        <ComponentName />
      </Suspense>
    ),
},
```

### redux-toolkit uses immer.js behind the scenes.

- The job of immer is to create deep clone of your state in such a way :

```
Original State + Copy of that State = Calculated diff between both and returns copy.
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
