

var botbuilder = require('botbuilder');
var restify = require('restify');

var connector = new botbuilder.ChatConnector({
    appId: '',
    appPassword: ''
});

var inMeomoryStorage = new botbuilder.MemoryBotStorage();
var bot = new botbuilder.UniversalBot(connector, session => {
    session.beginDialog("/welcome");
}).set("storage", inMeomoryStorage);
server.post("/api/messages", connector.listen());

bot.dialog("/welcome", [
    session => {
        botbuilder.Prompts.text(
            session,
            "Hello! Welcome to our MTC Unilag Order Bot"
        );
    }
])

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log("%s listening....", server.name);
});

