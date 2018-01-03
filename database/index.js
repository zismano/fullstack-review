const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

 // db.once('open', function() {
 // 	console.log('OPEN!');
 // });

  // we're connected!
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  userId: Number,
  userName: String,
  repoId: Number,
  repoName: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let makeNewRecord = (userId, userName,repoId, repoName, forks) => {
	let newRepo = new Repo({
  		userId,
  		userName,
  		repoId,
  		repoName,
  		forks
  	});
  	return newRepo;	
}

// let save = (err => {
// 	if (err) {
// 		console.log('Error saving in DB');
// 	}
// });

// module.exports.save = save;

module.exports.makeNewRecord = makeNewRecord;

module.exports.Repo = Repo;