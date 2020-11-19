import React from "react";

// React-Bootstrap
import { Toast } from "react-bootstrap";

const style = {
	toast: {
		float: "right",
	},
};

export default function AlertToast(props) {
	const { setShow, show, alertData } = props;
	const { status, data } = alertData;

	let alertTitle;
	let alertText;

	if (status !== 200) {
		alertTitle = "Error";
		alertText = "There was an issue";
	} else {
		alertTitle = "Success";
		alertText = `${data.name}, has been sold.`;
	}

	return (
		<div style={style.toast}>
			<Toast
				onClose={() => setShow(false)}
				show={show}
				delay={3000}
				autohide
			>
				<Toast.Header>
					<strong className="mr-auto">{alertTitle}</strong>
				</Toast.Header>
				<Toast.Body>{alertText}</Toast.Body>
			</Toast>
		</div>
	);
}
