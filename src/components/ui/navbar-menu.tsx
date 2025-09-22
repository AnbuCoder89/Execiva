"use client";
import React from "react";
import { motion, type Transition } from "framer-motion";
import { ChevronDown } from "lucide-react";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

interface MegaMenuCategory {
  id: string;
  name: string;
  description?: string;
  items: {
    title: string;
    href: string;
    description?: string;
    featured?: boolean;
  }[];
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode | MegaMenuCategory[];
}) => {
  const hasChildren = !!children;
  const isOpen = active === item;

  const isMegaMenu = Array.isArray(children);
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (isMegaMenu && Array.isArray(children) && children.length > 0) {
      setActiveCategory(children[0].id);
    }
  }, [isMegaMenu, children]);

  const selectedCategory =
    isMegaMenu && Array.isArray(children)
      ? children.find((cat) => cat.id === activeCategory)
      : null;

  return (
    <div
      onMouseEnter={() => hasChildren && setActive(item)}
      className="relative"
    >
      <motion.div
        transition={{ duration: 0.3 }}
        className="flex items-center space-x-1 cursor-pointer text-black hover:opacity-80"
      >
        <span>{item}</span>
        {hasChildren && (
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} />
          </motion.span>
        )}
      </motion.div>

      {hasChildren && active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {isOpen && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white backdrop-blur-sm overflow-hidden border border-gray-200 shadow-xl text-black rounded-2xl"
              >
                <motion.div layout className="p-4">
                  {isMegaMenu && Array.isArray(children) ? (
                    <div className="w-[700px] grid grid-cols-[200px,1fr] gap-6">
                      {/* Left: category names */}
                      <div className="flex flex-col space-y-1 border-r border-gray-200 pr-3">
                        {children.map((cat) => (
                          <button
                            key={cat.id}
                            onMouseEnter={() => setActiveCategory(cat.id)}
                            className={`text-left px-3 py-2 rounded-md transition-colors ${
                              cat.id === activeCategory
                                ? "bg-gray-100 font-semibold"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            {cat.name}
                          </button>
                        ))}
                      </div>
                      {/* Right: dynamic items */}
                      <motion.div
                        key={selectedCategory?.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-2 gap-4"
                      >
                        {selectedCategory?.items.map((it) => (
                          <a
                            key={it.href}
                            href={it.href}
                            className="block rounded-lg p-3 hover:bg-gray-50"
                          >
                            <h4 className="text-sm font-semibold text-black">
                              {it.title}
                            </h4>
                            {it.description && (
                              <p className="text-xs text-gray-600">
                                {it.description}
                              </p>
                            )}
                          </a>
                        ))}
                      </motion.div>
                    </div>
                  ) : (
                    <div className="w-max">{children}</div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className = "",
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={`relative border border-transparent bg-transparent flex justify-center space-x-16 px-8 py-6 ${className}`}
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, className = "", ...rest }: any) => {
  return (
    <a
      {...rest}
      className={`text-black hover:opacity-80 transition-opacity ${className}`}
    >
      {children}
    </a>
  );
};
