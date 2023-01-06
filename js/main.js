
const toggle = document.getElementById('toggle');
const enlaces = document.getElementById('enlaces');

document.onclick = function(e){

  if(e.target.id !== 'enlaces' && e.target.id !== 'toggle')
  {
    toggle.classList.remove('active')
    enlaces.classList.remove('active');
  }

}

toggle.onclick = function(){
  toggle.classList.toggle('active')
  enlaces.classList.toggle('active');
}



