let breadCrumbs = [],
	itsNotOver = true,
	storyElem = document.getElementById('text'),
	choicesElem = document.getElementById('choiceList'),
	crumbElem = document.getElementById('crumbList');


const myStory = { //story object
	intro: {
		text: `<h2>Intro</h2> Waking up, you see the pasty boy. You've been retreating here for a while now from the outside world. Everything is white like you. Except for the black light bulb that shines above you, a laptop, tissues, a cat, and a sketchbook. You've been placed on this blanket with everything you need. What will you do?`,

		choices: [
			['Mess with laptop', 'laptop'],
			['Use the tissues', 'tissues'],
			['Read the notebook', 'notebook'],
		],
	},
	//notebook
	notebook: {
		text: `<h2>Notebook</h2> You flip open the notebook and see your masterpieces, images of red hands and limbs are all over the page. Something specifically catches your eye, there is a photograph of your first duet on christmas, playing the violin with your sister on the piano. You tuck the photograph into your pockets. you hear sharp metal hit the ground. At the same time, you also see a door appear. You walk over to the knife first, and "equip it."`,
		choices: [
			['Stab youself', 'stab'],
			['Open the door', 'open'],
		],
	},

	stab: {
		text: `<h2>Stab</h2>You wake up to your bedroom. You've been sleeping for a while, you check your messages and do your chores around the house. You make yourself indigestible food. It's the end of the week, your mom is back from the sale. She takes you to your new house.`,
		choices: [], // ending
	},

	open: {
		text: `<h2>Open</h2>You enter and close the door behind you. The color world of pastel contrasts nicely to your own dreary pallet, a bright whimsical world. Something's wrong though, your friends aren't here. Aubrey usually greets you first, as the brother Kel and Hero play cards. Kel would then yell at Aubrey for stepping over their game. You explore outside to see if you can find them. Climbing outside of the tree trunk, you can check the playground or the dock first.`,
		choices: [
			['Playground', 'playground'],
			['Dock', 'dock'],
		],
	},

	playground: {
		text: `<h2>Playground</h2>You decide that your friends are most likely at the playground, your other acquaintances are there. You arrive but you don't only not find what you're looking for, actually no one's here. You feel lonely, and you're not sure what to do to find them. You find a mirror floating in the middle of the playground. You look at yourself, and see that you can just play hide and seek with the mirror. You play for a little while.`,
		choices: [
			['Continue to play hide and seek', 'hideAndseek'],
			['Return to the dock', 'dock']
		],
	},

	hideAndseek: {
		text: `<h2>Hide and seek</h2>You keep playing hide and seek, you don't need them. You keep playing, you get tired. You decide that was enough action for today and return to the neighbor's room to rest.`,
		choices: [] //ending
	},

	dock: {
		text: `<h2>Dock</h2>You find your sister, Mari at the dock. She greets you with a kind smile, and walks towards you. She explains that everyone was forced to sign contracts, and now everyone works at the Last Resort, an underwater casino. Mari says, "I know it's scary but we'll have to cross the water to find them. Don't worry though, I'll keep you company!". You've always been terrified of drowning, however you breathe in and calm down. You put your feet in the water first before fully going in. You're almost to the well, Mari stops. "You'll have to continue on your own, you know I can't always be there for you." She says before disappears You enter deeper well. In front is a highway that stretches for miles, a cab is stationed nearby.`,
		choices: [
			['Take the cab', 'cab'],
		],
	},

	cab: {
		text: `<h2>Cab</h2>You take the cab over the Last Resort. Outside waiting for you is Kel, as he notices you he runs in your direction. "Hey Sunny! Where've you been, buddy? Everyone got tricked into signing contracts, we all have jobs now. My job is to point to the Last Resort... I don't even know why people like this job, we should all get out of here. I don't know where Hero is, but I know where Aubrey is. Let's go find her!" Kel shouts. Inside the Resort, are some alligator guys. Kell informs you he lost the elevator pass that will take you to the 5th floor.`,
		choices: [
			['Gamble', 'gamble'],
			['Check the hotel rooms', 'hotelRooms'],
			['Check the bathrooms', 'bathrooms'],
		],
	},

	gamble: {
		text: `<h2>Gamble</h2>You waste a couple of Clams trying to play the slot machines.`,
		choices: [
			['Check the hotel rooms', 'hotelRooms'],
		],
	},

	bathrooms: {
		text: `<h2>Bathrooms</h2>The bathroom is clean, a gator guy is in there  admiring his own reflection. You search to see if there's anything, there isn't. You force Kel to wash his hands and then leave.`,
		choices: [
			['Check the hotel room', 'hotelRooms'],
		],
	},

	hotelRooms: {
		text: `<h2>Hotel rooms</h2>You check the hotel rooms, looking in people's suitcases. You finally find a keycard, and head for the elevator. Before you could, a gator guy rushes into the room, he's security and you're not allowed in this hotel room. You need some way of escaping.`,
		choices: [
			['Escape through the vents', 'vents'],
			["Throw Kel's pet rock", 'petRock'],
		],
	},

	vents: {
		text: `<h2>Vents</h2>You try the vent but you're too slow, the gator guy grabs you before you can reach it. He takes away your keycard, and he throws out the building, and bans you forever from the Last Resort.`,
		choices: [], //ending
	},

	petRock: {
		text: `<h2>Pet Rock</h2>Without hesitation, you grab Kel's and fling it at the Gator guy's face. You run as fast as possibl3e, Kel cires about he'll come back for Hector later. You hop on the elevator and insert the keycard, going straight to floor 5. You go through the hall, Aubrey is working as a receptionist. She's too busy scheduling people's calls to notice the two of you. Kel makes an effor to get Aubrey's attention, leaning on the counter. "Hey, hey, hey, hey, hey." Her lack of response causes Kel to pout, he throws a ball in her direction hitting her in the face, "Hey!! Look here!" She angrily glances, throwing him back the ball. Aubrey starts to complain with Kel, but she calms down when she sees Sunny- "Hey Sunny, I've gotten a job! But, I think I've gotten a bit carried away. I was looking for Hero, and I can't seem to find him anywhere, maybe you should talk with the boss." She points to the door behind her. You enter the boss's office. Jawsum lectures Aubrey as soon as she walks in, "AUBREY MY GODDAMN TOFU FUNDRAISER IS IN 12 HOURS, WHY AREN'T YOU WORKING?, Aubrey shoots Jawsum a guilty look, and says "I have to go Jawsum. We made a promise to find someone. Even if we did sign contracts with you, that's more important." Jawsum sighs but gives an understanding smirk and simply states "Alright you can go as long as you bring Kel wit you." Kel and Aubrey nodded however they needed one more person. Kel knew who, "Uhhh can we also have Hero, my brother?" Jawsum blinked before letting out a strong laugh, "You're joking, right? Hero is the best employee I've ever had. Productivity has increased 5000% ever since he started working here." He was laughing for a while until he realized none of us were laughing. "oh" he plainly sounded, Hero enters into the room with Jawsum's coffee. He exclaimed of how he finished setting everything up for the tofu fundraiser. As he finishes, he turns in your direction. Aubrey clears her throat before whispering, "Basil". Hero shifts awkwardly, he stares for a minute before declaring, "Oh how could I forget something so important? We need to go find Basil now." He was about to rush out the room but Jawsum shouted, "Hero, there's still work to be done. You haven't ushered in the VIP for the fundraiser yet. You signed a contract." Hero argued that it was just a mesly piece of paper. "A MESLY PIECE OF PAPER?!?", Jawsum snapped his fingers to call in his security guards, "the penalty for breaking a contract is DEATH."`,
		choices: [
			['Beat them up', 'beat'],
			['Break the intercom', 'intercom']
		],
	},

	beat: {
		text: `<h2>Beat</h2>You with ease take out the two Gator guys that called, Jawsum speaks on the intercom and 4 more Gator guys show up. They outnumber you and they beat you up until you can't feel anything, the last thing you see is their teeth.`,
		choices: [], //ending
	},

	intercom: {
		text: `<h2>Intercom</h2>You destory the intercom by kicking it in, Jawsum slams his fist against the desk. His bodyguards are defeated, he signs and asks, "Is there really I can do to get you to stay? OH! What about a job? You, there!", he's peering at you. "How about you work for me? HUH??"`,
		choices: [
			['Accept', 'accept'],
			['Deny', 'deny'],
		],
	},

	accept: {
		text: `<h2>Accept</h2>"Good! Sign here.", he hands you a contract. You sign and he puts the contract into the drawer. Your friends peered at one another, but they shrugged. "I'm sure Sunny knows what he's doing", Aubrey said. Everyone goes back to their jobs. You can't speak, or do much of anything. You're stuck as a bed rater.`,
		choices: [],//ending
	},

	deny: {
		text: `<h2>Deny</h2>"I REALLY can't convince you to stay huh?", Jawsum eats the contracts and turns around, "Go you crazy kids." You leave for home, you play on the playground now that some of your friends are back. Kel suggests a game of hide and seek, you're happy but you feel like someone's missing. Oh well.`,
		choices: [],//ending 
	},

	//laptop
	laptop: {
		text: `<h2>Laptop</h2> You mess with the laptop, and it turns on. The usual display is replaced with a game of hangman. Before it was just your desktop background with your journal. The heat of the laptop on your lap is comforting. You can write: `,
		choices: [
			['Welcome to black space', 'blackspace'],
			['Hangman', 'Hangman1'],
			['Hell world', 'Hellworld'],
		],
	},

	blackspace: {
		text: `<h2>Blackspace</h2> A light bulb falls down and the room goes dark. Many doors appear but you can only access three of them, one to your left, one to your right and another in front of you which door do you choose?`,
		choices: [
			['Door on the left', 'leftDoor'],
			['Door in the in front', 'frontDoor'],
			['Door on the right', 'rightDoor'],
		],
	},

	leftDoor: {
		text: `<h2>Left door</h2> You go closer to the door and you hear a woman's voice "Sunny, let me in", you freeze and run away. The door on the left disappears. What door next?`,
		choices: [
			['Door on the right', 'rightDoor'],
		],
	},

	frontDoor: {
		text: `<h2>Front door</h2> You end up in white Space again, and decide whatever it was wasn't important.`,
		choices: []//ending
	},

	rightDoor: {
		text: `<h2>Right door</h2> As you open up the door, you feel another person pull the knob. It's your friend, Basil. He holds your hand and guides you inside, you're both inside a garden room adorned with flowers. He shows you a white flower and says "Sunny, I know things may seem though ever since she passed, but here we have this." He hands you the flower, you put it in your pocket, "It's a Gladiolus, they represent strength of character; whenever you feel afraid, just hold on to it." He gives you a soft smile before leading you outside. You feel alone. You stand across a staircase, the room is dark. Hands come out of the stairs, you can see something with a gaping mouth and sharp teeth. You decide to confront our fears and walk down towards it.`,
		choices: [
			['Look at the flower', 'flower'],
			['Look at the monster', 'monster'],
		]
	},

	flower: {
		text: `<h2>Flower</h2> You grab the Gladiolus in your hand, remembering Basi's words. It helps you calm down. The monster slowly fades away as you walk further into the darkness ahead. You soon reach the bottom of the staircase, and look at some of the spider webs that block your way from here to the living room across. You shudder at the thought of spiders being around.`,
		choices: [
			['Look for something in the boxes', 'boxes'],
			['Try to force through the web', 'forceThrough'],
		]
	},


	boxes: {
		text: `<h2>Boxes</h2> You look around and find a pair of sharp garden shears, you use it to cut through the thick web in front of you. As you walk through the halls, you see the faint pictures in the hallway of you and your sister performing together, you seem to frow more and more distant as each picture goes on. As the end of the hall approaches, you see your last picture together; you both seem to hate the other's presence. In the living room, you spot a myriad of spider-like crawlies on the floor. They scutter away into the darkness in a pattern that seems like locks of hair, entangling a dark blueish figure who slowly walks away from the shadows. It's your sister, some deformed version of her with a twisted neck, hollow eyes and mouth; her arms reach out to you and you show them away, she yells "Sunny, why did you push me?", before grabbing your garden shears from your pocket and puncturing through. You feel your body grow limp, looking at her with sadness in your eyes, the last words you are able to muster is "I'm sorry...". You wake up in a cold sweat, breathing heavily. Your chest feels hefty- you hear banging on the door from the outside.`,
		choices: [
			['Take a knife from the kitchen', 'knifeEnding'],
			['Go to the door', 'trueEnding'],
		],
	},

	forceThrough: {
		text: `<h2>Force through</h2> You try to foce your way through the web, yet it is way too thick  to be walked through. You're going need something else to cut it.`,
		choices: [
			['Look for something the boxes', 'boxes']
		],
	},

	knifeEnding: {
		text: '<h2>Knife ending</h2> You walk down the stairs toward the kitchen. You grab the handle of the knife and anim it at your stomach. You loved her but you still killed her, and you took her away from everyone, disgusted by what you have done. You plunge the knife inside your chest and watch your view fall into darkness. Good night.',
		choices: [] //ending
	},

	trueEnding: {
		text: `<h2>True ending</h2> You go to the entry door in the living room and hear someone call you, "Sunny, it's me Basil". You are scared to answer, you feel the air in the room lessen as you struggle to breathe, her monstrous face appearing once again in front of you as you feel terrified. But, you remember how to calm down, slowly pacing your breaths; her monster starts to fade away and the image of your sister, as you remember, looks at you with kind eyes, waving you a final goodbye as she disappears. You open the door and it's your best friend, Basil. He asks where you've been, that you've been gone for weeks and that he was worried. "Anyway, are you okay Sunny?" he asks. Your eyes swell up and you hug him tightly, he reassures rubbing your back. "C'mon let's go to my garden.", he leads you by your hand. You escaped headspace, finally you're able to smile.`,
		choices: [] //ending
	},

	monster: {
		text: `<h2>Monster</h2> You feel its eyes pierce your soul, its hands creep in trying to grab you and a wide toothy grin plaster their face. It says, "Don't be afraid. It's not as scary as you think." You approach and try to hit, with no avail. You feel the hands push you as you smack your head on the stairway, everything goes dark.`,
		choices: [] //ending 
	},







	Hangman1: {
		text: `<h2>Hangman</h2> You write hangman on the screen, you fail. I don't know what you were expecting.`,
		choices: [],  //ending
	},

	Hellworld: {
		text: `<h2>Hell world</h2> You type in hell world, and your surroundings change. You're transported into another world. A girl with long black hair is at the piano, playing a song you never heard before. She presses the keys d d d a G g f d f, and then turns around. Her head's bleeding, she smiles anyway. She says "hello little brother." The end.`,
		choices: [],  //ending
	},




	//tissues
	tissues: {
		text: `<h2>Tissues</h2>You sob into the tissue, you've been feeling terrible lately. You see a bulbous cat meowing in front of you.`,
		choices: [
			['Pet the cat', 'pet'],
			['Talk with the cat', 'talk'],
			['Ignore it and hopes it goes away', 'ignore'],
		],
	},

	pet: {
		text: `<h2>Pet</h2> You pet the cat, it's very fluffy. The cat is half red, and blue with a yellow belly. Sometimes you wonder if it ever became a real boy. He barfs up a key. You pick it up.`,
		choices: [
			['Try to use it on the laptop', 'keyTolaptop'],
			['Use the key on the cat', 'keyTocat'],
		],
	},

	keyTocat: {
		text: `<h2>Key to cat</h2> You did it, he turned into a real catboy! You two later marry, Pretty Boy and Jock attend your wedding.`,
		choices: [] //ending
	},

	keyTolaptop: {
		text: `<h2>Key to laptop</h2> You use the key on the laptop keyboard, everything in the room starts to stutter. A set of glowing red footprints appear on the floor, the path that continues past your vision. A couple of hands that find themselves on the outskirts of white space try to stop you. Following it leads you to a tear. The color of black space seeping into the all white surrounding. Stepping through the tear, you look around and see more footprints, you decide to follow the footprints. The forest wwas covered in webbing, and became thicker the more you traveled towards the church. In the middle of the path was a black figure with 4 legs and a single eye on its head. It kicked and thrashed around, almost hitting you. "Sunny..." it seemed to say, the voice evidently echoing through the trees.`,
		choices: [
			['Respond to the figure', 'respond'],
			['Try to look away', 'lookaway'],
		],
	},

	respond: {
		text: `<h2>Respond</h2>You open your mouth as if to ask for help on a way out of here. It opens its single looking directly at you, "You should not have left, Sunny"- Its body wobbly moves and hides on the darkest corners of the greenery, you are unable to catch its direct location. Seemingly, disappearing from your view. As you try to leave the area, its shadowy tendrils wrap against your feet pulling you to the floor, you start to sink beneath- "I pity all the suffering you endured, so please, let me help you forget." it echoed around you.`,
		choices: [
			['Struggle', 'struggle1'],
			['Give in', 'giveIn'],
		]
	},

	lookaway: {
		text: `<h2>Look away</h2>You look away, and the area seems to change. You don't know where you are, there's nothing here and there's no way out. What happened?`,
		choices: [],//ending
	},

	struggle1: {
		text: `<h2>Struggle</h2>You hold onto the floor, barely managing to resist. A long jump rope hanging from a tree extends your way as you start to sink deeper, you kick the tendrils in the hopes it would let go. The tendrils recoil in response, losing their grasp. You try getting back on your feet and face the deer - ???Why do you want to open these wounds? Haven't you wept enough????- The deer falls into your shadow, you feel a cold sweat. From the shadow a black and white boy emerges, Omori; you somehow already know. He pulls out his knife and attempts to take a stab at you.`,
		choices: [
			['Accept him', 'Accept'],
			['fight', 'fight1'],
		]
	},

	Accept: {
		text: `<h2>Accept</h2>The black dots on Omori's eyes reflect yours and you take notice how his distant blank stare felt familiar, you come to realize Omori is a part of you. You get closer to him and whilst he prepares to lunge you hug him; Omori's surprised, evaporating slowly before there's only you with your arm reaching out, hugging yourself. 
		You wake up to your room. You hear the sound of keys jingling in the living room, you rush to see what was happening. You see your mother getting the last boxes to move, unable to shake the rush of emotion, you embrace her, she asks what's wrong. You begin to recount the events of Mari's death???
		`,
		choices: [], //ending

	},

	giveIn: {
		text: `<h2>Give in</h2>You allow the tendrils to pull you deeper to the floor till only your head is exposed, feeling nothing from your body below anymore. The deer lies next to you cradling your head and singing a whimsy lullaby; your eyelids feel heavy and you close your eyes. Welcome back to white space.`,
		choices: [], //ending
	},

	fight1: {
		text: `<h2>Fight</h2>You try to fight Omori, dealing a couple of hits as he does the same to you. You use your skills to heal yourself and he does too. The struggle goes on forever...`,
		chocies: [], //ending
	},

	talk: {
		text: `<h2>Talk</h2> You ask the cat why it's here. They pull out a laptop and show you something that looks to be a boy in a white room. It explains that they're trying to develop an Indie game, that they'll be the first wo- cat to ever create one. The cat turns the laptop screen around, they're typing furiously. Wow they must be working hard. However a voice comes out of the computer screen. "On first blush, we might assume-". They're just watching videos, you sit down beside them and watch. You'll just have to continue your journey some other day.`,
		choices: [],  //ending
	},

	ignore: {
		text: `<h2>Ignore</h2> It might be tempting to pet the cat, his weirdly empty eyes stare at you but you're not in the mood. The cat starts talking, he says "Don't drink Orange Joe" and you wonder if it actually means anything."`,
		choices: [],  //ending
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