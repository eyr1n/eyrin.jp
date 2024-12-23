import { IconDisc, IconUser } from '@tabler/icons-react';
import { Fragment, useEffect, useState, type JSX } from 'react';

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
    const controller = new AbortController();

    const fetchNowPlaying = () =>
      fetch('https://nowplaying.eyrin.jp', { signal: controller.signal })
        .then((res) => res.json())
        .then(setNowPlaying)
        .then(() => setTimeout(fetchNowPlaying, 30000));
    fetchNowPlaying();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="grid grid-cols-[auto_1fr] overflow-hidden rounded-md border-2 border-slate-200">
      <div className="h-[84px] w-[84px]">
        {artwork ? (
          <img className="h-full w-full object-cover" src={artwork} />
        ) : null}
      </div>

      <div className="grid h-[84px] grid-cols-[auto_auto] grid-rows-3 items-center justify-start gap-x-1 border-l-2 border-slate-200 p-1.5">
        {nowPlaying?.is_playing ? (
          <>
            <div className="col-span-2 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
              <a
                href={nowPlaying.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {nowPlaying.name}
              </a>
            </div>

            <IconDisc size={16} />
            <div className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
              <a
                href={nowPlaying.album.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {nowPlaying.album.name}
              </a>
            </div>

            <IconUser size={16} />
            <div className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
              {nowPlaying.artists
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
                      : [
                          ...acc,
                          <Fragment key={i + ','}>{', '}</Fragment>,
                          cur,
                        ],
                  [],
                )}
            </div>
          </>
        ) : (
          <div className="text-sm font-semibold">何も聴いてないよ</div>
        )}
      </div>
    </div>
  );
}
