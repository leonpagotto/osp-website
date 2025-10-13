/**
 * Lightweight loading skeleton for below-fold sections
 * Prevents layout shift while lazy sections load
 */
export default function SectionLoader() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="h-10 bg-muted rounded-lg animate-pulse mb-4 mx-auto max-w-md"></div>
          <div className="h-6 bg-muted rounded-lg animate-pulse mx-auto max-w-2xl"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-48 bg-muted rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
