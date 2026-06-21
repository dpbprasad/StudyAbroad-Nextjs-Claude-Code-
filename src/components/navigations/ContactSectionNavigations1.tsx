import React from 'react';
import Link from 'next/link';

const ContactSectionNavigations1: React.FC = () => {
    return (
        <section>
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
          <li className="mb-1"><Link className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200" href="/countries">Countries</Link></li>
          <li className="mb-1"><Link className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200" href="/stories">Stories</Link></li>
          <li className="mb-1"><Link className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200" href="/resources">Resources</Link></li>
          <li className="mb-1"><Link className="block p-4 text-sm font-semibold hover:bg-neutral-800 hover:text-white rounded-lg text-neutral-300 transition-all duration-200" href="/faq">FAQ</Link></li>
        </ul>
      </div>
      <div className="mt-auto">
        <div className="pt-6">
          <Link className="block px-6 py-3 text-sm text-center font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-lg transition-all duration-200" href="/contact">Contact Us</Link>
        </div>
        <p className="mt-6 mb-4 text-sm text-center text-neutral-500">
          <span>© 2026 All rights reserved.</span>
        </p>
      </div>
    </nav>
  </div>
</section>


    );
};

export default ContactSectionNavigations1;