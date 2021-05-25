const commando = require('discord.js-commando');

module.exports = class SauceCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hot-sauce',
            group: 'misc',
            memberName: 'hot-sauce',
            description: 'Its so fucking hot!',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('https://cdn.discordapp.com/attachments/801432206961541141/843524891318812692/Sauce.mp4');
    }     
    finally {messages;
    }
}
}
