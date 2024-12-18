require('dotenv').config();


const CONSTANTS = {
    PORT: 3000,
    MONGODB_URI: process.env.MONGODB_URI,
    YOUTUBE_API_KEYS: process.env.YOUTUBE_API_KEYS,
    FETCH_VIDEO_CRON: process.env.FETCH_VIDEO_CRON,
    MAX_RESULT_SIZE: process.env.MAX_RESULT_SIZE,
    FETCH_TIME_SEC: process.env.FETCH_TIME_SEC,
    YOUTUBE_SEARCH_QUERY: process.env.YOUTUBE_SEARCH_QUERY,
    YOUTUBE_SEARCH_ORDER: process.env.YOUTUBE_SEARCH_ORDER,
  };
  
  console.log("HEREEEEE");
  console.log(CONSTANTS.MONGODB_URI);
  
  
  module.exports = CONSTANTS;