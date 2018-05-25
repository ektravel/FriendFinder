var friends = require("../data/friends");

module.exports = function(app){
    // A GET route with the url /api/friends used to display a JSON of all friends
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    // A POST routes /api/friends used to handle incoming survey results
    app.post("/api/friends", function(req, res){
        var newUserSurvey = req.body;
        console.log(newUserSurvey);

        var closestMatch = getClosestMatch(newUserSurvey, friends);
        console.log("closest match is : " + closestMatch.name);

        friends.push(newUserSurvey);

        res.send(closestMatch);
    });

    function getClosestMatch(user, matchCandidates){
        var closestFriend = null;
        var closestFriendMatchScore = null;

        console.log("Gettings Closest Match. Number of possible candidates: " + matchCandidates.length);

        for (i = 0; i < matchCandidates.length; i++){
            var currCandidate = matchCandidates[i];
            console.log("Comparing candidate "+ i + ", name: "+ currCandidate.name);

            var difference = compareDifference(user, currCandidate);
            console.log("difference between " + user.name + " and  " + currCandidate.name + " is " + difference);

            if(closestFriendMatchScore == null || difference < closestFriendMatchScore){
                closestFriendMatchScore = difference;
                closestFriend = currCandidate;

                console.log("new closestFriendMatchScore: " + closestFriendMatchScore + ". New closestFriend is " + closestFriend.name);
            }

            console.log('moving to next match candidate if applciable. Current value of I is: ' + i);
        }

        console.log('Returning from getClosestMatch' + closestFriend.name);
        return closestFriend;
    };

    function compareDifference (user1, user2) {
        var score = 0;
        console.log('compareDifference between user1 ' + user1.name + ' and user2 ' + user2.name);

        for (x = 0; x < user1.scores.length; x++){
            var user1CurrentAnswer = user1.scores[x];
            var user2CurrentAnswer = user2.scores[x];
            
            console.log('user1 curr answer: '+ user1CurrentAnswer );
            console.log('user2 curr answer: '+ user2CurrentAnswer );

            var currentDifference = user1CurrentAnswer - user2CurrentAnswer;

            console.log('diff between ' + user1.name + ' and ' + user2.name + ' score for ' + x + 'is ' + currentDifference);

            if (currentDifference < 0 ){
                currentDifference = currentDifference* -1;
            }
            score += currentDifference;
            console.log('new score is ' + score);
        }

        console.log('returning overall diff score of ' + score);
        return score;
    }
};



