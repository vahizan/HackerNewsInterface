import React, {Component} from 'react';
import {Story} from "../Story/Story";
import {connect} from 'react-redux';

export class StoryList extends Component{
	render(){
		const {stories} = this.props;
		return (stories instanceof Array)
		?  <div>
				{
					stories.map((story,i)=>{
						return (story ^ 0  === story)
							? <Story key={i} id={story}/>
							: undefined;
					})
					
				}
		   </div>
		: <div/>
	}
}

export default StoryList;