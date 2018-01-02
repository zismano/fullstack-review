const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  userId: Number,
  userName: String,
  repoId: Number,
  repoName: String,
  updatedAt: Date
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (userId, userName, repoId, repoName, updatedAt) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let newRepo = new Repo({
  	userId,
  	userName,
  	repoId,
  	repoName,
  	updatedAt
  });
  newRepo.save(err => {
  	if (err) {
  		console.log(`Error ${err}`);
  	}
  });
}

module.exports.save = save;