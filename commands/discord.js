module.exports = {
    name: 'discord',
    description: "invite link for the server",
    execute(message, args){
        message.channel.send("**Feel free to join our Discord to recive updates** \nhttps://discord.gg/ZmRr4RAwQb");
    }
}