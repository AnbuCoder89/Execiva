/**
 * UI Components Index
 * 
 * Only stable, commonly used components should be exported from here.
 * For other components, import them directly from their files.
 * 
 * Available exports:
 * - Button: A flexible button component with variants and states
 * - BackButton: Navigation button for going back
 * - InfiniteScroll: Component for infinite scrolling functionality
 * - StatsSection: Component for displaying statistics in a section
 */

export { default as Button } from './Button';
export { default as BackButton } from './BackButton';
export { default as StatsSection } from './StatsSection';

// Note: Other components like card-hover-effect, parallax-scroll, etc. should be imported directly
// from their respective files as they are considered implementation details or specialized components.