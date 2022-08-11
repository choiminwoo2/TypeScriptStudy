interface Animal{

}
interface Dog extends Animal{

}
interface Cat extends Animal{

}

declare let f1: (x: Animal) => void;
declare let f2: (x: Dog) => void;
declare let f3: (x: Cat) => void;
f1 = f2; // Error with --strictFunctionTypes
f2 = f1; // Ok
f2 = f3; // Error
interface Store<T> {
    set: (item: T) => void;
  }
  
  const store: Store<number | string> = {
    // Error
    set(item: number) {
      // ...
    },
  };

  
//   interface Store<T> {
//     set(item: T): void;
//   }