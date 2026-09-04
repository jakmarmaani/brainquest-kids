export const ZONES=[
 {id:'castle',name:'Puzzle Castle',icon:'🏰',x:170,y:190,color:'#8d67e8'},
 {id:'forest',name:'Mystery Forest',icon:'🌳',x:355,y:125,color:'#3ebd6d'},
 {id:'space',name:'Space World',icon:'🚀',x:610,y:115,color:'#5e5cdb'},
 {id:'pirate',name:'Pirate Island',icon:'🏴‍☠️',x:900,y:155,color:'#d69b38'},
 {id:'dino',name:'Dinosaur Valley',icon:'🦖',x:1110,y:230,color:'#6aad47'},
 {id:'robot',name:'Robot City',icon:'🤖',x:1045,y:410,color:'#667c9b'},
 {id:'ocean',name:'Underwater Kingdom',icon:'🌊',x:1090,y:595,color:'#27a9d7'},
 {id:'race',name:'Racing World',icon:'🏎️',x:835,y:610,color:'#ef6057'},
 {id:'builder',name:'Builder World',icon:'🧱',x:595,y:610,color:'#e99636'},
 {id:'hero',name:'Hero Academy',icon:'🦸',x:350,y:595,color:'#e64f84'},
 {id:'candy',name:'Candy Land',icon:'🍭',x:135,y:540,color:'#ef85bf'},
 {id:'snake',name:'Snake Arena',icon:'🐍',x:105,y:355,color:'#4eb65b'},
 {id:'caves',name:'Treasure Caves',icon:'💎',x:300,y:360,color:'#37b4cf'},
 {id:'brain',name:'Brain Lab',icon:'🧠',x:580,y:360,color:'#8a63df'},
 {id:'volcano',name:'Volcano Adventure',icon:'🌋',x:820,y:355,color:'#d95340'}
];

