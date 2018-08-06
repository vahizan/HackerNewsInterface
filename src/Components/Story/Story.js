import React,{Component} from 'react';
import {connect} from 'react-redux';
import CommentList from '../CommentList/CommentList';

export class Story extends Component{
	componentWillMount(){

	}
	render(){
		const {id} = this.props;
		return(
			<div id={id} className="story">
				<div className="title"></div>
				<div className="author"></div>
				<div className="date"></div>
				<CommentList/>
			</div>
		);
	}
}
const mapStateToProps = ()=>{
	return {

	};
};
const mapDispatchToProps = ()=>{
	return {

	};
}

export default connect(mapStateToProps,mapDispatchToProps)(Story);