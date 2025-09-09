import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

interface ServiceHeroProps {
  title: string;
  category: string;
  detailedDescription: string;
  image: string;
  onRequestDemo: () => void;
  onBackToServices: () => void;
}

            className="px-6 py-3 sm:px-8 sm:py-4 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
          >
            Request a demo
          </Button>

          <Button
            variant="ghost"
            size="lg"
            icon={ArrowLeft}
            iconPosition="left"
            onClick={onBackToServices}
            className="text-gray-200 hover:text-white w-full sm:w-auto"
          >
            Back to Services
          </Button>
        </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
        variants={itemVariants}
      >
        <div className="w-10 h-10 flex items-center justify-center border border-white/60 rounded-full">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ServiceHero;
