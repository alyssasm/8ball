


function getAnswer()
{
	var answers = ['it is certain','it is decidedly so', 'without a doubt',
	 'yes definetly', 'you may rely on it', 'as i see it, yes', 'most likely', 
	 'outlook good', 'yes', 'signs point to yes', 'Reply hazy try again', 'Ask again later',
	 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Dont count on it',
	 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']

	 var ANSWER = answers[Math.floor(Math.random() * answers.length )];

	 document.getElementById("Answer").textContent = ANSWER;

	 return ANSWER;
	 	 
} 

function showAnswer()
{
	alert( getAnswer() );

}

