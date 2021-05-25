const commando = require('discord.js-commando');

module.exports = class SCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 's',
            group: 'misc',
            memberName: 's',
            description: 'S',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send(`https://cdn.discordapp.com/attachments/801432206961541141/803871956184596490/20210109_230933.png`);
    }     
    finally {messages;
    }
}
}