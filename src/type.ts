export {};
// javascript 타입 : number, string, boolean, [], undefined, null

// let car = "BMW"; // string으로 유추
let car: string = "BMW"; // 명시
// car = 3;

let age: number = 30;
// age = "45";
// age = true ;

let isAdult: boolean;
isAdult = true;
isAdult = false;

let n: null = null;
// n=undefined;

let u: undefined;
u = undefined;
// u="123";

let fruits: string[] = ["apple", "banana", "cherry"];
// fruits = "melon";
let fruits2: Array<string> = ["apple", "banana", "cherry"];

// fruits.push(1);

let score1: number[] = [90, 85, 88];
let score2: Array<number> = [90, 85, 88];

// string + number
let mixed: (string | number)[] = ["apple", 45, "banana", 46, 78];

// 읽기 전용 배열
const vegetables: readonly string[] = ["carrot", "broccoli", "spinach"];
// vegetables.push()

const newArray = [...vegetables, "potato"];
console.log(newArray);

// ===========================================================================
// 타입스크립트 제공 : tuple, any, unknown, void, never, enum

// tuple : 순서와 길이를 지켜야 함
let person: [string, number];
// person =[25,"Alice"];
person = ["Alice", 25];
console.log(person[0].toLowerCase());
// console.log(person[1].toLowerCase());

function getUserInfo(): [string, number, boolean] {
  // 이름, 나이, 성인여부 리턴
  return ["Bob", 30, true];
}

console.log(getUserInfo());
const [name1, age1, adult] = getUserInfo();
console.log(`name : ${name1}, age : ${age1}, isAdult: ${adult}`);

// ==============================
console.log("배열과 튜플의 비교");
const inferredArray = [1, "two"];
const inferredTuple = [1, "two"] as const; // read-only

inferredArray.push("three");
inferredArray.push("four");
inferredArray.push(4);
console.log(inferredArray);

// inferredTuple[0] = 2;
const explicitTuple: [number, string] = [1, "two"];
explicitTuple[0] = 2;
explicitTuple[1] = "three";
console.log(explicitTuple);

// any == 기존 자바스크립트 변수 선언 개념과 동일(typescript에서는 잘 사용 X)
let num; // 추론 불가능
num = 95;
num = "Five";

let randomValue: any = 10;
randomValue = "Hello";
console.log(randomValue.length);
randomValue = true;

// unknown : 모르는 것에 일단 금지 / type check 후 안전하게 사용할 것 (if, as)
let unknownValue: unknown = 10;
unknownValue = "Hello";
if (typeof unknownValue === "string") {
  let strLength: number = unknownValue.length;
  console.log("문자길이 : ", strLength);
}
if (typeof unknownValue === "string") {
  console.log(unknownValue.toLowerCase());
  // unknownValue.toFixed // number type에 쓰는 메소드는 사용 불가능
}

unknownValue = false;

// as: 타입단언
let someValue: unknown = "This is a string";
(someValue as string).length;
let strLength: number = (someValue as string).length;
strLength = (<string>someValue).length;

// void : 반환값에 사용
function logMsg(message: string): void {
  console.log(`${message}`);
}
logMsg("log message 출력");

// 전달인자가 string or null, 반환값 없음
function printLength(text: string | null): void {
  // text? : text가 null 일 수 있음
  //   console.log(`text length : ${text?.length}`);

  if (text === null) {
    console.log("No text");
    return;
  }
  console.log(`text length : ${text.length}`);
}

printLength("Hello! TypeScript");
printLength(null);

// never : 에러를 반환하거나 절대 종료되지 않는 함수의 타입으로 사용
// 코드의 안정성을 위해 else 구문에 주로 사용

function error(message: string): never {
  throw new Error(message);
}
// error("이것은 에러입니다.");
let doc: string = "문서"; // Unreachable code detected.
// let neverValue:never = 10;

let i = 0;
function infiniteLoop(): never {
  while (true) {
    i++;
  }
}
// infiniteLoop();

function handleValue(x: string | number | boolean | object): void {
  if (typeof x === "string") {
    console.log("String value : " + x);
  } else if (typeof x === "number") {
    console.log("Number value : " + x);
  } else if (typeof x === "boolean") {
    console.log("Boolean value : " + x);
  } else if (typeof x === "object") {
  } else {
    const Unreachable: never = x;
    throw new Error("Unhandled type : " + unknownValue);
  }
}
handleValue("hello");
handleValue(25);
handleValue(true);

// enum : 상수 모임
enum Color {
  Red,
  Blue,
  Green,
}

console.log(Color.Blue);
console.log(Color["Blue"]);

let myColor: Color;
myColor = Color.Green;
// myColor="Red";
// myColor=Color.Yellow;

// type
type Addr = string | number;
let userAddr: Addr;
userAddr = "서울시 34-5";

// type === enum
type status = "idle" | "loading" | "success" | "error";
let currentStatus: status;
currentStatus = "loading";

type PointTuple = [number, number];
let point: PointTuple = [10, 25];
// point = [10,20,30];
// point = [10,"20"];

// & : 교차타입
type Name = {
  firstName: string;
  lastName: string;
};
type Employee = Name & {
  employeeId: number;
};

let employee: Employee;
employee = {
  firstName: "John",
  lastName: "Doe",
  employeeId: 1234,
};

// Member의 property가 정해지지 않은 경우
type Member = {
  // name:string,
  // id:string,
  // addr:string
  [key: string]: string;
};
let member: Member = {
  id: "user01",
};
member = {
  name: "홍길동",
  id: "user02",
};
