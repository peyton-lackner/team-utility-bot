require('dotenv').config();
const { PermissionFlagsBits, ApplicationCommandOptionType } = require("discord.js");
const dataSets = require("../../utils/sprocketDatasets");
const playerSearch = require("../../utils/playerSearch");

module.exports = {
    name: 'eligibilitycheck',
    description: 'checks franchise for eligibility',
    devOnly: false,
    testOnly: false,
    options: [
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
    // deleted: true,
    permissionsRequired: [PermissionFlagsBits.ManageChannels],

    callback: (client, interaction) => {
        let leagues = [];
        let players = dataSets.players;
        let members = dataSets.members;

        

        // Foundation League
        if(interaction.options.get('fl') || interaction.options.get('all')) {
            let needsPoints = [];

            const flDemo = players.filter(function (n) {
                return n.franchise === "Demolition" && n.skill_group === "Foundation League";
            });
            for (let i = 0; i < Object.keys(flDemo).length; i++) {
                if(flDemo[i].current_scrim_points < 30) {
                    needsPoints.push(`<@${playerSearch.search(members, [flDemo[i].member_id])}> (${flDemo[i].current_scrim_points}) \n`);
                }
            }
            client.channels.cache.get(process.env.FOUNDATION_SCHEDULING_ID)
            .send(`Hello Foundation Demo! The following players need scrim points: \n${needsPoints}`.replace(/,/g, ""));
            leagues.push('FL');
        }

        // Academy League
        if(interaction.options.get('al') || interaction.options.get('all')) {
            let needsPoints = [];

            const alDemo = players.filter(function (n) {
                return n.franchise === "Demolition" && n.skill_group === "Academy League";
            });
            for (let i = 0; i < Object.keys(alDemo).length; i++) {
                if(alDemo[i].current_scrim_points < 30) {
                    needsPoints.push(`<@${playerSearch.search(members, [alDemo[i].member_id])}> (${alDemo[i].current_scrim_points}) \n`);
                }
            }
            client.channels.cache.get(process.env.ACADEMY_SCHEDULING_ID)
            .send(`Hello Academy Demo! The following players need scrim points: \n${needsPoints}`.replace(/,/g, ""));
            leagues.push('AL');
        }

        // Champion League
        if(interaction.options.get('cl') || interaction.options.get('all')) {
            let needsPoints = [];

            const clDemo = players.filter(function (n) {
                return n.franchise === "Demolition" && n.skill_group === "Champion League";
            });
            for (let i = 0; i < Object.keys(clDemo).length; i++) {
                if(clDemo[i].current_scrim_points < 30) {
                    needsPoints.push(`<@${playerSearch.search(members, [clDemo[i].member_id])}> (${clDemo[i].current_scrim_points}) \n`);
                }
            }
            client.channels.cache.get(process.env.CHAMPION_SCHEDULING_ID)
            .send(`Hello Champion Demo! The following players need scrim points: \n${needsPoints}`.replace(/,/g, ""));
            leagues.push('CL');
        }

        // Master League
        if(interaction.options.get('ml') || interaction.options.get('all')) {
            let needsPoints = [];

            const mlDemo = players.filter(function (n) {
                return n.franchise === "Demolition" && n.skill_group === "Master League";
            });
            for (let i = 0; i < Object.keys(mlDemo).length; i++) {
                if(mlDemo[i].current_scrim_points < 30) {
                    needsPoints.push(`<@${playerSearch.search(members, [mlDemo[i].member_id])}> (${mlDemo[i].current_scrim_points}) \n`);
                }
            }
            client.channels.cache.get(process.env.MASTER_SCHEDULING_ID)
            .send(`Hello Master Demo! The following players need scrim points: \n${needsPoints}`.replace(/,/g, ""));
            leagues.push('ML');
        }

        // Premier League
        if(interaction.options.get('pl') || interaction.options.get('all')) {
            let needsPoints = [];

            const plDemo = players.filter(function (n) {
                return n.franchise === "Demolition" && n.skill_group === "Premier League";
            });
            for (let i = 0; i < Object.keys(plDemo).length; i++) {
                if(plDemo[i].current_scrim_points < 30) {
                    needsPoints.push(`<@${playerSearch.search(members, [plDemo[i].member_id])}> (${plDemo[i].current_scrim_points}) \n`);
                }
            }
            client.channels.cache.get(process.env.PREMIER_SCHEDULING_ID)
            .send(`Hello Premier Demo! The following players need scrim points: \n${needsPoints}`.replace(/,/g, ""));
            leagues.push('PL');
        }

        interaction.reply(`Sent eligibility ping(s) for ${leagues}!`.replace(/,/g, ", "));
    },
};
