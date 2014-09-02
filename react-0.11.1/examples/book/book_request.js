/** @jsx React.DOM */
Parse.initialize("6oVE1dCz5UGqdElHMO5sVgcSxf0PpZiNps1UmaEN", "j9dYo1DxhrBCQ4zPI3A8f58NxkV9ItsW0AaVOZ4t");

function showSpinner(){
  console.log("show a spinner");
}

var books = React.createClass({
  getInitialState: function(){
    return { shelf: "You should choose some books"}
  },
  volumeRender: function(volume){
    return (
      <div>
      <h2>{volume.title}</h2>
      <p>Written By {volume.authors[0]}</p>
      <p>{volume.description}</p>
      </div>
      );
  },
  getBooks: function(e){
    e.preventDefault();
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 3){
        showSpinner();
      }
      if (request.readyState == 4) {
        items = JSON.parse(request.response).items
        var volumes = [];
        for (var i = 0; i < items.length; i ++){
          // var volume = new Parse.Object("Volume");
          // volume._hashedJSON = this.state.shelf[i].volumeInfo
          var volume = items[i].volumeInfo;
          var volumeRender = this.volumeRender(volume);
          volumes.push(volumeRender);
        }
        this.setState({
          shelf: volumes,
          books: <p>books</p>
        });
      }
     }.bind(this);
    request.open('GET', "https://www.googleapis.com/books/v1/volumes?q=harry+potter", true);
    request.send(null);
  },
  render: function(){
    return (
      <form onSubmit={this.getBooks}>
        <input type="submit" value="Show Books" />
        {this.state.shelf}
        {this.state.books}
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
