const kebabize = (str) => {
  return str.replace(/[0-9]/g, '').split(/(?=[A-Z])/).join('-').toLowerCase();
};

console.log(kebabize('camelsHaveThreeHumps')) // camels-have-three-humps
console.log(kebabize('camelsHave3Humps')) // camels-have-humps