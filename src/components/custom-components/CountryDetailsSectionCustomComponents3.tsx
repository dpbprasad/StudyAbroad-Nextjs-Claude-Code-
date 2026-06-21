import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

interface Institution {
    name: string;
    desc: string;
}

interface Feature {
    title: string;
    desc: string;
}

interface CountryData {
    id: string;
    name: string;
    flag: string;
    overview: string[];
    educationSystemTitle: string;
    institutions: Institution[];
    qualifications: string[];
    features: Feature[];
}

const countriesData: CountryData[] = [
  {
    id: "overview",
    name: "Overview",
    flag: "🇳🇿",
    overview: [
      "Study Abroad (Pvt) Ltd is Sri Lanka's leading international education consultancy, dedicated to bridging the gap between local students and world-class global universities. Since 2007, we have served as a trusted partner, guiding students and parents through the complex processes of choosing study pathways, securing university placements, and obtaining student visas.",
      "We provide end-to-end support with a strong focus on compliance and student welfare. Every case undergoes careful evaluation and personalized guidance under director-led supervision, ensuring high visa success rates and a smooth transition to your academic journey overseas.",
      "Explore the guides below to get an overview of our supported study destinations and the comprehensive range of services we provide to assist you from application to post-arrival."
    ],
    educationSystemTitle: "Supported Study Destinations",
    institutions: [
      {
        name: "United Kingdom",
        desc: "Renowned for historical academic excellence, accelerated degree pathways (3-year Bachelors, 1-year Masters), and vast career growth opportunities."
      },
      {
        name: "Canada",
        desc: "World-class education systems balanced with diverse, welcoming communities, excellent standard of living, and post-graduation work opportunities."
      },
      {
        name: "New Zealand",
        desc: "Practical, research-oriented learning, strong industry connections, high student safety standards, and a supportive, peaceful environment."
      },
      {
        name: "Australia",
        desc: "Globally recognized qualifications, strong legal frameworks protecting international students, work rights, and vibrant cosmopolitan cities."
      },
      {
        name: "United States",
        desc: "Access to unmatched campus resources, cutting-edge research facilities, highly diverse program specializations, and global networking hubs."
      },
      {
        name: "Germany",
        desc: "A powerhouse of engineering and technology, offering zero or low-cost tuition options at world-renowned public universities."
      },
      {
        name: "Netherlands",
        desc: "A leader in English-taught programs in mainland Europe, offering innovative research methodologies and a highly entrepreneurial culture."
      },
      {
        name: "Sweden",
        desc: "Focus on creative thinking, sustainable development, and a balanced lifestyle supporting both academic excellence and personal growth."
      }
    ],
    qualifications: [
      "Personalized Career & Course Sourcing",
      "Direct University Application Processing",
      "Director-Led Documentation & Visa Guidance",
      "University Accommodation Allocation Sourcing",
      "Pre-Departure Briefings & Travel Transition Prep"
    ],
    features: [
      {
        title: "Legacy of Student Trust",
        desc: "Built on word-of-mouth success since 2007, we prioritize student matches over generic placements."
      },
      {
        title: "Direct University Alliances",
        desc: "Our direct partnerships with top global institutions enable faster offer issuance and direct admissions."
      },
      {
        title: "Director-Led Case Care",
        desc: "Your files and visa documentation are handled with direct director supervision for maximum success rates."
      },
      {
        title: "Post-Arrival Integration",
        desc: "We stay in touch to ensure you settle well into university dorms or private accommodation and thrive."
      }
    ]
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    overview: [
      "New Zealand is a highly attractive destination for international students seeking higher education, thanks to its world-class education system and vibrant, inclusive culture. The country is home to several top-ranked universities that offer a diverse range of programs, ensuring high-quality education and ample research opportunities.",
      "The emphasis on practical learning and innovation equips students with the skills needed for global careers. New Zealand's stunning natural landscapes and friendly, welcoming environment further enhance the experience, making it an ideal place for students to thrive both academically and personally.",
      "Moreover, the strong focus on student well-being and support services ensures that international students feel at home and can fully engage in their studies. The unique combination of academic excellence, cultural richness, and a supportive atmosphere makes New Zealand a premier choice for higher education."
    ],
    educationSystemTitle: "Higher Education System in New Zealand",
    institutions: [
      {
        name: "Universities",
        desc: "Offer a wide range of undergraduate and postgraduate programs, focusing on research and academic excellence."
      },
      {
        name: "Polytechnics",
        desc: "Provide vocational education and training. Emphasize practical skills and industry connections."
      },
      {
        name: "Private Training Establishments (PTEs)",
        desc: "Offer specialized courses and training, providing flexibility in course delivery."
      },
      {
        name: "Wānanga",
        desc: "Focus on Māori education and cultural practices, providing qualifications from certificates to degrees."
      }
    ],
    qualifications: [
      "Bachelor's Degrees (Standard undergraduate qualification)",
      "Master's Degrees (Advanced study in a specific field)",
      "Doctorates (Highest level of academic qualification)",
      "Diplomas and Certificates (Shorter courses focusing on specific skills or knowledge areas)"
    ],
    features: [
      {
        title: "High-Quality Education",
        desc: "New Zealand's institutions are globally recognized for their academic excellence and innovative teaching methods."
      },
      {
        title: "Diverse Range of Programs",
        desc: "A wide variety of programs across multiple fields allows students to pursue their interests and career aspirations."
      },
      {
        title: "Inclusive Environment",
        desc: "The education system promotes diversity and inclusivity, providing support for international students to adapt and thrive."
      },
      {
        title: "Strong Industry Connections",
        desc: "Partnerships with industries offer students practical experience through internships and work placements, enhancing employability."
      },
      {
        title: "Post-Study Work Opportunities",
        desc: "International students can apply for post-study work visas, allowing them to gain valuable work experience in New Zealand after graduation."
      }
    ]
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    overview: [
      "Canada has a highly regarded education system known for its quality and inclusiveness, with education primarily managed by provincial and territorial governments, leading to some variations across the country.",
      "The country is particularly attractive for international students due to its welcoming and multicultural environment, which fosters a sense of belonging and community. Canada boasts several top-ranked universities that offer a wide range of programs, ensuring high-quality education and research opportunities.",
      "Additionally, Canada is recognized for its safety, political stability, and high standard of living, making it an ideal place for students to live and study. The Canadian education system emphasizes practical learning and critical thinking, effectively preparing students for global careers.",
      "Furthermore, international students benefit from post-graduation work opportunities, allowing them to gain valuable experience in the Canadian job market. The combination of academic excellence, cultural richness, and supportive policies makes Canada a premier destination for higher education."
    ],
    educationSystemTitle: "Structure of the Education System",
    institutions: [
      {
        name: "Undergraduate Level",
        desc: "Bachelor's degrees typically take 3-4 years to complete, offered by universities across Canada."
      },
      {
        name: "Graduate Level",
        desc: "Master's degrees usually require 1-2 years of study after a Bachelor's degree. Doctoral programs (PhDs) involve advanced research and can take 3-6 years."
      }
    ],
    qualifications: [
      "Bachelor's Degrees (3-4 Years)",
      "Master's Degrees (1-2 Years)",
      "Doctoral Degrees / PhDs (3-6 Years)"
    ],
    features: [
      {
        title: "Diversity and Inclusion",
        desc: "Canada is known for its multicultural society, welcoming students from around the world."
      },
      {
        title: "Quality Education",
        desc: "Canadian institutions consistently rank among the best globally."
      },
      {
        title: "Research Opportunities",
        desc: "Strong emphasis on research and innovation, with funding available for various projects."
      },
      {
        title: "Student Support Services",
        desc: "Universities and colleges offer various support services, including academic advising, counseling, and career services."
      }
    ]
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    overview: [
      "The United Kingdom is a premier destination for international students seeking higher education due to its world-renowned institutions, diverse academic programs, and rich cultural experiences. The UK is home to some of the oldest and most prestigious universities, offering high-quality education that is recognized globally.",
      "The multicultural environment fosters inclusivity and provides students with the opportunity to engage with peers from various backgrounds. Additionally, the UK offers post-study work opportunities, allowing graduates to gain valuable experience in the job market, making it an attractive choice for those looking to enhance their career prospects."
    ],
    educationSystemTitle: "UK Higher Education System",
    institutions: [
      {
        name: "Undergraduate Education",
        desc: "Typically lasts 3-4 years, leading to a Bachelor's degree. Offers a wide range of courses across various disciplines."
      },
      {
        name: "Postgraduate Education",
        desc: "Includes Master's degrees (1-2 years) and Doctoral programs (PhDs), focusing on advanced study and research in specific fields."
      },
      {
        name: "Further Education",
        desc: "Includes vocational training and qualifications, often pursued after secondary education."
      }
    ],
    qualifications: [
      "Bachelor's Degrees (3-4 Years)",
      "Master's Degrees (1-2 Years)",
      "Doctoral Programs (PhDs)",
      "Vocational & Further Education Diplomas"
    ],
    features: [
      {
        title: "World-Class Institutions",
        desc: "The UK is home to prestigious universities known for academic excellence and research output."
      },
      {
        title: "Diverse Course Offerings",
        desc: "A wide range of undergraduate and postgraduate programs allows students to tailor their education to their interests."
      },
      {
        title: "Rich Cultural Experience",
        desc: "Studying in the UK provides exposure to a rich cultural heritage, with opportunities to engage in diverse communities and activities."
      },
      {
        title: "Strong Research Focus",
        desc: "The UK education system emphasizes research and innovation, with significant funding and resources dedicated to advancing knowledge."
      },
      {
        title: "Post-Study Work Opportunities",
        desc: "International students can benefit from post-study work options, allowing them to gain valuable work experience in the UK after completing their studies."
      }
    ]
  },
  {
    id: "usa",
    name: "USA",
    flag: "🇺🇸",
    overview: [
      "The United States is one of the most popular destinations for international students seeking higher education, known for its diverse academic offerings and world-renowned institutions. The USA boasts a rich cultural landscape, providing students with opportunities to engage with various communities and perspectives.",
      "The flexibility in course selection and the emphasis on research and innovation make the American education system particularly appealing. Additionally, the opportunity for post-graduation work experience enhances the attractiveness of studying in the USA, allowing students to gain valuable skills in a global job market."
    ],
    educationSystemTitle: "Higher Education System in the USA",
    institutions: [
      {
        name: "Community Colleges",
        desc: "Offer two-year associate degrees and vocational training, often serving as a pathway to four-year universities."
      },
      {
        name: "Four-Year Colleges and Universities",
        desc: "Provide undergraduate programs leading to Bachelor's degrees, as well as graduate programs (Master's and Doctoral degrees)."
      },
      {
        name: "Research Universities",
        desc: "Focus on research and offer a wide range of graduate programs, often with significant funding for research initiatives."
      }
    ],
    qualifications: [
      "Associate Degrees (2-Year pathways)",
      "Bachelor's Degrees (4-Year undergraduate programs)",
      "Master's Degrees (Graduate specialization)",
      "Doctoral Degrees / PhDs (Advanced research)"
    ],
    features: [
      {
        title: "Diverse Academic Programs",
        desc: "The USA offers a vast array of programs across various fields, allowing students to tailor their education to their interests and career goals."
      },
      {
        title: "World-Class Institutions",
        desc: "Many American universities are ranked among the best globally, known for their academic excellence and research contributions."
      },
      {
        title: "Flexible Curriculum",
        desc: "Students have the freedom to choose courses from different disciplines, promoting a well-rounded education and interdisciplinary learning."
      },
      {
        title: "Strong Research Opportunities",
        desc: "The emphasis on research and innovation provides students with opportunities to engage in cutting-edge projects and gain practical experience."
      },
      {
        title: "Post-Study Work Options",
        desc: "International students can benefit from Optional Practical Training (OPT) and Curricular Practical Training (CPT), allowing them to gain work experience in the USA after graduation."
      }
    ]
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    overview: [
      "Germany is a premier destination for international students seeking higher education, celebrated for its high-quality academic programs and innovative research opportunities. The country offers a unique blend of tradition and modernity, making it an attractive place for students from diverse backgrounds.",
      "One of the most significant advantages is the availability of tuition-free or low-cost education at public universities, which makes higher education financially accessible. The German education system emphasizes practical learning and research, allowing students to gain hands-on experience and collaborate with industries."
    ],
    educationSystemTitle: "Higher Education System in Germany",
    institutions: [
      {
        name: "Universities (Universitäten)",
        desc: "Focus on academic education and research, offering Bachelor's, Master's, and Doctoral degrees across a wide range of disciplines."
      },
      {
        name: "Universities of Applied Sciences (Fachhochschulen)",
        desc: "Emphasize practical and professional education, offering Bachelor's and Master's degrees with a strong focus on applied sciences and engineering."
      },
      {
        name: "Art and Music Colleges",
        desc: "Specialize in creative fields, providing programs in fine arts, design, music, and performing arts."
      }
    ],
    qualifications: [
      "Bachelor's Degrees (3-4 Years)",
      "Master's Degrees (1-2 Years)",
      "Doctoral Degrees / PhDs (Research-based)"
    ],
    features: [
      {
        title: "Tuition-Free Education",
        desc: "Many public universities offer tuition-free or low-cost education for both domestic and international students."
      },
      {
        title: "High-Quality Academic Standards",
        desc: "German universities are known for their rigorous academic programs and high standards of education."
      },
      {
        title: "Strong Research Opportunities",
        desc: "Collaboration with industries provides students with hands-on experience and exposure to cutting-edge projects."
      },
      {
        title: "Diverse Course Offerings",
        desc: "A wide range of programs are available, many offered in English, catering to international students' needs."
      },
      {
        title: "Post-Graduation Work Opportunities",
        desc: "Germany's strong economy creates ample job opportunities for international graduates."
      }
    ]
  },
  {
    id: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    overview: [
      "The Netherlands is a highly sought-after destination for international students, known for its high-quality education, innovative teaching methods, and diverse cultural environment. With a strong emphasis on research and practical learning, Dutch universities provide students with the skills and knowledge needed to thrive in a global job market.",
      "Many programs are offered in English, making it accessible for non-Dutch speakers. The Netherlands is also recognized for its welcoming attitude towards international students, fostering a vibrant and inclusive community."
    ],
    educationSystemTitle: "Higher Education System in the Netherlands",
    institutions: [
      {
        name: "Research Universities",
        desc: "Focus on academic education and research, offering Bachelor's, Master's, and Doctoral degrees across various disciplines. They emphasize theoretical knowledge and research skills."
      },
      {
        name: "Universities of Applied Sciences",
        desc: "Emphasize practical and professional education, offering Bachelor's and Master's degrees with a strong focus on applied sciences, arts, and vocational training."
      }
    ],
    qualifications: [
      "Bachelor's Degrees (Research vs. Applied Sciences)",
      "Master's Degrees (Advanced professional or research focus)",
      "Doctoral Degrees / PhDs (Advanced research)"
    ],
    features: [
      {
        title: "High-Quality Education",
        desc: "Dutch universities are known for their rigorous academic standards and are consistently ranked among the best in the world."
      },
      {
        title: "Wide Range of English-Taught Programs",
        desc: "Many programs are offered in English, making it easier for international students to pursue their studies without needing to learn Dutch."
      },
      {
        title: "Innovative Teaching Methods",
        desc: "The education system emphasizes interactive learning, critical thinking, and collaboration, preparing students for real-world challenges."
      },
      {
        title: "Strong International Community",
        desc: "The Netherlands is home to a diverse population of international students, creating a multicultural environment that enriches the educational experience."
      },
      {
        title: "Post-Graduation Work Opportunities",
        desc: "The Dutch government offers a favorable policy for international graduates, allowing them to stay and work in the Netherlands for up to one year after completing their studies."
      }
    ]
  },
  {
    id: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    overview: [
      "Sweden is a popular destination for international students, renowned for its high-quality education, innovative research, and commitment to sustainability. The Swedish education system emphasizes critical thinking, creativity, and collaboration, providing students with a well-rounded academic experience.",
      "Many programs are offered in English, making it accessible for non-Swedish speakers. Sweden's inclusive and diverse culture fosters a welcoming environment for international students, allowing them to thrive both academically and socially."
    ],
    educationSystemTitle: "Higher Education System in Sweden",
    institutions: [
      {
        name: "Universities (Universitet)",
        desc: "Focus on academic education and research, offering Bachelor's, Master's, and Doctoral degrees across a wide range of disciplines. They emphasize theoretical knowledge and research skills."
      },
      {
        name: "University Colleges (Högskolor)",
        desc: "Offer professional and vocational education, providing Bachelor's and Master's degrees with a strong focus on practical skills and applied sciences."
      }
    ],
    qualifications: [
      "Bachelor's Degrees (3 Years)",
      "Master's Degrees (1-2 Years)",
      "Doctoral Degrees / PhDs"
    ],
    features: [
      {
        title: "High-Quality Education",
        desc: "Swedish universities are known for their rigorous academic standards and are consistently ranked among the best in the world."
      },
      {
        title: "Wide Range of English-Taught Programs",
        desc: "A significant number of programs are offered in English, making it easier for international students to pursue their studies without needing to learn Swedish."
      },
      {
        title: "Innovative Teaching Methods",
        desc: "The education system emphasizes student-centered learning, critical thinking, and collaboration, preparing students for real-world challenges."
      },
      {
        title: "Strong Focus on Sustainability",
        desc: "Sweden is a global leader in sustainability and environmental awareness, integrating these principles into its educational programs."
      },
      {
        title: "Post-Graduation Work Opportunities",
        desc: "International graduates can apply for a residence permit to stay and work in Sweden for up to 12 months after completing their studies, allowing them to gain valuable work experience."
      }
    ]
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    overview: [
      "Australia is one of the world's leading education destinations, famous for its high-quality academic standards, vibrant student cities, and relaxed outdoor lifestyle. With world-class universities, state-of-the-art research facilities, and a strong emphasis on practical, career-focused learning, Australia prepares students to excel in a global market.",
      "The country offers a highly supportive environment for international students, backed by strong government regulations and institutional student welfare frameworks. Studying in Australia provides students with excellent opportunities to develop both academically and professionally."
    ],
    educationSystemTitle: "Higher Education System in Australia",
    institutions: [
      {
        name: "Universities",
        desc: "Offer undergraduate and postgraduate degrees with a strong focus on research, theory, and professional academic excellence."
      },
      {
        name: "Vocational Education & Training (VET / TAFE)",
        desc: "Provide industry-aligned certificates and diplomas focusing on hands-on practical skills and direct employment pathways."
      },
      {
        name: "English Language Schools (ELICOS)",
        desc: "Provide specialized English language preparation, academic English, and foundation courses for international students."
      }
    ],
    qualifications: [
      "Bachelor's Degrees (3-4 Years)",
      "Master's Degrees (1-2 Years)",
      "Doctoral Degrees / PhDs",
      "Vocational Diplomas & Certificates"
    ],
    features: [
      {
        title: "Global Recognition",
        desc: "Australian degrees are highly valued by employers and top-ranking academic institutions worldwide."
      },
      {
        title: "Post-Study Work Pathways",
        desc: "Graduates can apply for Temporary Graduate visas (Subclass 485) to gain valuable work experience in Australia."
      },
      {
        title: "High Standard of Living",
        desc: "Australian cities like Melbourne, Sydney, and Brisbane are consistently ranked among the most livable student cities globally."
      },
      {
        title: "Diverse Academic Programs",
        desc: "Wide range of courses spanning fields like business, engineering, medicine, marine biology, and humanities."
      },
      {
        title: "Strong Student Support",
        desc: "The ESOS Act (Education Services for Overseas Students) legally protects international student rights and tuition fees."
      }
    ]
  }
];

