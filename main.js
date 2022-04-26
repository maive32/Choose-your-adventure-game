let breadCrumbs = [],
		itsNotOver = true,
		storyElem = document.getElementById('text'),
		choicesElem = document.getElementById('choiceList'),
		crumbElem = document.getElementById('crumbList');

const myStory = {
	intro:{
		text: `<h2>Intro</h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque egestas diam in arcu cursus euismod quis viverra. Luctus venenatis lectus magna fringilla urna porttitor. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Odio pellentesque diam volutpat commodo sed egestas egestas. Mattis enim ut tellus elementum sagittis vitae. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Fringilla ut morbi tincidunt augue interdum velit euismod. Pretium fusce id velit ut tortor pretium. Proin nibh nisl condimentum id venenatis a condimentum. Justo donec enim diam vulputate ut pharetra sit. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Nisi vitae suscipit tellus mauris a diam. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Adipiscing enim eu turpis egestas pretium aenean pharetra. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Dolor purus non enim praesent elementum facilisis leo vel. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.`,
		flavor: `What should Lorem do?`,
		choices: [
			['Go To C1A','c1a'],
			['Go To C1B','c1b'],
			['Go to C1C','c1c']
		],
		imgSrc: "image.jpg"
	},
	c1a: {
		text: `<h2>C1A</h2> Nibh nisl condimentum id venenatis a condimentum vitae. Et ligula ullamcorper malesuada proin libero. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Tellus pellentesque eu tincidunt tortor aliquam. Morbi leo urna molestie at elementum. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Fermentum leo vel orci porta non pulvinar neque laoreet. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Lectus sit amet est placerat in egestas erat imperdiet sed. Diam vulputate ut pharetra sit amet aliquam id diam.`,
		flavor: `Where does Lorem go next?`,
		choices: [
			['Go to C1C','c1c'],
			['Go To C2','c2']
		]
	},
	c1b: {
		text: `<h2>C1B</h2> Leo vel fringilla est ullamcorper eget nulla. Auctor eu augue ut lectus arcu bibendum at varius. Ipsum faucibus vitae aliquet nec. Semper feugiat nibh sed pulvinar. Proin nibh nisl condimentum id venenatis. Mattis aliquam faucibus purus in massa. Ornare suspendisse sed nisi lacus sed viverra tellus. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Amet mauris commodo quis imperdiet massa. Curabitur vitae nunc sed velit dignissim sodales ut. Ac turpis egestas maecenas pharetra. Volutpat est velit egestas dui id. Facilisis sed odio morbi quis commodo odio.`,
		flavor: `Where does Lorem go next?`,
		choices: [
			['Go to C1A','c1a'],
			['Go To C2','c2']
		]
	},
	c1c: {
		text: `<h2>C1C</h2> Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vitae elementum curabitur vitae nunc sed velit dignissim. Nunc vel risus commodo viverra maecenas. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Eget nunc lobortis mattis aliquam. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Ornare quam viverra orci sagittis. At varius vel pharetra vel turpis nunc eget lorem. Augue interdum velit euismod in. Senectus et netus et malesuada fames ac turpis. Nullam eget felis eget nunc lobortis. Venenatis urna cursus eget nunc scelerisque.`,
		flavor: `Where does Lorem go next?`,
		choices: [
			['Go to C2','c2']
		]
	},
	c2: {
		text: `<h2>C2</h2> Orci sagittis eu volutpat odio facilisis mauris sit amet. Mauris cursus mattis molestie a. Sodales ut etiam sit amet nisl purus in mollis nunc. Donec massa sapien faucibus et molestie. Molestie ac feugiat sed lectus vestibulum mattis. Ac turpis egestas maecenas pharetra convallis posuere. Eu facilisis sed odio morbi quis commodo odio aenean sed. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Diam in arcu cursus euismod quis viverra nibh cras. Et leo duis ut diam. Pellentesque diam volutpat commodo sed. Id porta nibh venenatis cras. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Amet purus gravida quis blandit turpis cursus in. Pretium aenean pharetra magna ac placerat. Quisque egestas diam in arcu cursus euismod quis.`,
		flavor: `There's only one thing left for Lorem to do`,
		choices: [
			['Go to C3','c3']
		]
	},
	c3: {
		text: `<h2>C3</h2> Orci sagittis eu volutpat odio facilisis mauris sit amet. Mauris cursus mattis molestie a. Sodales ut etiam sit amet nisl purus in mollis nunc. Donec massa sapien faucibus et molestie. Molestie ac feugiat sed lectus vestibulum mattis. Ac turpis egestas maecenas pharetra convallis posuere. Eu facilisis sed odio morbi quis commodo odio aenean sed. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Diam in arcu cursus euismod quis viverra nibh cras. Et leo duis ut diam. Pellentesque diam volutpat commodo sed. Id porta nibh venenatis cras. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Amet purus gravida quis blandit turpis cursus in. Pretium aenean pharetra magna ac placerat. Quisque egestas diam in arcu cursus euismod quis.`,
		flavor: `Lorem lives happily ever after. The End.`,
		choices: []
	}
}

function buildStory(){
	let story = ``;
	if (breadCrumbs.length < 1){
		return false;
	} else {
		for (part of breadCrumbs){
			story += `<p> ${myStory[part].text} </p>`;
		}
		return story;
	}
	
}

function buildChoices(){
	let currentChapter = myStory[breadCrumbs[breadCrumbs.length - 1]],
			choices = currentChapter.choices;
			choiceList = '';
	if (choices.length > 0) {
		for(choice of choices){
				choiceList += `<li data-dest='${choice[1]}' onclick='storyLoop(this.dataset.dest)'>${choice[0]}</li>`
		}
	} else {
		choiceList = `This story has concluded. <span class="restart" onclick="restart()">Start another?</span>`;
		itsNotOver = false;
	}
	return choiceList;
}

function buildBreadCrumbs(){
	let crumbs = '';
	if(breadCrumbs.length > 0){
		for(crumb of breadCrumbs){
			crumbs += `<li> ${crumb} </li>`;
		}
	} else {
		crumbs = 'You seem lost... please reload the page'
	}
	return crumbs;
}

function storyLoop(choice){
	
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

	if (itsNotOver){
		return 'The Story Continues...'
	} else {
		return 'The story has concluded, this time...'
	}
}

function restart(){
	itsNotOver = true;
	breadCrumbs = [];
	storyLoop('intro');
	return 'This tale rises from the ashes...'
}