import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import QueryProvider from '@/context/QueryProvider.tsx';
import { RouterProvider } from 'react-router';
import { Toaster } from '@/Components/ui/sonner';
import { router } from './router';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <Toaster theme="light" richColors duration={2000} closeButton />
      <RouterProvider router={router} />
    </QueryProvider>
  </StrictMode>,
);
