const commando = require('discord.js-commando');
module.exports = class AddNumbersCommand extends commando.Command {
	constructor(client) {
		super(client, {
            name: 'reply',
			group: 'auto',
			memberName: 'reply',
			description: 'Adds numbers together.',
        })
    

client.on('message', (message) => {
	if (message.author.bot) {
		return;
	}

    else if(message.content.toLowerCase().includes('fuck you')) {
	    message.channel.send('Heh? Well how about you go fuck yourself!');
	}

	else if(message.content.toLowerCase().includes('shut up')) {
		message.channel.send('Huh? What was that? Must be da wind!');
	}

	else if(message.content.toLowerCase().includes('bitch')) {
		message.channel.send(':worried:');
	}

	else if(message.content.toLowerCase().includes('whore')) {
		message.channel.send(':heart_eyes:');
	}
  });
    }}
