interface CSSModuleClasses {
  readonly [key: string]: string;
}

declare module '*.css' {
  const classes: CSSModuleClasses;
  export default classes;
}

declare module '*.less' {
  const classes: CSSModuleClasses;
  export default classes;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;

  const url: string;
  export default url;
}

interface Window {
  globalStore;
  __WB_MANIFEST;
}
