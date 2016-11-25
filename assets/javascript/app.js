//Set up the document.ready so that this all works
APP = {};

APP.Globals = {
   answers: {myQuestion1:'Cupboard',
            myQuestion2:'Hufflepuff',
        	myQuestion3: 'Pear',
        	myQuestion4: 'Vincent',
        	myQuestion5: 'The Worst Birthday',
        	myQuestion6: 'House-Elf',
        	myQuestion7: 'David Yates'}           
}

$(document).ready(function(){

	$("#start").on("click", function() {
  $("#hiddenText").show();
  $("#start").hide();
  $('#wizard').get(0).play();
  alert("You have 1 minute to answer all the questions!");



  //Now I need to start the timer
    setTimeout (oneSecond, 1000);
    function oneSecond(){
      var counter;
      var stopwatch = {
        time: 0,
      
      start: function (){
      
        counter = setInterval(stopwatch.count, 1000);
        },
      
        count: function() {
          stopwatch.time++;
          var converted = stopwatch.timeConverter(stopwatch.time);
          console.log(converted);
          $("#display").html(converted);
        },
        timeConverter: function(t) {
          var minutes = Math.floor(t / 60);
          var seconds = t - (minutes * 60);
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
          if (minutes === 0) {
            minutes = "00";
          } 
          else if (minutes < 10) {
            minutes = "0" + minutes;
          }
          return minutes + ":" + seconds;
      }
    };

    stopwatch.start();

    } //ends the oneSecond function
  }); //ends start on click function


function timeUp(){
  if ("#display"="00:05"){
    alert("Time's up!");
    location.reload();
  };
};

timeUp();
  

	$("#submitButton").on("click", function(){
		$("#trivForm").submit();
	}); //ends submit button click function
   
   $("#trivForm").on('submit', function(e){
      e.preventDefault();
      var $allInputs = $('#trivForm input');
      $allInputs.each(function(){
          var $this = $(this);
          $this.parent().css('color', '#ffffff');
      });
      var $selectedInputs = $('#trivForm input:checked');
      $selectedInputs.each(function(){
         var $this = $(this);
         var name = $this.attr('name');
         var val = $this.val();
            if(APP.Globals.answers[name]==val){
               $this.parent().css('color', '#00ff00');
            }else{
               $this.parent().css('color', '#ff0000');
               
            }
      });
      console.info($selectedInputs);
		
	}); //ends form submit function

}) //ends document.ready



