var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//     return (
//       <div>
// 	       <h3>Temperature is {temp} in {location}</h3>
//       </div>
//     );
//   }
// });

// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//     return (
//       <div>
//          <h3>Temperature is {temp} in {location}</h3>
//       </div>
//     );
// }

var WeatherMessage = ({temp, location}) => {
    return (
      <div>
         <h3 className="text-center">Temperature is {temp} in {location}</h3>
      </div>
    );
}


module.exports = WeatherMessage;