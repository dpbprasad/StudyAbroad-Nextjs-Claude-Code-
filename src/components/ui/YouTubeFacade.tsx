"use client";

import { useState } from 'react';

type Props = {
  /** YouTube video ID — the part after `watch?v=` (or after `youtu.be/`). */
  videoId: string;
  /** Accessible label / iframe title. */
  title: string;
  /** Optional custom poster image; defaults to YouTube's own thumbnail. */
  poster?: string;
};

/**
 * Lightweight YouTube "facade": renders only a poster + play button, and loads
 * the real (cookie-light, privacy-friendly nocookie) player ONLY when clicked.
 * Avoids shipping ~1MB of YouTube JS on page load. See About → Leadership.
 */
export function YouTubeFacade({ videoId, title, poster }: Props) {
  const [playing, setPlaying] = useState(false);
  const frame = 'relative aspect-video w-full overflow-hidden rounded-2xl bg-brand-950 shadow-card-lg';

  // Placeholder until a real video ID is supplied.
  if (!videoId) {
    return (
      <div className={`${frame} flex flex-col items-center justify-center text-center`}>
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-white/80" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </span>
        <span className="mt-3 text-sm font-medium text-white/60">Video coming soon</span>
      </div>
    );
  }

  if (playing) {
    return (
      <div className={frame}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  const thumb = poster ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group ${frame} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2`}
      aria-label={`Play video: ${title}`}
    >
      <img
        src={thumb}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-smooth group-hover:scale-105"
        onError={(e) => {
          // maxresdefault doesn't exist for every video — fall back to hqdefault.
          const img = e.currentTarget as HTMLImageElement;
          if (!img.src.endsWith('hqdefault.jpg')) img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }}
      />
      <span className="absolute inset-0 bg-black/25 transition-colors duration-200 group-hover:bg-black/35" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-200 ease-smooth group-hover:scale-110">
        <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-brand-600" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
      </span>
    </button>
  );
}
