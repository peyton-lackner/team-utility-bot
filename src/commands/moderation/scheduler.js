require('dotenv').config();
const { PermissionFlagsBits, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: 'scheduler',
    description: 'Posts schedulers in all scheduling channels.',
    devOnly: false,
    testOnly: false,
    options: [
        {
            name: 'team',
            description: 'the team we are playing this week',
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        {
            name: 'fl',
            description: 'post to #fl-scheduling-channel',
            required: false,
            type: ApplicationCommandOptionType.Boolean,
        },
        {
            name: 'al',
            description: 'post to #al-scheduling-channel',
            required: false,
            type: ApplicationCommandOptionType.Boolean,
        },
        {
            name: 'cl',
            description: 'post to #cl-scheduling-channel',
            required: false,
            type: ApplicationCommandOptionType.Boolean,
        },
        {
            name: 'ml',
            description: 'post to #ml-scheduling-channel',
            required: false,
            type: ApplicationCommandOptionType.Boolean,
        },
        {
            name: 'pl',
            description: 'post to #pl-scheduling-channel',
            required: false,
            type: ApplicationCommandOptionType.Boolean,
        },
        {
            name: 'all',
            description: 'post to all scheduling channels',
            required: false,
            type: ApplicationCommandOptionType.Boolean,
        },
    ],
    // deleted: Boolean,
    permissionsRequired: [PermissionFlagsBits.ManageChannels],

    callback: (client, interaction) => {
        let leagues = [];
        if(interaction.options.get('fl') || interaction.options.get('all')) {
            client.channels.cache.get(process.env.FOUNDATION_SCHEDULING_ID)
            .send(`Hello <@&${process.env.FOUNDATION_ROLE_ID}>! We are playing the ${interaction.options.getString('team')} this week! Please fill out the scheduler form below: ${process.env.FORM}`);
            leagues.push('FL');
        }
        if(interaction.options.get('al') || interaction.options.get('all')) {
            client.channels.cache.get(process.env.ACADEMY_SCHEDULING_ID)
            .send(`Hello <@&${process.env.ACADEMY_ROLE_ID}>! We are playing the ${interaction.options.getString('team')} this week! Please fill out the scheduler form below: ${process.env.FORM}`);
            leagues.push('AL');
        }
        if(interaction.options.get('cl') || interaction.options.get('all')) {
            client.channels.cache.get(process.env.CHAMPION_SCHEDULING_ID)
            .send(`Hello <@&${process.env.CHAMPION_ROLE_ID}>! We are playing the ${interaction.options.getString('team')} this week! Please fill out the scheduler form below: ${process.env.FORM}`);
            leagues.push('CL');
        }
        if(interaction.options.get('ml') || interaction.options.get('all')) {
            client.channels.cache.get(process.env.MASTER_SCHEDULING_ID)
            .send(`Hello <@&${process.env.MASTER_ROLE_ID}>! We are playing the ${interaction.options.getString('team')} this week! Please fill out the scheduler form below: ${process.env.FORM}`);
            leagues.push('ML');
        }
        if(interaction.options.get('pl') || interaction.options.get('all')) {
            client.channels.cache.get(process.env.PREMIER_SCHEDULING_ID)
            .send(`Hello <@&${process.env.PREMIER_ROLE_ID}>! We are playing the ${interaction.options.getString('team')} this week! Please fill out the scheduler form below: ${process.env.FORM}`);
            leagues.push('PL');
        }

        let output = "";
        for (let i = 0; i < leagues.length; i++) {
            output = output.concat(leagues[i] + ", ");
        }
        output = output.slice(0, -2);

        interaction.reply(`Sent scheduler ping(s) for ${output}!`);
    },
};
