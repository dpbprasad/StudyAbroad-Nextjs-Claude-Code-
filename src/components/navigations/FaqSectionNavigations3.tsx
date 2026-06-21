import React from 'react';
import Link from 'next/link';

const FaqSectionNavigations3: React.FC = () => {
    return (
        <section data-from-ai="false">
  <nav className="relative flex justify-between items-center py-8 px-10 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950">
    <Link href="/">
      <img src="https://static.shuffle.dev/uploads/files/8f/8fabfe5ac9e980e7956b71c583d5c06bd3f4cc88/logo-Copy.svg" alt="" className="h-8" />
    </Link>
    <div className="lg:hidden">
      <button className="block hover:text-white text-neutral-300 focus:outline-none transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <ul className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center w-auto space-x-8">
      <li><Link className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200" href="/">Home</Link></li>
      <li><Link className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200" href="/aboutus">About Us</Link></li>
      <li><Link className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200" href="/countries">Countries</Link></li>
      <li><Link className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200" href="/stories">Stories</Link></li>
      <li><Link className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200" href="/resources">Resources</Link></li>
      <li><Link className="text-sm hover:text-white font-medium text-neutral-300 transition-colors duration-200" href="/faq">FAQ</Link></li>
    </ul>
    <div className="hidden lg:flex items-center justify-end gap-4"><Link className="inline-block px-4 py-2 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-full transition-all duration-200 hover:shadow-lg" href="/contact">Contact Us</Link></div>
  </nav>
  <div className="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div className="fixed inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 opacity-75 filter blur-3xl" />
    <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-neutral-900 border-r border-neutral-800 overflow-y-auto">
      <div className="flex items-center mb-12">
        <Link href="/" className="mr-auto">
          <img src="https://static.shuffle.dev/uploads/files/8f/8fabfe5ac9e980e7956b71c583d5c06bd3f4cc88/logo-Copy.svg" alt="" className="h-8" />
        </Link>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer hover:text-white text-neutral-400 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1"><Link className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200" href="/">Home</Link></li>
          <li className="mb-1"><Link className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200" href="/aboutus">About Us</Link></li>
          <li className="mb-1"><Link className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200" href="/resources">Resources</Link></li>
          <li className="mb-1"><Link className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200" href="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="mt-auto">
        <div className="pt-6"><Link className="block px-6 py-3 text-sm text-center font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-lg transition-all duration-200" href="/contact">Contact Us</Link></div>
        <p className="mt-6 mb-4 text-sm text-center text-neutral-500">
          <span>© 2026 All rights reserved.</span>
        </p>
      </div>
    </nav>
  </div>
</section>


    );
};

export default FaqSectionNavigations3;