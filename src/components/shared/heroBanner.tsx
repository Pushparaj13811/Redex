import { useState } from "react";

const HeroBanner = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="relative rounded-xl overflow-hidden mb-8">
            <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&q=75&fit=crop&w=1400&h=400"
                alt="Shop fresh groceries"
                className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 to-transparent flex items-center">
                <div className="max-w-md pl-8 md:pl-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Fresh Groceries Delivered
                    </h1>
                    <p className="text-white/90 text-lg mb-4">
                        Get everything you need delivered in 30 minutes
                    </p>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full py-3 px-4 pr-10 rounded-md border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <div className="absolute right-3 top-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;
