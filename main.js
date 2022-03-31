
const story = { //story object
        Start:{
            text: `<h2>Intro</h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque egestas diam in arcu cursus euismod quis viverra. Luctus venenatis lectus magna fringilla urna porttitor. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Odio pellentesque diam volutpat commodo sed egestas egestas. Mattis enim ut tellus elementum sagittis vitae. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Fringilla ut morbi tincidunt augue interdum velit euismod. Pretium fusce id velit ut tortor pretium. Proin nibh nisl condimentum id venenatis a condimentum. Justo donec enim diam vulputate ut pharetra sit. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Nisi vitae suscipit tellus mauris a diam. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Adipiscing enim eu turpis egestas pretium aenean pharetra. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Dolor purus non enim praesent elementum facilisis leo vel. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.`,
            choices: [
                ['Choice1','name'],
                ['Choice2','name'],
                ['Choice3','name']
            ],
            imgSrc: "image.jpg"
        },
        Choice1: {
            text: `<h2>C1A</h2> Nibh nisl condimentum id venenatis a condimentum vitae. Et ligula ullamcorper malesuada proin libero. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Tellus pellentesque eu tincidunt tortor aliquam. Morbi leo urna molestie at elementum. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Fermentum leo vel orci porta non pulvinar neque laoreet. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Lectus sit amet est placerat in egestas erat imperdiet sed. Diam vulputate ut pharetra sit amet aliquam id diam.`,
            choices: [
                ['Go to C1C','name'],
                ['Go To C2','name']
            ]
        },
        Choice2: {
            text: `<h2>C1B</h2> Leo vel fringilla est ullamcorper eget nulla. Auctor eu augue ut lectus arcu bibendum at varius. Ipsum faucibus vitae aliquet nec. Semper feugiat nibh sed pulvinar. Proin nibh nisl condimentum id venenatis. Mattis aliquam faucibus purus in massa. Ornare suspendisse sed nisi lacus sed viverra tellus. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Amet mauris commodo quis imperdiet massa. Curabitur vitae nunc sed velit dignissim sodales ut. Ac turpis egestas maecenas pharetra. Volutpat est velit egestas dui id. Facilisis sed odio morbi quis commodo odio.`,
            choices: [
                ['Go to C1A','name'],
                ['Go To C2','name']
            ]
        },
}

var playerchoice = ['start'];  

function pushchoice {
if (document.button.selected) {
    playerchoice.push(document.button.selected.text[i]);
    console.log(playerchoice);
}
}