export const MISSIONS=[
{id:1,zone:'forest',type:'scavenge',title:'Golden Star Hunt',icon:'⭐',goal:5,theme:'forest',objective:'Find 5 golden stars!'},
{id:2,zone:'castle',type:'maze',title:'Three Castle Keys',icon:'🔑',goal:3,theme:'castle',objective:'Find the keys and reach the gate!'},
{id:3,zone:'snake',type:'snake',title:'Fruit Dash',icon:'🍎',goal:12,theme:'grass',objective:'Eat fruit, grab gems, dodge rocks!'},
{id:4,zone:'builder',type:'builder',title:'Bridge Rescue',icon:'🌉',goal:9,theme:'river',variant:'bridge',objective:'Build the bridge!'},
{id:5,zone:'hero',type:'hero',title:'Training Bots',icon:'🤖',goal:4,theme:'academy',power:'speed',objective:'Stop the silly training bots!'},
{id:6,zone:'race',type:'race',title:'Sunny Circuit',icon:'🏁',goal:3,theme:'road',vehicle:'car',objective:'Race through 3 checkpoints!'},
{id:7,zone:'castle',type:'memory',title:'Royal Memory',icon:'👑',goal:4,theme:'castle',objective:'Find the matching royal cards!'},
{id:8,zone:'space',type:'platform',title:'Moon Jump Rescue',icon:'🌙',goal:6,theme:'space',objective:'Jump, collect coins and rescue the rover!'},
{id:9,zone:'pirate',type:'scavenge',title:'Treasure Map Pieces',icon:'🗺️',goal:6,theme:'island',objective:'Find 6 map pieces!'},
{id:10,zone:'brain',type:'pattern',title:'Colour Reactor',icon:'🟣',goal:4,theme:'lab',objective:'Copy the glowing pattern!'},
{id:11,zone:'dino',type:'scavenge',title:'Dino Egg Rescue',icon:'🥚',goal:5,theme:'dino',objective:'Find the missing dinosaur eggs!'},
{id:12,zone:'robot',type:'logic',title:'Battery Sort',icon:'🔋',goal:5,theme:'robot',objective:'Match each battery to the right machine!'},
{id:13,zone:'ocean',type:'race',title:'Coral Boat Run',icon:'🛶',goal:4,theme:'ocean',vehicle:'boat',objective:'Steer the boat through coral gates!'},
{id:14,zone:'candy',type:'match',title:'Sweet Shapes',icon:'🍬',goal:6,theme:'candy',objective:'Match the candy shapes!'},
{id:15,zone:'caves',type:'hidden',title:'Crystal Cave',icon:'💎',goal:7,theme:'cave',objective:'Find the hidden crystals!'},
{id:16,zone:'volcano',type:'platform',title:'Lava Leap',icon:'🌋',goal:7,theme:'volcano',objective:'Jump across the lava!'},
{id:17,zone:'castle',type:'math',title:'Number Bridge',icon:'➕',goal:5,theme:'castle',objective:'Solve the numbers to repair the bridge!'},
{id:18,zone:'forest',type:'science',title:'Animal Homes',icon:'🐾',goal:5,theme:'forest',objective:'Help each animal find its home!'},
{id:19,zone:'space',type:'scavenge',title:'Lost Moon Rocks',icon:'🪨',goal:6,theme:'space',objective:'Find the glowing moon rocks!'},
{id:20,zone:'pirate',type:'maze',title:'Secret Lagoon Maze',icon:'🧭',goal:1,theme:'island',objective:'Find the pirate ship!'},
{id:21,zone:'dino',type:'platform',title:'Dino Ridge Rescue',icon:'🦕',goal:8,theme:'dino',objective:'Climb the ridge and rescue baby Dino!'},
{id:22,zone:'robot',type:'hero',title:'Magnet Bot Battle',icon:'🧲',goal:5,theme:'robot',power:'magnet',objective:'Use magnet power on the robots!'},
{id:23,zone:'ocean',type:'scavenge',title:'Pearl Search',icon:'🦪',goal:7,theme:'ocean',objective:'Swim around and find the pearls!'},
{id:24,zone:'race',type:'race',title:'Rocket Sprint',icon:'🚀',goal:5,theme:'space',vehicle:'rocket',objective:'Fly through the star gates!'},
{id:25,zone:'builder',type:'builder',title:'Tower Challenge',icon:'🏗️',goal:12,theme:'builder',variant:'tower',objective:'Build a tall stable tower!'},
{id:26,zone:'hero',type:'hero',title:'Shield School',icon:'🛡️',goal:6,theme:'academy',power:'shield',objective:'Block energy balls and stop the bots!'},
{id:27,zone:'candy',type:'snake',title:'Candy Snake',icon:'🍭',goal:18,theme:'candy',objective:'Collect sweets and power-ups!'},
{id:28,zone:'caves',type:'logic',title:'Gem Path',icon:'🔷',goal:6,theme:'cave',objective:'Connect the gem path!'},
{id:29,zone:'brain',type:'memory',title:'Sound Lights',icon:'🎵',goal:5,theme:'lab',objective:'Watch, listen and repeat!'},
{id:30,zone:'volcano',type:'math',title:'Cool the Lava',icon:'❄️',goal:6,theme:'volcano',objective:'Solve the number to fire the ice cannon!'},
{id:31,zone:'castle',type:'word',title:'Magic Letters',icon:'🔤',goal:5,theme:'castle',objective:'Build the word that matches the picture!'},
{id:32,zone:'forest',type:'hidden',title:'Butterfly Search',icon:'🦋',goal:8,theme:'forest',objective:'Find the hidden butterflies!'},
{id:33,zone:'space',type:'race',title:'Asteroid Run',icon:'☄️',goal:5,theme:'space',vehicle:'rocket',objective:'Dodge asteroids and pass the gates!'},
{id:34,zone:'pirate',type:'builder',title:'Raft Builder',icon:'🪵',goal:10,theme:'island',variant:'raft',objective:'Build a raft that reaches the treasure!'},
{id:35,zone:'dino',type:'science',title:'Fossil Match',icon:'🦴',goal:6,theme:'dino',objective:'Match fossils to the dinosaurs!'},
{id:36,zone:'robot',type:'pattern',title:'Robot Code',icon:'⚙️',goal:6,theme:'robot',objective:'Repeat the robot light code!'},
{id:37,zone:'ocean',type:'maze',title:'Coral Maze',icon:'🐠',goal:1,theme:'ocean',objective:'Swim through the coral maze!'},
{id:38,zone:'race',type:'race',title:'Dragon Dash',icon:'🐉',goal:6,theme:'fantasy',vehicle:'dragon',objective:'Fly the dragon through cloud rings!'},
{id:39,zone:'builder',type:'builder',title:'Animal House',icon:'🏠',goal:14,theme:'builder',variant:'house',objective:'Build a cosy animal house!'},
{id:40,zone:'hero',type:'boss',title:'Pattern Shield Boss',icon:'⚡',goal:4,theme:'academy',objective:'Copy the pattern, break the shield, then attack!'},
{id:41,zone:'candy',type:'math',title:'Cookie Counting',icon:'🍪',goal:7,theme:'candy',objective:'Count the cookies to open the candy gate!'},
{id:42,zone:'caves',type:'scavenge',title:'Three Secret Keys',icon:'🔑',goal:3,theme:'cave',objective:'Find 3 keys and open the secret chest!'},
{id:43,zone:'brain',type:'logic',title:'Pipe Connector',icon:'🔗',goal:7,theme:'lab',objective:'Connect the pipes from start to finish!'},
{id:44,zone:'volcano',type:'hero',title:'Wind Power Rescue',icon:'🌪️',goal:7,theme:'volcano',power:'wind',objective:'Blow away fireballs and rescue the explorer!'},
{id:45,zone:'forest',type:'word',title:'Picture Words',icon:'🅰️',goal:6,theme:'forest',objective:'Match letters to the picture!'},
{id:46,zone:'space',type:'pattern',title:'Planet Sequence',icon:'🪐',goal:7,theme:'space',objective:'Complete the planet pattern!'},
{id:47,zone:'pirate',type:'hidden',title:'Captain’s Lost Coins',icon:'🪙',goal:10,theme:'island',objective:'Find the captain’s lost coins!'},
{id:48,zone:'dino',type:'race',title:'Dino Ride',icon:'🦖',goal:6,theme:'dino',vehicle:'dino',objective:'Ride Dino through jungle checkpoints!'},
{id:49,zone:'robot',type:'boss',title:'Mega Robot Lab',icon:'🤖',goal:5,theme:'robot',objective:'Solve the code to weaken Mega Robot!'},
{id:50,zone:'caves',type:'boss',title:'Treasure Guardian',icon:'👑',goal:6,theme:'cave',objective:'Break the crystal shield and win the crown!'}
];

export const PETS=['🐶','🐱','🐼','🦖','🤖','🐉','🦄'];
export const SKINS=['#f3b37c','#9c633f','#6e3f27','#ffd0a1'];
export const HAIRS=['#3a2b35','#5a351f','#e0b73e','#171719'];
export const OUTFITS=['#3f72e8','#ef4d67','#43c77a','#865be8','#f1c84b','#27b6c7'];
export const HATS=['','🧢','👑','🎩','🪖','🧙‍♂️'];
export const DAILY=[
 {kind:'coins',goal:25,label:'Collect 25 coins',icon:'🪙'},
 {kind:'missions',goal:2,label:'Complete 2 missions',icon:'⭐'},
 {kind:'stars',goal:5,label:'Earn 5 stars',icon:'🌟'},
 {kind:'builder',goal:1,label:'Finish a building mission',icon:'🧱'},
 {kind:'treasure',goal:1,label:'Open a surprise chest',icon:'🎁'}
];
export const zoneMissions=id=>MISSIONS.filter(m=>m.zone===id);
