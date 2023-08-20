
// Object literals


const person = {
  name: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
}; // object literal syntax

const person2 = { ...person }; // copy of person object
person2.name = "Peter"; // change name of person2 object
person2.altura = 1.8; // add new property to person2 object
delete person2.address; // remove property from person2 object
person2.hobbies.push("Programming"); // add new element to hobbies array
person2.hobbies.pop(); // remove last element from hobbies array
person2.hobbies[0] = "Programming"; // change first element of hobbies array
person2.hobbies.splice(1, 1); // remove second element from hobbies array
person2.hobbies.splice(1, 0, "Programming"); // add new element to hobbies array
person2.hobbies.splice(1, 1, "Programming"); // change second element of hobbies array
person2.hobbies.splice(1, 0, "Programming", "Gym"); // add two new elements to hobbies array
person2.hobbies.splice(1, 2, "Programming", "Gym"); // change second and third elements of hobbies array
person2.hobbies.splice(1, 1, "Programming", "Gym"); // change second element of hobbies array and add new element

console.log(person);
console.log(person2);
