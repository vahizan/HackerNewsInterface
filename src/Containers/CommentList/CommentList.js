import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Comment} from '../../Components/Comment/Comment';

export class CommentList extends Component{
	render(){
		return (
			<div>
				<Comment/>
			</div>
		);
	}
}

export default CommentList;