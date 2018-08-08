import {STORY_LIST_SUCCESS,STORY_LIST_PENDING,STORY_LIST_FAILED} from './StoryListConstants.js';

const initialStoryListState = {
	isPending: false,
	stories:[],
	error: ""
}

export const storyList = (state=initialStoryListState, action={}) =>{
	switch(action.type){
		case STORY_LIST_PENDING:
			return Object.assign({},state,{isPending:true});		
		case STORY_LIST_SUCCESS:
			return Object.assign({},state,{isPending:false,stories:action.payload});		
		case STORY_LIST_FAILED:
			return Object.assign({},state,{isPending:false,error:action.payload});		
		default:
			return state;
	}
}
