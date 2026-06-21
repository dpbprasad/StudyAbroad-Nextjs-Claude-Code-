"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Predefined palette suggestions
const BG_PRESETS = [
  { name: 'Current Deep Midnight', value: '#0b1a36', desc: 'Very dark navy' },
  { name: 'Deep Steel Blue', value: '#0d1b2e', desc: 'Rich, clearly blue dark gray' },
  { name: 'Classic Dark Navy', value: '#0a192f', desc: 'Elegant and professional' },
  { name: 'Royal Midnight', value: '#0b1a36', desc: 'Saturated royal dark blue' },
  { name: 'Midnight Indigo', value: '#0b1528', desc: 'Deep subtle indigo' },
];

const PRIMARY_PRESETS = [
  { name: 'Current Accent Teal', value: '#0FA3A3', desc: 'Cyber teal' },
  { name: 'Vibrant Blue', value: '#3B82F6', desc: 'Modern royal blue' },
  { name: 'Indigo Aura', value: '#6366F1', desc: 'Creative violet-blue' },
  { name: 'Emerald Mint', value: '#10B981', desc: 'Fresh & energetic' },
  { name: 'Golden Glow', value: '#F59E0B', desc: 'Warm amber highlight' },
];

const SECONDARY_PRESETS = [
  { name: 'Current Dark Navy Cards', value: '#0B2144', desc: 'Slightly lighter navy' },
  { name: 'Deep Slate Card', value: '#1e293b', desc: 'Modern gray-slate' },
  { name: 'Charcoal Card', value: '#111827', desc: 'True dark gray' },
  { name: 'Royal Navy Card', value: '#172554', desc: 'Bright dark blue' },
  { name: 'Ocean Mist Card', value: '#162e3d', desc: 'Teal-tinted deep slate' },
];

