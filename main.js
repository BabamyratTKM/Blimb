// var start = document.getElementById("Start");
// var Start1 = document.getElementById("Start1");
// var exercise = document.getElementsByClassName("exercise");
// for (var i=0; i < exercise.length; i++){
//       start.addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className  = current[0].className.replace("active");
//         this.className +="active";
//       })
// }
const fore = document.getElementById("fore"); console.log(fore);
const none = document.getElementById("none"); 
const none3 = document.getElementById("none3"); 
const none1 = document.getElementById("none1");console.log(none1);
const start = document.getElementById("start");
const exercises = document.querySelectorAll(".exercise");
const start1 = document.getElementById("start1");
const timer = document.querySelectorAll("#timer");
const nav = document.getElementById("nav");
const footer = document.getElementById("footer");
const img1 = document.querySelector(".big_eyes");
const volumeSlider = document.getElementById("slide")


let img = document.querySelector(".mini_eyes");




none.addEventListener("click",function(){
  footer.style.display="none"
    img1.classList.add('disabled');
  setTimeout(() => {
    img.style.opacity = '1';
      img.classList.add('active');
  },400)

 

  

  setTimeout(() => {
    img1.style.opacity="0"
  },200)
  setTimeout(() => {
    
     img1.classList.remove('disabled'); 
  img.classList.remove('active');
  },2000)

 nav.style.display = "none"
  fore.style.display="block";

})
 
// console.log(timer);
// console.log(start);
// console.log(exercises);




function playExer(index) {
  
  
  var sec;
  let time = parseInt(exercises[index].getAttribute("data-time"));
  let timeIn = time;
  console.log(timeIn);
  start.style.display = "none";
  start1.style.display = "none";
  
  let exer = setInterval(() => {
    timeIn--;
    
    sec= sec + 1
    
    timer[index].innerHTML = timeIn ; 
    
    
    console.log(exercises.length);
    console.log(index);
    
    exercises[index].classList.add("active");
    
    if (timeIn == 0) {
      
      clearInterval(exer);
      exercises[index].classList.remove("active");
      if (index+1 == exercises.length){
        console.log("finshed");
        window.location.href="";

        return;
      }
      volumeSlider.addEventListener("change", ()=>{
        console.log(+volumeSlider.value)
       if (k === 1) {
         console.log(typeof(+(+volumeSlider.value).toFixed(2)))
         audio1.volume = +(+volumeSlider.value).toFixed(2)
         audio1.play()
       }
       if (s === 1) {
        audio2.volume =+(+volumeSlider.value).toFixed(2);
        audio2.play();
     
       }
       if (l === 1) {
         audio3.volume = +(+volumeSlider.value).toFixed(2);
         audio3.play();
       }
     
     })
      if (k === 1) {
        audio1.volume = +(+volumeSlider.value).toFixed(2)
    audio1.play()
      }
      if (s === 1) {
        console.log( +(+volumeSlider.value).toFixed(2));
        audio2.volume = +(+volumeSlider.value).toFixed(2)
        audio2.play()
      }
      if (l === 1) {
        console.log(+(+volumeSlider.value).toFixed(2));
        audio3.volume = +(+volumeSlider.value).toFixed(2)
        audio3.play()
      }
      if (index+1 == exercises.length) {  
        start.style.display = "block";
        start1.style.display = "block";
 return;
     
}
      playExer(index + 1);
  
      
    }
    
  }, 1000);
  sec = 0
}



start.addEventListener("click", function() {
  playExer(0);
  
});

const audio_panel = document.getElementById("audio_panel");
const volume_list = document.getElementById("volume_list");
console.log(volume_list)
console.log(audio_panel)


audio_panel.addEventListener("click", function(){
  
  console.log(volume_list.classList);
  if (volume_list.classList.contains("active")) {
    volume_list.classList.remove("active");
  
  } else{
    volume_list.classList.add("active")
  
  }
  
  // volume_list.classList.toggle('active')


    })
  

 const volume_panel = document.getElementById("volume_panel");
 const slide_line = document.getElementById("slide_line");
 const re = document.getElementById("re");
 console.log(volume_panel);
 volume_panel.addEventListener("click",function(){
      slide_line.classList.toggle("active")

 
 })
 const first_voice = document.getElementById("first_voice");
 const second_voice = document.getElementById("second_voice");
 const three_voice = document.getElementById("three_voice");
 const close_muted = document.getElementById("close_muted");

 const audio_panel1=document.getElementById("audio_panel1");
 const audio_panel2  = document.getElementById("audio_panel2");
 const audio_panel3 = document.getElementById("audio_panel3");
 const audio_panel0 = document.getElementById("audio_panel0");

