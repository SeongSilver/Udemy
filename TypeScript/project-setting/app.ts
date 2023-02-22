// const person1: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  //튜플은 정해진 요소에 정해진 타입만 그 자리에 있어야하는 특수 배열이다
  role: [number, string];
} = {
  name: "윈스턴",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
