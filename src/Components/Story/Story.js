import React,{Component} from 'react';
import {connect} from 'react-redux';

export class Story extends Component{
	componentWillMount(){
		
	}
	render(){
		const {id} = this.props;
		return(
			<div className="story">{id}</div>
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