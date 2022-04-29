let breadCrumbs = [],
	itsNotOver = true,
	storyElem = document.getElementById('text'),
	choicesElem = document.getElementById('choiceList'),
	crumbElem = document.getElementById('crumbList');


const myStory = { //story object
	intro: {
		text: `<h2>Intro</h2> Waking up, you see the pasty boy. You've been retreating here for a while now from the outside world. Everything is white like you. Except for the black light bulb that shines above you, a laptop, tissues, a cat, and a sketchbook. You've been placed on this blanket with everything you need. What will you do?`,

		choices: [
			['Mess with Laptop', 'laptop'],
			['Use the Tissues', 'tissues'],
			['Read the notebook', 'notebook'],
		]
	},
	//notebook
	notebook: {
		text: `<h2>notebook</h2> You flip open the notebook and see your masterpieces, images of red hands and limbs are all over the page. Something specifically catches your eye, there is a photograph of your first duet on christmas, playing the violin with your sister on the piano. You tuck the photograph into your pockets.`,
		choices: []//ending
	},

	//laptop
	laptop: {
		text: `<h2>laptop</h2> You mess with the laptop, and it turns on. The usual display is replaced with a game of hangman. Before it was just your desktop background with your journal. The heat of the laptop on your lap is comforting. You can write: `,
		choices: [
			['Welcome to black space', 'blackspace'],
			['Hangman', 'Hangman1'],
			['Hell world', 'Hellworld']
		],
	},

	blackspace: {
		text: `<h2>blackspace</h2> A light bulb falls down and the room goes dark. Many doors appear but you can only access three of them, one to your left, one to your right and another in front of you which door do you choose?`,
		choices: [
			['Door on the left', 'leftDoor'],
			['Door in the in front', 'frontDoor'],
			['Door on the right', 'rightDoor'],
		]
	},

	leftDoor: {
		text: `<h2>LeftDoor</h2> You go closer to the door and you hear a woman's voice "Sunny, let me in", you freeze and run away. The door on the left disappears. What door next?`,
		choices: [
			['Door on the right', 'rightDoor'],
		]
	},

	frontDoor: {
		text: `<h2>frontDoor</h2> You end up in white Space again, and decide whatever it was wasn't important.`,
		choices: []//ending

	},
	rightDoor: {
		text: `<h2>rightdoor</h2> As you open up the door, you feel another person pull the knob. It's your friend, Basil. He holds your hand and guides you inside, you're both inside a garden room adorned with flowers. He shows you a white flower and says "Sunny, I know things may seem though ever since she passed, but here we have this." He hands you the flower, you put it in your pocket, "It's a Gladiolus, they represent strength of character; whenever you feel afraid, just hold on to it." He gives you a soft smile before leading you outside. You feel alone. You stand across a staircase, the room is dark. Hands come out of the stairs, you can see something with a gaping mouth and sharp teeth. You decide to confront our fears and walk down towards it`,
		choices: [
			['Look at the flower', 'flower'],
			['Look at the monster', 'monster'],
		]
	},

	flower: {
		text: `<h2>flower</h2> You grab the Gladiolus in your hand, remembering Basi's words. It helps you calm down. The monster slowly fades away as you walk further into the darkness ahead. You soon reach the bottom of the staircase, and look at some of the spider webs that block your way from here to the living room across. You shudder at the thought of spiders being around`,
		choices: [
			['Look for something in the boxes', 'boxes'],
			['Try to force through the web', 'forceThrough'],
		]
	},


	boxes: {
		text: `<h2>boxes</h2> You look around and find a pair of sharp garden shears, you use it to cut through the thick web in front of you. As you walk through the halls, you see the faint pictures in the hallway of you and your sister performing together, you seem to frow more and more distant as each picture goes on. As the end of the hall approaches, you see your last picture together; you both seem to hate the other's presence. In the living room, you spot a myriad of spider-like crawlies on the floor. They scutter away into the darkness in a pattern that seems like locks of hair, entangling a dark blueish figure who slowly walks away from the shadows. It's your sister, some deformed version of her with a twisted neck, hollow eyes and mouth; her arms reach out to you and you show them away, she yells "Sunny, why did you push me?", before grabbing your garden shears from your pocket and puncturing through. You feel your body grow limp, looking at her with sadness in your eyes, the last words you are able to muster is "I'm sorry...". You wake up in a cold sweat, breathing heavily. Your chest feels hefty- you hear banging on the door from the outside.`,
		choices: [
			['Take a knife from the kitchen', 'knifeEnding'],
			['Go to the door', 'trueEnding'],
		]
	},

	forceThrough: {
		text:`<h2>forceThrough</h2> You try to foce your way through the web, yet it is way too thick  to be walked through. You're going need something else to cut it.`,
		choices:['','']
	},

	knifeEnding: {
		text: '<h2>knifeEnding</h2> You walk down the stairs toward the kitchen. You grab the handle of the knife and anim it at your stomach. You loved her but you still killed her, and you took her away from everyone, disgusted by what you have done. You plunge the knife inside your chest and watch your view fall into darkness. Good night.',
		choices: [] //ending
	},

	trueEnding: {
		text: `<h2>trueEnding</h2> You go to the entry door in the living room and hear someone call you, "Sunny, it's me Basil". You are scared to answer, you feel the air in the room lessen as you struggle to breathe, her monstrous face appearing once again in front of you as you feel terrified. But, you remember how to calm down, slowly pacing your breaths; her monster starts to fade away and the image of your sister, as you remember, looks at you with kind eyes, waving you a final goodbye as she disappears. You open the door and it's your best friend, Basil. He asks where you've been, that you've been gone for weeks and that he was worried. "Anyway, are you okay Sunny?" he asks. Your eyes swell up and you hug him tightly, he reassures rubbing your back. "C'mon let's go to my garden.", he leads you by your hand. You escaped headspace, finally you're able to smile.`,
		choices: [] //ending
	},

	monster: {
		text: `<h2>monster</h2> You feel its eyes pierce your soul, its hands creep in trying to grab you and a wide toothy grin plaster their face. It says, "Don't be afraid. It's not as scary as you think." You approach and try to hit, with no avail. You feel the hands push you as you smack your head on the stairway, everything goes dark.`,
		choices: [] //ending 
	},







	Hangman1: {
		text: `<h2>Hangman1</h2> You write hangman on the screen, you fail. I don't know what you were expecting.`,
		choices: [],  //need to add text
	},

	Hellworld:{
		text: `<h2>Hellworld</h2> You type in hell world, and your surroundings change. You're transported into another world. A girl with long black hair is at the piano, playing a song you never heard before. She presses the keys d d d a G g f d f, and then turns around. Her head's bleeding, she smiles anyway. She says "hello little brother." The end.`,
		choices: [],  //need to add text
	},




	//tissues
	tissues: {
		text: `<h2>Tissues</h2>You sob into the tissue, you've been feeling terrible lately. You see a bulbous cat meowing in front of you`,
		choices: [
			['Pet the cat', 'pet'],
			['Talk with the cat', 'talk'],
			['Ignore it and hopes it goes away', 'ignore']
		],
	},

	pet: {
		text: `<h2>pet</h2> You pet the cat, it's very fluffy. The cat is half red, and blue with a yellow belly. Sometimes you wonder if it ever became a real boy. He barfs up a key. You pick it up.`,
		choices: [
			['Try to use it on the laptop', 'keyTolaptop'],
			['Use the key on the cat', 'keyTocat']
		],
	},

	keyTocat: {
		text: `<h2>keytocat</h2> You did it, he turned into a real catboy! You two later marry, Pretty Boy and Jock attend your wedding.`,
		choices: []
	},

	keyTolaptop: {
		text: `<h2>keytolaptop</h2>`,
		choices: []  //need to add text
	},


	talk:{
		text: `<h2>talk</h2> You ask the cat why it's here. They pull out a laptop and show you something that looks to be a boy in a white room. It explains that they're trying to develop an Indie game, that they'll be the first wo- cat to ever create one. The cat turns the laptop screen around, they're typing furiously. Wow they must be working hard. However a voice comes out of the computer screen. "On first blush, we might assume-". They're just watching videos, you sit down beside them and watch. You'll just have to continue your journey some other day.`,
		choices: [],  //need to add text
	},

	ignore:{
		text: `<h2>ignore</h2> It might be tempting to pet the cat, his weirdly empty eyeys stare at you but you're not in the mood. The cat starts talking, he says "Don't drink Orange Joe" and you wonder if it actually means anything."`,
		choices: [],  //need to add text
	},


	
	
	
	
	


}

