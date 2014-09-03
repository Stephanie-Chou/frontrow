/** @jsx React.DOM */
// Parse.initialize("6oVE1dCz5UGqdElHMO5sVgcSxf0PpZiNps1UmaEN", "j9dYo1DxhrBCQ4zPI3A8f58NxkV9ItsW0AaVOZ4t");

function showSpinner(){
  console.log("show a spinner");
}

var books = React.createClass({
  getInitialState: function(){
    return { shelf: "You should choose some books"}
  },
  volumeRender: function(volume){
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">{volume.title}</h3><vote/><p>Written By {volume.authors[0]}</p>
        </div>
        <div className="panel-body">
          {volume.description}
        </div>
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
          var volume = items[i].volumeInfo;
          var volumeRendered = this.volumeRender(volume);
          volumes.push(volumeRendered);
        }
        this.setState({
          shelf: volumes,
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
    return {
      hover: false,
      count: 0
    };
  },
  handleClick: function(event) {
    this.setState({
      count: this.state.count+1
    });
  },
  handleMouseOver: function(event){
    this.setState({
      hover: true
    });
  },
  handleMouseOut: function(event){
    this.setState({
      hover: false
    });
  },
  render: function() {
    var text = this.state.hover ? "upVoted glyphicon glyphicon-book" : "notVoted glyphicon glyphicon-book";
    return (<div className = "vote"><span onMouseOver={this.handleMouseOver} onMouseOut = {this.handleMouseOut} onClick= {this.handleClick} className={text}></span><span className="badge">{this.state.count}</span></div>);
  }
});


//"https://maps.googleapis.com/maps/api/geocode/json?address=northbrook,+il&key=AIzaSyAVkmq_gu_UwQiR7znb8Bf0_mktYaEDt0E"

// var TestObject = Parse.Object.extend("TestObject");
// var testObject = new TestObject();
// testObject.save({foo: "bar"}).then(function(object) {
//   alert("yay! it worked");
// });
