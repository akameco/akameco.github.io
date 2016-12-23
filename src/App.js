import React, { Component } from 'react';
import './App.css';

const MyLink = ({href, label}) => (
	<a href={href} className="MyLink">
		{label}
	</a>
)

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="header">
					<div className="headerTop">
						<div className="title">
							赤芽
						</div>
						<div className="subTitle">
							akameco
						</div>
					</div>
				</div>
				<div className="links">
					<MyLink href="https://github.com/akameco" label="GitHub"/>
					<MyLink href="https://twitter.com/akameco" label="Twitter"/>
					<MyLink href="http://qiita.com/akameco" label="qiita"/>
					<MyLink href="https://www.npmjs.com/%7Eakameco" label="npm"/>
				</div>
			</div>
		);
	}
}

export default App;
