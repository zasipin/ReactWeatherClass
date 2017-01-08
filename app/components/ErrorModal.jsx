import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends React.Component {

	componentDidMount(){
		var {title, message} = this.props;
		var modalMarkup = (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">
						Ok
					</button>
				</p>
			</div>
		);

		var $modal = $(ReactDOMServer.renderToString(modalMarkup));
		$(ReactDOM.findDOMNode(this)).html($modal);

		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
		// $('#error-modal').foundation('open');
	}

	render() {
		return (
			<div>
			</div>
		)
	}
};

ErrorModal.defaultProps = {
	title: "Error"
};

ErrorModal.defaultProps = {
	title: React.PropTypes.string,
	message: React.PropTypes.string.isRequired
};

export default ErrorModal;
