import React from 'react';
import { PageHeader, Card, Flex } from '../../components/ui';
import companyInformation from '../../constants/companyInfo';
import theme from '../../config/theme';
import { appFeatures, howItWorks } from '../../constants/MobileFeature';

const MobilePage: React.FC = () => {

    return (
        <div className="container mx-auto px-4 py-8">
            <PageHeader
                title="Mobile App"
                subtitle="Shop smarter and faster with our mobile application"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Mobile App', href: '/mobile' }
                ]}
                metaTitle={`${companyInformation.name} - Mobile App`}
                metaDescription="Download our mobile app to shop for groceries and essentials with easy ordering, fast delivery, and exclusive app-only deals."
            />

            {/* Hero section with app download */}
            <div className="mb-16">
                <Card className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: theme.colors.brand.primary }}>
                                Download the {companyInformation.name} App
                            </h2>
                            <p className="text-brand-text mb-6">
                                Experience the convenience of shopping for groceries and essentials from your phone.
                                Our app offers a seamless shopping experience with fast delivery and exclusive deals.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {companyInformation.appDownload.ios && (
                                    <a href={companyInformation.appDownload.ios.url} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={companyInformation.appDownload.ios.image}
                                            alt={companyInformation.appDownload.ios.alt}
                                            className="h-12"
                                        />
                                    </a>
                                )}
                                {companyInformation.appDownload.android && (
                                    <a href={companyInformation.appDownload.android.url} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={companyInformation.appDownload.android.image}
                                            alt={companyInformation.appDownload.android.alt}
                                            className="h-12"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="md:p-6 flex justify-center items-center bg-gray-50">
                            <img
                                src="/assets/mobile-app-showcase.png"
                                alt="Mobile app showcase"
                                className="max-h-96"
                            />
                        </div>
                    </div>
                </Card>
            </div>

            {/* App features */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
                    App Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {appFeatures.map((feature, index) => (
                        <Card key={index} className="p-6 flex flex-col h-full">
                            <div className="mb-4" style={{ color: theme.colors.brand.primary }}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                                {feature.title}
                            </h3>
                            <p className="text-brand-muted flex-grow">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>

            {/* How it works */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
                    How It Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {howItWorks.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Step number */}
                            <div
                                className="absolute -top-5 -left-3 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                                style={{
                                    backgroundColor: theme.colors.brand.primary,
                                    color: 'white'
                                }}
                            >
                                {step.step}
                            </div>
                            <Card className="p-6 pt-8 h-full">
                                <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.brand.text }}>
                                    {step.title}
                                </h3>
                                <p className="text-brand-muted">
                                    {step.description}
                                </p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* App screenshots carousel */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
                    App Screenshots
                </h2>
                <div className="flex overflow-x-auto pb-4 space-x-4">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <div key={num} className="flex-none w-64 h-96">
                            <img
                                src={`/assets/app-screenshot-${num}.png`}
                                alt={`App screenshot ${num}`}
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: theme.colors.brand.primary }}>
                    What Our Users Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            name: 'Aarav Sharma',
                            rating: 5,
                            review: 'This app has transformed how I shop for groceries. The delivery is incredibly fast, and the interface is so intuitive. Highly recommend!',
                        },
                        {
                            name: 'Priya Patel',
                            rating: 5,
                            review: 'I love the exclusive app discounts! The order tracking feature is fantastic - I can see exactly when my groceries will arrive.',
                        },
                        {
                            name: 'Rajesh Gurung',
                            rating: 4,
                            review: 'Great selection of products and super convenient. The only thing I\'d improve is having more delivery time slots during peak hours.',
                        },
                    ].map((testimonial, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex mb-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        height="16"
                                        fill={i < testimonial.rating ? theme.colors.brand.warning : "#D1D5DB"}
                                        className="mr-1"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-brand-text mb-4 italic">"{testimonial.review}"</p>
                            <p className="text-brand-muted font-medium">{testimonial.name}</p>
                        </Card>
                    ))}
                </div>
            </div>

            {/* CTA download section */}
            <div className="mb-12">
                <Card className="p-8 text-center" style={{ backgroundColor: `${theme.colors.brand.primaryLight}10` }}>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: theme.colors.brand.primary }}>
                        Ready to Start Shopping Smarter?
                    </h2>
                    <p className="text-brand-text mb-6 max-w-xl mx-auto">
                        Download the {companyInformation.name} app today and experience the convenience of having
                        groceries and essentials delivered to your doorstep in minutes.
                    </p>
                    <Flex justifyContent="center" className="flex-wrap gap-4">
                        {companyInformation.appDownload.ios && (
                            <a href={companyInformation.appDownload.ios.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={companyInformation.appDownload.ios.image}
                                    alt={companyInformation.appDownload.ios.alt}
                                    className="h-12"
                                />
                            </a>
                        )}
                        {companyInformation.appDownload.android && (
                            <a href={companyInformation.appDownload.android.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={companyInformation.appDownload.android.image}
                                    alt={companyInformation.appDownload.android.alt}
                                    className="h-12"
                                />
                            </a>
                        )}
                    </Flex>
                </Card>
            </div>
        </div>
    );
};

export default MobilePage; 