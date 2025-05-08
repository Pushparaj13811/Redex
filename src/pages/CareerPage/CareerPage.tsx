import React, { useState } from 'react';
import { PageHeader, Card, Button, Input } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import { jobOpenings, benefits, departments, offices } from '../../data/careerData';

const CareerPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment ? job.department === selectedDepartment : true;
    const matchesSearch = searchTerm 
      ? job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Join Our Team" 
        subtitle="Help us revolutionize how people shop with 10-minute delivery"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' }
        ]}
        metaTitle={`${companyInformation.name} - Careers`}
        metaDescription="Join the Redex team and be part of Nepal's fastest-growing quick commerce platform. Explore job opportunities across engineering, operations, logistics, and more."
      />
      
      {/* Mission and Culture */}
      <div className="mb-12">
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
            Our Mission
          </h2>
          <p className="text-brand-text mb-4">
            At Redex, we're revolutionizing how people shop for essentials by delivering orders in just 10 minutes.
            We're building Nepal's leading quick commerce platform, combining cutting-edge technology, hyperlocal dark stores, 
            and an efficient delivery network to make this possible.
          </p>
          <p className="text-brand-text mb-4">
            Our team is made up of passionate individuals who thrive on challenges and are excited about transforming the retail landscape.
            We're looking for talented people who share our vision and want to make a meaningful impact on customers' daily lives.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: `${theme.colors.brand.primaryLight}20` }}>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.brand.primary }}>Fast-paced Environment</h3>
              <p className="text-brand-muted">We move quickly, iterate rapidly, and are constantly improving our service.</p>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: `${theme.colors.brand.primaryLight}20` }}>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.brand.primary }}>Innovative Culture</h3>
              <p className="text-brand-muted">We encourage fresh ideas and creative solutions to complex problems.</p>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: `${theme.colors.brand.primaryLight}20` }}>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.brand.primary }}>Collaborative Teams</h3>
              <p className="text-brand-muted">We work across functions to achieve our shared goal of delighting customers.</p>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Benefits */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
          Why Work With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full p-4 mb-4" style={{ color: theme.colors.brand.primary, backgroundColor: `${theme.colors.brand.primaryLight}30` }}>
                {React.createElement(benefit.icon)}
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: theme.colors.brand.text }}>
                {benefit.title}
              </h3>
              <p className="text-brand-muted">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Departments */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
          Our Teams
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((department, index) => (
            <Card key={index} className="p-6 overflow-hidden">
              <div className="relative h-48 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.brand.primary }}>
                {department.name}
              </h3>
              <p className="text-brand-muted mb-4">{department.description}</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSelectedDepartment(department.name)}
                style={{ 
                  color: theme.colors.brand.primary, 
                  borderColor: theme.colors.brand.primary
                }}
                className="mt-auto"
              >
                View Open Positions
              </Button>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Open Positions */}
      <div className="mb-12">
        <Card className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-bold" style={{ color: theme.colors.brand.primary }}>
              Open Positions
            </h2>
            <div className="flex mt-4 md:mt-0">
              <div className="mr-4">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-3 py-2 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="">All Departments</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept.name}>{dept.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Search positions"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {filteredJobs.length > 0 ? (
            <div className="space-y-4">
              {filteredJobs.map((job, index) => (
                <div key={index} className="border-b border-brand-border pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className="text-lg font-semibold" style={{ color: theme.colors.brand.text }}>
                      {job.title}
                    </h3>
                    <div className="flex items-center mt-2 md:mt-0">
                      <span className="inline-block px-2 py-1 text-xs rounded-full mr-2" style={{ backgroundColor: `${theme.colors.brand.primaryLight}30`, color: theme.colors.brand.primary }}>
                        {job.department}
                      </span>
                      <span className="inline-block px-2 py-1 text-xs rounded-full mr-2 bg-gray-100 text-gray-700">
                        {job.location}
                      </span>
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-brand-muted mb-3">{job.description}</p>
                  <div className="flex justify-end">
                    <Button
                      variant="solid"
                      size="sm"
                      style={{ backgroundColor: theme.colors.brand.primary, color: theme.colors.brand.textLight }}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center">
              <p className="text-brand-muted mb-4">No positions found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedDepartment('');
                  setSearchTerm('');
                }}
                style={{ 
                  color: theme.colors.brand.primary, 
                  borderColor: theme.colors.brand.primary
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </Card>
      </div>
      
      {/* Locations */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
          Our Offices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((office, index) => (
            <Card key={index} className="p-6 flex flex-col">
              <div className="relative h-40 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-1" style={{ color: theme.colors.brand.text }}>
                {office.city}
              </h3>
              <p className="text-brand-muted mb-3">{office.address}</p>
            </Card>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <Card className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
          Don't See a Perfect Fit?
        </h2>
        <p className="text-brand-text max-w-2xl mx-auto mb-6">
          We're always looking for talented individuals to join our team. If you don't see a position that matches your skills,
          send us your resume and we'll keep it on file for future opportunities.
        </p>
        <Button 
          variant="solid" 
          size="lg"
          style={{ backgroundColor: theme.colors.brand.primary, color: theme.colors.brand.textLight }}
        >
          Send Your Resume
        </Button>
      </Card>
    </div>
  );
};

export default CareerPage; 