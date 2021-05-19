const talkedRecently = new Set();
module.exports = {
    name: 'banned',
    description: "meh",
    execute(message, args){
        if (talkedRecently.has(message.author.id)) {
            message.channel.send("Hold your horses mf! Wait 1 minute!");
        } else {
          if(message.guild === null){
            return;
          }
          var randomNumber = getRandomIntInclusive(0, 100);
          message.channel.send(`Banned **${randomNumber}** users`)
          .then(message => {
          })
          talkedRecently.add(message.author.id);
          setTimeout(() => {
 
        talkedRecently.delete(message.author.id);
        }, 60000);
    }
    function getRandomIntInclusive(min, max) {
      var min = Math.ceil(1);
      var max = Math.floor(193);
      return Math.floor(Math.random() * (max - min + 1)) + min};
     }
}