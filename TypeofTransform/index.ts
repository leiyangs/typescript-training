export = {};

/* 类型变换 */

// 1.交叉类型
/**
 * 交叉类型（Intersection Types）表示将多个类型合并为一个类型
 */

interface Bird {
  name: string;
  fly(): void;
}
interface Person {
  name: string;
  talk(): void;
}

type BirdPerson = Bird & Person;
let p: BirdPerson = {
  name: "a",
  fly() {},
  talk() {}
};

// 2.typeof
/**
 * 可以获取一个变量的类型
 */

//先定义类型，再定义变量
type People = {
  name: string;
  age: number;
  gender: number;
};
let p1: People = {
  name: "a",
  age: 18,
  gender: 1
};
//先定义变量，再定义类型
let p2 = {
  name: "b",
  age: 18,
  gender: 0
};
type People1 = typeof p2;
function getName(p: People) {
  return p.name;
}
console.log(getName(p2));

// 3.索引访问操作符
/**
 * 可以通过[]获取一个类型的子类型
 */
interface Person1 {
  name: string;
  age: number;
  job: { name: string };
  interests: { name: string, level: number }[];
}
let FrontEndJob: Person1['job'] = {
  name: "前端工程师"
}
let interestsLevel: Person1["interests"][0]["level"] = 2;
console.log(FrontEndJob, interestsLevel);


// 4.keyof
/**
 * 索引类型查询操作符
 */
interface Person2 {
  name: string
  age: number
  gender: "male" | "female"
}
// type PersonKey = 'name'|'age'|'gender';
type PersonKey2 = keyof Person2;
function getValueByKey(p: Person2, key: PersonKey2) {
  return p[key]
}
let val = getValueByKey({name: "c", age: 18, gender: "male"}, "age");
console.log(val)


// 5.映射类型
/**
 * 在定义的时候用in操作符去批量定义类型中的属性
 */
interface Person3 {
  name: string
  age: number
  gender: "male" | "female"
}
// 批量把一个接口中的属性都变成可选的
type PartPerson = {
  [key in keyof Person3] ?: Person3[key];
}
let p3: PartPerson = {};

//也可以使用泛型
type Part<T> = {
  [key in keyof T] ?: T[key]; 
}
let p4:Part<Person3>={};


// 6.内置工具类型
/**
 * TS 中内置了一些工具类型来帮助我们更好地使用类型系统
 */

// 6.1.Partial 
/**
 * Partial 可以将传入的属性由非可选变为可选，具体使用如下：
 */

// type Partial<T> = { [p in keyof T] ?: T[p] }
interface A {
  a1: string
  a2: number
  a3: boolean
}
type APartial = Partial<A>;
const a: APartial = {};

// 6.2.Required
/**
 * Required 可以将传入的属性中的可选项变为必选项，这里用了 -? 修饰符来实现。
 */

// type Required<T> = { [p in keyof T] -?: T[p] }
interface B {
  b1: string
  b2: number
  b3: boolean
}
let b: Required<B> = { // 三项都为必填
  b1: '1',
  b2: 12,
  b3: true
}

// 6.3.Readonly 

