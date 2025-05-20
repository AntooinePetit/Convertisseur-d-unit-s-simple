function convert(from, to, value){
  if (from === to) {
    return value;
  } 
  if (from === "m" && to === "ft") {
    return value * 3.28084;
  }
  if (from === "ft" && to === "m") {
    return value / 3.28084;
  }
  if (from === "C" && to === "F") {
    return (value * 9) / 5 + 32;
  }
  if (from === "F" && to === "C") {
    return (value - 32) * 5 / 9;
  }
  if (from === "€" && to === "$") {
    return value * 1.12;
  }
  if (from === "$" && to === "€") {
    return value / 1.12;
  }
  if (from === "£" && to === "$") {
    return value * 1.33;
  }
  if (from === "$" && to === "£") {
    return value / 1.33;
  }
  if (from === "€" && to === "£") {
    return value * 0.84;
  }
  if (from === "£" && to === "€") {
    return value / 0.84;
  }
  return "Erreur : Conversion impossible";
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const from = document.querySelector("#from-unit").value;
  const to = document.querySelector("#to-unit").value;
  const value = document.querySelector("#from").value;
  document.querySelector("#result").textContent = convert(from, to, value);
})