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

describe('<Story/>',()=>{
	describe('render component correctly',()=>{
		let wrapper;
		let props;
		let state;
		const story = ()=>{
			if(!wrapper) wrapper = shallow(<Story {...props}/>);
			return wrapper;
		}
		beforeEach(()=>{
  		props ={
  			id: 123
  		};
  			wrapper = undefined;
  		});
		test('story component contains a list of comments', ()=>{
			expect(story().find(CommentList).length>=1).toBeTruthy();
		});
		test('story component contains "story" wrapper class', ()=>{
			expect(story().find(".story").length).toEqual(1);
		});

		test('story component contains 4 divs including parent ', ()=>{
			expect(story().find("div").children().length).toEqual(4);
		});

		test('story component has one title class', ()=>{
			expect(story().find(".title").length).toEqual(1);
		});

		test('story component has one date class', ()=>{
			expect(story().find(".date").length).toEqual(1);
		});

		test('story component has one author class', ()=>{
			expect(story().find(".author").length).toEqual(1);
		});
		test("Clicking on story should expand its size",()=>{
			
		});

		
			


	});
	
});