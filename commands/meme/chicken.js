const wait = time => new Promise(tick => setTimeout(tick, time));
const commando = require('discord.js-commando');
const talkedRecently = new Set();  

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
            if (talkedRecently.has(msg.author.id)) {
                msg.channel.send("Hold your horses mf! Wait 3 seconds!");
            } else {
                if(msg.guild != null){
  msg.channel.send(':chicken:');
  await wait(500);
  msg.channel.send("https://cdn.discordapp.com/attachments/801432206961541141/816361593993560114/previewfile_1665335229.jpg")
  .then(msg => {
})
} else {
    return;
  }

talkedRecently.add(msg.author.id);
setTimeout(() => {

talkedRecently.delete(msg.author.id);
}, 3000);
}
}}