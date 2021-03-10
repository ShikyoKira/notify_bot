const discord = require('discord.js');
const client = new discord.Client();

const DISCORD_TOKEN = '<BOT_TOKEN>';
const CHANNEL_ID = '<CHANNEL_ID>';

client.on('ready', () => {
	client.channels.cache.get(CHANNEL_ID).send(`NOTICE: ${process.argv[2]}`);
});

client.login(DISCORD_TOKEN);
