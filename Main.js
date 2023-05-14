// Set the date we're counting down to
var countDownDate = new Date("May 14, 2023 11:15:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  if (distance < 0) {
    document.getElementById("header").innerHTML = "";

    clearInterval(countdownfunction);

    countingEnd();

    return;
  }
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
}, 1000);

function countingEnd() {
  //document.getElementById('countdown').innerHTML = 'Expired';
  document.getElementById("hiddenDiv").style.display = 'block';
  document.getElementById("hiddenDiv").src = "http://youtube.com/channel/UCDDw7QXqlFc8Fw6oUQgp_MQ/live";
}

