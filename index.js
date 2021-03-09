const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"
const regestrations = new Set()

client.on("ready", () => {
    console.log(`${client.user.tag} is now online and ready to be used!`)
})

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.id == "8790941162667900948") {
        if (regestrations.has(21)) return message.channel.send("Slots Full Better Luck Next Time")
        if (!message.content.includes('Team Name') || !message.content.includes('1') || !message.content.includes('2') || !message.content.includes('3') || !message.content.includes('4') || !message.content.includes("player" || "Player" || "p" || "P")) {
            message.react(':wrong:')
            message.channel.send("**Wrong Format**")
        } else if (message.mentions.users.size < 4) {
            message.channel.send({embed: {color: "RED", description: `${message.author}, ***you need to mention 4 people!***`}})
            message.react(':wrong:')
        } else {
            message.channel.send({embed: {color: "GREEN", description: `${message.author}, you have qualified!`}})
            message.react(':check:')
            regestrations.add(+1)
            message.mentions.members.forEach(member => member.roles.add(message.guild.roles.cache.get("&818796598725181481")) && member.user.send({embed: {color: "GREEN", description: `${member.user}, You are qualified for tier 3 scrims`}}))
        }
    }
})
client.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.id == "790941161677389864") {
        if (!message.content.includes('Team Name') || !message.content.includes('1') || !message.content.includes('2') || !message.content.includes('3') || !message.content.includes('4') || !message.content.includes("Player")) {
            message.react(':wrong:')
            message.channel.send("**Wrong Format**")
            message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle("Format Example:").setDescription(`
            Team Name: PEKKA ESPORTS OFFICIAL
            IGN Player 1: test
            Discord: <@467701267150667776> 
            IGN Player 2: test
            Discord: <@786128143689187358>
            IGN Player 3: test
            Discord: <@658965956046880769>
            IGN Player 4: test
            Discord: <@740219330653978675>
            `).setFooter('Zamonix Esports 2021', message.guild.iconURL({ dynamic: true })))
        } else if (message.mentions.users.size < 4) {
            message.channel.send({embed: {color: "RED", description: `${message.author}, you need to mention 4 people!`}})
            message.react(':wrong:')
        } else {
            message.channel.send({embed: {color: "GREEN", description: `${message.author}, your format is correct`}})
            message.react(':check:')
        }
    }
})

client.login("ODE2MjQyMjE5NDIxMjcwMDQ2.YD4Gzg.vXgMVlDJXA68vwJWqwjMTip_ZgY")
