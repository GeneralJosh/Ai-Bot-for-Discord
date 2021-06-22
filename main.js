const commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, 'config', 'config.json' ))

const client = new commando.CommandoClient({
	owner: '280883146872979456',
	commandPrefix: '~',
	invite: 'https://discord.gg/22p3ttY'
});



client.login(config.token)

client.registry.registerDefaultTypes()
client.registry.registerDefaultGroups()
client.registry.registerDefaultCommands({
	help: false,
	ping:false,
})
client.registry.registerGroups([
	['mod', 'Mod '],
	['misc', 'Misc '],
	['bot', 'Bot '],
	['monkey', 'Monkey '],
	['meme', 'Meme '],
	['help', 'Help'],
	['bulk', 'Bulk messages'],
	['duck', 'duck-duck'],
	['auto', 'Auto']
])

.registerCommandsIn(path.join(__dirname, 'commands'));



client.on('ready', () =>{
	console.log('Ai-Chan is Online');

	const arrayOfStatus = [
		`Mass Effect™ Legendary Edition`,
		`Halo 3: The Ark`,
		`Minecraft`,
		`No Man's Sky`,
		`https://discord.gg/22p3ttY`,
		`VRChat`,
		`~help`,
	];

	//Startup Function (Change type: STREAMING, LISTENING, COMPETING, CUSTOM_STATUS, PLAYING, WATCHING) 

	let index = 0;
	setInterval(() => {
		if(index === arrayOfStatus.length) index = 0;
		const status = arrayOfStatus[index];
		client.user.setActivity(status, { type: "STREAMING", url: "https://www.twitch.tv/general_josh" })
		index++;
	}, 600000)
	})
