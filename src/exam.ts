export {};

// add 함수 정의 : 2개의 숫자 타입 전달인자, 덧셈 결과 출력
// function add(num1: number, num2: number):void {
//   console.log(num1 + num2);
// }

const add = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};

add(5, 6);

// add2 정의 : 리턴값 num1 +num2
const add2 = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(add2(5, 6));

// age 값을 받아서 19보다 크면 true 리턴 isAdult
const isAdult = (age: number): boolean => {
  return age > 19;
};

console.log(isAdult(18));
console.log(isAdult(20));

// hello : name(없을 수도 있음) => Hello 홍길동 or Guest 출력

const hello = (name?: string): void => {
  console.log(`Hello ${name || "Guest"}`);
};

hello("홍길동");
hello();

// hello2 : 기본값 넣기
const hello2 = (name = "Guest"): void => {
  console.log(`Hello ${name}`);
};

hello2("홍길동");
hello2();

// 선택적 매개변수가 필수 매개변수보다 앞에 올 수 없음
// const hello3 = (name?: string, age: number): void => {
//   console.log(`Hello ${name || "Guest"}`);
// };

const hello3 = (name: string | undefined, age: number): void => {
  console.log(`Hello ${name}, age ${age}`);
};
hello3(undefined, 25);
hello3("Tom", 25);

// 나머지 매개변수 : ... => 배열 형태로 전달
// 매개변수의 개수가 정해져 있지 않을 때 유용
const sum = (...nums: number[]): number => {
  let total = 0;
  nums.forEach((i) => {
    total += i;
  });
  return total;
};

let total = sum(1, 2, 3);
console.log(total);
total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 19);
console.log(total);
