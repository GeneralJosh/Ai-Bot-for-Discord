const commando = require('discord.js-commando');

module.exports = class StudyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'study',
            group: 'misc',
            memberName: 'study',
            description: 'For someone who aint studying',
            });
        }

        async run(msg) {
            const messages = [];
            try {
              msg.channel.send("OwO what's this? Studying for a test, I see. Distracted I see! \n If this is you, then you should be studying retard!!! \n https://youtu.be/khK_afMwAdA");
            }     
            finally {messages;
            }
        }
    }
