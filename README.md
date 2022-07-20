# `Type Script 란?`
컴파일 타임 맞춤법 검사기가 있는 JavaScript 런타임 환경이다.

# JavaScript와 큰 차이 점
자바스크립트는 자동으로 타입 추론 기능을 제공하지만,
이 것은 여러 프로그래머가 협업하는 과정에서 데이터의 타입을 명확하게 확인할 수 있는 방법을 제공하기 위해서
TypeScript는 타입을 제공한다. 

# 내장타입

## 원시 타입
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

## 다른 중요한 typescript 타입

|`타입`|`설명`|
|----|----|
|unknown| 최상위 타입|
|never| 하위타입|
|objectLiteral| 예시, {property: Type}|
|void| 리턴이 없는 함수|
|T[]| 수정가능한 배열, 또 Array<T>로 사용가능|
|[T,T]| 고정된 길이지만 수정가능한 튜플|
|(t: T) => U| 함수



