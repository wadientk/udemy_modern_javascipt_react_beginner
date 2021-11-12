// 分割代入
const myProfile = {
  name: 'wada',
  age: 34,
};
const { name, age } = myProfile;
console.log(name, age);

const array = [1, 2];
const [number1, number2] = array;
console.log(number1, number2);

const getNumber = () => {
  return [1, 2];
};
const [res1, res2] = getNumber();
console.log(res1, res2);

// デフォルト値
const myName = (name = 'ゲスト') => {
  console.log(`こんにちは${name}さん`);
};

myName();

// スプレッド構文
const array1 = [3, 4, 5];
console.log(array1);
console.log(...array1);

const numArray = [4, 5];
const sumFunc = (num1, num2) => {
  return num1 + num2;
};
console.log(sumFunc(...numArray));

const array2 = [1, 2, 3, 4, 5];
const [n1, n2, ...n3] = array2;
console.log(n1, n2, n3);
// コピー -- 参照されない
const sum = [...array1, ...array2];
console.log(sum);

sum[0] = 1000;
console.log(sum, array1);

// &&, ||
// 左がtrueなら右を返す
const a = null;
const b = a && '何か設定されました';
console.log(b);
// 左がfalseなら右を返す
const c = null;
const d = c || '設定されていない';
console.log(d);
