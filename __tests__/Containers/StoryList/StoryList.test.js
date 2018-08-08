import Enzyme from 'enzyme';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import  StoryList  from '../../../src/Containers/StoryList/StoryList';
import  Story  from '../../../src/Containers/Story/Story';
import {STORY_LIST_URL,STORY_LIST_SUCCESS,STORY_LIST_FAILED} from '../../../src/Container/StoryList/StoryListConstants';

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
  			stories: { 
  				type: STORY_LIST_SUCCESS,
  				payload:[{by:"okket",
						descendants:52,
						id:17706551,
						kids:[17706623, 17706614, 17706701, 17706797, 17706780, 17706756, 17706671, 17706613, 17706869, 17706702, 17706703, 17706740, 17706689, 17706615],
						score:98,
						time:1533649953,
						title:"EPA is now allowing asbestos back into manufacturing",
						type:"story",
						url:"https://archpaper.com/2018/08/epa-asbestos-manufacturing/"}] 
  			}
  		};
  			wrapper = undefined;
  		});
		test('component contains one or more Story components', ()=>{
			expect(storylist().find(Story).length).toEqual(1);
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
			
			describe("Do not render story when incorrect data provided ",()=>{
				beforeEach(()=>{
		  		props ={
		  			stories: { 
		  				type: STORY_LIST_FAILED,
		  				payload:[{by:"okket",
								descendants:52,
								id:17706551,
								kids:[17706623, 17706614, 17706701, 17706797, 17706780, 17706756, 17706671, 17706613, 17706869, 17706702, 17706703, 17706740, 17706689, 17706615],
								score:98,
								time:1533649953,
								title:"EPA is now allowing asbestos back into manufacturing",
								type:"story",
								url:"https://archpaper.com/2018/08/epa-asbestos-manufacturing/"},{random:"rand"}] 
	  				}
		  		};
		  			wrapper = undefined;
		  		});
		  		test('do not render Story component', ()=>{
					expect(storylist().find(Story).length===0).toBeTruthy();
				});
			});

			describe("Do not render the ones with incorrect/insufficient data  ",()=>{
				beforeEach(()=>{
		  		props ={
		  			stories: { 
		  				type: STORY_LIST_SUCCESS,
		  				payload:[{by:"okket",
								descendants:52,
								id:17706551,
								kids:[17706623, 17706614, 17706701, 17706797, 17706780, 17706756, 17706671, 17706613, 17706869, 17706702, 17706703, 17706740, 17706689, 17706615],
								score:98,
								time:1533649953,
								title:"EPA is now allowing asbestos back into manufacturing",
								type:"story",
								url:"https://archpaper.com/2018/08/epa-asbestos-manufacturing/"},{random:"rand"}] 
	  				}
		  		};
		  			wrapper = undefined;
		  		});
		  		test('do not render Story component', ()=>{
					expect(storylist().find(Story).length).toEqual(1);
				});
			});
		});

	});
	
});