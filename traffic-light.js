const lights = [
  document.getElementById('red-light'),
  document.getElementById('yellow-light'),
  document.getElementById('green-light'),
]; 

let current = 0;

function cycle() {
  for (let i = 0; i < lights.length; i++) {
    lights[i].className = "light";
  } 


lights[current].className = "light on";

  current++;

  if (current === 3) {
    current = 0;
  }
} 

setInterval(cycle, 2000);

cycle();
