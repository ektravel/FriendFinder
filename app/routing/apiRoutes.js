var friends = require("../data/friends");

module.exports = function(app){
    // A GET route with the url /api/friends used to display a JSON of all friends
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    // A POST routes /api/friends used to handle incoming survey results
    app.post("/api/friends", function(req, res){
        for (i = 0; i < friends.length; i++){
            friends.push(req.body);
            console.log("New user added!");
            // res.json(true);
        };
    });
};



