import {
  createSignal,
  For,
  Match,
  onCleanup,
  onMount,
  Show,
  Switch,
} from 'solid-js';

interface SpotifyLastPlayed {
  name: string;
  url: string;
  album: {
    name: string;
    url: string;
  };
  artists: {
    name: string;
    url: string;
  }[];
  images: {
    url: string;
    width: number | null;
    height: number | null;
  }[];
  duration_ms: number;
  progress_ms: number | null;
  played_at: string;
}

export function LastPlayed() {
  const [lastPlayed, setLastPlayed] = createSignal<
    SpotifyLastPlayed | null | undefined
  >(undefined);

  let timer: number | undefined;

  const fetchLastPlayed = () => {
    fetch('https://nowplaying.eyrin.jp/last-played')
      .then((res) => res.json() as Promise<SpotifyLastPlayed>)
      .then((res) => {
        setLastPlayed(res);
      })
      .catch(() => {
        setLastPlayed(null);
      })
      .finally(() => {
        timer = setTimeout(fetchLastPlayed, 30000);
      });
  };

  onMount(() => {
    fetchLastPlayed();
  });

  onCleanup(() => {
    clearTimeout(timer);
  });

  return (
    <div class="chromatic-border not-prose grid max-w-80 grid-cols-[auto_1fr]">
      <div class="h-24 w-24">
        <Show when={lastPlayed()?.images}>
          {(images) => (
            <Show
              when={
                images().toSorted(
                  (a, b) =>
                    Math.max(b.width ?? 0, b.height ?? 0) -
                    Math.max(a.width ?? 0, a.height ?? 0),
                )[0].url
              }
            >
              {(url) => (
                <img
                  class="h-full w-full object-cover"
                  src={url()}
                  alt="artwork"
                />
              )}
            </Show>
          )}
        </Show>
      </div>

      <div class="grid h-24 grid-rows-3 items-center p-2">
        <div class="overflow-hidden font-bold text-ellipsis whitespace-nowrap">
          <Switch>
            <Match when={lastPlayed() === undefined}>
              <span>Loading...</span>
            </Match>
            <Match when={lastPlayed() === null}>
              <span>No recently played track</span>
            </Match>
            <Match when={lastPlayed()}>
              {(lastPlayed) => (
                <a
                  class="hover:underline"
                  href={lastPlayed().url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lastPlayed().name}
                </a>
              )}
            </Match>
          </Switch>
        </div>

        <div class="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
          💿{' '}
          <Show when={lastPlayed()?.album}>
            {(album) => (
              <a
                class="hover:underline"
                href={album().url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {album().name}
              </a>
            )}
          </Show>
        </div>

        <div class="overflow-hidden text-sm text-ellipsis whitespace-nowrap">
          👤{' '}
          <For each={lastPlayed()?.artists}>
            {(artist, index) => (
              <>
                <Show when={index() > 0}>, </Show>
                <a
                  class="hover:underline"
                  href={artist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {artist.name}
                </a>
              </>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
