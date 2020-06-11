var ost=["https://www.youtube.com/watch?v=Cjk3Jc2GfNQ","https://www.youtube.com/watch?v=tLBRnyl-QX0","https://www.youtube.com/watch?v=KozJ0Wlqkd8","https://www.youtube.com/watch?v=_eUh7Eg-qus","https://www.youtube.com/watch?v=bXJTTq6EU9Y","https://www.youtube.com/watch?v=E3zbRnWEhdg","https://www.youtube.com/watch?v=zHz1RgtnF2s","https://www.youtube.com/watch?v=CaJy25NY8w8","https://www.youtube.com/watch?v=l_HALr0IsZs"];
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
const arrays= require('./arrays.js');

const kanjiLookupTable = {
	"comfyEmbed1": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434673.jpg",
	},

	"comfyEmbed2": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.434695.jpg",
	},

	"comfyEmbed3": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434689.jpg",
	},

	"comfyEmbed4": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434675.jpg",
	},

	"comfyEmbed5": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434312.jpg",
	},

	"comfyEmbed6": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434285.jpg",
	},

	"comfyEmbed7": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445870.jpg",
	},

	"comfyEmbed8": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445859.jpg",
	},

	"comfyEmbed9": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445868.jpg",
	},

	"comfyEmbed10": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.445865.jpg",
	},

	"comfyEmbed11": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434693.jpg",
	},

	"comfyEmbed12": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Alpha.Hatsuseno.600.1781274.jpg",
	},

	"comfyEmbed13": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434693.jpg",
	},

	"comfyEmbed14": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434682.jpg",
	},

	"comfyEmbed15": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.434690.jpg",
	},
};



const comfyLookupTable = {
	"comfyEmbed1": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434673.jpg",
	},

	"comfyEmbed2": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.434695.jpg",
	},

	"comfyEmbed3": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434689.jpg",
	},

	"comfyEmbed4": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434675.jpg",
	},

	"comfyEmbed5": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434312.jpg",
	},

	"comfyEmbed6": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434285.jpg",
	},

	"comfyEmbed7": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445870.jpg",
	},

	"comfyEmbed8": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445859.jpg",
	},

	"comfyEmbed9": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.445868.jpg",
	},

	"comfyEmbed10": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.445865.jpg",
	},

	"comfyEmbed11": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Yokohama.Kaidashi.Kikou.full.434693.jpg",
	},

	"comfyEmbed12": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Alpha.Hatsuseno.600.1781274.jpg",
	},

	"comfyEmbed13": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434693.jpg",
	},

	"comfyEmbed14": {
		"color": "#268F69",
		"link": "https://s1.zerochan.net/Yokohama.Kaidashi.Kikou.600.434682.jpg",
	},

	"comfyEmbed15": {
		"color": "#268F69",
		"link": "https://static.zerochan.net/Alpha.Hatsuseno.full.434690.jpg",
	},
};

