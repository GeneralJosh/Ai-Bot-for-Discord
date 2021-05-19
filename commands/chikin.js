const wait = time => new Promise(tick => setTimeout(tick, time));
module.exports = {
    name: 'chikin',
    description: "bok bok",
    execute(message, args){
        if(message.guild === null){
            return;
          }
        sendMessages(message, args);
    }
}

async function sendMessages(message, args){
  message.channel.send("ko ke ko ko ko **(x3)**");
  await wait(2000);
  message.channel.send("boku wo");
  await wait (750);
  message.channel.send("tabete mo");
  await wait (750);
  message.channel.send("ii n da yo ho ho ho ho");
  await wait (750);
  message.channel.send("chikin wo");
  await wait (750);
  message.channel.send("taberarenai nante");
  await wait (750);
  message.channel.send("CHIKIN da yo!");
  await wait(2000);
  message.channel.send("ko ke ko ko ko **(x3)**");

}