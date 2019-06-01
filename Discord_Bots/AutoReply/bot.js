/*
------------------------------------------------------------------
|    ____          _        _____          _                     |
|   / ___|___   __| | ___  |  ___|_ _  ___| |_ ___  _ __ _   _   |
|  | |   / _ \ / _` |/ _ \ | |_ / _` |/ __| __/ _ \| '__| | | |  |
|  | |__| (_) | (_| |  __/ |  _| (_| | (__| || (_) | |  | |_| |  |
|   \____\___/ \__,_|\___| |_|  \__,_|\___|\__\___/|_|   \__, |  |
|                                                        |___/   |
------------------------------------------------------------------

This bot was made by Code Factory

https://code-factory.xyz

*/

"use strict"


// Imports
const Discord = require('discord.js')
const fs = require('fs')

// Display ASCII art
console.log('\x1b[36m%s\x1b[0m',fs.readFileSync('./asciiart.txt', 'utf-8'))

// Load config
const config = require('./config.json')

// Init client
var client = new Discord.Client()

// Message event
client.on('message', message => {

    // If message is not a direct message, ignore it
    if(message.channel.type != 'dm')return

    // If ignore_friends is true and message author is a friend of the client, ignore the message
    if(config.ignore_friends && client.user.friends.find(f => f.id == message.author.id))return

    // Reply to the message
    message.author.send(config.message
        .split('{user}').join(`${message.author.username}#${message.author.discriminator}`)
        .split('{username}').join(message.author.username)
        .split('{mention}').join(`<@${message.author.id}>`)
        )
        .catch(() => {return})

})

// Ready event
client.on('ready', () => {console.log('> ready')})

// Login to discord
client.login(config.token)