// 引入第三方声明文件
/* 可以安装使用第三方的声明文件
@types是一个约定的前缀，所有的第三方声明的类型库都会带有这样的前缀
JavaScript 中有很多内置对象，它们可以在 TypeScript 中被当做声明好了的类型
内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准
这些内置对象的类型声明文件，就包含在TypeScript 核心库的类型声明文件中 https://github.com/Microsoft/TypeScript/tree/master/src/lib*/

// cnpm i @types/jquery -S 一般不自己写声明文件
/* npm声明文件可能的位置 层层往下找
node_modules/jquery/package.json
"types":"types/xxx.d.ts"
node_modules/jquery/index.d.ts
node_modules/@types/jquery/index.d.ts */
import * as jQuery from "jquery"
let a: any = [];
console.log(jQuery.isArray(a))