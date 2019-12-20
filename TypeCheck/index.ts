export = {}

/**
 * 结构类型系统
 */



// 1. 接口的兼容性
/**
 * 如果传入的变量和声明的类型不匹配，TS就会进行兼容性检查
 * 原理是Duck-Check,就是说只要目标类型中声明的属性变量在源类型中都存在就是兼容的
 */
interface Animal {
  name: string;
  age: number;
}

