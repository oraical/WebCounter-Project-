var count = document.getElementById('count');
var buttons = document.querySelectorAll('.sbtn');
let value=0;
buttons.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{

  var flag = e.currentTarget.classList;
  if(flag.contains('de')){
    value--;
  
  }
  else if (flag.contains('in')){
     value++
  }
  else {
    value = 0;
  }
  if (value<0) {
    count.style.color = 'red';
  }
  else if (value>0) {
    count.style.color = 'darkgreen';
  }
  else{
    count.style.color= 'black';
  }

  count.innerHTML= value;
  
  })
})