const commando = require('discord.js-commando');

module.exports = class ChairCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'chair',
            group: 'misc',
            memberName: 'chair',
            description: 'Thats it! Give him the chair!!!',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send(`Give him the Chair!.. *the chair!* \nhttps://cdn.discordapp.com/attachments/801432206961541141/803865031682818088/vibe_check-1.png`);
    }     
    finally {messages;
    }
}
}