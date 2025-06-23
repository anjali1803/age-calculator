let birthDateInput = document.querySelector(".birthDate");
let currDateInput = document.querySelector(".currDate");
let final = document.querySelector(".final");
let button = document.querySelector("button");

// Set current date as default
let today = new Date();
let yyyy = today.getFullYear();
let mm = String(today.getMonth() + 1).padStart(2, '0');
let dd = String(today.getDate()).padStart(2, '0');
currDateInput.value = `${yyyy}-${mm}-${dd}`;

function calAge() {
  if (birthDateInput.value && currDateInput.value) {
    const birthDate = new Date(birthDateInput.value);
    const currDate = new Date(currDateInput.value);

    if (birthDate <= currDate) {
      const bYear = birthDate.getFullYear();
      const bMonth = birthDate.getMonth();
      const bDay = birthDate.getDate();
      const cYear = currDate.getFullYear();
      const cMonth = currDate.getMonth();
      const cDay = currDate.getDate();

      let year = cYear - bYear;
      let month = cMonth - bMonth;
      let day = cDay - bDay;

      if (day < 0) {
        month--;
        day += new Date(cYear, cMonth, 0).getDate();
      }

      if (month < 0) {
        year--;
        month += 12;
      }

      const Age = `<div class="final result">You are <b>${year}</b> Years, <b>${month}</b> Month and <b>${day}</b> Days Old</div>`;
      final.innerHTML = Age;
      final.classList.remove("displayNone");
    } else {
      final.innerHTML = `<div class="final warning">THE BIRTH DATE SHOULD NOT BE GREATER THAN THE CURRENT DAY</div>`;
      final.classList.remove("displayNone");
    }
  } else {
    final.innerHTML = `<div class="final warning">Please enter a valid birth date</div>`;
    final.classList.remove("displayNone");
  }
}

button.addEventListener("click", calAge);
