import React from 'react';
import Link from 'next/link';

interface CountryCard {
    name: string;
    id: string;
    image: string;
    description: string;
}

const countriesList: CountryCard[] = [
  {
    name: "NEW ZEALAND",
    id: "new-zealand",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    description: "Combine cutting-edge technology research with a rich, unique cultural environment."
  },
  {
    name: "CANADA",
    id: "canada",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    description: "World-class education systems balanced with diverse, welcoming communities."
  },
  {
    name: "UNITED KINGDOM",
    id: "united-kingdom",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
    description: "Step into historical academic excellence and accelerate your career path."
  },
  {
    name: "UNITED STATES",
    id: "usa",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    description: "Access unmatched campus resources and global networking hubs."
  },
  {
    name: "AUSTRALIA",
    id: "australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
    description: "Experience innovation-driven degrees set against an incredible lifestyle."
  },
  {
    name: "GERMANY",
    id: "germany",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    description: "Benefit from engineering mastery, strong industry ties, and zero tuition options."
  },
  {
    name: "NETHERLANDS",
    id: "netherlands",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    description: "Learn at high-ranking universities renowned for research excellence, entrepreneurship, and English-taught programs."
  },
  {
    name: "SWEDEN",
    id: "sweden",
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80",
    description: "Focus on sustainability, creative problem-solving, and a lifestyle that balances academic and personal growth."
  }
];

const CountriesSectionCustomComponents3: React.FC = () => {
    return (
        <section data-from-ai="true" className="relative py-20 lg:py-24 bg-transparent overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
                        <span className="uppercase text-sm text-[#0FA3A3] font-semibold tracking-wider">Top Study Destinations</span>
                        <h2 className="mb-4 mt-4 text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 font-sans">
                            Country of Your Choice
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {countriesList.map((country, idx) => (
                            <div 
                                key={idx} 
                                className="relative group overflow-hidden rounded-3xl border border-[#0FA3A3] hover:border-[#0FA3A3]/30 transition duration-300 bg-[#0B2144]/30 backdrop-blur-sm max-w-[320px] mx-auto w-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a36] via-[#0b1a36]/50 to-transparent z-10" />
                                <div className="h-[320px] overflow-hidden">
                                    <img 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out" 
                                        src={country.image} 
                                        alt={country.name} 
                                    />
                                </div>
                                <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 text-left">
                                    <h3 className="mb-1 text-xl font-bold text-white tracking-tight font-sans">
                                        {country.name}
                                    </h3>
                                    <p className="mb-3 text-sm text-neutral-200 leading-relaxed h-20 line-clamp-3">
                                        {country.description}
                                    </p>
                                    <div>
                                        <Link 
                                            className="inline-flex items-center text-sm font-semibold text-white hover:text-[#0FA3A3] transition-colors duration-200" 
                                            href={{
                                                pathname: '/country-details',
                                                query: { country: country.id }
                                            }}
                                        >
                                            Explore Destination
                                            <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountriesSectionCustomComponents3;