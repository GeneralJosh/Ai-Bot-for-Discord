
const commando = require('discord.js-commando');
const talkedRecently = new Set();  

module.exports = class DuckCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'duck-duck',
            group: 'misc',
            memberName: 'duck-duck',
            description: 'duck duck goose',
        });
    }

        async run(msg) {
            const messages = [];
if (talkedRecently.has(msg.author.id)) {
    msg.channel.send("Hold your horses mf! Wait 1 minute!");
} else {
    if(msg.guild != null){
      const userList = msg.guild.members.fetch();
      var randomNumber = Math.round(Math.random() * msg.guild.memberCount)
      var pingPerson = userList[randomNumber] 
      msg.channel.send(`<@${msg.guild.members.cache.random().id}> Goose!`)
      .then(msg => {
     })
    } else {
      return;
    }

talkedRecently.add(msg.author.id);
setTimeout(() => {

  talkedRecently.delete(msg.author.id);
}, 60000);
}
}}