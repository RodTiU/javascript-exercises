const findTheOldest = function (people) {
  const actualYear = new Date().getFullYear();
  const ageOfPeople = people.map((person) => {
    if (person.yearOfDeath === undefined) {
      person["age"] = actualYear - person.yearOfBirth;
      return person;
    } else {
      person["age"] = person.yearOfDeath - person.yearOfBirth;
      return person;
    }
  });
  const oldestPerson = ageOfPeople.reduce((previousPerson, currentPerson) => {
    if (previousPerson.age > currentPerson.age) {
      return previousPerson;
    } else return currentPerson;
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
