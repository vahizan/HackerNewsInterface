import Enzyme from 'enzyme';
import React from 'react';
import thunk from 'redux-thunk';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import  * as storyActions from '../../../src/Containers/Story/StoryActions';
import  Story  from '../../../src/Containers/Story/Story';
import {ITEM_URL,STORY_PENDING,STORY_SUCCESS,STORY_FAILED,STORY_CLICKED} from '../../../src/Containers/Story/StoryConstants.js';
import {STORY_LIST_FAILED_MESSAGE,MOCK_URL} from '../../../src/Containers/StoryList/StoryListConstants.js';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import fetch from 'isomorphic-fetch';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('Story Actions',()=>{
	beforeEach(()=>{
		store.clearActions();
	});
	afterEach(()=>{
		fetchMock.reset();
    	fetchMock.restore();
	});

	describe("Quick Test on Story Constants ",()=>{
		test("ITEM_URL function return url with correct id",()=>{
			expect(ITEM_URL(2921506)).toEqual("https://hacker-news.firebaseio.com/v0/item/2921506.json?print=pretty");
		});
		test("Default maxitem URL if no id provided", ()=>{
			expect(ITEM_URL()).toEqual("https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty");
		});
		test("Default maxitem URL if incorrect argument type provided", ()=>{
			expect(ITEM_URL("hello")).toEqual("https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty");
		});
		test("default maxitem URL if null argument ", ()=>{
			expect(ITEM_URL(null)).toEqual("https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty");
		});});

	describe("Story Actions", ()=>{
		test("return pending action type and empty array payload", ()=>{
			const expectedActions = [
				{
					type: STORY_PENDING
				}
			];
			
			store.dispatch(storyActions.story());
			expect(store.getActions()).toEqual(expectedActions);});
		test("return failed action type and error message in payload", ()=>{
			const expectedActions = [
				{
					type: STORY_FAILED,
					payload: STORY_LIST_FAILED_MESSAGE
				}
			];
			fetchMock.getOnce(`begin:${MOCK_URL}`,
				Promise.reject({type:STORY_FAILED,payload:STORY_LIST_FAILED_MESSAGE}));
			return store.dispatch(storyActions.story()).catch((error=>{
				expect(store.getActions()).toEqual(expectedActions);
			}));});
		test("Successfully completes action and retrieves payload", ()=>{
			const expectedActions = [
				{type: STORY_PENDING},
				{
					type: STORY_SUCCESS,
					payload:{
						by : "mayoff",
					    descendants : 31,
				   	    id : 2921506,
					    kids : [ 2921983, 2921798, 2922112, 2921758, 2921764, 2922038, 2923109, 2922107, 2921923, 2922398, 2921875 ],
					    score : 226,
					    time : 1314205301,
					    title  : "Peter Norvig on a 45-year-old article about a checkers-playing program",
					    type  : "story",
					    url  : "http://blogs.scientificamerican.com/at-scientific-american/2011/08/23/systems-analysis-look-back-1966-scientific-american-article/"
					}
				}
			];

			fetchMock.getOnce(ITEM_URL(2921506),{
				body:
					{
							   by : "mayoff",
							   descendants : 31,
							   id : 2921506,
							   kids : [ 2921983, 2921798, 2922112, 2921758, 2921764, 2922038, 2923109, 2922107, 2921923, 2922398, 2921875 ],
							   score : 226,
							   time : 1314205301,
							   title  : "Peter Norvig on a 45-year-old article about a checkers-playing program",
							   type  : "story",
							   url  : "http://blogs.scientificamerican.com/at-scientific-american/2011/08/23/systems-analysis-look-back-1966-scientific-american-article/"
					},
					headers: { 'content-type': 'application/json' }
			});
			
			return store.dispatch(storyActions.story(2921506)).then(()=>{
				 expect(store.getActions()).toEqual(expectedActions);
			});});
	});
	
	

});