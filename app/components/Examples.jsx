var React = require('react');
import {Link} from 'react-router';

var Examples = React.createClass({
  render: function () {
    return (
    	<div>
      		<h1 className="text-center">Examples Component!</h1>
      		<p>Here are few examples to try out:</p>
      		<ol>
      			<li>
      				<Link to="/?location=Philadelphia">Philadelphia, CA</Link>
      			</li>
      			<li>
      				<Link to="/?location=Rio">Rio, Brasil</Link>
      			</li>
      		</ol>
      	</div>	
    )
  }
});

module.exports = Examples;
