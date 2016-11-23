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

	$("#start").on("click", function(){

	$("#hiddenText").show();
	$("#start").hide();
	$('#wizard').get(0).play();

}); //ends start on click function

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

//Set up the event listener for the button

