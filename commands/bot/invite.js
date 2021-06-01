const commando = require('discord.js-commando');

module.exports = class InviteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'bot',
            memberName: 'invite',
            description: 'Bot invite',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send("**Here ya go!** \nhttps://discordbotlist.com/bots/ai-9535");
    }     
    finally {messages;
    }
}
}