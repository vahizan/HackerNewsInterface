import Enzyme from 'enzyme';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Story } from '../../../src/Components/Story/Story';
import {STORY,ITEM_URL} from '../../../src/Components/Story/StoryConstants';
import {MOCK_URL} from '../../../src/Components/StoryList/StoryListConstants';
import {CommentList} from '../../../src/Components/CommentList/CommentList';
import fetchMock from 'fetch-mock';
import fetch from 'isomorphic-fetch';

describe("render correct elements in CommentList",()=>{
	let wrapper;
	let props;
	const CommentList = ()=> {
		if (wrapper === undefined) wrapper = shallow(<CommentList {...props}/>) 
		return wrapper;
	}
	beforeEach(()=>{
		props = {
			ids: []
		}
		wrapper = undefined;
	});
	test("component contains comment",()=>{

	});
	
});