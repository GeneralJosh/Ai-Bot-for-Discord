const commando = require('discord.js-commando');

module.exports = class BegoneCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'begone',
            group: 'misc',
            memberName: 'begone',
            description: 'goodbye',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send(`tsssssssss..... God why ain't this shit working *shakes can vigorously* tsssssssssss...... \nhttps://cdn.discordapp.com/attachments/801432206961541141/802413269532278834/7bf.png`);
    }     
    finally {messages;
    }
}
}