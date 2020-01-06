export = {}

/* 
  9 类型保护
*/
/**
 * 类型保护就是一些表达式，他们在编译的时候就能通过类型信息确保某个作用域内变量的类型
 * 类型保护就是能够通过关键字判断出分支中的类型
 */

// 1.typeof 类型保护
function double(input:string | number | boolean) {
  if(typeof input === 'string') {
    return input + input;
  }else {
    if(typeof input === 'number') {
      return input * 2;
    }else {
      return input;
    }
  }
}


// 2.instanceof类型保护
class Animal {
  name!: string
}
class Bird extends Animal {
  swing!: number
}
function getName(animal: Animal) {
  if(animal instanceof Bird) {
    console.log(animal.swing);
  }else {
    console.log(animal.name);
  }
}

let animal: Bird = new Bird();
animal.swing = 2;
getName(animal);


// 3.null保护
/**
 * 如果开启了strictNullChecks选项，那么对于可能为null的变量不能调用它上面的方法和属性
 */
function getFirstLetter(s: string | null) {
  // 第一种方式加上null判断
  if(s === null) {
    return "";
  }
  // 第二种处理增加一个或
  s = s || "";
  return s.charAt(0);
}
console.log(getFirstLetter('aa'))

//它并不能处理一些复杂的判断，需要加非空断言操作符
function getFirstLetter2(s: string | null) {
  function log() {
    s?.trim();
  }
  s = s || "";
  log();
  return s.charAt(0);
}
console.log(getFirstLetter2(null))

// 4.链判断运算符
/**
 * 链判断运算符是一种先检查属性是否存在，再尝试访问该属性的运算符，其符号为 ?.
 * 如果运算符左侧的操作数 ?. 计算为 undefined 或 null，则表达式求值为 undefined 。否则，正常触发目标属性访问，方法或函数调用。
 */
let a: any;
a?.b; //如果a是null/undefined,那么返回undefined，否则返回a.b的值.
a == null ? undefined : a.b;

a?.['x']; //如果a是null/undefined,那么返回undefined，否则返回a[x]的值
a == null ? undefined : a['x'];

a?.b(); // 如果a是null/undefined,那么返回undefined
a == null ? undefined : a.b(); //如果a.b不函数的话抛类型错误异常,否则计算a.b()的结果

a?.(); //如果a是null/undefined,那么返回undefined
a == null ? undefined : a(); //如果A不是函数会抛出类型错误
//否则 调用a这个函数

// 链判断运算符 还处于 stage1 阶段,TS 也暂时不支持



// 5.可辨识的联合类型
/**
 * 就是利用联合类型中的共有字段进行类型保护的一种技巧
 * 相同字段的不同取值就是可辨识
 */

interface WarningButton{
  class:'warning',
  text1:'修改'
}
interface DangerButton{
  class:'danger',
  text2:'删除'
}
type Button = WarningButton|DangerButton;
function getButton(button:Button){
 if(button.class=='warning'){
  console.log(button.text1);
 }
 if(button.class=='danger'){
  console.log(button.text2);
 }
}


// 6.in操作符
/**
 * in 运算符可以被用于参数类型的判断
 */
interface Bird {
  swing: number
}
interface Dog {
  leg: number
}
function getNumber(x: Bird|Dog) {
  if("swing" in x) {
    return x.swing
  }
  return x.leg;
}


// 7.自定义的类型保护
/**
 * TypeScript 里的类型保护本质上就是一些表达式，它们会在运行时检查类型信息，以确保在某个作用域里的类型是符合预期的
 * 要自定义一个类型保护，只需要简单地为这个类型保护定义一个函数即可，这个函数的返回值是一个类型谓词
 * 类型谓词的语法为 parameterName is Type 这种形式，其中 parameterName 必须是当前函数签名里的一个参数名`
 */
interface Bird1 {
  swing: number
}
interface Dog1 {
  leg: number
}
// 没有相同字段可以定义一个类型保护函数
function isBird(x: Bird1|Dog1): x is Bird1 {
  return (<Bird1>x).swing == 2;
  return (x as Bird1).swing == 2;
}
function getAnimal(x: Bird1|Dog1) {
  if(isBird(x)) {
    return x.swing;
  }
  return x.leg;
}
