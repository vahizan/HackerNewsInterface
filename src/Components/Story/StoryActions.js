import {
	STORY_SUCCESS,
	STORY_PENDING,
	STORY_FAILED,
	ITEM_URL
} from './StoryConstants.js';

const success = (payload)=>{
	return {
		type: STORY_SUCCESS,
		payload
	}
}
const failure = (error)=>{
	return {
		type: STORY_FAILED,
		payload: error
	}
}
export const story = (id) => (dispatch) =>{
 	dispatch({type:STORY_PENDING});
 	return fetch(ITEM_URL(id))
 		.then(response => response.json())
 		.then(data => dispatch(success(data)))
 		.catch(error=> dispatch(failure(error)));
}

