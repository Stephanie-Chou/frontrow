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
      <div className="inline">
        <h2>{volume.title}</h2><vote/>
      </div>
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
     //"https://www.googleapis.com/books/v1/volumes?q=harry+potter"
    request.open('GET', "harry_potter.txt", true);
    request.send(null);
  },
  render: function(){
    return (
      <form onSubmit={this.getBooks}>
        <input className="btn" type="submit" value="Show Books" />
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


var vote = React.createClass({
  getInitialState: function() {
    return {up: false,
      count: 0
    };
  },
  handleClick: function(event) {
    this.setState({
      count: this.state.count+1
    });
  },
  handleHover: function(event){
    this.setState({
      hover: !this.state.hover
    });
  },
  render: function() {
    var text = this.state.hover ? "upVoted icon-arrow-up" : "notVoted icon-arrow-up";
    return (<p><i onMouseOver={this.handleHover} onClick= {this.handleClick} className={text}></i>{this.state.count}</p>);
  }
});


//"https://maps.googleapis.com/maps/api/geocode/json?address=northbrook,+il&key=AIzaSyAVkmq_gu_UwQiR7znb8Bf0_mktYaEDt0E"

// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({foo: "bar"}).then(function(object) {
//   alert("yay! it worked");
// });
