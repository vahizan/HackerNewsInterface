export const ITEM_URL = (id) =>{
	return (id !== undefined && id ^ 0 === id) 
	? `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
	: "https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty";
}
export const STORY_PENDING = "STORY_PENDING";
export const STORY_SUCCESS = "STORY_SUCCESS";
export const STORY_FAILED = "STORY_FAILED";