const embedLookupTable = {
	"scared": {
		"title": ";-;",
		"color": "#268F69",
		"link": "https://i.imgur.com/BJPVXoK.gif"
	},

	"bored": {
		"title": "Hmm...",
		"color": "#268F69",
		"link": "https://i.imgur.com/u8WmuAO.gif"
	},

	"photo": {
		"title": "Say cheese!",
		"color": "#268F69",
		"link": "https://i.imgur.com/gNv4bBn.gif"
	},

	"unpack": {
		"title": "What could be inside?",
		"color": "#268F69",
		"link": "https://i.imgur.com/MetIGcs.gif"
	},

	"bye": {
		"title": "Until we meet again...",
		"color": "#268F69",
		"link": "https://i.imgur.com/YlQ2FK0.gif"
	},

	"coffee": {
		"title": "Some coffee would be nice...",
		"color": "#268F69",
		"link": "https://i.imgur.com/nliXcu5.gif"
	},

	"taste": {
		"title": "Let me taste it- Ugh???",
		"color": "#268F69",
		"link": "https://i.imgur.com/4j3usy7.gif"
	},

	"guitar": {
		"title": "Just me and my guitar...",
		"color": "#268F69",
		"link": "https://i.imgur.com/ySp4TJy.gif"
	},

	"ehehe": {
		"title": "Ehehe...",
		"color": "#268F69",
		"link": "https://i.imgur.com/Ltdg1I1.gif"
	},

	"welcome": {
		"title": "Welcome!",
		"color": "#268F69",
		"link": "https://i.imgur.com/M2y6LGl.gif"
	},
	
	"morning": {
		"title": "Good morning!",
		"color": "#268F69",
		"link": "https://i.imgur.com/HyfmxW1.gif"
	},

	"splash": {
		"title": "SPLASH!",
		"color": "#268F69",
		"link": "https://i.imgur.com/NuMArjc.gif"
	},
	"whitecat": {
		"title": "",
		"color": "#268F69",
		"link": "https://i.imgur.com/PBybpVy.gif"
	},
	"whitecatrun": {
		"title": "",
		"color": "#268F69",
		"link": "https://i.imgur.com/dmLkTBA.gif"
	},
	"whitecatwalk": {
		"title": "",
		"color": "#268F69",
		"link": "https://i.imgur.com/GNEuNlO.gif"
	},
	"whitecatclean": {
		"title": "",
		"color": "#268F69",
		"link": "https://i.imgur.com/CWe13xa.gif"
	},
	"whitecatrub": {
		"title": "",
		"color": "#268F69",
		"link": "https://i.imgur.com/9CAHyQt.gif"
	},
	"goldencatrun": {
		"title": "",
		"color": "#268F69",
		"link": "https://i.imgur.com/6tCTiJs.gif"
	},
	"greycat": {
		"title": "",
		"color": "#268F69",
		"link": "https://i.imgur.com/lbVmSZE.gif"
	},
	"greycatwalk": {
		"title": "",
		"color": "#268F69",
		"link": "https://i.imgur.com/oOFTcej.gif"
	},
	"greycatsit": {
		"title": "",
		"color": "#268F69",
		"link": "https://i.imgur.com/Ul7TDta.gif"
	},
	"dangoparty": {
		"title": "",
		"color": "#268F69",
		"link": "https://i.imgur.com/aOORqGr.gif"
	}
};

var currentobject=0;

function chooseIncrementFromObject(obj) {
	if(currentobject<Object.keys(obj).length){
		currentobject++;
	}
	else{
		currentobject=0;
	}	
	var keys = Object.keys(obj);
	return obj[keys[currentobject]];
};
var traindata = require('./traindata.json');
const bot = new Discord.Client();
var randomnumber=0;
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
				let embedData = chooseIncrementFromObject(comfyLookupTable);
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
				
			case "kanji":
				randomnumber= Math.floor(Math.random() * 2136);
				let embedKanji = new Discord.MessageEmbed()
					.setColor('#268F69')
					.setTitle(arrays.kanjiarray[randomnumber])
					.setDescription(arrays.readarray[randomnumber])
					.addFields(
						{ name: 'Meaning', value: arrays.meaningarray[randomnumber] },
					)
				message.channel.send(embedKanji);
				break;	

			case "help":
				message.channel.send("Available commands: comfy, scared, bored, photo, unpack, bye, coffee, welcome, taste, guitar, ehehe, splash, kanji, weather in <city name>, link");
				break;
				
			case "ost":
				randomost= Math.floor(Math.random() * Object.keys(ost).length);
				message.channel.send(ost[randomost]);
				break;
				
			case "gather":
  				let embedGather = new Discord.MessageEmbed().setTitle('Fecthed messages');
				message.channel.messages.fetch({ max : 10 }).then(messages => {
  					let arr = messages.array();
					embedGather.addField("size",10);
 					for (let i = 0; i < arr.length; i++){
    						let curr = arr[i],
      						str = curr.content;
    						embedGather.addField("message",str);
  					}
					}).catch(console.error);
				message.channel.send(embedGather);
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
