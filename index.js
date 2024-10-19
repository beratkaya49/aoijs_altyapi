const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: "TOKEN", // Here goes the Token you copied earlier!
    prefix: "!", // Here goes the prefix you want to use for your bot!
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildPresences", "GuildVoiceStates"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
        
    }
});

client.loadCommands(`./komutlar/`)

require('./degisken/degiskenler.js')(client);
