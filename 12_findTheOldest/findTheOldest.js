const findTheOldest = function(people) {
  
  return people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currAge = getAge(current.yearOfBirth, current.yearOfDeath);
    return oldestAge < currAge ? current : oldest;
  });
};

function getAge(birth, death) {
  const currYear = new Date().getFullYear();
  if (!death) {
    death = currYear;
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
