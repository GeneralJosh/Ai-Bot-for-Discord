const { oneLine, stripIndents } = require('common-tags');
const commando = require('discord.js-commando');

module.exports = class PingCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'ping',
			group: 'bot',
			memberName: 'ping',
			description: 'Checks the bot\'s ping to the Discord server.',
			throttling: {
				usages: 5,
				duration: 10
			}
		});
	}

	async run(msg) {
		const pingMsg = await msg.channel.send('hmmm... how about...');
		return pingMsg.edit(`
			Go fuck yourself! \nBot latency: ${
				(pingMsg.editedTimestamp || pingMsg.createdTimestamp) - (msg.editedTimestamp || msg.createdTimestamp)
			}ms
			
		`);
	}
};
