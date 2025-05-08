import React, { useState } from 'react';
import { PageHeader, Card, Button, Input } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import { resources, resourceCategories, featuredResources } from '../../data/resourcesData';

const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory ? resource.category === selectedCategory : true;
    const matchesType = selectedType ? resource.type === selectedType : true;
    const matchesSearch = searchTerm 
      ? resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesCategory && matchesType && matchesSearch;
  });

  const resourceTypes = Array.from(new Set(resources.map(r => r.type)));

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Resources & Guides" 
        subtitle="Knowledge and tools to help you navigate the world of quick commerce"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' }
        ]}
        metaTitle={`${companyInformation.name} - Resources & Guides`}
        metaDescription="Explore guides, case studies, videos, and more to help you understand quick commerce and optimize your delivery operations."
      />
      
      {/* Featured Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8" style={{ color: theme.colors.brand.primary }}>
          Featured Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredResources.map((resource, index) => (
            <Card key={index} className="overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 bg-gray-100 h-48 md:h-auto flex-shrink-0">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-1">
                  <span className="inline-block px-2 py-1 text-xs rounded-full mr-2" style={{ backgroundColor: `${theme.colors.brand.primaryLight}30`, color: theme.colors.brand.primary }}>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                  <span className="text-xs text-brand-muted">{resource.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                  {resource.title}
                </h3>
                <p className="text-brand-muted mb-3 flex-grow">{resource.description}</p>
                <div className="mt-auto">
                  <p className="text-sm italic mb-3" style={{ color: theme.colors.brand.primary }}>
                    {resource.highlight}
                  </p>
                  <Button
                    variant="solid"
                    size="sm"
                    style={{ backgroundColor: theme.colors.brand.primary, color: theme.colors.brand.textLight }}
                  >
                    {resource.downloadUrl ? 'Download' : 'View Resource'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Resource Filters */}
      <div className="mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
            Browse Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.brand.text }}>
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
              >
                <option value="">All Categories</option>
                {resourceCategories.map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.brand.text }}>
                Resource Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
              >
                <option value="">All Types</option>
                {resourceTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.brand.text }}>
                Search
              </label>
              <Input
                type="text"
                placeholder="Search resources"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </Card>
      </div>
      
      {/* Resource List */}
      <div className="mb-12">
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <Card key={index} className="p-6 flex flex-col h-full">
                <div className="h-40 bg-gray-100 mb-4 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 text-xs rounded-full mr-2" style={{ backgroundColor: `${theme.colors.brand.primaryLight}30`, color: theme.colors.brand.primary }}>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                  <span className="text-xs text-brand-muted">{resource.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                  {resource.title}
                </h3>
                <p className="text-brand-muted mb-4 flex-grow">{resource.description}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-xs text-brand-muted">
                    {resource.fileSize && `${resource.fileSize}`}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    style={{ 
                      color: theme.colors.brand.primary, 
                      borderColor: theme.colors.brand.primary
                    }}
                  >
                    {resource.downloadUrl ? 'Download' : 'View Resource'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-8 text-center">
            <p className="text-brand-muted mb-4">No resources found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory('');
                setSelectedType('');
                setSearchTerm('');
              }}
              style={{ 
                color: theme.colors.brand.primary, 
                borderColor: theme.colors.brand.primary
              }}
            >
              Reset Filters
            </Button>
          </Card>
        )}
      </div>
      
      {/* Request Resource */}
      <Card className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
          Need a Specific Resource?
        </h2>
        <p className="text-brand-text max-w-2xl mx-auto mb-6">
          If you're looking for information on a specific topic related to quick commerce or delivery operations,
          let us know and our team will create resources to help.
        </p>
        <Button 
          variant="solid" 
          size="lg"
          style={{ backgroundColor: theme.colors.brand.primary, color: theme.colors.brand.textLight }}
        >
          Request a Resource
        </Button>
      </Card>
    </div>
  );
};

export default ResourcesPage; 