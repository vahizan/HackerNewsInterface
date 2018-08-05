import Enzyme from 'enzyme';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import { StoryList } from '../../../src/Components/StoryList/StoryList';
import { Story } from '../../../src/Components/Story/Story';
import {STORY_LIST_URL} from '../../../src/Components/StoryList/StoryListConstants';

describe('<StoryList/>',()=>{
	describe('render component correctly',()=>{
		let wrapper;
		let props;
		const storylist = ()=>{
			if(!wrapper) wrapper = shallow(<StoryList {...props}/>);
			return wrapper;
		}
		beforeEach(()=>{
  		props ={
  			stories: [1,2,3,4,5]
  		};
  			wrapper = undefined;
  		});
		test('component contains one or more Story components', ()=>{
			expect(storylist().find(Story).length>=1).toBeTruthy();
		});

		test('component contains storiesUrl', ()=>{
			console.log("props",storylist().instance().props);
			expect(storylist().instance().props.stories).toEqual([1,2,3,4,5]);
		});

		describe("don't render stories when incorrect data is provided", ()=>{
			describe("do not render when stories is undefined",()=>{
				beforeEach(()=>{
		  		props ={
		  			stories: undefined
		  		};
		  			wrapper = undefined;
		  		});
		  		test('do not render Story component', ()=>{
					expect(storylist().find(Story).length===0).toBeTruthy();
				});
			});

			describe("do not render when stories is incorrect type",()=>{
				beforeEach(()=>{
		  		props ={
		  			stories: "hello"
		  		};
		  			wrapper = undefined;
		  		});
		  		test('do not render Story component', ()=>{
					expect(storylist().find(Story).length===0).toBeTruthy();
				});
			});
			
			describe("render the 2 elements with correct data type ",()=>{
				beforeEach(()=>{
		  		props ={
		  			stories: ["1","a","3","v","false",false]
		  		};
		  			wrapper = undefined;
		  		});
		  		test('do not render Story component', ()=>{
					expect(storylist().find(Story).length===2).toBeTruthy();
				});
			});
		});

	});
	
});