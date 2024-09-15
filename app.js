 const body = document.querySelector('body'),
  hourhand = document.querySelector('.hour'),
  minuteHand = document.querySelector('.minute'),
  secondHand  = document.querySelector('.second'),
  modeSwitch = document.querySelector('.mode-switch');
if(localStorage.getItem("mode")=== "Dark Mode"){
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}
//dark mode
modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");
    const DarkMode = body.classList.contains("dark");
    modeSwitch.textContent = DarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", DarkMode ? "Dark Mode" : "Light Mode" )
})


const updateTime = () => {
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60)* 360,
    minToDeg = (date.getMinutes() / 60)* 360,
     hrToDeg= (date.getHours() / 12)* 360;

   secondHand.style.transform = `rotate(${secToDeg}deg)`;
   minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourhand.style.transform = `rotate(${hrToDeg}deg)`;
   
};

setInterval(updateTime, 1000);
updateTime()
