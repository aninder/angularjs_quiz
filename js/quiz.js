$(function(){
    json = [{
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
    $('#start').click(function(){
        $($('.navitem')[0]).css('background','orange').css('opacity', 1);
        $('#flarea').html("<p id='question'>"+json[0].question+"</p>");
        $('#flarea').append("<input type='hidden' id='curques' value=0'>");
        $('#flarea').append("<ul id='answers'>");
        json[0].answers.forEach(function(item,index) {
            console.log("--->"+index+" -->"+json[0].answers.length);
            if(item.text) {
                $('#answers').append("<li id="+index+" class='answer'>"+item.text+"</li>");
            } else if(item. image) {
                $('#answers').append("<li id="+index+" class='answer'><img src="+item.image+" alt='some img'/> </li>");
            } else {
                alert('unknown data');
            }
        });
    });
    $(document).on('click', '.answer', function(e){
        $('#result').hide();
        reset();
        if(json[Number.parseInt($('#curques').val())].correct == $(this).attr('id')) {
            $(this).css('border', '4px solid green');
            $(this).append('<img class="visualans" src="images/icon_correct.svg" alt="??">')
            $($('.navitem')[0]).append('<img class="ring animated flash" src="images/ring.svg"  alt="??">')
            $('#result').html(resultTemplate('correct'));
        } else {
            $(this).css('border', '4px solid red');
            $(this).append('<img class="visualans" src="images/icon_incorrect.svg" alt="??">')
            $('#result').html(resultTemplate('incorrect'));
        }
        $('#result').slideDown('slow');
    });
    $(document).on('click', '.next', function(){
        resetView();
    });
    function resetView() {
        //$()
    }
    function reset() {
        $('.answer').css('border', '4px solid darkgray');
        $('.answer .visualans').remove();
    }
    function resultTemplate(result) {
       return "<p>You are <span id='resulttxt'>"+result+"</span></p><button class='next'>Continue</button>"
    }
});