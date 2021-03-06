import { Mongo } from "meteor/mongo";

//export access to my collections
export const bookmarksCollection = new Mongo.Collection("bookmarks");

//export access to any data to start our application
export const bookmarksDummyData = [
    {
    "name" : "New York Times",
    "url" : "http://www.nytimes.com",
    "lastVisited": new Date(2015, 10, 21)
    },
    {
    "name" : "Reddit",
    "url" : "http://www.reddit.com",
    "lastVisited": new Date()
    },
    {
    "name" : "Facebook",
    "url" : "http://www.facebook.com",
    "lastVisited": new Date(2010,2,18)
    }
    
];