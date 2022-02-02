const findTheOldest = function (people) {
  const actualYear = new Date().getFullYear();
  for (let i = 0, len = people.length; i < len; i++) {
    if (people[i].yearOfDeath === undefined) {
      let birth = people[i].yearOfBirth;
      people[i]["age"] = actualYear - birth;
    } else {
      let birth = people[i].yearOfBirth;
      let death = people[i].yearOfDeath;
      people[i]["age"] = death - birth;
    }
  }
  oldestPerson = people.reduce((previousPerson, currentPerson) => {
    if (previousPerson.age > currentPerson.age) {
      return previousPerson;
    } else return currentPerson;
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