export default function ThemePlayground() {
  const [mainBg, setMainBg] = useState('#0d1b2e');
  const [primary, setPrimary] = useState('#0FA3A3');
  const [secondary, setSecondary] = useState('#0B2144');

  // Input fields for custom hex codes
  const [customBgInput, setCustomBgInput] = useState('#0d1b2e');
  const [customPrimaryInput, setCustomPrimaryInput] = useState('#0FA3A3');
  const [customSecondaryInput, setCustomSecondaryInput] = useState('#0B2144');

  // Sync inputs when state changes (e.g. when presets are selected)
  useEffect(() => {
    setCustomBgInput(mainBg);
  }, [mainBg]);

  useEffect(() => {
    setCustomPrimaryInput(primary);
  }, [primary]);

  useEffect(() => {
    setCustomSecondaryInput(secondary);
  }, [secondary]);

  // Handle manual text changes and validate hex code
  const isValidHex = (hex: string) => /^#[0-9A-F]{6}$/i.test(hex);

  const handleCustomBgChange = (val: string) => {
    setCustomBgInput(val);
    if (isValidHex(val)) setMainBg(val);
  };

  const handleCustomPrimaryChange = (val: string) => {
    setCustomPrimaryInput(val);
    if (isValidHex(val)) setPrimary(val);
  };

  const handleCustomSecondaryChange = (val: string) => {
    setCustomSecondaryInput(val);
    if (isValidHex(val)) setSecondary(val);
  };

  return (
    <div className="min-h-screen bg-[#070e17] text-slate-100 font-sans antialiased selection:bg-[#0FA3A3]/30 selection:text-white">
      {/* Header bar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0FA3A3] to-blue-500 flex items-center justify-center font-bold text-white text-lg shadow-md shadow-[#0FA3A3]/25">
            T
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight text-white">Theme Playground</h1>
            <p className="text-xs text-slate-400">Design System & Color Palette Customizer</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm px-4 py-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-950/40 hover:bg-slate-950/80 text-slate-300 hover:text-white transition-all">
            Back to Website
          </Link>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 min-h-[calc(100vh-69px)]">
        
        {/* Left Control Panel (5 columns on large screens) */}
        <aside className="xl:col-span-5 bg-slate-900/40 border-r border-slate-800 p-6 xl:h-[calc(100vh-69px)] xl:overflow-y-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Configure Palette</h2>
              <p className="text-sm text-slate-400">
                Change the background, primary, and secondary colors to see a live preview of the site components instantly.
              </p>
            </div>

            {/* 1. MAIN BACKGROUND COLOR */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <label className="text-sm font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: mainBg }} />
                  Main Background
                </label>
                <div className="flex items-center gap-2">
                  <input 
                    type="color" 
                    value={isValidHex(mainBg) ? mainBg : '#000000'} 
                    onChange={(e) => setMainBg(e.target.value)}
                    className="w-6 h-6 rounded cursor-pointer border-0 p-0 bg-transparent"
                  />
                  <input
                    type="text"
                    value={customBgInput}
                    onChange={(e) => handleCustomBgChange(e.target.value)}
                    placeholder="#000000"
                    className="w-24 px-2 py-1 text-xs rounded border border-slate-700 bg-slate-950 text-slate-200 focus:outline-none focus:border-[#0FA3A3]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                {BG_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setMainBg(preset.value)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                      mainBg.toLowerCase() === preset.value.toLowerCase()
                        ? 'border-[#0FA3A3] bg-[#0FA3A3]/10 text-white'
                        : 'border-slate-800 bg-slate-950/20 hover:border-slate-700 hover:bg-slate-950/40 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-200">{preset.name}</div>
                      <div className="text-[10px] opacity-75">{preset.desc}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono">{preset.value}</span>
                      <span className="w-4 h-4 rounded-md border border-slate-700 shadow-sm" style={{ backgroundColor: preset.value }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. PRIMARY COLOR (ACCENT) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <label className="text-sm font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: primary }} />
                  Primary Accent
                </label>
                <div className="flex items-center gap-2">
                  <input 
                    type="color" 
                    value={isValidHex(primary) ? primary : '#000000'} 
                    onChange={(e) => setPrimary(e.target.value)}
                    className="w-6 h-6 rounded cursor-pointer border-0 p-0 bg-transparent"
                  />
                  <input
                    type="text"
                    value={customPrimaryInput}
                    onChange={(e) => handleCustomPrimaryChange(e.target.value)}
                    placeholder="#000000"
                    className="w-24 px-2 py-1 text-xs rounded border border-slate-700 bg-slate-950 text-slate-200 focus:outline-none focus:border-[#0FA3A3]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {PRIMARY_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setPrimary(preset.value)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                      primary.toLowerCase() === preset.value.toLowerCase()
                        ? 'border-[#0FA3A3] bg-[#0FA3A3]/10 text-white'
                        : 'border-slate-800 bg-slate-950/20 hover:border-slate-700 hover:bg-slate-950/40 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-200">{preset.name}</div>
                      <div className="text-[10px] opacity-75">{preset.desc}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono">{preset.value}</span>
                      <span className="w-4 h-4 rounded-md border border-slate-700 shadow-sm" style={{ backgroundColor: preset.value }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. SECONDARY COLOR (CARDS) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <label className="text-sm font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: secondary }} />
                  Secondary / Cards
                </label>
                <div className="flex items-center gap-2">
                  <input 
                    type="color" 
                    value={isValidHex(secondary) ? secondary : '#000000'} 
                    onChange={(e) => setSecondary(e.target.value)}
                    className="w-6 h-6 rounded cursor-pointer border-0 p-0 bg-transparent"
                  />
                  <input
                    type="text"
                    value={customSecondaryInput}
                    onChange={(e) => handleCustomSecondaryChange(e.target.value)}
                    placeholder="#000000"
                    className="w-24 px-2 py-1 text-xs rounded border border-slate-700 bg-slate-950 text-slate-200 focus:outline-none focus:border-[#0FA3A3]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {SECONDARY_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setSecondary(preset.value)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all ${
                      secondary.toLowerCase() === preset.value.toLowerCase()
                        ? 'border-[#0FA3A3] bg-[#0FA3A3]/10 text-white'
                        : 'border-slate-800 bg-slate-950/20 hover:border-slate-700 hover:bg-slate-950/40 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-200">{preset.name}</div>
                      <div className="text-[10px] opacity-75">{preset.desc}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono">{preset.value}</span>
                      <span className="w-4 h-4 rounded-md border border-slate-700 shadow-sm" style={{ backgroundColor: preset.value }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CODE OUTPUT PANEL */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Configuration Code</h3>
              <p className="text-xs text-slate-400">Apply these values in the codebase when you settle on a choice:</p>
              
              <div className="space-y-2">
                <div className="text-[11px] font-mono bg-slate-900/60 p-2.5 rounded border border-slate-800 relative group">
                  <div className="text-slate-500 mb-1">// Tailwind config addition</div>
                  <span className="text-[#0FA3A3]">backgroundColor</span>: &#123;<br />
                  &nbsp;&nbsp;body: <span className="text-amber-400">'{mainBg}'</span>,<br />
                  &#125;
                </div>
                <div className="text-[11px] font-mono bg-slate-900/60 p-2.5 rounded border border-slate-800">
                  <div className="text-slate-500 mb-1">// Global replacements (HEX to Replace)</div>
                  Main BG: <span className="text-green-400 font-bold">{mainBg}</span><br />
                  Primary Accent: <span className="text-green-400 font-bold">{primary}</span><br />
                  Card BG: <span className="text-green-400 font-bold">{secondary}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Preview Canvas (7 columns on large screens) */}
        <main className="xl:col-span-7 bg-[#0b0f17] p-8 space-y-12 overflow-y-auto xl:h-[calc(100vh-69px)]">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0FA3A3]">Live Sandbox Preview</span>
            <h2 className="text-2xl font-extrabold text-white">Interactive Components Preview</h2>
            <p className="text-sm text-slate-400">
              The elements below represent key sections of the study abroad platform, styled dynamically based on your configuration.
            </p>
          </div>

          {/* Actual Site Preview Canvas */}
          <div 
            className="p-8 rounded-2xl border transition-all duration-300 space-y-12 shadow-2xl relative"
            style={{ 
              backgroundColor: mainBg, 
              borderColor: `${primary}20` 
            }}
          >
            {/* Glowing Accent Ring (micro-interaction mock) */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20 transition-all duration-300"
              style={{
                backgroundImage: `radial-gradient(circle, ${primary} 0%, transparent 70%)`
              }}
            />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-10 transition-all duration-300"
              style={{
                backgroundImage: `radial-gradient(circle, ${primary} 0%, transparent 70%)`
              }}
            />

            {/* MOCK COMPONENT 1: Navigation / Header banner */}
            <div className="relative z-10 border-b pb-6" style={{ borderColor: `${primary}15` }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-all shadow-sm" style={{ backgroundColor: primary }}>
                    SA
                  </div>
                  <span className="font-extrabold text-lg text-white">Study<span style={{ color: primary }}>Abroad</span></span>
                </div>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
                  <span className="cursor-pointer hover:text-white transition-all" style={{ '--hover-color': primary } as React.CSSProperties}>Home</span>
                  <span className="cursor-pointer hover:text-white transition-all">Countries</span>
                  <span className="cursor-pointer hover:text-white transition-all">Stories</span>
                  <span className="cursor-pointer hover:text-white transition-all">Contact Us</span>
                </div>
                <div>
                  <button 
                    className="text-xs font-bold px-4 py-2 rounded-full text-white transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0"
                    style={{ backgroundColor: primary }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>

            {/* MOCK COMPONENT 2: Hero Block */}
            <div className="relative z-10 space-y-6 text-center max-w-2xl mx-auto py-4">
              <span 
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-opacity-10 transition-all duration-300"
                style={{ 
                  color: primary, 
                  borderColor: `${primary}30`,
                  backgroundColor: `${primary}10`
                }}
              >
                🎓 Your Study Abroad Journey Starts Here
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Unlock International Education Opportunities
              </h3>
              <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
                Connect with world-class universities, streamline your visa application process, and get expert guidance at every step of your study abroad route.
              </p>
              <div className="flex items-center justify-center gap-4 pt-2">
                <button 
                  className="px-6 py-3 rounded-xl font-bold text-sm text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ 
                    backgroundColor: primary,
                    boxShadow: `0 4px 14px ${primary}30`
                  }}
                >
                  Get Free Consultation
                </button>
                <button 
                  className="px-6 py-3 rounded-xl font-bold text-sm text-white border transition-all duration-200 hover:bg-white/5"
                  style={{ 
                    borderColor: `${primary}40`,
                    color: 'white'
                  }}
                >
                  Explore Countries
                </button>
              </div>
            </div>

            {/* MOCK COMPONENT 3: Cards Grid (Secondary Color test) */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1 */}
              <div 
                className="p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1"
                style={{ 
                  backgroundColor: secondary, 
                  borderColor: `${primary}15` 
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 bg-opacity-10"
                  style={{ 
                    backgroundColor: `${primary}20`,
                    color: primary
                  }}
                >
                  ✈️
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Visa Guidance</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  End-to-end guidance in document preparation, application filing, mock interviews, and complete visa process monitoring.
                </p>
                <div className="mt-4 flex items-center text-xs font-semibold" style={{ color: primary }}>
                  <span>Learn more</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                className="p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1"
                style={{ 
                  backgroundColor: secondary, 
                  borderColor: `${primary}15` 
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 bg-opacity-10"
                  style={{ 
                    backgroundColor: `${primary}20`,
                    color: primary
                  }}
                >
                  🏫
                </div>
                <h4 className="text-lg font-bold text-white mb-2">University Selection</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Find universities that match your profile, budget, qualifications, and global career expectations perfectly.
                </p>
                <div className="mt-4 flex items-center text-xs font-semibold" style={{ color: primary }}>
                  <span>Learn more</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>

            </div>

            {/* MOCK COMPONENT 4: Testimonial & Form Preview */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Testimonial Quote */}
              <div className="lg:col-span-6 space-y-4">
                <div className="text-5xl opacity-20 font-serif leading-none" style={{ color: primary }}>“</div>
                <p className="text-slate-200 text-xs italic leading-relaxed">
                  The study abroad consultation team made my transition to the UK absolutely seamless. Their step-by-step visa assistance was fantastic. I highly recommend them to anyone.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                    JD
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">John Doe</div>
                    <div className="text-[10px] text-slate-400">UK Student, University of London</div>
                  </div>
                </div>
              </div>

              {/* Mini Contact Form */}
              <div 
                className="lg:col-span-6 p-6 rounded-2xl border space-y-4"
                style={{ 
                  backgroundColor: `${secondary}dd`,
                  borderColor: `${primary}20` 
                }}
              >
                <h5 className="text-sm font-bold text-white">Quick Inquiry</h5>
                <div className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-3 py-2 text-xs rounded-lg border bg-opacity-50 text-white placeholder-slate-400 focus:outline-none"
                    style={{ 
                      backgroundColor: mainBg, 
                      borderColor: `${primary}25`,
                      focusBorderColor: primary 
                    } as React.CSSProperties}
                  />
                  <button 
                    className="w-full py-2.5 rounded-lg text-xs font-bold text-white transition-all"
                    style={{ backgroundColor: primary }}
                  >
                    Send Request
                  </button>
                </div>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
