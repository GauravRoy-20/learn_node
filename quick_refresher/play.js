var name = "Max";
let age = 29;
var hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies : " +
    userHasHobby
  );
};

console.log(summarizeUser(name, age, hasHobbies));

const person = {
  name: "Max",
  age: 29,
  geet() {
    console.log("Hi, I am " + this.name);
  },
};

person.geet();

const hobbies = ["Sports", "Cooking", 1, true, {}];
for (let hobby of hobbies) {
  console.log(hobby);
}
hobbies.push("Programming");
console.log(hobbies);

const copiedPerson = { ...person };
console.log(copiedPerson);

const copiedHobbies = [...hobbies];
console.log(copiedHobbies);

const { name: personName, age: personAge } = person;
console.log(personName, personAge);

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

const fetchData = (callback) => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res("Done");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 1);

console.log("Hello");
console.log("Hi");
