require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const automod = require('./automod');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (!message.author.bot) {
        automod.execute(message);
    }
});

client.login(process.env.TOKEN);
