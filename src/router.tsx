import {
  createRouter as createTanStackRouter,
  ErrorComponent,
} from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadDelay: 100,
    defaultPreloadStaleTime: 30_000,
    defaultStaleTime: 10_000,
    // Shown when an error bubbles to the router
    defaultErrorComponent: ({ error, reset }) => (
      <>
        <ErrorComponent error={error} />
        <button onClick={() => reset()}>Try Again</button>
      </>
    ),
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
