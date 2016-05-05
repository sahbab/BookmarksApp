import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { bookmarksCollection} from '../collections/collections.js';
import './main.html';

Template.bookmarks.helpers({
  bookmarkList: function(){
    //retrieve all bookmarks from our collection
    return bookmarksCollection.find();
  }
})