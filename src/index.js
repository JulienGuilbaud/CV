console.log("%cJulien GUILBAUD", "color: white; font-size: 30px; background: linear-gradient(to right, red, green, blue, indigo, violet); padding: 10px; border-radius: 5px;");

let i = 0;
setInterval(function() {
    const colors = ['red', 'green', 'blue', 'indigo', 'violet'];
    const color = colors[i++ % colors.length];
    console.log(`%cContactez-moi`, `color: white; font-size: 30px; background: ${color}; padding: 10px; border-radius: 5px;`);
}, 10000);



const mobileacc = document.getElementsByClassName("heading");


for (i = 0; i < mobileacc.length; i++) {
  mobileacc[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}

