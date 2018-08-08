import {
	STORY_LIST_PENDING,
	STORY_LIST_FAILED,
	STORY_LIST_SUCCESS,
	STORY_LIST_URL,
	STORY_LIST_FAILED_MESSAGE,
	STORY_LIST_CLICKED,
	ITEM_URL
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
 const validateArray = (ids) =>{
	if(ids instanceof Array && ids.length !==0 ) {
		for(let i=0;i<ids.length;i++){
			if(!Number.isInteger(ids[i]) || ids[i]<0) return false;
		}
		return true;
	}
	return false;
}

 const storyData = (ids)  =>{
	if(! validateArray(ids)) return Promise.reject(failure(STORY_LIST_FAILED_MESSAGE));
	return Promise.all(ids.map((id,i)=>{
		return fetch(ITEM_URL(id))
		.then(response => response.json())
		.catch(error => Promise.reject(failure(error)));
	}))
	.then(array => Promise.resolve(success(array)))
	.catch(error => Promise.reject(failure(error)));
}

export const stories = () => (dispatch) =>{
	 dispatch({type:STORY_LIST_PENDING});
	 return fetch(STORY_LIST_URL)
	 .then(response => response.json())
	 .then(data => {
	 	return storyData(data)
	 	.then(storyObjects => dispatch(success(storyObjects)))
	 })
	 .catch(error => dispatch(failure(STORY_LIST_FAILED_MESSAGE)));
}

