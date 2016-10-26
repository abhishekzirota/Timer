var tmin;
var tsec;
var x;
var y;
var time = document.getElementById("t");

function startSec(){
      tsec--;
      if(tsec == -1 && tmin > 0){
            tsec = 60;
            tmin--;
      }else if (tmin == 0 && tsec == -1) {
            tsec = 60;
      }else if (tmin == 0 && tsec == 0) {
            clearInterval(x);
            alert("Done!");
      }
      time.innerHTML = tmin + ":" + tsec;
}
function initiate(){
      tmin = document.getElementById("min").value;
      tsec = document.getElementById("sec").value;
      time.innerHTML = tmin + ":" + tsec;
      x = setInterval(startSec, 1000);
}
