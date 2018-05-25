var friends = require("../data/friends");

module.exports = function(app){
    // A GET route with the url /api/friends used to display a JSON of all friends
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    // A POST routes /api/friends used to handle incoming survey results
    app.post("/api/friends", function(req, res){
        var newUserSurvey = req.body;
        console.log(newUserSurvey.name);
        console.log(newUserSurvey.photo);
        console.log(newUserSurvey.scores[0]);
        console.log(newUserSurvey.scores[1]);
        console.log(newUserSurvey.scores[2]);
        console.log(newUserSurvey.scores[3]);
        console.log(newUserSurvey.scores[4]);
        console.log(newUserSurvey.scores[5]);
        console.log(newUserSurvey.scores[6]);
        console.log(newUserSurvey.scores[7]);    
        console.log(newUserSurvey.scores[8]);
        console.log(newUserSurvey.scores[9]);

        console.log(newUserSurvey);

        friends.push(newUserSurvey);
        res.json(newUserSurvey);
        
    });
};



