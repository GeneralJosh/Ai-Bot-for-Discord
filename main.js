const commando = require('discord.js-commando');
const path = require('path');
const config = require(path.join(__dirname, 'config', 'config.json' ))

const client = new commando.CommandoClient({
	owner: '280883146872979456',
	commandPrefix: '~',
	invite: 'https://discord.gg/22p3ttY'
});

client.on('message', (message) => {
	if (message.author.bot) {
		return;
	}

    else if(message.content.includes('fuck you')) {
	    message.channel.send('Heh? Well how about you go fuck yourself!');
	}

	else if(message.content.includes('shut up')) {
		message.channel.send('Huh? What was that? Must be da wind!');
	}

	else if(message.content.includes('bitch')) {
		message.channel.send(':worried:');
	}

	else if(message.content.includes('whore')) {
		message.channel.send(':heart_eyes:');
	}
  });

client.login(config.token)

client.registry.registerDefaultTypes()
client.registry.registerDefaultGroups()
client.registry.registerDefaultCommands({
	help: false,
	ping:false,
})
client.registry.registerGroups([
	['mod', 'Mod commands'],
	['misc', 'Misc commands'],
	['bot', 'Bot commands'],
	['monkey', 'Monkey commands'],
	['meme', 'Meme commands'],
	['help', 'Help commands']
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
client.on("message", function(message) {
    if (message.author.bot) {
        return;

	}
})
