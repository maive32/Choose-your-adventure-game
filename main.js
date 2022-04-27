/*Starting the game*/

const story = { //story object
        Start:{
            text: `Waking up, you see the pasty boy. You've been retreating here for a while now from the outside world. Everything is white like you. Except for the black light bulb that shines above you, a laptop, tissues, a cat, and a sketchbook. You've been placed on this blanket with everything you need. What will you do?`,
            choice: [
                ['Mess with laptop','laptop'],
                ['Use the tissues','tissues'],
                ['Read the notebook','notebook']
            ],
            imgSrc: "image.jpg"
        },
        laptop: {
            text: `<h2>C1A</h2> You mess with the latptop, and it turns on. The usual display is replaced with a game of hangman. Before it was just your desktop background with your journal. The heat of the laptop on your lap is comforting. You can write: `,
            choices: [
                ['Welcome to black space','blackspace'],
                ['Hangman','Hangman1']
                ['Hell world','Hellworld']
            ]
        },
        blackspace: {
            text: `<h2>C1B</h2> A light bulb falls down and the room goes dark. Many doors appear but you can only access three of them, one to your left, one to your right and another in front of you which door do you choose?`,
            choices: [
                ['Door on the left','leftDoor'],
                ['Door in the in front','frontDoor']
                ['Door on the right', 'rightDoor']
            ]
        },
        leftDoor: {
            text: `<h2>C1A</h2> You go closer to the door and you hear a woman's voice "Sunny, let me in", you freeze and run away. The door on the left disappears. What door next?`,
            choices: [
                ['Door on the right','rightDoor'],
            ]
        },
        frontDoor: {
            text: `<h2>C1A</h2> You end up in white Space again, and decide whatever it was wasn't important.`,
            choices: ['',''],
        },
        rightDoor: {
            text: `As you open up the door, you feel another person pull the knob. It's your friend, Basil. He holds your hand and guides you inside, you're both inside a garden room adorned with flowers. He shows you a white flower and says "Sunny, I know things may seem though ever since she passed, but here we have this." He hands you the flower, you put it in your pocket, "It's a Gladiolus, they represent strength of character; whenever you feel afraid, just hold on to it." He gives you a soft smile before leading you outside. You feel alone. You stand across a staircase, the room is dark. Hands come out of the stairs, you can see something with a gaping mouth and sharp teeth. You decide to confront our fears and walk down towards it`,
            choices: ['Look at the flower','flower'],
            choices: ['Look at the monster','monster'],
        },
        flower: {
            text: `You grab the Gladiolus in your hand, remembering Basi's words. It helps you calm down. The monster slowly fades away as you walk further into the darkness ahead. You soon reach the bottom of the staircase, and look at some of the spider webs that block your way from here to the living room across. You shudder at the thought of spiders being around`,
            choices: ['Look for something in the boxes','boxes'],
            choices: ['Try to force through the web','forceThrough']
        },
        monster: {
            text: `You feel its eyes pierce your soul, its hands creep in trying to grab you and a wide toothy grin plaster their face. It says, "Don't be afraid. It's not as scary as you think." You approach and try to hit, with no avail. You feel the hands push you as you smack your head on the stairway, everything goes dark.`,
            choices: ['',''],
        },
        boxes: {
            text: `You look around and find a pair of sharp garden shears, you use it to cut through the thick web in front of you. As you walk through the halls, you see the faint pictures in the hallway of you and your sister performing together, you seem to frow more and more distant as each picture goes on. As the end of the hall approaches, you see your last picture together; you both seem to hate the other's presence. In the living room, you spot a myriad of spider-like crawlies on the floor. They scutter away into the darkness in a pattern that seems like locks of hair, entangling a dark blueish figure who slowly walks away from the shadows. It's your sister, some deformed version of her with a twisted neck, hollow eyes and mouth; her arms reach out to you and you show them away, she yells "Sunny, why did you push me?", before grabbing your garden shears from your pocket and puncturing through. You feel your body grow limp, looking at her with sadness in your eyes, the last words you are able to muster is "I'm sorry...". You wake up in a cold sweat, breathing heavily. Your chest feels hefty- you hear banging on the door from the outside.`,
            choices: ['Take a knife from the kitchen','knifeEnding'],
            choices: ['Go to the door', 'trueEnding'],
        },
        knifeEnding: {
            text: 'You walk down the stairs toward the kitchen. You grab the handle of the knife and anim it at your stomach. You loved her but you still killed her, and you took her away from everyone, disgusted by what you have done. You plunge the knife inside your chest and watch your view fall into darkness. Good night.', 
            choices: ['',''],
        },
        trueEnding: {
            text: `You go to the entry door in the living room and hear someone call you, "Sunny, it's me Basil". You are scared to answer, you feel the air in the room lessen as you struggle to breathe, her monstrous face appearing once again in front of you as you feel terrified. But, you remember how to calm down, slowly pacing your breaths; her monster starts to fade away and the image of your sister, as you remember, looks at you with kind eyes, waving you a final goodbye as she disappears. You open the door and it's your best friend, Basil. He asks where you've been, that you've been gone for weeks and that he was worried. "Anyway, are you okay Sunny?" he asks. Your eyes swell up and you hug him tightly, he reassures rubbing your back. "C'mon let's go to my garden.", he leads you by your hand. You escaped headspace, finally you're able to smile.`, 
            choices: ['',''],
        },
        tissues: {
            text: `You sob into the tissue, you've been feeling terrible lately. You see a bulbous cat meowing in front of you`, 
            choices: ['Pet the cat','pet'],
            choices: ['Talk with the cat', 'talk'],
        }, 
}

var storyChoices = [];




