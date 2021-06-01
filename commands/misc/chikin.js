const wait = time => new Promise(tick => setTimeout(tick, time));
const commando = require('discord.js-commando');
const talkedRecently = new Set();  

module.exports = class ChikinCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bok-bok',
            group: 'misc',
            memberName: 'bok-bok',
            description: 'bok bok song',
            });
        }

        async run(msg) {
            const messages = [];
            if (talkedRecently.has(msg.author.id)) {
                msg.channel.send("Hold your horses mf! Wait 10 seconds!");
            } else {
                if(msg.guild != null){
  msg.channel.send("ko ke ko ko ko **(x3)**");
  await wait(2000);
  msg.channel.send("boku wo");
  await wait (750);
  msg.channel.send("tabete mo");
  await wait (750);
  msg.channel.send("ii n da yo ho ho ho ho");
  await wait (750);
  msg.channel.send("chikin wo");
  await wait (750);
  msg.channel.send("taberarenai nante");
  await wait (750);
  msg.channel.send("CHIKIN da yo!");
  await wait(2000);
  msg.channel.send("ko ke ko ko ko **(x3)**")

 .then(msg => {
})
} else {
    return;
  }

talkedRecently.add(msg.author.id);
setTimeout(() => {

talkedRecently.delete(msg.author.id);
}, 10000);
}
}}