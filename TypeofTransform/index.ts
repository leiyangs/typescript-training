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
  interests: { name: string; level: number }[];
}
let FrontEndJob: Person1["job"] = {
  name: "前端工程师"
};
let interestsLevel: Person1["interests"][0]["level"] = 2;
console.log(FrontEndJob, interestsLevel);

// 4.keyof
/**
 * 索引类型查询操作符
 */
interface Person2 {
  name: string;
  age: number;
  gender: "male" | "female";
}
// type PersonKey = 'name'|'age'|'gender';
type PersonKey2 = keyof Person2;
function getValueByKey(p: Person2, key: PersonKey2) {
  return p[key];
}
let val = getValueByKey({ name: "c", age: 18, gender: "male" }, "age");
console.log(val);

// 5.映射类型
/**
 * 在定义的时候用in操作符去批量定义类型中的属性
 */
interface Person3 {
  name: string;
  age: number;
  gender: "male" | "female";
}
// 批量把一个接口中的属性都变成可选的
type PartPerson = {
  [key in keyof Person3]?: Person3[key];
};
let p3: PartPerson = {};

//也可以使用泛型
type Part<T> = {
  [key in keyof T]?: T[key];
};
let p4: Part<Person3> = {};

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
  a1: string;
  a2: number;
  a3: boolean;
}
type APartial = Partial<A>;
const a: APartial = {};

// 6.2.Required
/**
 * Required 可以将传入的属性中的可选项变为必选项，这里用了 -? 修饰符来实现。
 */

// type Required<T> = { [p in keyof T] -?: T[p] }
interface B {
  b1: string;
  b2: number;
  b3: boolean;
}
let b: Required<B> = {
  // 三项都为必填
  b1: "1",
  b2: 12,
  b3: true
};

// 6.3.Readonly
/**
 * Readonly 通过为传入的属性每一项都加上 readonly 修饰符来实现。
 */
interface Person4 {
  name: string;
  age: number;
  gender: "male" | "famale";
}

let p5: Readonly<Person4> = {
  name: "d",
  age: 18,
  gender: "male"
};
// p5.age = 11; //Cannot assign to 'age' because it is a read-only property.

// 6.4.Pick
/**
 * Pick 能够帮助我们从传入的属性中摘取某一项返回
 */

interface Animal {
  name: string;
  age: number;
}

/**
 * From T pick a set of properties K
 * type Pick<T, K extends keyof T> = { [P in K]: T[P] };
 */
// 摘取 Animal 中的 name 属性
type AnimalSub = Pick<Animal, "name">;
let a1: AnimalSub = {
  name: "hehe"
};

// 6.5.映射类型修饰符的控制
/**
 * TypeScript中增加了对映射类型修饰符的控制
 * 具体而言，一个 readonly 或 ? 修饰符在一个映射类型里可以用前缀 + 或-来表示这个修饰符应该被添加或移除
 * TS 中部分内置工具类型就利用了这个特性（Partial、Required、Readonly...），这里我们可以参考 Partial、Required 的实现
 */

// 7.条件类型
/**
 * 在定义泛型的时候能够添加进逻辑分支，以后泛型更加灵活
 */

// 7.1.定义条件类型
interface Fish {
  name: string;
}
interface Water {
  name: string;
}
interface Bird {
  name: string;
}
interface Sky {
  name: string;
}
type Codition<T> = T extends Fish ? Water : Sky;
let codition: Codition<Fish> = { name: "鱼要水" };
console.log(codition);

// 7.2.条件类型的分发
interface Fish1 {
  fish: string;
}
interface Water1 {
  water: string;
}
interface Bird1 {
  bird: string;
}
interface Sky1 {
  sky: string;
}

type Codition1<T> = T extends Fish1 ? Water1 : Sky1;
let codition1: Codition1<Fish1> = { water: "水" };
let codition2: Codition1<Bird1> = { sky: "天空" };

// 7.3.内置条件类型
/**
 * TS 在内置了一些常用的条件类型，可以在 lib.es5.d.ts 中查看：
 */

// 7.3.1.Exclude
/**
 * 从 T 可分配给的类型中排除 U
 */

type E = Exclude<string | number, string>; // 这里排除了string
let e: E = 10;

// 7.3.2.Extract
/**
 * 从 T 可分配的类型中提取 U
 */
type E1 = Extract<string | number, string>; // 提取了string类型
let e1: E1 = "10";

// 7.3.3.NonNullable
/**
 * 从 T 中排除 null 和 undefined
 */

type N = NonNullable<string | number | boolean | null | undefined>;
let n: N = true;

// 7.3.4.ReturnType
/**
 * 获取函数类型的返回类型
 */

function getUserInfo() {
  return { name: "aa", age: 10 };
}
// 通过 ReturnType 将 getUserInfo 的返回值类型赋给了 UserInfo
type UserInfo = ReturnType<typeof getUserInfo>; // 获取了返回值的类型:{name: string;age: number;}
const userA: UserInfo = {
  name: "a",
  age: 10
};

// 7.3.5.InstanceType
/**
 * 获取构造函数类型的实例类型
 */
class NewPerson {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}
type I = InstanceType<typeof NewPerson>;
let i: I = {
  name: "1",
  getName() {}
};
let i1: I = new NewPerson("aa");