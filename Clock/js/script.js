const second = document. querySelector('.s'),
minut = document.querySelector(".m"),
hour = document.querySelector('.h'),
minHour = document.querySelector( '.hours'),
minMinut = document.querySelector(' .minutes');




function clock() {
  let data = new Date(),
  seconds = data.getSeconds()*6,
  minutes = data.getMinutes()*6,
  hours = data.getHours()*30;


second.style.transform = `rotate(${seconds}deg)`
minut.style.transform = `rotate(${minutes}deg)`
hour.style.transform = `rotate(${hours}deg)`

  setTimeout(() => {
    clock()
  }, 500);



 if (data.getHours() < 10) {
  minHour.innerHTML = '0' + data.getHours()
 }

 else{
  minHour.innerHTML = data.getHours()
 }

 if ( data.getMinutes() < 10) {
  minMinut.innerHTML = '0' + data.getMinutes()
 }

 else{
  minMinut.innerHTML = data.getMinutes()
 }

}
clock()


const tabsItem = document.querySelectorAll('.tabsItem'),
tabsContentItem = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener('click',()=>{
    tabsItem.forEach((item,j) => {
      item.classList.remove("active")
      tabsContentItem[j].classList.remove('active')
    });
    tabsItem[i].classList.add("active")
    tabsContentItem[i].classList.add("active")
  })
}







const btn = document.querySelector( '.stopwatch__btn'),
btnSec = document.querySelector( '.stopwatch__seconds'),
btnMin = document.querySelector( '.stopwatch__minutes'),
btnHour = document.querySelector( '.stopwatch__hours');


btn.addEventListener('click',()=>{
  if (btn.innerHTML == 'start') {
    btn.innerHTML = 'stop'
  }
  else if (btn.innerHTML == 'stop') {
    btn.innerHTML = 'clear'
  }
  else if (btn.innerHTML == 'clear'){
    btn.innerHTML = 'start'
  }
})
function watch() {
  if (btn.innerHTML == 'stop') {
    btnSec.innerHTML++
    if (btnSec.innerHTML > 59) {
      btnSec.innerHTML = 0
      btnMin.innerHTML++
       if (btnMin.innerHTML > 59) {
        btnMin.innerHTML = 0
        btnHour.innerHTML++
      }
    }
    
  }
   
  else if (btn.innerHTML == 'start'){
    btnSec.innerHTML = 0
    btnMin.innerHTML = 0
    btnHour.innerHTML = 0 
  }
  setTimeout(() => {
    watch()
  }, 1000);
}
watch()


