import { Loader2 } from 'lucide-react';

export const LoadingFallback = () => {
  return (
    <div className="flex w-screen h-screen flex-col items-center justify-center space-y-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
};
