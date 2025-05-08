import { useState } from 'react';
import { Link } from 'react-router-dom';
import companyInformation from '../../constants/companyInfo';

/**
 * Footer component
 * 
 * Site footer with copyright, links, categories and social media
 */
const Footer = () => {
    const [showAllCategories, setShowAllCategories] = useState(false);

    // Display a limited number of categories by default
    const displayedCategories = showAllCategories
        ? companyInformation.productCategories
        : companyInformation.productCategories.slice(0, 10);

    return (
        <footer className="bg-brand-surface border-t border-brand-border pt-10">
            <div className="container mx-auto px-4">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Column 1: About and App Download */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-40 rounded-full bg-brand-textLight flex items-center justify-center">
                                <img src={companyInformation.logo2} alt={companyInformation.name} className="w-full h-full object-contain" />
                            </div>
                        </div>

                        <p className="text-sm text-brand-muted mb-6">
                            {companyInformation.description}
                        </p>

                        {/* App download */}
                        <div className="mb-6">
                            <p className="text-brand-text font-medium mb-3">Download App</p>
                            <div className="flex space-x-2">
                                {companyInformation.appDownload.ios && (
                                    <a
                                        href={companyInformation.appDownload.ios.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-opacity hover:opacity-80"
                                    >
                                        <img
                                            src={companyInformation.appDownload.ios.image}
                                            alt={companyInformation.appDownload.ios.alt}
                                            className="h-10"
                                        />
                                    </a>
                                )}

                                {companyInformation.appDownload.android && (
                                    <a
                                        href={companyInformation.appDownload.android.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-opacity hover:opacity-80"
                                    >
                                        <img
                                            src={companyInformation.appDownload.android.image}
                                            alt={companyInformation.appDownload.android.alt}
                                            className="h-10"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Social media links */}
                        <div className="flex space-x-4 text-brand-muted">
                            {companyInformation.socialMedia.facebook && (
                                <a href={companyInformation.socialMedia.facebook} className="hover:text-brand-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            )}

                            {companyInformation.socialMedia.twitter && (
                                <a href={companyInformation.socialMedia.twitter} className="hover:text-brand-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            )}

                            {companyInformation.socialMedia.instagram && (
                                <a href={companyInformation.socialMedia.instagram} className="hover:text-brand-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            )}

                            {companyInformation.socialMedia.linkedin && (
                                <a href={companyInformation.socialMedia.linkedin} className="hover:text-brand-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                                    </svg>
                                </a>
                            )}

                            {companyInformation.socialMedia.youtube && (
                                <a href={companyInformation.socialMedia.youtube} className="hover:text-brand-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                    <span className="sr-only">YouTube</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Column 2: Useful Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-brand-text mb-4">Useful Links</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {companyInformation.usefulLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.url}
                                    className="text-sm text-brand-muted hover:text-brand-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {companyInformation.legalLinks.map((link, index) => (
                                <Link
                                    key={`legal-${index}`}
                                    to={link.url}
                                    className="text-sm text-brand-muted hover:text-brand-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {companyInformation.partnerLinks.map((link, index) => (
                                <Link
                                    key={`partner-${index}`}
                                    to={link.url}
                                    className="text-sm text-brand-muted hover:text-brand-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 3-4: Categories */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-brand-text">Categories</h3>
                            <button
                                className="text-sm text-brand-primary hover:underline"
                                onClick={() => setShowAllCategories(!showAllCategories)}
                            >
                                {showAllCategories ? 'Show Less' : 'See All'}
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            {displayedCategories.map((category, index) => (
                                <Link
                                    key={index}
                                    to={category.url}
                                    className="text-sm text-brand-muted hover:text-brand-primary transition-colors"
                                >
                                    {category.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Download app bar */}
                <div className="mt-10 py-6 border-t border-brand-border flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-sm text-brand-muted flex items-center">
                        <span>Download App</span>
                        <div className="flex ml-4 space-x-2">
                            <a
                                href={companyInformation.appDownload.ios.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center bg-black text-white rounded-md px-3 h-10 hover:opacity-90 transition-opacity"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div className="flex flex-col leading-none text-left text-xs">
                                    <span className="text-xs">Download on the</span>
                                    <span className="font-semibold">App Store</span>
                                </div>
                            </a>

                            <a
                                href={companyInformation.appDownload.android.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center bg-black text-white rounded-md px-3 h-10 hover:opacity-90 transition-opacity"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <div className="flex flex-col leading-none text-left">
                                    <span className="text-xs">Get it on</span>
                                    <span className="font-semibold">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <a href="#" className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full text-brand-muted hover:bg-brand-primary hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                            </svg>
                        </a>
                        <a href="#" className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full text-brand-muted hover:bg-brand-primary hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12,2.04C6.5,2.04 2,6.53 2,12.06C2,17.5 6.5,21.96 12,21.96C17.5,21.96 21.96,17.5 21.96,12C21.96,6.5 17.5,2.04 12,2.04M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                            </svg>
                        </a>
                        <a href="#" className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full text-brand-muted hover:bg-brand-primary hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                            </svg>
                        </a>
                        <a href="#" className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full text-brand-muted hover:bg-brand-primary hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2,17.5 6.5,21.96 12,21.96C17.5,21.96 21.96,17.5 21.96,12C21.96,6.5 17.5,2.04 12,2.04M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Copyright and disclaimer */}
                <div className="py-6 border-t border-brand-border">
                    <div className="text-xs text-brand-muted text-center md:text-left">
                        {companyInformation.companyInfo}
                    </div>

                    {companyInformation.disclaimer && (
                        <div className="mt-2 text-xs text-brand-muted text-center md:text-left">
                            {companyInformation.disclaimer}
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer; 