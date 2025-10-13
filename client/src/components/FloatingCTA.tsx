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
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, showAfterScroll]);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem("floatingCTADismissed", "true");
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        >
          {/* Dismiss button */}
          <motion.button
            onClick={handleDismiss}
            className="bg-muted hover:bg-muted/80 rounded-full p-2 shadow-md transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Dispensar"
          >
            <X className="h-4 w-4" />
          </motion.button>
          
          {/* Floating CTA button */}
          <Link href={ctaHref} onClick={handleDismiss}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="rounded-full shadow-lg min-h-[56px] gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="hidden sm:inline">{ctaText}</span>
                <span className="sm:hidden">Contato</span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
