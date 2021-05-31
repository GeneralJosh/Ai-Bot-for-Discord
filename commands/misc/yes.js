const commando = require('discord.js-commando');
const talkedRecently = new Set();  

module.exports = class YesCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'yes',
            group: 'misc',
            memberName: 'yes',
            description: 'say yes dammit',
            });
        }

        async run(msg) {
            const messages = [];
            if (talkedRecently.has(msg.author.id)) {
                msg.channel.send("Hold your horses mf! Wait 10 secs!");
            } else {
                if(msg.guild != null){
        msg.channel.send('N\n　  O\n　　　 O\n　　　　 o\n　　　　　o\n　　　　　 o\n　　　　　o\n　　　　 。\n　　　 。\n　　　.\n　　　.\n　　　 .\n　　　　.\n');

} else {
    return;
  }

talkedRecently.add(msg.author.id);
setTimeout(() => {

talkedRecently.delete(msg.author.id);
}, 10000);
}
}}