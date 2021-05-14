// 1
const concat = (...args: any[]): string => {
  return [...args].reduce((prevValue, curValue) => `${prevValue} ${curValue}`, '');
};

concat('Hello', 'word');

// 2
interface withDataInterface {
  howIDoIt: string;
  someArray: (string | number)[];
}
interface myHometaskIntetface extends withDataInterface {
  withData: withDataInterface[];
}

const myHometask: myHometaskIntetface = {
  howIDoIt: 'I Do It Wel',
  someArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', someArray: ['string one', 23] }],
};

console.log('BBB myHometask', myHometask);

// 3
interface MyArray<T> {
  [N: number]: T;
  map<U>(fn: (el: T) => U): U[];
  reduce<U>(fn: (prevValue: U, currValue: T, index: number, arr: MyArray<T>) => U, initValue: U): U;
}

const tsArray: MyArray<number> = [1, 2, 3, 4];
tsArray.reduce((prev, cur, index, arr) => {
  console.log('arr', arr);
  return (prev + cur) * index;
}, 0);
