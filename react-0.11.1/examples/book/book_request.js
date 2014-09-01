/** @jsx React.DOM */


function showSpinner(){
  console.log("show a spinner");
}
function computeBallmerPeak(x) {
  // see: http://ask.metafilter.com/76859/Make-a-function-of-this-graph-Thats-like-an-antigraph
  x = x * 100;
  return (
    1-1/(1+Math.exp(-(x-6)))*.5 + Math.exp(-Math.pow(Math.abs(x-10), 2)*10)
  ) / 1.6;
}

var BallmerPeakCalculator = React.createClass({
  getInitialState: function() {
    return {bac: 0};
  },
  handleChange: function(event) {
    console.log(this);
    console.log(event);
    this.setState({bac: event.target.value});
  },
  render: function() {
    var pct = computeBallmerPeak(this.state.bac);
    if (isNaN(pct)) {
      pct = 'N/A';
    } else {
      pct = (100 - Math.round(pct * 100)) + '%';
    }
    return (
      <div>
        <p>Credit due to <a href="http://xkcd.com/323/">xkcd</a>.</p>
        <h4>Compute your Ballmer Peak:</h4>
        <p>
          If your BAC is{' '}
          <input type="text" onChange={this.handleChange} value={this.state.bac} />
          {', '}then <b>{pct}</b> of your lines of code will be bug free.
        </p>
      </div>
    );
  }
});

var books = React.createClass({
  getInitialState: function(){
    return { shelf: "You should choose some books"}
  },
  render: function(){
    return (<p>{this.state.shelf}</p> )
  }
})

function parseResponse(json){
}
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
   if (request.readyState == 3){
    showSpinner();
    console.log(this);
   }
  if (request.readyState == 4) {

    // alert(request.responseText);

    React.renderComponent(
      <books/>,
      document.getElementById('books')
    );
  }
}


request.open('GET', "https://www.googleapis.com/books/v1/volumes?q=react.js+javascript", true);
request.send(null);

//"https://maps.googleapis.com/maps/api/geocode/json?address=northbrook,+il&key=AIzaSyAVkmq_gu_UwQiR7znb8Bf0_mktYaEDt0E"





    // React.renderComponent(
    //   /** @jsx React.DOM */
    //   request.responseText,
    //   document.getElementById('books')
    // );


