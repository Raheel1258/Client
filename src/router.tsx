import { createBrowserRouter } from 'react-router';
import ErrorBoundary from './errors/ErrorBoundary';
import { LoadingFallback } from './Components/ui/LoadingFallback';
import { Suspense } from 'react';
import HomePage from './view/home';
import MainLayout from './view/layout/main-layout';

export const router = createBrowserRouter([
  {
    path: '',
    Component: MainLayout,
    ErrorBoundary,
    HydrateFallback: () => (
      <Suspense fallback={<LoadingFallback />}>
        <LoadingFallback />
      </Suspense>
    ),
    children: [{ path: '/', element: <HomePage /> }],
  },
]);
