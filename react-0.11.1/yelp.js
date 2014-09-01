function showSpinner(){
  console.log("show a spinner");
}
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
   if (request.readyState == 3){
      showSpinner();
     console.log(this);
   }
  if (request.readyState == 4) {
    JSON.parse(request.response)
    alert(request.responseText);
  }
}
request.open('GET', "https://maps.googleapis.com/maps/api/geocode/json?address=northbrook,+il&key=AIzaSyAVkmq_gu_UwQiR7znb8Bf0_mktYaEDt0E", true);
request.send(null);

