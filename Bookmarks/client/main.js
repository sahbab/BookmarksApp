import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { bookmarksCollection from '../collections/collections.js'}
import './main.html';

Template.bookmarks.helpers({
  bookmarksList: function(){
    //retrieve all bookmarks from our collection
    return bookmarksCollection.find();
  }
})