console.log(audio_panel);
console.log(audio_panel1);
console.log(audio_panel2);
console.log(audio_panel3);
console.log(audio_panel0);

  audio_panel1.addEventListener("click", function(){
  
  console.log(volume_list.classList);
  if (volume_list.classList.contains("active")) {
    volume_list.classList.remove("active");
  
  } else{
    volume_list.classList.add("active")
  
  } 
})
audio_panel2.addEventListener("click", function(){
  console.log((+volumeSlider.value).toFixed(2));
  console.log(volume_list.classList);
  if (volume_list.classList.contains("active")) {
    volume_list.classList.remove("active");
  
  } else{
    volume_list.classList.add("active")
  
  } 
})
audio_panel3.addEventListener("click", function(){
  
  console.log(volume_list.classList);
  if (volume_list.classList.contains("active")) {
    volume_list.classList.remove("active");
  
  } else{
    volume_list.classList.add("active")
  
  } 
})
audio_panel0.addEventListener("click", function(){
  
  console.log(volume_list.classList);
  if (volume_list.classList.contains("active")) {
    volume_list.classList.remove("active");
  
  } else{
    volume_list.classList.add("active")
  
  } 
})
 const audio1  = document.getElementById("audio1");
 const audio2 = document.getElementById("audio2");
 const audio3 = document.getElementById("audio3");
  var k=1,s=0,l=0;
 first_voice.addEventListener("click", function(){
audio_panel0.classList.add("active");
  audio_panel.style.display = "none";
  audio_panel1.classList.remove("active");
  audio_panel2.classList.remove("active");
  audio_panel3.classList.remove("active");
  k=1;
  s=0;
  l=0;
  audio1.volume = +(+volumeSlider.value).toFixed(2);
   audio1.play();
 })
 second_voice.addEventListener("click", function(){
  audio_panel1.classList.add("active");
  audio_panel.style.display = "none";
  audio_panel2.classList.remove("active");
  audio_panel3.classList.remove("active");  
  audio_panel0.classList.remove("active"); 
 s=1;  
 k=0;
 l=0;
 audio2.volume = +(+volumeSlider.value).toFixed(2);
 audio2.play();
});
three_voice.addEventListener("click", function(){
  console.log(+(+volumeSlider.value).toFixed(2));
 audio_panel2.classList.add("active");
 audio_panel.style.display = "none";
 audio_panel1.classList.remove("active");
 audio_panel3.classList.remove("active");
 audio_panel0.classList.remove("active"); 
 l=1;
 k=0;
 s=0;
      k=0
      audio3.volume = +(+volumeSlider.value).toFixed(2);
      audio3.play();
});
close_muted.addEventListener("click", function(){
   audio_panel3.classList.add("active");
   audio_panel.style.display = "none";
   audio_panel1.classList.remove("active");
   audio_panel2.classList.remove("active");
   audio_panel0.classList.remove("active"); 
  k=0;
  s=0;
  l=0;
})

const language_panel = document.getElementById("language_panel");
const language_panel1 = document.getElementById("language_panel1");
const language_panel2 = document.getElementById("language_panel2"); 
const eng = document.querySelectorAll("#eng");
const ru = document.querySelectorAll("#ru");
console.log(eng);
console.log(ru); 

language_panel.addEventListener("click",function(){
  language_panel1.style.display="block";
  language_panel.style.display="none";
  for (let i=0;i<ru.length; i++){
  ru[i].style.display = "none"
  }
  for( let m=0;m < eng.length; m++){
  eng[m].style.display="block"
  }

})
m=0;
i=0;
language_panel1.addEventListener("click",function(){
 language_panel.style.display="block";
 language_panel1.style.display="none";
 for (m=0;m < eng.length; m++){
 eng[m].style.display="none"; }
 for (i=0; i < eng.length; i++){
  ru[i].style.display="block";}
})

img.addEventListener("click",function(){
  img.classList.add('disabled');
  img.style.opacity="0"
  
  setTimeout(() => {  
     img1.style.opacity="1"
   img1.classList.add("active");
    
  },400)
setTimeout(() => {
    window.location=""
},2000)

  
})
volumeSlider.addEventListener("change", ()=>{
  console.log(+volumeSlider.value)
 if (k === 1) {
   console.log(typeof(+(+volumeSlider.value).toFixed(2)))
   audio1.volume = +(+volumeSlider.value).toFixed(2)
   audio1.play()
 }
 if (s === 1) {
  audio2.volume =+(+volumeSlider.value).toFixed(2);
  audio2.play();

 }
 if (l === 1) {
   audio3.volume = +(+volumeSlider.value).toFixed(2);
   audio3.play();
 }

})


console.log( 1 === 1.00)