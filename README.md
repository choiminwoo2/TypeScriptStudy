# 목차
## [1. 타입스크립트란?](#type-script-란)  
## [2. 타입스크립트의 자료형](#내장타입)

# `Type Script 란?`
1. 컴파일 타임 맞춤법 검사기가 있는 JavaScript 런타임 환경이다.  
2. 브라우저에서는 타입스크립트를 지원하지 않아 js파일로  
컴파일하여 사용하게 한다. 
3. tsx라는 명령어를 사용하여 타입스크립트로 작성된 파일을  
자바스크립트로 변경한다.
# `JavaScript와 큰 차이점`
자바스크립트는 타입 설정이 어렵다.  
이 것은 여러 프로그래머가 협업하는 과정에서 데이터의 타입을 명확하게 확인할 수 있는 방법을 제공하기 위해서 
TypeScript는 타입을 제공한다. 

[목차로 되돌아가기](#목차)
# `내장타입`

## `원시 타입`
|`타입`|`설명`|
|---|---|
|Number| 배정밀도 leee 754 부동소수점.|
|String| 수정 불가능한 UTF-16 문자열|
|BigInt| 임의 정밀도 형식의 정수|
|Boolean| true, false|
|Symbol|보통 키로 사용하는 고유한 값.|
|Null| 단위 타입과 동등|
|Undefined| 단위 타입과 동등|
|Object| 레코드와 유사한것|
---------
## `다른 중요한 typescript 타입`
|`타입`|`설명`|
|----|----|
|unknown| 최상위 타입|
|never| 하위타입|
|objectLiteral| 예시, {property: Type}|
|void| 리턴이 없는 함수|
|T[]| 수정가능한 배열, 또 Array<T>로 사용가능|
|[T,T]| 고정된 길이지만 수정가능한 튜플|
|(t: T) => U| 함수 
----------
[목차로 되돌아가기](#목차)

## `interface와 type`
interface는 확장성을 제공하여 
`extends`를 사용할 수 있다. 즉, 상속이 가능하다. 

type는 타입을 지정하고 인터페이스처럼 & 을 사용하여 
확장하는 것 처럼 만들어줄 수 있다. 

type과 인터페이스는 혼용해서 사용가능하다. 
```typescript
    type A = {
    a: string;
    }
    interface B extends A{
        b: number;
    }
```




