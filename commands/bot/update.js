const commando = require('discord.js-commando');

module.exports = class UpdateCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'update',
            group: 'bot',
            memberName: 'update',
            description: 'Update logs',
            });
        }

        async run(msg) {
            const messages = [];
            try {
                msg.channel.send("**Ai:** 2.1.0 \n```\n+ **Added** Added file structure so you can now disable certain commands in bulk \n        Auto response messages are now able to be decativated along with several annoying bulk message commands \n \n+ **Updated** Invite link to feature long awaited top.gg link \n        Updated the upvote command to feature both upvote links \n        Updated ~bok-bok to send in bulk father than 1 at a time to save the bot itself\n```");
    }     
    finally {messages;
    }
}
}