const CountryDetailsSectionCustomComponents3: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const country = searchParams.get('country');
    
    // Set default active country to New Zealand
    const [activeCountry, setActiveCountry] = useState<CountryData>(countriesData[0]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Synchronize active country state with URL query parameter
    useEffect(() => {
        if (country && typeof country === 'string') {
            const cleanQuery = country.toLowerCase().trim();
            const matched = countriesData.find(c => 
                c.id === cleanQuery || 
                c.name.toLowerCase() === cleanQuery ||
                (cleanQuery === 'uk' && c.id === 'united-kingdom') ||
                (cleanQuery === 'united-states' && c.id === 'usa')
            );
            if (matched) {
                setActiveCountry(matched);
            }
        }
    }, [country]);

    const handleSelectCountry = (targetCountry: CountryData) => {
        setActiveCountry(targetCountry);
        const params = new URLSearchParams(searchParams.toString());
        params.set('country', targetCountry.id);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <section className="relative py-20 lg:py-24 bg-transparent overflow-hidden min-h-screen">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-[#0FA3A3]/20 via-transparent to-[#0FA3A3]/10 -z-20 pointer-events-none" />
            <div className="relative container px-4 mx-auto">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    
                    {/* Left Sticky Navigation Menu */}
                    <div className="w-full lg:w-1/4 lg:sticky lg:top-0 z-10">
                        {/* Mobile Scrollable Tabs */}
                        <div className="block lg:hidden overflow-x-auto whitespace-nowrap py-2 mb-8 -mx-4 px-4 scrollbar-none">
                            <div className="flex gap-2">
                                {countriesData.map((c) => (
                                    <button
                                        key={c.id}
                                        onClick={() => handleSelectCountry(c)}
                                        className={`pl-2 pr-5 py-1.5 rounded-full text-sm font-semibold border transition-all duration-300 flex items-center gap-2.5 shrink-0 ${
                                            activeCountry.id === c.id
                                                ? 'border-[#0FA3A3] bg-[#0FA3A3] text-white shadow-[0_0_15px_rgba(15,163,163,0.3)]'
                                                : 'border-[#0FA3A3]/30 text-slate-300 bg-[#0B2144]/30 hover:border-[#0FA3A3]'
                                        }`}
                                    >
                                        <span className={`w-8 h-8 rounded-full border flex items-center justify-center overflow-hidden shrink-0 transition-colors duration-300 ${
                                            c.id === 'overview'
                                                ? 'border-[#0FA3A3]/30 bg-white'
                                                : activeCountry.id === c.id
                                                    ? 'border-white/30 bg-white/10'
                                                    : 'border-[#0FA3A3]/20 bg-[#0B2144]/20'
                                        }`}>
                                            <img 
                                                src={c.id === 'overview' ? 'https://static.shuffle.dev/uploads/files/8f/8fabfe5ac9e980e7956b71c583d5c06bd3f4cc88/logo-Copy.svg' : `/images/flags/${c.id}.gif`} 
                                                alt={c.name} 
                                                className={`w-full h-full ${c.id === 'overview' ? 'object-contain p-1' : 'object-cover'}`} 
                                            />
                                        </span>
                                        {c.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Desktop Sidebar menu */}
                        <div className="hidden lg:block p-8 lg:p-10 rounded-3xl border border-[#0FA3A3] bg-transparent backdrop-blur-sm shadow-[0_0_40px_rgba(15,163,163,0.08)]">
                            <h3 className="mb-6 pb-4 border-b border-[#0FA3A3]/20 text-sm font-bold uppercase tracking-wider text-[#0FA3A3]">
                                Study Destinations
                            </h3>
                            <ul className="flex flex-col gap-2.5">
                                {countriesData.map((c) => (
                                    <li key={c.id}>
                                        <button
                                            onClick={() => handleSelectCountry(c)}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 flex items-center justify-between border ${
                                                activeCountry.id === c.id
                                                    ? 'border-[#0FA3A3] bg-[#0FA3A3]/10 text-[#0FA3A3] pl-5 shadow-[inset_0_0_15px_rgba(15,163,163,0.05)] font-semibold'
                                                    : 'border-transparent text-slate-300 hover:text-white hover:bg-[#0FA3A3]/5 hover:pl-5'
                                            }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className={`w-10 h-10 rounded-full border flex items-center justify-center overflow-hidden shrink-0 transition-colors duration-300 ${
                                                    c.id === 'overview'
                                                        ? 'border-[#0FA3A3]/30 bg-white'
                                                        : activeCountry.id === c.id
                                                            ? 'border-[#0FA3A3] bg-[#0FA3A3]/20'
                                                            : 'border-[#0FA3A3]/20 bg-[#0B2144]/20'
                                                }`}>
                                                    <img 
                                                        src={c.id === 'overview' ? 'https://static.shuffle.dev/uploads/files/8f/8fabfe5ac9e980e7956b71c583d5c06bd3f4cc88/logo-Copy.svg' : `/images/flags/${c.id}.gif`} 
                                                        alt={c.name} 
                                                        className={`w-full h-full ${c.id === 'overview' ? 'object-contain p-1' : 'object-cover'}`} 
                                                    />
                                                </span>
                                                <span>{c.name}</span>
                                            </span>
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                className={`w-4 h-4 transition-transform duration-300 ${activeCountry.id === c.id ? 'translate-x-0.5 text-[#0FA3A3]' : 'opacity-0 -translate-x-2'}`} 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Content Column */}
                    <div className="w-full lg:flex-1 text-left">
                        {isMounted ? (
                            <div className="space-y-12 animate-fade-in">
                                
                                {/* Country Hero Header Banner */}
                                <div className="relative">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className={`w-10 h-10 rounded-full border border-[#0FA3A3]/30 ${activeCountry.id === 'overview' ? 'bg-white' : 'bg-[#0B2144]/20'} flex items-center justify-center overflow-hidden shrink-0 shadow-[0_0_15px_rgba(15,163,163,0.15)]`}>
                                            <img 
                                                src={activeCountry.id === 'overview' ? 'https://static.shuffle.dev/uploads/files/8f/8fabfe5ac9e980e7956b71c583d5c06bd3f4cc88/logo-Copy.svg' : `/images/flags/${activeCountry.id}.gif`} 
                                                alt={activeCountry.name} 
                                                className={`w-full h-full ${activeCountry.id === 'overview' ? 'object-contain p-1' : 'object-cover'}`} 
                                            />
                                        </span>
                                        <span className="text-sm text-[#0FA3A3] font-semibold tracking-widest uppercase">
                                            {activeCountry.id === 'overview' ? 'GLOBAL MINDS. GLOBAL FUTURES' : 'Destination Profile'}
                                        </span>
                                    </div>
                                    <h1 className="text-4xl lg:text-5xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200 uppercase">
                                        {activeCountry.id === 'overview' ? 'Study Destinations Overview' : `Study in ${activeCountry.name}`}
                                    </h1>
                                    <div className="space-y-4">
                                        {activeCountry.overview.map((para, idx) => (
                                            <p key={idx} className="text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Education System Details Card */}
                                {activeCountry.id !== 'overview' && (
                                    <div>
                                        <h2 className="text-2xl lg:text-3xl font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
                                            {activeCountry.educationSystemTitle}
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                                            
                                            {/* Institutions List Accordion style */}
                                            <div className="space-y-4">
                                                <h3 className="text-sm font-semibold tracking-wider uppercase text-[#0FA3A3] mb-4">
                                                    {activeCountry.id === 'overview' ? 'Supported Study Destinations' : 'Types of Institutions'}
                                                </h3>
                                                {activeCountry.institutions.map((inst, idx) => (
                                                    <div 
                                                        key={idx} 
                                                        className="p-5 rounded-xl border border-[#0FA3A3]/10 bg-transparent hover:border-[#0FA3A3]/40 transition-all duration-300"
                                                    >
                                                        <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0FA3A3]" />
                                                            {inst.name}
                                                        </h4>
                                                        <p className="text-sm leading-relaxed text-slate-300">
                                                            {inst.desc}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Qualifications Offered */}
                                            <div>
                                                <h3 className="text-sm font-semibold tracking-wider uppercase text-[#0FA3A3] mb-4">
                                                    {activeCountry.id === 'overview' ? 'Our Student Support Services' : 'Qualifications Offered'}
                                                </h3>
                                                <div className="p-6 rounded-xl border border-[#0FA3A3]/10 bg-transparent">
                                                    <ul className="space-y-4">
                                                        {activeCountry.qualifications.map((qual, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#0FA3A3] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <span>{qual}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )}

                                {/* Key Features Card Grid */}
                                {activeCountry.id !== 'overview' && (
                                    <div>
                                        <h2 className="text-2xl lg:text-3xl font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
                                            {activeCountry.id === 'overview' ? 'Why Study Abroad' : `Why Choose ${activeCountry.name}`}
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                            {activeCountry.features.map((feat, idx) => (
                                                <div 
                                                    key={idx}
                                                    className="group p-6 lg:p-8 rounded-2xl border border-[#0FA3A3]/20 hover:border-[#0FA3A3] bg-transparent hover:bg-[#0B2144]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(15,163,163,0.12)]"
                                                >
                                                    <div className="flex items-center justify-between mb-4">
                                                        <span className="text-[10px] font-semibold tracking-wider text-[#0FA3A3] uppercase border border-[#0FA3A3]/30 rounded-full px-2.5 py-0.5">
                                                            Benefit {idx + 1}
                                                        </span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#0FA3A3] opacity-50 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0FA3A3] transition-colors duration-300">
                                                        {feat.title}
                                                    </h3>
                                                    <p className="text-sm leading-relaxed text-slate-300">
                                                        {feat.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Consultation Call to Action */}
                                <div className="p-8 lg:p-10 rounded-3xl border border-[#0FA3A3] bg-transparent relative overflow-hidden shadow-[0_0_40px_rgba(15,163,163,0.08)]">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0FA3A3]/10 to-[#0B2144]/20 -z-10" />
                                    <div className="max-w-2xl">
                                        <h3 className="text-2xl lg:text-3xl font-medium text-white mb-4">
                                            {activeCountry.id === 'overview' ? 'Ready to Study Abroad?' : `Ready to Study in ${activeCountry.name}?`}
                                        </h3>
                                        <p className="text-slate-300 text-sm lg:text-base leading-relaxed mb-6">
                                            Connect with Sri Lanka's top international education consultants. Since 2007, Study Abroad (Pvt) Ltd has helped thousands of students secure admissions and visa approvals for top global universities.
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            <Link 
                                                href="/contact" 
                                                className="px-6 py-3.5 rounded-full bg-[#0FA3A3] hover:bg-[#0d8f8f] text-sm font-semibold text-white transition-all duration-300 shadow-[0_0_20px_rgba(15,163,163,0.3)] hover:shadow-[0_0_25px_rgba(15,163,163,0.5)]"
                                            >
                                                Schedule a Free Consultation
                                            </Link>
                                            <Link 
                                                href="/stories" 
                                                className="px-6 py-3.5 rounded-full border border-[#0FA3A3]/30 hover:border-[#0FA3A3] hover:bg-[#0FA3A3]/10 text-sm font-semibold text-[#0FA3A3] hover:text-white transition-all duration-300"
                                            >
                                                Success Stories
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ) : (
                            // Server-side fallback content (first country - New Zealand)
                            <div className="space-y-12">
                                <div>
                                    <h1 className="text-4xl lg:text-5xl font-medium mb-6 text-white uppercase">
                                        {activeCountry.id === 'overview' ? 'Study Destinations Overview' : `Study in ${activeCountry.name}`}
                                    </h1>
                                    <p className="text-base lg:text-lg text-slate-300 leading-relaxed">
                                        {activeCountry.overview[0]}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CountryDetailsSectionCustomComponents3;