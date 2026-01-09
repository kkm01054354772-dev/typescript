function add(num1, num2) {
  console.log(num1 + num2);
}

add(); // NaN
add(1); // NaN
add(1, 2); // 3
add(3, 4, 5); // 7
add("Hello", " World!"); // Hello World!

function showItems(arr) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItems([1, 2, 3, 4, 5]);
showItems(1, 2, 3, 4, 5);

// 자바스크립트 : 동적언어 : 런타임에 타입 결정 => 실행 시 오류 발생
// 자바 , 타입스크립트 : 컴파일에 타입 결정 => 컴파일 시 오류 발생

let user = {
  name: "홍길동",
  id: "user01",
};
