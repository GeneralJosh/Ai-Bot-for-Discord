const commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, 'config', 'config.json' ))

const client = new commando.CommandoClient({
	owner: '280883146872979456',
	commandPrefix: '~',
	invite: 'https://discord.gg/22p3ttY'
});

client.login(config.token)

client.registry.registerGroups([
	['mod', 'mod commands'],
	['misc', 'misc commands'],
	['bot', 'bot commands'],
	['monkey', 'monkey commands']
])
.registerCommandsIn(path.join(__dirname, 'commands'));

//Startup Function (Change type: STREAMING, LISTENING, COMPETING, CUSTOM_STATUS, PLAYING, WATCHING) 
// edit -> (client.user.setActivity("Halo 3: The Ark",) to get It's Status

client.on('ready', () =>{
	console.log('Ai-Chan is Online');
	client.user.setActivity("Mass Effect™ Legendary Edition", {
		type: "STREAMING",
		url: "https://www.twitch.tv/general_josh"
	})

});