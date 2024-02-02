module.exports = {
    name: 'ping',
    description: 'Pong!',
    devOnly: false,
    testOnly: false,
    // options: Object[],
    // deleted: Boolean,

    callback: (client, interaction) => {
        interaction.reply(`Pong! Latency is ${Date.now() - interaction.createdTimestamp}ms.`);
    },
};
