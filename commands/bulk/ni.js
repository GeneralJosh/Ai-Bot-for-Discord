const wait = time => new Promise(tick => setTimeout(tick, time));
const commando = require('discord.js-commando');
const talkedRecently = new Set();  

module.exports = class ChickenCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'nya',
            group: 'bulk',
            memberName: 'nya',
            description: 'ichi, ni, san',
            });
        }

        async run(msg) {
            const messages = [];
            if (talkedRecently.has(msg.author.id)) {
                msg.channel.send("Hold your horses mf! Wait 3 seconds!");
            } else {
                if(msg.guild != null){
  msg.channel.send('nya \n(Anime）\n\nnya\nichi, ni, san\nnya\narigatō\n\nnya\nichi, ni, san\nnya\narigatō\n\nnya\nichi, ni, san\nnya\narigatō\n\nnya\nichi, ni, san\nnya\n(Anime)\n\n(Anime)...');
  await wait(500);
  msg.channel.send("https://cdn.discordapp.com/attachments/801432206961541141/848822036998783016/VID-20210528-WA0026.mp4")
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