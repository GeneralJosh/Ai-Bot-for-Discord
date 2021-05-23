const commando = require('discord.js-commando');

module.exports = class RollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'misc',
            memberName: 'roll',
            description: 'roll a 20 sided or custom dice',
            });
        }

        async run(msg, args) {
            const messages = [];
            if(args.length > 1){
                msg.reply("Syntax is:\n``/roll [max]``");
                return;
            }
      
            if(args[0] == null){
                var randomNumber = getRandomIntInclusive(1, 20);
            } else {
                var randomNumber = getRandomIntInclusive(1, args[0]);
            }
            
            msg.reply(`rolled **${randomNumber}**.` );
        }
      }
      
      function getRandomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }