import React from 'react';

class ErrorModal extends React.Component {

	componentDidMount(){
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
		// $('#error-modal').foundation('open');
	}

	render() {
		var {title, message} = this.props;
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">
						Ok
					</button>
				</p>
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