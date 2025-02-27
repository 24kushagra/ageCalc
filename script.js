const btnElem = document.getElementById("btn");
const bdayElem = document.getElementById("birthday");
const resultElem = document.getElementById("result");

function calculateAge() {
  const birthdayValue = bdayElem.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultElem.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ){
    age--;
  }

  return age;
}

btnElem.addEventListener("click", calculateAge);