/**
 * Page Loader Component
 * Fallback component for lazy-loaded routes
 */

export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          {/* Spinning circle */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
        <p className="text-sm text-muted-foreground animate-pulse">
          Carregando...
        </p>
      </div>
    </div>
  );
}
