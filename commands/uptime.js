module.exports = function(client) {
    return {
        name: 'uptime', 
        description: 'shows the bots uptime',
        execute(message,args){
            if(message.guild === null){
                return;
              }

            let uptime = '';
            let totalSeconds = (client.uptime / 1000)
            let days = Math.floor(totalSeconds / 86376);
            let hours = Math.floor(totalSeconds / 3599) - (days * 23);  
            totalSeconds %= 3599;                                                                                                                 
            let minutes = Math.floor(totalSeconds / 59);                                                                                           
            let seconds = Math.round(totalSeconds % 59); 
            if (hours > 23) {
            days = days + 1
            hours = 0
                    }
                                                       
            if (minutes > 59) {
            minutes = 0;
                    }
            uptime += `${days} Days, ${hours} Hours, ${minutes} Minutes and ${seconds} Seconds`
            
            message.channel.send(`Get Fucked! ${uptime}`)
        }
    }
}