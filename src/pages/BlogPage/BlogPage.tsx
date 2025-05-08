import React, { useState } from 'react';
import { PageHeader, Card, Button } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import blogPosts from '../../data/blogPost';
import SEOHead from '../../components/seo/SEOHead';
// Categories for filtering
const categories = ['All', 'Shopping Tips', 'Budget Tips', 'Sustainability', 'Company News'];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <SEOHead 
        title="Blog"
        description="Stay updated with the latest news, shopping tips, and articles about our 10-minute grocery delivery service."
        keywords="blog, news, shopping tips, grocery delivery, 10-minute delivery, company updates"
      />
    
      <div className="container mx-auto px-4 py-8">
        <PageHeader 
          title="Our Blog" 
          subtitle="Latest news, tips, and updates from our team"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' }
          ]}
          metaTitle={`${companyInformation.name} - Blog`}
          metaDescription="Stay updated with the latest news, shopping tips, and company updates from our team."
        />
        
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === category 
                  ? 'bg-brand-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Featured post */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-2" 
                      style={{ backgroundColor: `${theme.colors.brand.primaryLight}30`, color: theme.colors.brand.primary }}>
                      {filteredPosts[0].category}
                    </span>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: theme.colors.brand.text }}>
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-brand-muted mb-4">
                      {filteredPosts[0].excerpt}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-brand-muted">
                      <span>{filteredPosts[0].date}</span>
                      <span className="mx-2">•</span>
                      <span>By {filteredPosts[0].author}</span>
                    </div>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
        
        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.slice(1).map(post => (
            <Card key={post.id} className="overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-2" 
                  style={{ backgroundColor: `${theme.colors.brand.primaryLight}30`, color: theme.colors.brand.primary }}>
                  {post.category}
                </span>
                <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.brand.text }}>
                  {post.title}
                </h3>
                <p className="text-brand-muted mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="text-sm text-brand-muted">
                    <span>{post.date}</span>
                  </div>
                  <Button variant="link" size="sm">Read More</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Subscription card */}
        <div className="mt-16">
          <Card className="p-8 text-center" style={{ backgroundColor: `${theme.colors.brand.primaryLight}10` }}>
            <h2 className="text-2xl font-bold mb-3" style={{ color: theme.colors.brand.text }}>Stay Updated</h2>
            <p className="text-brand-muted mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter to get the latest blog posts, special offers, and updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                style={{ borderColor: theme.colors.brand.border }}
              />
              <Button variant="solid" size="md">Subscribe</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BlogPage; 