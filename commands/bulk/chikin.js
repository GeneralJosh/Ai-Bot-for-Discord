const wait = time => new Promise(tick => setTimeout(tick, time));
const commando = require('discord.js-commando');
const talkedRecently = new Set();  

module.exports = class ChikinCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bok-bok',
            group: 'bulk',
            memberName: 'bok-bok',
            description: 'bok bok song',
            });
        }

        async run(msg) {
            const messages = [];
            if (talkedRecently.has(msg.author.id)) {
                msg.channel.send("Hold your horses mf! Wait 3 seconds!");
            } else {
                if(msg.guild != null){
  msg.channel.send("ko ke ko ko ko **(x3)** \nboku wo \ntabete mo \nii n da yo ho ho ho ho \nchikin wo \ntaberarenai nante \nCHIKIN da yo! \nko ke ko ko ko **(x3)**");
                
} else {
    return;
  }

talkedRecently.add(msg.author.id);
setTimeout(() => {

talkedRecently.delete(msg.author.id);
}, 3000);
}
}}