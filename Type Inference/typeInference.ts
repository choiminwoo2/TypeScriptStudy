let a = 10;
//타입 스크립트가 number라고 타입을 추론함.
// 즉, 숫자만 대입가능.
// 실수와 정수형 모두 가능.
a = 1.2;
a = 1;
a = 0;
a = -5;
a = 1/5;
a = 3.3;
// 자바스크립트에서 number + string을 하면 string으로 결과 값이 나온다
// 타입스크립트는 이를 추론하여 string이라고 해줌.
let add = (a:number , b: number) :number=>{
    return a + b;
} 

//위의 자료형 제한을 type으로 표현가능한
type Add1 = (a:number, b: number) => number;

let add2 : Add1 = (a, b) => a+b;

//인터페이스로도 표현이 가능함
interface Add2{
    (x : number, y: number) : number;
}
let add3 : Add2 = (x,y) => x+y;

//객체 리터럴의 타입지정이 가능하다.
const obj : { lat: number, lon: number} = {
    lat: 5.1, lon:10.26
} 
type Obj = {readonly key : number, content: string};

interface Arr extends Obj{
    data: (t: Obj) => Obj;
}

