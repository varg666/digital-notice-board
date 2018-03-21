import React from 'react';

const style = {
	padding: '10px',
	margin: '20px'
}
class Links extends React.Component {
	render() {
		return(
				<div style={style}>
					<a style={style} href="/Admin/Login">SIGN IN</a>
					<a style={style} href="/Admin/Register">SIGN UP</a>
					<a href="/Admin/resetPassword">RESET</a>
				</div>
			)
	}
}

export default Links;