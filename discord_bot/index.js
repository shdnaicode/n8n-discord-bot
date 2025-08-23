require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  try {
    await axios.post(process.env.WEBHOOK_URL, {
      username: message.author.username,
      content: message.content,
      user_id: message.author.id,
      channel_id: message.channel.id,
    });
    console.log(`Sent message to n8n: ${message.content}`);
  } catch (error) {
    console.error('Error sending message to n8n:', error.message);
  }
});

client.login(process.env.BOT_TOKEN);

