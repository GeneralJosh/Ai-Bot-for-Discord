const commando = require('discord.js-commando');

module.exports = class SpookedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'spooked',
            group: 'misc',
            memberName: 'spooked',
            description: 'AHH',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send('https://cdn.discordapp.com/attachments/801432206961541141/843524874461904896/SpookyFart.mp4');
    }     
    finally {messages;
    }
}
}