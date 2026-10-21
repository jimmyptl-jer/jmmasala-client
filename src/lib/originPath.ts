// Path of the page the visitor is leaving. A page that mounts as part of a navigation can read it during its
// first render (before RouteScroll's effect updates it), which tells the page where the visitor came from.
let trackedPath = "";

export const setCurrentPath = (path: string): void => {
  trackedPath = path;
};

export const getOriginPath = (): string => trackedPath;
