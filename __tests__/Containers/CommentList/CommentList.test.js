import Enzyme from 'enzyme';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Story } from '../../../src/Containers/Story/Story';
import {STORY,ITEM_URL} from '../../../src/Containers/Story/StoryConstants';
import {MOCK_URL} from '../../../src/Containers/StoryList/StoryListConstants';
import {CommentList} from '../../../src/Containers/CommentList/CommentList';
import {Comment} from "../../../src/Components/Comment/Comment";
import fetchMock from 'fetch-mock';
import fetch from 'isomorphic-fetch';

describe("render correct elements in CommentList",()=>{
	let wrapper;
	let props;
	const CommentList = () => {
		if (!wrapper) wrapper = shallow(<CommentList {...props} />);
		return wrapper;
	}
	beforeEach(()=>{
  		props ={
  			ids: []
  		};
  			wrapper = undefined;
  	});
  	test("component contains one or a list of comments",()=>{
		expect(CommentList().find(Comment).length>=1).toBe(true);
	});
	
});