var friends = require("../data/friends.js");

app.get("/api/friends", function(req, res) {
	  res.json(friends);
});

app.post("/survey", function(req, res) {
	var user = req.body;
})

module.exports = apiRoutes;