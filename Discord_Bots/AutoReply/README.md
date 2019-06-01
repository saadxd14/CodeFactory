# AutoReply
#### Automatically reply to direct messages

---

### Attention! This is a selfbot! Use at your own risk!
##### Selfbots are against Discord's TOS (https://discordapp.com/terms)

---

#### Setup

1. Install Node.JS from https://nodejs.org/
2. Download the files from this repository
3. With a terminal or command prompt, go to the directory where the bot files are and run ``npm install`` to install the required modules

---

#### Configuration

You can configure the bot by editing ``config.json``

First of all, put your user token in the ``token`` field ([How to get your user token](https://youtu.be/tI1lzqzLQCs))

You can edit the message that gets sent in the ``message`` field. Available message variables: ``{user}``, ``{username}``, ``{mention}``

By setting the ``ignore_friends`` field to true or false, you can choose if messages coming from friends should be ignored

---

#### Running the bot

If you have everything set up and configured, you can run the bot with ``node bot.js`` in a terminal or command prompt

