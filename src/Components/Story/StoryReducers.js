import {ITEM_URL,
	STORY_SUCCESS,
	STORY_PENDING,
	STORY_FAILED,
	STORY_CLICKED,
} from './StoryConstants.js';

const initialCommentState = {
   isPending:false,	
   commentData: [] ,
   error: ""
}

export const storyValues = (state=initialCommentState,action ={}) =>{
	switch(action.type){
		case STORY_PENDING:
		 	return Object.assign({},state,{isPending:true});
		case STORY_SUCCESS:
			return Object.assign({},state,{isPending:false, commentData:action.payload});
		case STORY_FAILED:
			return Object.assign({},state,{isPending:false,error:action.payload});
		default:
			return state;		 
	}
}
