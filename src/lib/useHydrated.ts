import { useSyncExternalStore } from "react";

const noop = () => () => {};

/**
 * False during SSR and the hydration pass, true on every later render, including the first
 * render after a client-side navigation. Use it to read URL-driven values (query string) without
 * causing a hydration mismatch and without delaying them on client navigations.
 */
export const useHydrated = (): boolean => useSyncExternalStore(noop, () => true, () => false);
