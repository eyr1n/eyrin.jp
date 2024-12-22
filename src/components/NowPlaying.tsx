import { Fragment, type JSX } from 'react';
import { useEffect, useState } from 'react';

interface SpotifyNowPlaying {
  album: {
    name?: string;
    url?: string;
  };
  artists: {
    name?: string;
    url?: string;
  }[];
  duration_ms?: number;
  images: {
    url: string;
    height: number | null;
    width: number | null;
  }[];
  is_playing?: boolean;
  name?: string;
  progress_ms?: number | null;
  url?: string;
}

export function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState<SpotifyNowPlaying>();

  const artwork = nowPlaying?.images.sort(
    (a, b) =>
      Math.max(b.width ?? 0, b.height ?? 0) -
      Math.max(a.width ?? 0, a.height ?? 0),
  )[0]?.url;

  useEffect(() => {
    fetch('https://nowplaying.eyrin.jp')
      .then((res) => res.json())
      .then(setNowPlaying);
  }, []);

  return (
    <div className="grid grid-cols-[84px_1fr] grid-rows-[84px] overflow-hidden rounded-md border-2 border-slate-200">
      <div>
        {artwork ? (
          <img className="h-full w-full object-cover" src={artwork} />
        ) : null}
      </div>
      <div className="grid grid-rows-3 items-center justify-between border-l-2 border-slate-200 p-1.5">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
          <a
            href={nowPlaying?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {nowPlaying?.name ?? '何も聴いてないよ'}
          </a>
        </div>
        <div className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
          💿{' '}
          <a
            href={nowPlaying?.album.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {nowPlaying?.album.name ?? ''}
          </a>
        </div>
        <div className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
          👤{' '}
          {nowPlaying?.artists
            .map((artist, i) => (
              <a
                key={i}
                href={artist.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {artist.name}
              </a>
            ))
            .reduce(
              (acc: JSX.Element[], cur, i) =>
                acc.length === 0
                  ? [cur]
                  : [...acc, <Fragment key={i + ','}>{', '}</Fragment>, cur],
              [],
            )}
        </div>
      </div>
    </div>
  );
}
