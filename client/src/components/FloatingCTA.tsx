import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { Link } from "wouter";

interface FloatingCTAProps {
  /** Text for the primary CTA button */
  ctaText?: string;
  /** URL for the primary CTA button */
  ctaHref?: string;
  /** Minimum scroll position (in pixels) before showing the CTA */
  showAfterScroll?: number;
}

export default function FloatingCTA({ 
  ctaText = "Fale com Especialista",
  ctaHref = "/contato",
  showAfterScroll = 400 
}: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the CTA in this session
    const dismissed = sessionStorage.getItem("floatingCTADismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldShow = scrollPosition > showAfterScroll;
      
      if (shouldShow !== isVisible) {
        setIsVisible(shouldShow);
        // Auto-expand after showing for 2 seconds
        if (shouldShow && !isExpanded) {
          setTimeout(() => setIsExpanded(true), 2000);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, isExpanded, showAfterScroll]);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem("floatingCTADismissed", "true");
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        >
          {/* Expanded info bubble */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="bg-card border border-card-border rounded-lg shadow-lg p-4 max-w-xs relative"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-2 right-2 p-1 rounded-full hover:bg-accent transition-colors"
                  aria-label="Fechar mensagem"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="pr-6">
                  <h3 className="font-semibold text-sm mb-2">Precisa de ajuda?</h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Fale com nossos especialistas e descubra como a OSP pode transformar sua gestão contábil.
                  </p>
                  <Link href={ctaHref}>
                    <Button size="sm" className="w-full" onClick={handleDismiss}>
                      {ctaText}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating button */}
          <div className="flex items-center gap-2">
            {!isExpanded && (
              <motion.button
                onClick={handleDismiss}
                className="bg-muted hover:bg-muted/80 rounded-full p-2 shadow-md transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Dispensar"
              >
                <X className="h-4 w-4" />
              </motion.button>
            )}
            
            <Link href={ctaHref} onClick={handleDismiss}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="rounded-full shadow-lg min-h-[56px] gap-2"
                  onClick={() => setIsExpanded(false)}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="hidden sm:inline">{ctaText}</span>
                  <span className="sm:hidden">Contato</span>
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
