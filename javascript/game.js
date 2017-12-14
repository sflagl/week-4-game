

function startBtn(){
    $('#beginBtn').click(function(){

        var gem =[];

        for (var i = 0; i < 4; i++) {
            var randNumber = (Math.floor(Math.random()*12));
            gem.push(randNumber);
        };
 
        for(var i = 0; i< gem.length;i++) {
            console.log(gem[i]);
        };


        $('#buttonOne').val(gem[0]);
        $('#buttonTwo').val(gem[1]);
        $('#buttonThree').val(gem[2]);
        $('#buttonFour').val(gem[3]);

        var totalBtn = 0;

    
         $('.btnVal').click(function() {
            

            totalBtn += parseInt(
                $(this).val());

            $('#score').text(totalBtn);


                if(goalNumber === totalBtn){
                    
                    alert('You won! Yeah!');
                    winScore++;
                    $('#win').text(winScore);
                    

                    //add reset

                } if(goalNumber < totalBtn){

                    alert('You lost');
                    loseScore++;
                    $('#loses').text(loseScore);
                        
                    //add reset
                }

            });

            
        var goalNumber = Math.floor(Math.random() * 120) + 19;

            $('#goal').text(goalNumber);



            var winScore = 0;
            var loseScore = 0;



        
    });
    
}

startBtn();



// function goalNumber(){
// 		var number = Math.floor(Math.random() *101) + 19;
// 		console.log(number);
// 	}

// goalNumber();





// When user presses the start button 4 random numbers will be generated

	// create "start" button (html)

	// create function called 'startBtn' (js)
		// create "on click" event (js)

			// var gem = [4]

			// inside the "on click" function create a for loop that will generate 4 a random number (js)
				 // var i = 0; i < 4; i++
				 // each loop associates with a button (b/t 1 and 12)
				 	// 

	// create an array outside of the functions that stores the 4 random numbers 


//The four numbers are associated with the 4 buttons



// We will assign it the numbers to the 4 buttons

