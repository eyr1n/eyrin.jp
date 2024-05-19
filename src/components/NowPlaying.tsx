import React from 'react';
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

  const blank1px =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2P4////fwAJ+wP9BUNFygAAAABJRU5ErkJggg==';

  useEffect(() => {
    fetch('https://nowplaying.eyrin.jp')
      .then((res) => res.json())
      .then(setNowPlaying);
  }, []);

  return (
    <div className="overflow-hidden rounded-md border-2 border-slate-200">
      <div className="flex items-center">
        <div className="h-[80px] w-[80px] border-r-2 border-slate-200">
          <img
            className="h-full w-full object-cover"
            src={
              nowPlaying?.images.sort(
                (a, b) =>
                  Math.max(b.width ?? 0, b.height ?? 0) -
                  Math.max(a.width ?? 0, a.height ?? 0),
              )[0]?.url ?? blank1px
            }
          />
        </div>
        <div className="flex h-[80px] flex-col justify-between p-[8px]">
          <a
            href={nowPlaying?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold hover:underline"
          >
            {nowPlaying?.name ?? '何も聴いてないよ'}
          </a>

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
                  href={artist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  key={i}
                >
                  {artist.name}
                </a>
              ))
              .reduce(
                (acc: JSX.Element[], cur, i) =>
                  acc.length === 0
                    ? [cur]
                    : [
                        ...acc,
                        <React.Fragment key={i + ','}>{', '}</React.Fragment>,
                        cur,
                      ],
                [],
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
