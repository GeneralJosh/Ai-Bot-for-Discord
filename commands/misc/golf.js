const commando = require('discord.js-commando');

module.exports = class GolfCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'golf',
            group: 'misc',
            memberName: 'golf',
            description: 'golf emoji',
            });
        }

        async run(msg) {
            const messages = [];
            try {
              msg.channel.send(':woman_cartwheeling: \n \n            :manual_wheelchair:  :person_golfing:')
            }     
            finally {messages;
            }
        }
    }