function buildStory() {
	let story = ``;
	if (breadCrumbs.length < 1) {
		return false;
	} else {
		for (part of breadCrumbs) {
			story += `<p> ${myStory[part].text} </p>`;
		}
		return story;
	}

}

function buildChoices() {
	let currentChapter = myStory[breadCrumbs[breadCrumbs.length - 1]],
		choices = currentChapter.choices;
	choiceList = '';
	if (choices.length > 0) {
		for (choice of choices) {
			choiceList += `<li data-dest='${choice[1]}' onclick='storyLoop(this.dataset.dest)'>${choice[0]}</li>`
		}
	} else {
		choiceList = `This story has concluded. <span class="restart" onclick="restart()">Start another?</span>`;
		itsNotOver = false;
	}
	return choiceList;
}

function buildBreadCrumbs() {
	let crumbs = '';
	if (breadCrumbs.length > 0) {
		for (crumb of breadCrumbs) {
			crumbs += `<li> ${crumb} </li>`;
		}
	} else {
		crumbs = 'You seem lost... please reload the page'
	}
	return crumbs;
}

function storyLoop(choice) {

	if (!choice) {
		return 'Error, no choice made, exiting'
	} else {
		breadCrumbs.push(choice);
	}

	let story = buildStory(),
		crumbs = buildBreadCrumbs();
	choices = buildChoices();

	if (!story) {
		return 'Error loading story!'

	}
	storyElem.innerHTML = story;
	crumbElem.innerHTML = crumbs;
	choicesElem.innerHTML = choices;

	if (itsNotOver) {
		return 'The Story Continues...'
	} else {
		return 'The story has concluded, this time...'
	}
}

function restart() {
	itsNotOver = true;
	breadCrumbs = [];
	storyLoop('intro');
	return 'This tale rises from the ashes...'
}