interface A {
    talk: () => void
}
// void 함수는 retrun 하지 않는다.
// undefined는 리턴이 가능함.
namespace func{
   export function a1() : void{
        return undefined;
    }
    const b = a1();
    // void function을 선언
    const Ffunction = () : void =>{}
    // 메서드로 사용되는 void, 매개변수로 사용된 void

    export const a2: A ={
        talk() {
            //이때, 3이 리턴되는 것을 그냥 무시한다.
            //실제로 자바스크립트에서는 3을 리턴하지만, 사용하지 않기 때문에 상관없다.
            return 3;
        },
    }
}
console.log(func.a2.talk())

type Obj123 = {name : string, id: number }

const obj12345 = {name: 'string', id: 4, label: true }






