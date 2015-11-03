(function(){
    var quizData = [{
        "question" : "Which image shows a close-up of Saturn?",
        "answers"  : [
            {"id"  : 0, "image" : "images/close_up_01.jpg" },
            {"id"  : 1, "image" : "images/close_up_02.jpg" },
            {"id"  : 2, "image" : "images/close_up_03.jpg" },
            {"id"  : 3, "image" : "images/close_up_04.jpg" }
        ],
        "correct"  : 3
    },
        {
            "question" : "One year on Saturn is equivalent to how many years on Earth?",
            "answers"  : [
                {"id"  : 0, "text" : "12"},
                {"id"  : 1, "text" : "6"},
                {"id"  : 2, "text" : "29"},
                {"id"  : 3, "text" : "2"}
            ],
            "correct"  : 2
        },
        {
            "question" : "What is the name of Saturn's largest moon?",
            "answers"  : [
                {"id"  : 0, "text" : "Hercules"},
                {"id"  : 1, "text" : "Europa"},
                {"id"  : 2, "text" : "Goliath"},
                {"id"  : 3, "text" : "Zeus"},
                {"id"  : 4, "text" : "Titan"},
                {"id"  : 5, "text" : "Triton"}
            ],
            "correct"  : 4,
            "feedback" : "Though the names seem similar, Triton orbits the planet Neptune."
        },
        {
            "question" : "Saturn is visible from Earth without a telescope",
            "answers"  : [
                {"id"  : 0, "text" : "True"},
                {"id"  : 1, "text" : "False"}
            ],
            "correct"  : 0
        }];

    var app = angular.module('quiz',[]);
    app.controller('quiz_controller',['$scope',function($scope){
        $scope.questions = quizData;
        $scope.activeQuestion = -1;
        $scope.selectAnswer = function(aIndex) {
            alert($scope.activeQuestion+"----"+aIndex)
        }
    }]);
})();