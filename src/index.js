import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {storyList} from './Components/StoryList/StoryListReducers';
import {storyValues} from './Components/Story/StoryReducers';

const logger = createLogger();
const reducer = combineReducers({storyList,storyValues});
const store = createStore(reducer,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
		<Provider store={store} >
			<App />
		</Provider>,
	
	document.getElementById('root'));
registerServiceWorker();
