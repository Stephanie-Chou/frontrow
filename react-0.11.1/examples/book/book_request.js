/** @jsx React.DOM */


function showSpinner(){
  console.log("show a spinner");
}

var books = React.createClass({
  getInitialState: function(){
    return { shelf: "You should choose some books"}
  },
  getBooks: function(){
    console.log("getting books");
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 3){
        showSpinner();
        console.log(this);
      }
      if (request.readyState == 4) {
        this.setState({
          shelf: request.responseText
        });
        // JSON.parse(request.responseText)
      }
    }.bind(this);
    request.open('GET', "https://www.googleapis.com/books/v1/volumes?q=react.js+javascript", true);
    request.send(null);
  },
  render: function(){

    return (<p><input type="submit" value="Show Books" onsubmit={this.getBooks}/>{this.state.shelf}</p>
      )
  }
})

React.renderComponent(
  <books/>,
  document.getElementById('books')
);



//"https://maps.googleapis.com/maps/api/geocode/json?address=northbrook,+il&key=AIzaSyAVkmq_gu_UwQiR7znb8Bf0_mktYaEDt0E"





    // React.renderComponent(
    //   /** @jsx React.DOM */
    //   request.responseText,
    //   document.getElementById('books')
    // );


