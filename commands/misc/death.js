const commando = require('discord.js-commando');
const talkedRecently = new Set();  

module.exports = class DeathCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'execute',
            group: 'misc',
            memberName: 'execute',
            description: 'fake bans random users',
        });
    }

        async run(msg) {
            const messages = [];
if (talkedRecently.has(msg.author.id)) {
    msg.channel.send("Hold your horses mf! Wait 30 seconds!");
} else {
  if(msg.guild === null){
    return;
  }
  var randomNumber = getRandomIntInclusive(0, 100);
  msg.channel.send(`Banned **${randomNumber}** users`)
  .then(message => {
  })
  talkedRecently.add(msg.author.id);
  setTimeout(() => {

talkedRecently.delete(msg.author.id);
}, 30000);
}
function getRandomIntInclusive(min, max) {
var min = Math.ceil(1);
var max = Math.floor(193);
return Math.floor(Math.random() * (max - min + 1)) + min};
}
}