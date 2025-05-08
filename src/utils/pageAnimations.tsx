import React from 'react';
import { SectionReveal, StaggeredItems, Item } from '../components/ui';

interface AnimateSectionOptions {
  id?: string;
  className?: string;
  delay?: number;
  threshold?: number;
}

/**
 * Helper function to easily wrap page sections with animations
 */
export const animateSection = (children: React.ReactNode, options: AnimateSectionOptions = {}) => {
  const { id, className = '', delay = 0, threshold = 0.15 } = options;
  
  return (
    <SectionReveal 
      id={id}
      className={className}
      delay={delay}
      threshold={threshold}
      once={true}
    >
      {children}
    </SectionReveal>
  );
};

/**
 * Helper function to easily animate a list of items
 */
export const animateItems = (
  items: React.ReactNode[], 
  renderItem: (item: React.ReactNode, index: number) => React.ReactNode,
  className: string = '',
  threshold: number = 0.1
) => {
  return (
    <StaggeredItems className={className} threshold={threshold}>
      {items.map((item, index) => (
        <Item key={index} index={index}>
          {renderItem(item, index)}
        </Item>
      ))}
    </StaggeredItems>
  );
};

/**
 * Structure for page section animation
 */
export interface AnimatedSection {
  id?: string;
  content: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Helper function to easily animate an entire page with sections
 * @param sections Array of page sections to animate
 * @returns Array of animated sections
 */
export const animatePage = (sections: AnimatedSection[]) => {
  return sections.map((section, index) => {
    const delay = section.delay ?? index * 0.1;
    return animateSection(section.content, {
      id: section.id,
      className: section.className,
      delay,
      threshold: 0.15,
    });
  });
}; 