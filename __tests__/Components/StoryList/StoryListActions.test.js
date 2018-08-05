import Enzyme from 'enzyme';
import React from 'react';
import thunk from 'redux-thunk';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import  * as storyListActions from '../../../src/Components/StoryList/StoryListActions';
import { Story } from '../../../src/Components/Story/Story';
import {STORY_LIST_URL,STORY_LIST_SUCCESS,STORY_LIST_PENDING,STORY_LIST_FAILED,MOCK_URL} from '../../../src/Components/StoryList/StoryListConstants.js';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import fetch from 'isomorphic-fetch';
//import moxios from 'moxios'
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('StoryList Actions',()=>{
	beforeEach(()=>{
		store.clearActions();
	});
	afterEach(()=>{
		fetchMock.reset();
    	fetchMock.restore();
	});
	test("return pending action type and empty array payload", ()=>{
		const expectedActions = [
			{
				type: STORY_LIST_PENDING
			}
		];
		
		store.dispatch(storyListActions.stories());
		expect(store.getActions()).toEqual(expectedActions);
		
	});
	test("return data from successful fetch ", ()=>{
		//payload:[17691248, 17691165, 17686422, 17689683, 17688935, 17688324, 17686624, 17686516, 17689188, 17691014, 17688599]		
		const expectedActions = [
			{type: STORY_LIST_PENDING},
			{
				type: STORY_LIST_SUCCESS,
				payload:{
					payload:["do something"]
				}
			}
		];
		fetchMock.getOnce(STORY_LIST_URL, 
			{ body: 
				{ payload: ["do something"] },
				headers: { 'content-type': 'application/json' }
			}
		);
		return store.dispatch(storyListActions.stories()).then(()=>{
			expect(store.getActions()).toEqual(expectedActions);
		}).catch(error => error);
	});
});