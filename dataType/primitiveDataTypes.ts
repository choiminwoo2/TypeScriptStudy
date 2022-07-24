//number
let num : number = 1;

//string
let charData : string = '1';

//boolean 
let trueAndFalse : boolean = false;

// undefined
let undefi : undefined = undefined;

// null
let isNull : null = null;

// never 항상 오류를 출력하거나 리턴값을 절대로 내보내지 않는 것을 말한다.
function error(message: string): never {
    throw new Error(message);
}

// unknown
// 타입이 정의되지 않아 사용자가 직접 해야 한다. as로 보통한다.
let errors : unknown = new Error("errors");
//  수많은 에러 중에서 특정 에러로 판별하여 처리하기 위해서 사용한다.
const errorMessage : string = (errors as Error).message;