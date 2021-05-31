const wait = time => new Promise(tick => setTimeout(tick, time));
const commando = require('discord.js-commando');

module.exports = class ChickenCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'chicken',
            group: 'meme',
            memberName: 'chicken',
            description: 'bok bok',
            });
        }

        async run(msg) {
            const messages = [];
            try {
  msg.channel.send(':chicken:');
  await wait(500);
  msg.channel.send("https://cdn.discordapp.com/attachments/801432206961541141/816361593993560114/previewfile_1665335229.jpg");
}     
finally {messages;
}
}
}