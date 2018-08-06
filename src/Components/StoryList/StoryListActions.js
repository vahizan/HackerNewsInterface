import {
	STORY_LIST_PENDING,
	STORY_LIST_FAILED,
	STORY_LIST_SUCCESS,
	STORY_LIST_URL,
	STORY_LIST_FAILED_MESSAGE
} from './StoryListConstants.js';

const success = (payload)=>{
	return {
		type: STORY_LIST_SUCCESS,
		payload
	}
}
const failure = (error)=>{
	return {
		type:STORY_LIST_FAILED,
		payload:error
	}
}
export const stories = () => (dispatch) =>{
	 dispatch({type:STORY_LIST_PENDING});
	 return fetch(STORY_LIST_URL)
	 .then(response => response.json())
	 .then(data => dispatch(success(data)))
	 .catch(error => dispatch(failure(STORY_LIST_FAILED_MESSAGE)));
}