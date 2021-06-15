const commando = require('discord.js-commando');

module.exports = class DiscordCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'discord',
            group: 'bot',
            memberName: 'discord',
            description: 'server invite.',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send("**Feel free to join our Discord to recive updates** \nhttps://discord.gg/22p3ttY");
    }     
    finally {messages;
    }
}
}