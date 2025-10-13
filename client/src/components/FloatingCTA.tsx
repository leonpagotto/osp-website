import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface FloatingCTAProps {
  /** Minimum scroll position (in pixels) before showing the CTA */
  showAfterScroll?: number;
}

export default function FloatingCTA({ 
  showAfterScroll = 400 
}: FloatingCTAProps) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        >
          {/* Floating WhatsApp button */}
          <a 
            href="https://wa.me/5519993216091?text=Olá!%20Vim%20do%20blog%20e%20gostaria%20de%20falar%20com%20um%20especialista."
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="rounded-full shadow-lg min-h-[56px] gap-2 shadow-primary/20"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="hidden sm:inline">{t('blogPost.defaultCTA.button')}</span>
              </Button>
            </motion.div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
