

export const LIVE_CHAT_COUNT = 25;
const GOOGLE_API_KEY = "AIzaSyDRxSnkr9v_FI7DfNC-EAShR41VlHYjmUY"
export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+GOOGLE_API_KEY
export const YOUTUBE_AUTOSEARCH_API=`https://www.googleapis.com/youtube/v3/search?type=suggest&part=snippet&key=${GOOGLE_API_KEY}&q=`;
