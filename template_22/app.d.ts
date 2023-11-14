/// <reference types="@stefanprobst/next-svg/types" />

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.svg?inline' {
  const contentt: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.svg?symbol' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
