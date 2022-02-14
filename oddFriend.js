//Problem-4 : Odd Friend

function oddFriend(friends) {
  if (typeof friends != "object") {
    return "Please enter friends name";
  }
  for (let i = 0; i < friends.length; i++) {
    const name = friends[i];
    if (name.length % 2 != 0) {
      let oddName = name;
      return oddName;
    }
  }
}

const friendsName = [
  "Anas",
  "Rayyan",
  "Ahmed",
  "Shoyeb",
  "Abdullah",
  "Daniel",
  "Iftekhar",
  "Adnan",
  "Saad",
];

const oddResult = oddFriend(friendsName);
console.log(oddResult);
