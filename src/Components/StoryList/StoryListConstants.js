export const STORY_LIST_URL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
export const MOCK_URL = "https://hacker-news.firebaseio.com";
export const ITEM_URL = (id) =>{
	return (id !== undefined && id ^ 0 === id) 
	? `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
	: "https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty";
}
export const STORY_LIST_PENDING = "STORY_LIST_PENDING";
export const STORY_LIST_SUCCESS = "STORY_LIST_SUCCESS";
export const STORY_LIST_FAILED = "STORY_LIST_FAILED";
export const STORY_LIST_FAILED_MESSAGE = "Unable to Retrieve Data";
export const STORY_LIST_CLICKED = "STORY_LIST_CLICKED";