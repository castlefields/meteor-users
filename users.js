if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function() {
            return Session.get('counter');
        }
    });

    Template.hello.events({
        'click button': function() {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });
}

Schema = {};
Schema.BookProfile = new SimpleSchema({
  summary: {
    type: String,
    label: "Brief summary",
    optional: true,
    max: 1000
    },
    author: {
        type: String,
        label: "Author"
    }
});

Books = new Mongo.Collection("books");
Books.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    copies: {
        type: Number,
        label: "Number of copies",
        min: 0
    },
    profile: {
        type: Schema.BookProfile
    }
}));

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
