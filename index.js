function calculateBMR() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  let bmr;
  if (gender === "male") {
    bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
  } else if (gender === "female") {
    bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
  }

  result.innerHTML = `<p>Il tuo BMR equivale a ${bmr}</p>`;

  console.log(bmr);
}
