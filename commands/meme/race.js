const commando = require('discord.js-commando');

module.exports = class RaceCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lets-race',
            group: 'meme',
            memberName: 'lets-race',
            description: 'VROOOOOOOM.....',
            });
        }

        async run(msg) {
            const messages = [];
            try {
        msg.channel.send(`https://youtu.be/tNveMjoSxp0`);
    }     
    finally {messages;
    }
}
}
