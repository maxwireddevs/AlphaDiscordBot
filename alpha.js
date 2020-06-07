const weatherLookupTable = {
	"1000": ":sunny:",
	"1003": ":white_sun_cloud:",
	"1006": ":cloud:",
	"1063": ":white_sun_rain_cloud:",
	"1009": ":white_sun_small_cloud:",
	"1066": ":cloud_snow:",
	"1087": ":cloud_lightning:",
	"1117": ":cloud_snow:",
	"1180": ":white_sun_rain_cloud:",
	"1183": ":cloud_rain:",
	"1186": ":cloud_rain:",
	"1189": ":cloud_rain:",
	"1192": ":thunder_cloud_rain:",
	"1195": ":thunder_cloud_rain:",
	"1210": ":cloud_snow:",
	"1213": ":cloud_snow:",
	"1219": ":cloud_snow:",
	"1222": ":cloud_snow:",
	"1225": ":cloud_snow:",
	"1273": ":thunder_cloud_rain:",
	"1276": ":thunder_cloud_rain:",
	"1279": ":thunder_cloud_rain:",
	"1246": ":cloud_tornado:"
};

const Discord = require("discord.js");
const axios = require("axios");

const mainURL = "https://api.weatherapi.com/v1/current.json"; // &q=Athens
const weatherKey = "key=" + process.env.weatherapi;
const botName = "alpha";

const comfyLookupTable = {
	"comfyEmbed1": {
		"color": "#555555",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434673.jpg",
	},

	"comfyEmbed2": {
		"color": "#555555",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.434695.jpg",
	},

	"comfyEmbed3": {
		"color": "#555555",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434689.jpg",
	},

	"comfyEmbed4": {
		"color": "#555555",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434675.jpg",
	},

	"comfyEmbed5": {
		"color": "#555555",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434312.jpg",
	},

	"comfyEmbed6": {
		"color": "#555555",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434285.jpg",
	},

	"comfyEmbed7": {
		"color": "#555555",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445870.jpg",
	},

	"comfyEmbed8": {
		"color": "#555555",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445859.jpg",
	},

	"comfyEmbed9": {
		"color": "#555555",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445868.jpg",
	},

	"comfyEmbed10": {
		"color": "#555555",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.445865.jpg",
	},

	"comfyEmbed11": {
		"color": "#555555",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434693.jpg",
	},

	"comfyEmbed12": {
		"color": "#555555",
		"link": "https://s1.zerochan.net/Alpha.Hatsuseno.600.1781274.jpg",
	},

	"comfyEmbed13": {
		"color": "#555555",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434693.jpg",
	},

	"comfyEmbed14": {
		"color": "#555555",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434682.jpg",
	},

	"comfyEmbed15": {
		"color": "#555555",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.434690.jpg",
	},
};

const embedLookupTable = {
	"scared": {
		"title": ";-;",
		"color": "#555555",
		"link": "https://i.imgur.com/BJPVXoK.gif"
	},

	"bored": {
		"title": "Hmm...",
		"color": "#555555",
		"link": "https://i.imgur.com/u8WmuAO.gif"
	},

	"photo": {
		"title": "Say cheese!",
		"color": "#555555",
		"link": "https://i.imgur.com/gNv4bBn.gif"
	},

	"unpack": {
		"title": "What could be inside?",
		"color": "#555555",
		"link": "https://i.imgur.com/MetIGcs.gif"
	},

	"bye": {
		"title": "Until we meet again...",
		"color": "#555555",
		"link": "https://i.imgur.com/YlQ2FK0.gif"
	},

	"coffee": {
		"title": "Some coffee would be nice...",
		"color": "#555555",
		"link": "https://i.imgur.com/nliXcu5.gif"
	},

	"taste": {
		"title": "Let me taste it- Ugh???",
		"color": "#555555",
		"link": "https://i.imgur.com/4j3usy7.gif"
	},

	"guitar": {
		"title": "Just me and my guitar...",
		"color": "#555555",
		"link": "https://i.imgur.com/ySp4TJy.gif"
	},

	"ehehe": {
		"title": "Ehehe...",
		"color": "#555555",
		"link": "https://i.imgur.com/Ltdg1I1.gif"
	},

	"welcome": {
		"title": "Welcome!",
		"color": "#555555",
		"link": "https://i.imgur.com/M2y6LGl.gif"
	},

	"splash": {
		"title": "SPLASH!",
		"color": "#555555",
		"link": "https://failureforums.ddns.net/static/files/2020-06-07_142035.066537-1589435715829.gif"
	}
};

function chooseRandomFromObject(obj) {
	var keys = Object.keys(obj);
	return obj[keys[keys.length * Math.random() << 0]];
};

const bot = new Discord.Client();

var _message = {};
bot.once("ready", () => {
	console.log("Ready!");
});

bot.login(process.env.bot_token);
bot.on("message", (message) => {
    console.log(message);
    _message = message;
    if(message.author.username === botName) {
        return;
    }

	if(message.content.indexOf("a!") == 0) {
		let command_string = message.content.trim().slice(2)
		let embedData = embedLookupTable[command_string]
		if(embedData) {
			let embed = new Discord.MessageEmbed()
				.setTitle(embedData["title"])
				.setColor(embedData["color"])
				.setImage(embedData["link"])

			message.channel.send(embed)
			return;
		}

		switch(command_string) {
			case "comfy":
				let embedData = chooseRandomFromObject(comfyLookupTable);
				let embed = new Discord.MessageEmbed()
					.setColor(embedData["color"])
					.setImage(embedData["link"])

				message.channel.send(embed)
				break;

			case "weather":
				let params = message.content.split("in");
				let queryParameter = params[1].trim();
				message.channel.startTyping();
				fetchWeatherConditions(queryParameter, (result) => {
					let weather = parseWeatherConditions(result);
						let temperature = result["current"].temp_c + "℃" + " - " + result["current"].temp_f + "℉";
						message.channel.send("The weather currently is: " + weather + " and the :thermometer:" + temperature);
						message.channel.stopTyping();
				});

				break;

			case "help":
				message.channel.send("Available commands: comfy, scared, bored, photo, unpack, bye, coffee, welcome, taste, guitar, ehehe, weather in <city name>, link");
				break;

			case "link":
				message.channel.send("https://discord.com/api/oauth2/authorize?client_id=718773791945261097&permissions=378944&scope=bot");
				break;
		}
	}
});


/**
 *
 *
 * @param {*} queryParameter - The city or other condition to search the weather API for
 * @param {*} callback - A function to receive our response
 */
function fetchWeatherConditions(queryParameter, callback) {
    const options = {
        hostname: mainURL,
        path: "?" + weatherKey + "&q=" + escape(queryParameter),
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    axios.get(options.hostname + options.path)
        .then(response => {

            if (callback) {
                callback(response.data);
            }

        })
        .catch(error => {
            console.log(error);
            _message.channel.stopTyping();
        });
}


/**
 *
 *
 * @param {*} data - the weather data response
 * @returns
 */
function parseWeatherConditions(data) {
    return weatherLookupTable[String(data["current"]["condition"].code)];
}
