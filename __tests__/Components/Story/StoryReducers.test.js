import Enzyme from 'enzyme';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as storyReducers  from '../../../src/Components/Story/StoryReducers';
import {ITEM_URL,
	STORY_SUCCESS,
	STORY_PENDING,
	STORY_FAILED,
	STORY_CLICKED
} from '../../../src/Components/Story/StoryConstants';
import {STORY_LIST_FAILED_MESSAGE} from '../../../src/Components/StoryList/StoryListConstants';

describe('configure reducer', ()=>{
	let initialState;
	beforeEach(()=>{
		initialState = {
		   isPending:false,	
   		   commentData: [],
   		   error: ""
		}
	});
	test('has correct default initial state ',()=>{
		const action = {type:'dummy'}
		expect(storyReducers.storyValues(undefined,action)).toEqual(initialState);
	});
	test('returns correct state for STORY_FAILED action type',()=>{
		const action = {type: STORY_FAILED,payload:STORY_LIST_FAILED_MESSAGE}
		const expectedState = {
			isPending: false,
			commentData:[],
			error: STORY_LIST_FAILED_MESSAGE
		}
		
		expect(storyReducers.storyValues(initialState,action)).toEqual(expectedState);
	});
	test('returns correct state for STORY_PENDING action type',()=>{
		const action = {type: STORY_PENDING}
		const expectedState = {
			isPending: true,
			commentData:[],
			error: ""
		}
		
		expect(storyReducers.storyValues(initialState,action)).toEqual(expectedState);
	});
	test('return correct payload for STORY_SUCCESS ',()=>{
		const action = {type: STORY_SUCCESS,payload:{success:"success"}}
		const expectedState = {
			isPending: false,
			commentData:{success:"success"},
			error: ""
		}
		expect(storyReducers.storyValues(initialState,action)).toEqual(expectedState);
	});

});