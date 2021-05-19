const talkedRecently = new Set();
module.exports = {
    name: 'duck',
    description: "meh",
    execute(message, args){
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Hold your horses mf! Wait 1 minute!");
    } else {
        if(message.guild != null){
          const userList = message.guild.members.cache.array();
          var randomNumber = Math.round(Math.random() * message.guild.memberCount)
          var pingPerson = userList[randomNumber] 
          message.channel.send(`${pingPerson} Goose!`)
          .then(message => {
         })
        } else {
          return;
        }

    talkedRecently.add(message.author.id);
    setTimeout(() => {

      talkedRecently.delete(message.author.id);
    }, 60000);
    }
    }}