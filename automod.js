module.exports = {
    name: 'automod',
    async execute(message) {
        const forbiddenWords = ['fuck', 'myre'];
        const logChannel = message.guild.channels.cache.get(process.env.MODERATION_LOG_CHANNEL_ID);

        // Check if message contains forbidden words
        const foundWord = forbiddenWords.find(word => message.content.toLowerCase().includes(word));

        if (foundWord) {
            try {
                await message.delete();  // Attempt to delete the message
                await message.channel.send(`${message.author}, please avoid using offensive language.`);
                if (logChannel) {
                    logChannel.send(`Deleted a message from ${message.author.tag} in ${message.channel.name} containing the forbidden word: "${foundWord}".`);
                } else {
                    console.log(`Deleted a message from ${message.author.tag} in ${message.channel.name} containing the forbidden word: "${foundWord}".`);
                }
            } catch (error) {
                console.error('Failed to delete message or send a warning:', error);
            }
        }

        // Check if message has too many mentions
        if (message.mentions.users.size > 5) {
            try {
                await message.delete();  // Attempt to delete the message
                await message.channel.send(`${message.author}, too many mentions!`);
                if (logChannel) {
                    logChannel.send(`Deleted a spam mention message from ${message.author.tag} in ${message.channel.name}`);
                } else {
                    console.log(`Deleted a spam mention message from ${message.author.tag} in ${message.channel.name}`);
                }
            } catch (error) {
                console.error('Failed to delete message or send a warning for mentions:', error);
            }
        }
    }
};
