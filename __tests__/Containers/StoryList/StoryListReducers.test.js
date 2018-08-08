import Enzyme from 'enzyme';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as storyListReducers  from '../../../src/Containers/StoryList/StoryListReducers';
import {STORY_LIST_URL,
	STORY_LIST_SUCCESS,
	STORY_LIST_PENDING,
	STORY_LIST_FAILED,
	STORY_LIST_FAILED_MESSAGE,
	STORY_LIST_CLICKED
} from '../../../src/Containers/StoryList/StoryListConstants';

describe('configure reducer', ()=>{
	let currentState;
	beforeEach(()=>{
		currentState = {
			isPending: true,
			stories:[],
			error: ""
		}
	});
	test('has correct default initial state ',()=>{
		const action = {type:'dummy'}
		const initialState = {
			isPending: false,
			stories:[],
			error: ""
		}
		expect(storyListReducers.storyList(undefined,action)).toEqual(initialState);
	});
	test('returns correct state for STORY_LIST_FAILED action type',()=>{
		const action = {type: STORY_LIST_FAILED,payload:STORY_LIST_FAILED_MESSAGE}
		const expectedState = {
			isPending: false,
			stories:[],
			error: STORY_LIST_FAILED_MESSAGE
		}
		
		expect(storyListReducers.storyList(currentState,action)).toEqual(expectedState);
	});
	test('returns correct state for STORY_LIST_PENDING action type',()=>{
		const action = {type: STORY_LIST_PENDING}
		const expectedState = {
			isPending: true,
			stories:[],
			error: ""
		}
		
		expect(storyListReducers.storyList(currentState,action)).toEqual(expectedState);
	});
	test('return correct payload for STORY_LIST_SUCCESS ',()=>{
		const action = {type: STORY_LIST_SUCCESS,payload:["success"]}
		const expectedState = {
			isPending: false,
			stories:["success"],
			error: ""
		}

		expect(storyListReducers.storyList(currentState,action)).toEqual(expectedState);
	});

	
});