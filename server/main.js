import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


Streamy.on('msg',function(message,sock) {
	console.log(message)
        Streamy.broadcast('', message);    
});
