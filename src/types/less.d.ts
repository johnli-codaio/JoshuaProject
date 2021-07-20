declare module '*.less' {
  interface ICssClassNames {
    readonly [index:string]: string;
  }

  const cssClassNames: ICssClassNames;
  export = cssClassNames;
}
