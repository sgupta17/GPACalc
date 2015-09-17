function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if (h>12) {
      document.getElementById('txt').innerHTML = (h-12)+":"+m+":"+s;
    }
    else {
      document.getElementById('txt').innerHTML = h+":"+m+":"+s;
    }
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
