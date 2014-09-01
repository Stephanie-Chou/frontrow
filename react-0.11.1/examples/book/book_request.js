/** @jsx React.DOM */
Parse.initialize("6oVE1dCz5UGqdElHMO5sVgcSxf0PpZiNps1UmaEN", "j9dYo1DxhrBCQ4zPI3A8f58NxkV9ItsW0AaVOZ4t");

function showSpinner(){
  console.log("show a spinner");
}

var books = React.createClass({
  getInitialState: function(){
    return { shelf: "You should choose some books"}
  },
  getBooks: function(e){
    e.preventDefault();
    this.setState({shelf: "hellos"})
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      this.setState({shelf: 'no request to make'});
    //   if (request.readyState == 3){
    //     showSpinner();
    //   }
    //   if (request.readyState == 4) {
    //     this.setState({
    //       shelf: JSON.parse(request.responseText).items
    //     });
    //     var volumeInfos = [];
    //     var items = JSON.parse(this.state.shelf);
    //     for (var i = 0; i < items.length; i ++){
    //       volumeInfos.push(items[i].volumeInfo);
    //     }
    //   }
     }.bind(this);
    // request.open('GET', "https://www.googleapis.com/books/v1/volumes?q=react.js+javascript", true);
    // request.send(null);
  },
  render: function(){
    return (
      <form onSubmit={this.getBooks}>
        <input type="submit" value="Show Books" />
        {this.state.shelf}
      </form>
      )
  }
})

React.renderComponent(
  <books/>,
  document.getElementById('books')
);



//"https://maps.googleapis.com/maps/api/geocode/json?address=northbrook,+il&key=AIzaSyAVkmq_gu_UwQiR7znb8Bf0_mktYaEDt0E"

// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({foo: "bar"}).then(function(object) {
//   alert("yay! it worked");
// });
