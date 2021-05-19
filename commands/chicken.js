const wait = time => new Promise(tick => setTimeout(tick, time));
module.exports = {
    name: 'chicken',
    description: "bok bok",
    execute(message, args){
        sendMessages(message, args);
    }
}

async function sendMessages(message, args){
  message.channel.send(':chicken:');
  await wait(500);
  message.channel.send("https://cdn.discordapp.com/attachments/801432206961541141/816361593993560114/previewfile_1665335229.jpg");

}