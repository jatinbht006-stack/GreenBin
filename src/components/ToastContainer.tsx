import { AnimatePresence, motion } from 'motion/react';
import { X, CheckCircle, Info, AlertTriangle } from 'lucide-react';
import { Toast } from '../types';

interface ToastContainerProps {
  toasts: Toast[];
  onDismiss: (id: string) => void;
}

export default function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  return (
    <div 
      id="toast-viewport-root"
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none"
    >
      <AnimatePresence>
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isWarning = toast.type === 'warning';
          
          return (
            <motion.div
              id={`toast-card-${toast.id}`}
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-2xl border backdrop-blur-md ${
                isSuccess
                  ? 'bg-forest-medium/95 border-lime-accent/30 text-cream-text'
                  : isWarning
                  ? 'bg-amber-950/95 border-amber-500/30 text-amber-100'
                  : 'bg-stone-900/95 border-stone-700 text-cream-text'
              }`}
            >
              <div id={`toast-icon-container-${toast.id}`} className="mt-0.5 shrink-0">
                {isSuccess && <CheckCircle className="h-5 w-5 text-lime-accent animate-pulse" />}
                {isWarning && <AlertTriangle className="h-5 w-5 text-amber-400" />}
                {!isSuccess && !isWarning && <Info className="h-5 w-5 text-blue-400" />}
              </div>
              
              <div id={`toast-text-${toast.id}`} className="flex-1 text-sm font-medium leading-relaxed">
                {toast.message}
              </div>
              
              <button
                id={`toast-close-${toast.id}`}
                onClick={() => onDismiss(toast.id)}
                className="shrink-0 p-0.5 rounded-md text-cream-muted hover:text-cream-text hover:bg-forest-light/50 transition-colors"
                aria-label="Close alert"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
