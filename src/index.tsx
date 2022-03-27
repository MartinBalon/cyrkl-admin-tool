import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { Provider } from 'react-redux';
import store from 'store';
import { color } from 'theme';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<div style={{ backgroundColor: color.backgroundColor, height: '100vh' }}>
				<App />
			</div>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
