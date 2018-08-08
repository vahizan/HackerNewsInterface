import Enzyme from 'enzyme';
import React from 'react';
import thunk from 'redux-thunk';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import  * as storyListActions from '../../../src/Components/StoryList/StoryListActions';
import { Story } from '../../../src/Components/Story/Story';
import {STORY_LIST_URL,STORY_LIST_SUCCESS,STORY_LIST_PENDING,STORY_LIST_FAILED,STORY_LIST_CLICKED,STORY_LIST_FAILED_MESSAGE,MOCK_URL,ITEM_URL} from '../../../src/Components/StoryList/StoryListConstants.js';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import fetch from 'isomorphic-fetch';

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
	
	describe("Testing stories() function ", ()=>{
		test("return pending action type and empty array payload", ()=>{
		const expectedActions = [
			{
				type: STORY_LIST_PENDING
			}
		];
		
		store.dispatch(storyListActions.stories());
		expect(store.getActions()).toEqual(expectedActions);
		
		});
		test("return failed action type and error payload", ()=>{
			const expectedActions = [
			    {type: STORY_LIST_PENDING},
				{
					type: STORY_LIST_FAILED,
					payload: STORY_LIST_FAILED_MESSAGE
				}
			];
			
			fetchMock.getOnce(`begin:${MOCK_URL}`, Promise.reject({type:STORY_LIST_FAILED,payload:STORY_LIST_FAILED_MESSAGE}));
			return store.dispatch(storyListActions.stories()).catch((error)=>{
				expect(error).toEqual(expectedActions);
			});
		});
		test("return data from successful fetch ", ()=>{
			//payload:[17691248, 17691165, 17686422, 17689683, 17688935, 17688324, 17686624, 17686516, 17689188, 17691014, 17688599]		
			const expectedActions = [
				{type: STORY_LIST_PENDING},
				{
					type: STORY_LIST_SUCCESS,
					payload:["do something"]
				}
			];
			fetchMock.getOnce(STORY_LIST_URL, 
				{ body: ["do something"] ,
				  headers: { 'content-type': 'application/json' }
				}
			);
			return store.dispatch(storyListActions.stories()).then(()=>{
				expect(store.getActions()).toEqual(expectedActions);
			}).catch(error => error);
		});});
	describe("Testing storiesData() function",()=>{
		describe.skip(" validateArray() edge cases", ()=>{
			let expectedFailure = {
					type: STORY_LIST_FAILED,
					payload: STORY_LIST_FAILED_MESSAGE
			};
			test("reject when no arguments provided", ()=>{
			 	expect(storyListActions.validateArray()).toEqual(false);
			});
			test("reject  - non array argument", ()=>{
			 	expect(storyListActions.validateArray("hello")).toEqual(false);
			});
			test("reject  - empty array", ()=>{
			 	expect(storyListActions.validateArray([])).toEqual(false);
			});
			test("reject  - non integer array elements", ()=>{
				expect(storyListActions.validateArray([1,"23","red",false])).toEqual(false);
				/*expect.assertions(1);
			 	return storyListActions.storyData([1,"23","red",false]).catch(error=>{
			 		 expect(error).toEqual(expectedFailure);
			 	});*/
			});
			test("reject  - array must only contain numbers", ()=>{
				expect(storyListActions.validateArray([1,"23","12",5])).toEqual(false);
			});
			test("reject  - array must only contain positive numbers", ()=>{
			 	expect(storyListActions.validateArray([-1,-2,-9,-5])).toEqual(false);

			});
			test("true - array only contains numbers", ()=>{
				expect(storyListActions.validateArray([1,2,3,4,5])).toEqual(true);
			});});
		describe.skip("storyData() testing the promises returned", ()=>{
			test("return failed action type and error payload", ()=>{
			 	return storyListActions.storyData([1,"23","red",false]).catch(error=>{
			 		 expect(error).toEqual({type: STORY_LIST_FAILED,payload: STORY_LIST_FAILED_MESSAGE});
			 	});});
			test("successful promise return",()=>{
				//begin:(https://hacker-news.firebaseio.com/v0/item/){1}(\d+)(.json/?print=pretty){1}$
				fetchMock.get(ITEM_URL(2921506),
					{
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
							}
						
					});
				const expectedActions = {
						type: STORY_LIST_SUCCESS,
						payload: [
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
							}
						]}
				
				expect.assertions(1);
				return expect(storyListActions.storyData([2921506,2921506])).resolves.toEqual(expectedActions);
			});
		});	});
	
});