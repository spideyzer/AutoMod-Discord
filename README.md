# AutoMod Discord Bot 🤖🚀  

A Discord bot that automatically moderates messages by deleting messages containing forbidden words and preventing mention spam.

## Features  

- **Bad Word Filtering**: Deletes messages containing specified forbidden words and warns the user.  
- **Anti-Mention Spam**: Prevents spam by deleting messages with excessive mentions (more than 5).  
- **Logging System**: Logs deleted messages and infractions in a specific moderation channel.  
- **Customizable Settings**: Easily modify the list of forbidden words, mention limits, and log channels.  

## Prerequisites  

Before setting up the bot, ensure you have:  

- **Node.js** installed (version 16.9.0 or higher).  
- A **Discord bot token** from the [Discord Developer Portal](https://discord.com/developers/applications).  
- **A Discord server** where the bot has permission to manage messages and assign roles.  

## Installation  

1. **Clone the repository:**  
    ```bash
    git clone https://github.com/yourusername/automod-discord-bot.git
    cd automod-discord-bot
    ```

2. **Install dependencies:**  
    ```bash
    npm install
    ```

3. **Set up the environment variables:**  
   Create a `.env` file in the root directory and add:  

    ```ini
    TOKEN=your_discord_bot_token
    MODERATION_LOG_CHANNEL_ID=your_log_channel_id
    ```

4. **Modify the bot settings in `automod.js` (if needed):**  
    - Update the `forbiddenWords` array to add/remove banned words.  
    - Adjust the mention limit for spam detection.  
    - Ensure the correct `MODERATION_LOG_CHANNEL_ID` is set in `.env`.  

5. **Start the bot:**  
    ```bash
    node index.js
    ```

## Usage  

Once the bot is running, it will:  
✅ Monitor messages in the server.  
✅ Delete messages containing forbidden words.  
✅ Delete messages with excessive mentions (more than 5).  
✅ Log moderation actions in the specified channel.  

## Customization  

You can customize the bot's behavior in `automod.js`:  
- **Modify Forbidden Words:** Add or remove words from the `forbiddenWords` array.  
- **Change Mention Limits:** Adjust the limit of allowed mentions per message.  
- **Modify Log Channel:** Update the `MODERATION_LOG_CHANNEL_ID` in the `.env` file.  

## File Structure  


## Dependencies  

- [discord.js](https://www.npmjs.com/package/discord.js) - A powerful library for interacting with the Discord API.  
- [dotenv](https://www.npmjs.com/package/dotenv) - A module to load environment variables from a `.env` file.  

## Contributing  

1. **Fork the repository**  
2. **Create a new branch**  
3. **Make your changes**  
4. **Open a pull request**  

## License  

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  

## Acknowledgements  

- [Discord.js](https://discord.js.org/) for making bot development easier.  
- The open-source community for inspiration and contributions.  

---

Let me know if you need any modifications! 🚀  
