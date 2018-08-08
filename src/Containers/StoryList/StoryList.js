import React, {Component} from 'react';
import Story from "../Story/Story";
import {STORY_LIST_SUCCESS} from './StoryListConstants.js';
import "../../styles/css/StoryList.css";

const StoryList = ({stories}) =>{
	//render(){
		//const {stories} = this.props; 
		return (stories !== undefined && stories.type === STORY_LIST_SUCCESS)
		?  <div className="storyList" >
				{
					stories.payload.map((story,i)=> 
					{
						if( story.id!==undefined 
							&& story.by!==undefined
							&& story.title!==undefined
							&& story.score!==undefined) return <Story 
							key={i} 
							by={story.by} 
							descendants={story.descendants}
							id={story.id}
							kids={story.kids}
							score={story.score}
							time={story.time}
							title={story.title}
							type={story.type}
							url={story.url}/>		
					})	
				}
		   </div>
		: <div className="loading"> Loading Content </div>
	//}
}

export default StoryList;