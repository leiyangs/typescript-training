declare function jQuery(selector: string): HTMLElement;
declare namespace jQuery {
  function ajax(url: string): void;
}
export default jQuery;

// tsconfig.json
/* 如果配置了paths,那么在引入包的的时候会自动去paths目录里找类型声明文件
在 webpack 中，我们可以通过配置 alias 的形式来为项目里的文件做映射。在 tsconfig.json 中，我们同样也可以做路径的映射
在 tsconfig.json 中，我们通过 compilerOptions 里的 paths 属性来配置路径映射。 tsconfig.json */

// {
//   "baseUrl": "./",// 使用 paths 属性的话必须要指定 baseUrl 的值
//   "paths": {
//   "*":["types/*"]
//   }
