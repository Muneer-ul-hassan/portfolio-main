
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url?: string;
        [key: string]: any;
      };
    }
  }
}

export {};
