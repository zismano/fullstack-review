const express = require('express');
let bodyParser = require('body-parser');
let app = express();

let github = require('../helpers/github.js');

let db = require('../database/index.js');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
	console.log(req);
	let username = req.body.name;
	github.getReposByUsername(username, (userRepos) => {
		for (var i = 0 ; i < userRepos.length; i++) {
			let userId = userRepos[i].owner.id;
			let userName = userRepos[i].owner.login;
			let repoId = userRepos[i].id;
			let repoName = userRepos[i].name;
			let forks = userRepos[i].forks;
			db.makeNewRecord(userId, userName, repoId, repoName, forks).save();
		}	
	});
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

