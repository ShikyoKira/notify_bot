# notify_bot
Quick and easy way to send message through discord bot. Just initial the index.js file with your message as the argument

<br>

## Requirements
- Node JS v14 or above

<br>

## Steps for linux

### Without Node JS installed

1. Updating the package repository 
```
sudo apt update
```

2. Install Node JS
```
sudo apt install nodejs
```

3. Install Node Package Manager
```
sudo apt install npm
``` 

<br>
<br>

### Normal Installation

4. Clone this repo
```
git clone https://github.com/ShikyoKira/notify_bot.git
```

5. Go to jobe_bot directory
```
cd jobe_bot
```

6. Install Discord JS
```
npm install discord.js
```

7. Edit pcap.js by adding bot token and channel id generated by discord
```
vi index.js
```
```
const discord = require('discord.js');
const client = new discord.Client();

const DISCORD_TOKEN = '<BOT_TOKEN>';      <---- REPLACE THIS WITH THE BOT TOKEN
const CHANNEL_ID = '<CHANNEL_ID>';        <---- REPLACE THIS WITH THE CHANNEL ID IN DISCORD
```

8. Press ESC and type `:wq!` to save and quit

<br>

## Operations

- To send message through the bot

```
node index.js <your message>
```
