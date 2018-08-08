import React,{Component} from 'react';
import {connect} from 'react-redux';
import { story } from './StoryActions';
import {ITEM_URL} from './StoryConstants.js';
import {STORY_LIST_FAILED_MESSAGE} from '../StoryList/StoryListConstants.js';
import CommentList from '../CommentList/CommentList';
import '../../styles/css/Story.css';


export class Story extends Component{
	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			isToggleOn:false
		}
	}
	componentWillMount(){
		//this.props.storyValues(this.props.id);
		//this.props.getComments(this.props.id.kids);
	}
	render(){
		const {by,title,id,kids,score,time,type,url} = this.props;
		//const {by,kids,score,time,title} = this.props.story;
		return(
			<div id={id} className= {this.state.isToggleOn ? "story-enlarge" : "story"} onClick={this.handleClick}>
				<div className="title">{title}</div>
				<div className="author">{by}</div>
				<div className="date">{time}</div>
				<CommentList kids={kids}/>
			</div>
		);
	}
	handleClick(e) {
		this.setState((this.state.isToggleOn)? {isToggleOn:false} : {isToggleOn:true});
	}	
}
const mapStateToProps = (state) => {
	return {
		commentData : state.storyValues.commentData,
		isCommentPending: state.storyValues.isPending,
		commentsError:state.storyValues.error
	};
}
const mapDispatchToProps = (dispatch) =>{
	return {
		comments: (ids)=> dispatch(story(ids)),
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Story);
