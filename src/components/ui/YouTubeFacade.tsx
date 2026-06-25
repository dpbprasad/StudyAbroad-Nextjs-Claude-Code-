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
 * Lightweight YouTube "facade" (the lite-youtube pattern): shows a poster + play
 * button and loads the real (cookie-light, nocookie) player ONLY when clicked —
 * avoids shipping ~1MB of YouTube JS on page load.
 *
 * The poster stays painted BEHIND the iframe after play, so there's no background
 * flash while the player loads — the thumbnail shows until the video covers it.
 */
export function YouTubeFacade({ videoId, title, poster }: Props) {
  const [playing, setPlaying] = useState(false);
  const frame =
    'group relative aspect-video w-full overflow-hidden rounded-2xl bg-brand-950 shadow-card-lg ring-1 ring-slate-900/5';

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

  const thumb = poster ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className={frame}>
      {/* Poster — always painted; stays visible behind the player while it loads */}
      <img
        src={thumb}
        alt=""
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition duration-500 ease-smooth ${playing ? '' : 'group-hover:scale-105'}`}
        onError={(e) => {
          // maxresdefault doesn't exist for every video — fall back to hqdefault.
          const img = e.currentTarget as HTMLImageElement;
          if (!img.src.endsWith('hqdefault.jpg')) img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }}
      />

      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&color=white`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-400"
        >
          <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white/90 shadow-xl ring-1 ring-white/50 backdrop-blur-sm transition-all duration-300 ease-smooth group-hover:scale-110 group-hover:bg-white">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 text-brand-600" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </button>
      )}
    </div>
  );
}
