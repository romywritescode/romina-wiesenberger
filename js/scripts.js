<li><a href="javascript:void(0);" class="icon" onclick="menuToggle()"><i class="fas fa-bars"></i></a></li>
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }