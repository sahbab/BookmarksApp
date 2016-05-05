import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { bookmarksCollection} from '../collections/collections.js';
import './main.html';

Template.bookmarks.helpers({
  bookmarkList: function(){
    //retrieve all bookmarks from our collection
    return bookmarksCollection.find({} , {"sort" : {"name" : 1 }});
  }
});

Template.addBookmarkForm.events({
  'submit .addBookmarkForm' : function(event){
    event.preventDefault();
    
    //get my form values
    var name = $('#bookmarkName').val();
    var url = $('#bookmarkUrl').val();
    
    //insert a new document into our collection
    bookmarksCollection.insert({
      "name" : name,
      "url" : url,
      "lastVisited": new Date()
      
    })
  }
});

Template.bookmarksHeading.events({
  'click button' : function(event){
    if (confirm("Really delete all bookmarks?")) {
      
      bookmarksCollection.find().forEach(function(bookmark){
        bookmarksCollection.remove({"_id": bookmark._id});
      });
      
    }
  }
})