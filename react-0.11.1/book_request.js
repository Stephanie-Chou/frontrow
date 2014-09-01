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


request.open('GET', "https://www.googleapis.com/books/v1/volumes?q=react.js+javascript", true);
request.send(null);

//"https://maps.googleapis.com/maps/api/geocode/json?address=northbrook,+il&key=AIzaSyAVkmq_gu_UwQiR7znb8Bf0_mktYaEDt0E"


// var books = React.createClass({
//   getInitialState: function(){
//     return { shelf: "no books"}
//   },
//   handleChange: function(event){
//     this.setState({})
//   }
// })


    // React.renderComponent(
    //   /** @jsx React.DOM */
    //   request.responseText,
    //   document.getElementById('books')
    // );
