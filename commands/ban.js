const Discord = require('discord.js');
const config = require("../config.json")
const prefix = config.bot.prefix;

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(prefix + "ban")) {
          var msg = message.content;
          msg = msg.split(prefix + "ban ");
          msg = msg[1];
          let mention = message.mentions.users.first();

          if (!message.member.hasPermission('BAN_MEMBERS')) 
          return message.channel.send("You do not have access to this command.")

      try {
        if (message.mentions.users.size == 0)
            return await message.reply("Who do you want me to ban?");

        if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS'))
            return await message.reply("This user cannot be banned.");

        const user = Discord.GuildMember = message.guild.member(message.mentions.users.first());
        if (!user) return await message.reply("User not found.");

        await user.ban();
        return await message.channel.send(`${user} was permanently banned from the Masayuki discord server.`);
    } catch(err) {
        console.log(err);
        return await message.reply("I don't have the permissions to ban this user.");
    }
  }


})
  }