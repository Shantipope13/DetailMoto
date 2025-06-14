import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../ScrollReveal';
import { StaggeredList } from '../StaggeredList';
import { StaggeredGrid } from '../StaggeredGrid';
import { InteractiveButton } from '../InteractiveButton';
import { HoverCard } from '../HoverCard';
import { FocusIndicator } from '../FocusIndicator';
import { PulseLoader, SkeletonLoader, SpinnerLoader } from '../LoadingStates';
import { AccessibleModal } from '../AccessibleModal';

// Example data
const listItems = [
  { id: 1, title: "Advanced React Patterns", description: "Learn modern React development techniques" },
  { id: 2, title: "Performance Optimization", description: "Make your apps lightning fast" },
  { id: 3, title: "State Management", description: "Master complex application state" },
  { id: 4, title: "Testing Strategies", description: "Build confidence with comprehensive tests" }
];

const gridItems = [
  { id: 1, title: "Card 1", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop" },
  { id: 2, title: "Card 2", image: "https://images.unsplash.com/photo-1497436072909-f5e4be1dffea?w=300&h=200&fit=crop" },
  { id: 3, title: "Card 3", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop" },
  { id: 4, title: "Card 4", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop" },
  { id: 5, title: "Card 5", image: "https://images.unsplash.com/photo-1545670723-196ed0954986?w=300&h=200&fit=crop" },
  { id: 6, title: "Card 6", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" }
];

export const AnimationExamples = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState('scroll');

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  const tabs = [
    { id: 'scroll', label: 'Scroll Animations' },
    { id: 'stagger', label: 'Staggered Animations' },
    { id: 'interactions', label: 'Micro-Interactions' },
    { id: 'loading', label: 'Loading States' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-5xl font-bold text-center mb-4">
            Framer Motion Examples
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Interactive demonstrations of advanced animation techniques
          </p>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-colors relative ${
                    selectedTab === tab.id
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {selectedTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-orange rounded-md"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {selectedTab === 'scroll' && (
              <div className="space-y-16">
                <ScrollReveal>
                  <section className="bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Scroll-Triggered Animations</h2>
                    <p className="text-gray-600 mb-8">
                      These elements animate as they come into view while scrolling.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[1, 2, 3].map((item, index) => (
                        <ScrollReveal key={item} delay={index * 0.1}>
                          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Feature {item}</h3>
                            <p>This card animates into view with a {index * 100}ms delay.</p>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section className="bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Parallax Effect</h2>
                    <div className="h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-white text-center"
                      >
                        <h3 className="text-2xl font-bold mb-2">Parallax Content</h3>
                        <p>This content has a different scroll speed</p>
                      </motion.div>
                    </div>
                  </section>
                </ScrollReveal>
              </div>
            )}

            {selectedTab === 'stagger' && (
              <div className="space-y-16">
                <ScrollReveal>
                  <section className="bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Staggered List Animation</h2>
                    <StaggeredList
                      items={listItems}
                      renderItem={(item) => (
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-orange">
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      )}
                      staggerDelay={0.1}
                    />
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section className="bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Staggered Grid Animation</h2>
                    <StaggeredGrid
                      items={gridItems}
                      renderItem={(item) => (
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="font-bold">{item.title}</h3>
                          </div>
                        </div>
                      )}
                      columns={3}
                      staggerDelay={0.05}
                      animationDirection="scale"
                    />
                  </section>
                </ScrollReveal>
              </div>
            )}

            {selectedTab === 'interactions' && (
              <div className="space-y-16">
                <ScrollReveal>
                  <section className="bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Interactive Buttons</h2>
                    <div className="flex flex-wrap gap-4 mb-8">
                      <InteractiveButton variant="primary" size="lg">
                        Primary Button
                      </InteractiveButton>
                      <InteractiveButton variant="secondary" size="lg">
                        Secondary Button
                      </InteractiveButton>
                      <InteractiveButton variant="outline" size="lg">
                        Outline Button
                      </InteractiveButton>
                      <InteractiveButton 
                        variant="primary" 
                        size="lg" 
                        loading={isLoading}
                        onClick={handleLoadingDemo}
                      >
                        Loading Demo
                      </InteractiveButton>
                    </div>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section className="bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Hover Cards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {gridItems.slice(0, 3).map((item) => (
                        <HoverCard
                          key={item.id}
                          className="rounded-lg overflow-hidden"
                          hoverContent={
                            <div>
                              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                              <p>Hover content appears with smooth animation</p>
                            </div>
                          }
                        >
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="font-bold">{item.title}</h3>
                          </div>
                        </HoverCard>
                      ))}
                    </div>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section className="bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Focus Indicators</h2>
                    <div className="space-y-4">
                      <FocusIndicator>
                        <input
                          type="text"
                          placeholder="Focus me to see the indicator"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                        />
                      </FocusIndicator>
                      <FocusIndicator>
                        <button className="bg-primary-orange text-white px-6 py-3 rounded-lg focus:outline-none">
                          Focusable Button
                        </button>
                      </FocusIndicator>
                    </div>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section className="bg-white rounded-xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Modal Animation</h2>
                    <InteractiveButton
                      variant="primary"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Open Modal
                    </InteractiveButton>
                    
                    <AccessibleModal
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                      title="Animated Modal"
                    >
                      <p className="mb-4">
                        This modal animates in and out smoothly with proper focus management.
                      </p>
                      <InteractiveButton
                        variant="outline"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Close Modal
                      </InteractiveButton>
                    </AccessibleModal>
                  </section>
                </ScrollReveal>
              </div>
            )}

            {selectedTab === 'loading' && (
              <ScrollReveal>
                <section className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-6">Loading States</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-4">Pulse Loader</h3>
                      <div className="flex justify-center space-x-4 mb-4">
                        <PulseLoader size="sm" />
                        <PulseLoader size="md" />
                        <PulseLoader size="lg" />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-4">Spinner Loader</h3>
                      <div className="flex justify-center space-x-4 mb-4">
                        <SpinnerLoader size="sm" />
                        <SpinnerLoader size="md" />
                        <SpinnerLoader size="lg" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Skeleton Loader</h3>
                      <SkeletonLoader lines={3} animated={true} />
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Loading Button Demo</h3>
                    <InteractiveButton
                      variant="primary"
                      loading={isLoading}
                      onClick={handleLoadingDemo}
                    >
                      {isLoading ? 'Loading...' : 'Start Loading Demo'}
                    </InteractiveButton>
                  </div>
                </section>
              </ScrollReveal>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16 p-8 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to implement these animations?</h2>
            <p className="text-gray-600 mb-6">
              Check out the comprehensive guide above for detailed implementation instructions.
            </p>
            <InteractiveButton variant="primary" size="lg">
              Get Started
            </InteractiveButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};