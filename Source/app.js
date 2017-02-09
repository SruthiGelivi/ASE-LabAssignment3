'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;

        $scope.getSentiment = function () {


                        //This is the Alchemy API for getting the sentiment of the most recent review for a place.
                        var callback = $http.get("http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment" +
                            "?apikey=a976918cfb9d7624147a02ce41a3bb9b6ecd3ba6" +
                            "&outputMode=json&text=" + final_span.innerHTML);
                        callback.success(function (data) {
                            if(data!=null && data.docSentiment!=null)
                            {
                                $scope.ReviewWithSentiment = {"reviewText" : final_span.innerHTML,
                                                            "sentiment":data.docSentiment.type,
                                                             "score":data.docSentiment.score  };
                                document.getElementById('div_ReviewList').style.display = 'block';


                            }
                        });


            }
        $scope.getEmotion = function () {


            //This is the Alchemy API for getting the sentiment of the most recent review for a place.
            var callback = $http.get("http://gateway-a.watsonplatform.net/calls/text/TextGetEmotion" +
                "?apikey=a976918cfb9d7624147a02ce41a3bb9b6ecd3ba6" +
                "&outputMode=json&text=" + final_span.innerHTML);
            callback.success(function (data) {
                if(data!=null && data.docEmotions!=null)
                {
                    $scope.ReviewWithEmotion = {"reviewText" : final_span.innerHTML,
                        "anger":data.docEmotions.anger,
                        "disgust":data.docEmotions.disgust,
                        "fear":data.docEmotions.fear,
                        "joy":data.docEmotions.joy,
                        "sadness":data.docEmotions.sadness,
                    };
                    document.getElementById('div_ReviewEmotionList').style.display = 'block';


                }
            })


        }

    });
