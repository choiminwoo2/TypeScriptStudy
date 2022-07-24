// 잉여 검사 속성
interface IObj{
    name : string,
    id : string
}

const obj1 : IObj = {name: '123', id:'13', isName : true}
const obj123 = {name: '123', id:'13', good : true}
const obj2 : IObj = obj123;

//객체 리터럴로 바로 생성한 것은 잉여 속성을 검사해주지만,
// 객체를 만들어 직접 대입하는 경우에는 속성을 검사하지 않는 문제점이 있다.