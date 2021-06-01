const commando = require('discord.js-commando');

module.exports = class SayCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'bot',
            memberName: 'say',
            description: 'Speaks for you basically',
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to say?',
                    type: 'string'
                }
            ]
        })
    }

    run(msg, { text }) {
      msg.delete();
      return msg.channel.send(text);
    }
};