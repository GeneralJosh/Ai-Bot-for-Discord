const commando = require('discord.js-commando');
const ms = require('ms');

module.exports = class UptimeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'uptime',
            group: 'bot',
            memberName: 'uptime',
            description: 'Checks the bots uptime',
            });
        }

        async run(msg) {
            var seconds = parseInt((this.client.uptime / 1000) % 60),
      minutes = parseInt((this.client.uptime / (1000 * 60)) % 60),
      hours = parseInt((this.client.uptime / (1000 * 60 * 60)) % 24),
      days = parseInt((this.client.uptime / (1000 * 60 * 60)) % 1000);

    days = (days < 10) ? ('0' + days) : days;   
    hours = (hours < 10) ? ('0' + hours) : hours;  
    minutes = (minutes < 10) ? ('0' + minutes) : minutes; 
    seconds = (seconds < 10) ? ('0' + seconds) : seconds;
    return msg.say(
      `Get Fucked! **${days}** Days, **${hours}** Hours, **${minutes}** Minutes and **${seconds}** Seconds!`
    );
  }
};
    