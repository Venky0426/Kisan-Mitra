import { useState } from 'react';
import { Mic, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating Voice Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={toggleListening}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg relative"
        >
          <Mic className="w-6 h-6 text-white" />
          
          {/* Sound wave animation */}
          {isListening && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full bg-green-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-green-400"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
              />
            </>
          )}
        </Button>
      </motion.div>

      {/* Voice Assistant Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-28 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-green-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mic className="w-5 h-5 text-white" />
                <span className="text-white">Voice Assistant</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-600"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="p-6">
              {isListening ? (
                <div className="text-center space-y-4">
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-green-500 rounded-full"
                        animate={{
                          height: [20, 40, 20],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">Listening...</p>
                  <p className="text-gray-500 text-xs">Speak now in your preferred language</p>
                </div>
              ) : (
                <div className="text-center space-y-3">
                  <p className="text-gray-600 text-sm">Click the microphone to start</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">Try asking:</p>
                    <ul className="text-xs text-gray-500 mt-2 space-y-1 text-left">
                      <li>• "What is the weather today?"</li>
                      <li>• "Show me wheat prices"</li>
                      <li>• "Diagnose my crop disease"</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
