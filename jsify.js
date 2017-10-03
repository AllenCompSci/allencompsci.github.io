﻿var tilt = 0;

var Teacher = "Taylor Hudson ";

var ClubPresident = "Zach Gray";

var ClubVP = "Ayush Agarwal";

var Secretary = "Deep Desai";

var Historian = "Ryan Noeske";

var Secretary = "Ryan King";

var AntiDeep = "Chris Delagarza";

var HighSchool = "Allen High School";

var ASCII = function(){
/*return"                ___          __   __         __       ___  ___  __      __   __     ___       __   ___"+"\n"+
				" /\  |    |    |__  |\ |    /  ` /  \  |\/| |__) |  |  |  |__  |__)    /__` /  ` | |__  |\ | /  ` |__"+"\n"+
				"/--\ |___ |___ |___ | \|    \__, \__/  |  | |    \__/  |  |___ |  \    .__/ \__, | |___ | \| \__, |___"+"\n"
*/
return " $$$$$$\\  $$\\ $$\\                            $$$$$$\\                                           $$$$$$\\            $$\\ " + "\n" +
	   "$$  __$$\\ $$ |$$ |                          $$  __$$\\                                         $$  __$$\\           \\__|" + "\n" +
	   "$$ /  $$ |$$ |$$ | $$$$$$\\  $$$$$$$\\        $$ /  \\__| $$$$$$\\  $$$$$$\\$$$$\\   $$$$$$\\        $$ /  \\__| $$$$$$$\\ $$\\ " + "\n" +
	   "$$$$$$$$ |$$ |$$ |$$  __$$\\ $$  __$$\\       $$ |      $$  __$$\\ $$  _$$  _$$\\ $$  __$$\\       \\$$$$$$\\  $$  _____|$$ |" + "\n" +
	   "$$  __$$ |$$ |$$ |$$$$$$$$ |$$ |  $$ |      $$ |      $$ /  $$ |$$ / $$ / $$ |$$ /  $$ |       \\____$$\\ $$ /      $$ |" + "\n" +
	   "$$ |  $$ |$$ |$$ |$$   ____|$$ |  $$ |      $$ |  $$\\ $$ |  $$ |$$ | $$ | $$ |$$ |  $$ |      $$\\   $$ |$$ |      $$ |" + "\n" +
	   "$$ |  $$ |$$ |$$ |\\$$$$$$$\\ $$ |  $$ |      \\$$$$$$  |\\$$$$$$  |$$ | $$ | $$ |$$$$$$$  |      \\$$$$$$  |\\$$$$$$$\\ $$ |" + "\n" +
	   "\\__|  \\__|\\__|\\__| \\_______|\\__|  \\__|       \\______/  \\______/ \\__| \\__| \\__|$$  ____/        \\______/  \\_______|\\__|" + "\n" +
	   "                                                                              $$ |                                    " + "\n" +
	   "                                                                              $$ |                                    " + "\n" +
	   "                                                                              \\__|                                    " + "\n" ;

};

var linkify = function(text, url) {
	return "<a target='_blank' href='" + url + "'>" + text + "</a>";
};

var specialify = function(text) {
	return "<span class='special'>" + text + "</span>";
};

var data = {
	hello: "Welcome to Allen Computer Science, where we " + specialify("promote Computer Science, development and innovation") + "\n\tin the Allen community by providing " + specialify("an place to soar") + " for those interested in furthering their \n\tpursuit of the field and attending " + specialify("competitions") + " ranging from " + specialify("hackathons") + " to " + specialify("algorithm contests") + ". \n\tComputer Science club meets every Wednesday from 3:35 to 5, and works on multifaceted projects, \n\tranging from app to web to even game development.",
	help: [ {
		name: specialify("hello"),
		description: "Our mission statement"
	}, {
		name: specialify("team"),
		description: "Our board and members"
	}, {
		name: specialify("competitions"),
		description: "Info about upcoming competitions and hackathons"
	}, {
		name: specialify("links"),
		description: "Displays links to permission slips, resources, and more"
	},{
		name: specialify("showcase"),
		description: "HS students\' cool projects"
	},{
		name: specialify("contact"),
		description: "Get in touch for outreach and info on projects"
	}, {
		name: specialify("twitter"),
		description: "Follow us " + linkify("@Allen_CompSci", "https://twitter.com/allen_compsci")
	},
	{
		name: specialify("help"),
		description: "Displays all commands"
	}],
	contact:
	[
	{
		name:"Contact <a href='mailto:Taylor.Hudson@allenisd.org'>Taylor Hudson</a>.",
	},{
		name:"Contact <a href='mailto:Allencomputerscience@gmail.com'>Computer Science Club</a>."
	}],
	team:
	[{
		name: specialify("Taylor") + " Hudson",
		position: "Club Sponsor"
	},
	{
		name: specialify("Zach") + " Gray",
		position: "President"
	},
	{
		name: specialify("Ayush") + " Agarwal",
		position: "Vice President"
	},
	{
		name: specialify("Deep") + " Desai",
		position: "Secretary"
	},{
		name: specialify("Ryan") + " Noeske",
		position: "Historian"
	},{
		name: specialify("Ryan") + " King",
		position: "Treasurer"
	},{
		name: specialify("Chris") + " Delegarza",
		position: "AntiDeep"
	},
	],
	competitions: "Competition schedule coming soon!",
	links: [
		{
			name : linkify("CS Classes' Github", "https://github.com/AllenCompSci"),
			description: "Github for all CS classes, where projects and assignments are hosted."
		},
		{
			name : linkify("CompSci Club Github", "https://github.com/orgs/allen-computer-science/dashboard"),
			description: "Github for CompSci Club, where project and ideas are hosted."
		},
		{
			name : linkify("Allen High School", "http://www.allenisd.org/allenhs"),
		},
		{
			name : linkify("Taylor Hudson", "https://www.allenisd.org/Domain/3279"),
		}
		],
	showcase: [{
		name: linkify("Cool Projects we've made.","http://github.com/AllenCompSci"),
		authors: "Look at projects which <span class='special'>highschool students</span> have made!"
	}],
	invalid: "That's not a valid command! Type <span class='special'>help</span> for a list of commands."
};

var describify = function(obj) {
	var output = "";

	properties = [];
	for (var property in obj) {
		if (obj.hasOwnProperty(property)) {
			properties.push(obj[property]);
		}
	}

	output += properties.join(" | ");
	return output;
};

var listify = function(list) {
	var output = "";

	for (var i = 0; i < list.length; i++) {
		output += "\t• ";

		var described = describify(list[i]);
		output += described;

		output += "\n";
	}

	return output;
};

var format = function(field) {
	var unformatted = data[field];

	if (typeof unformatted == 'string') {
		return "\n\t" + unformatted + "\n\n";
	}

	return "\n" + listify(unformatted) + "\n";
};

var lambdify = function(format_string) {
	return function() { return format(format_string) }
}

var options = {
	include: ["score"],
	shouldSort: true,
	threshold: 0.3,
	location: 0,
	distance: 100,
	maxPatternLength: 32,
	keys: ['command']
};

var search = function(list, searchitem) {
	options.distance = (searchitem.length<=2? 0 : 100)
	return new Fuse(list, options).search(searchitem)
}

$(function() {
	var intro = ASCII() +"\n"+ "Welcome to the Computer Science department at " + "Allen High School" +"!\nType 'hello' below to learn what we're all about! \nTry '?' for more.\n\n";
	var jqconsole = $('#console').jqconsole(intro, 'C:\\Users\\Eagles> ');
	var cout = function(input){
		jqconsole.Write("     "+input.replace(/\n/g,'\n     ')+'\n', 'jqconsole-output', false);
	}
	function process(input) {
		var parsed = input.split(" ");
		var commands = [
			[["help", "?", "ls"], lambdify('help')],
			[["hello", "mission", "description", "why"], lambdify('hello')],
			[["team", "execs", "executives", "officers"], lambdify('team')],
			[["competitions", "hackathons", "events"], lambdify('competitions')],
			[["links", "forms", "info"], lambdify('links')],
			[["projects", "showcase"], lambdify('showcase')],
			[["contact"], lambdify('contact')],
			[["soar"], lambdify('soar')],
			[["clear", "cls"], function() { jqconsole.Clear(); return '\r'; }],
			[["fb", "facebook"], function() {
				window.location.href = "https://www.facebook.com/groups/";
				return '\r';
			}],
			[["tilt"], function() {
				tilt += 7;
				$(document.documentElement).addClass('rotate_please');
				document.documentElement.setAttribute('style', 'transform: rotate(' + String(tilt) + 'deg);');
				return "\n\n";
			}],
			[["qt"], function() {
				tilt += 70;
				$(document.documentElement).addClass('qt_please');
				document.documentElement.setAttribute('style', 'transform: rotate(' + String(tilt) + 'deg);');
				return "\n\n";
			}],
			[["untilt"], function() {
				tilt = 0;
				$(document.documentElement).removeClass('rotate_please');
				$(document.documentElement).removeClass('qt_please');
				document.documentElement.setAttribute('style', 'transform: rotate(' + String(tilt) + 'deg);');
				return "\n\n";
			}],
			[["js", "javascript", "code"], function() {}], //since this is processed directly, there is no need for a function here
		];
		var response = null;
		commands.forEach(function(key, index, commands) {
			key[0].forEach(function(term, tindex) {
				if (term === parsed[0]) {
					response = key[1]();
				}
			});
		});
		if (response) {
			return response;
		} else {
			var commands_list = [];
			commands.forEach(function(key, index, commands) {
				key[0].forEach(function(term, tindex) {
					if (term !== "qt") {
						commands_list.push({
							'command': term,
							'callback': key[1]
						});
					}
				})
			});
			var results = search(commands_list, parsed[0]);
			if (results.length > 0) {
				response = '\nThat command doesn\'t exist. Did you mean ';
				results.forEach(function(result, index) {
					if (index === results.length - 1 && results.length == 2) {
						response = response.substring(0, response.length - 2);
						response += ' or ' + specialify(result['item']['command']) + ', ';
					} else if (index === results.length - 1 && results.length > 1) {
						response = response.substring(0, response.length - 2);
						response += ', or ' + specialify(result['item']['command']) + ', ';
					} else {
						response += specialify(result['item']['command']) + ', ';
					}
				});
				response = response.substring(0, response.length - 2);
				response += '?\n\n';
				return response;
			} else {
				return '\nThat command doesn\'t exist. Here is a list of commands you can use:\n' + format('help');
			}
		}
	};
	var jsmode = false;
	var blockQuery = false;
	var block = "";
	var processJs = function(input){
		if(input.match(/exit/) || input.match(/process.exit\(/)){
			jsmode = false;
			jqconsole.SetPromptLabel("C:\Users\Eagles> ");
			jqconsole.Write('\n');
			startPrompt();
			return;
		}
		if(!blockQuery){
			block = "";
		}
		block+=input;
		var leftParens = (block.match(/\{/g)? block.match(/\{/g).length: 0);
		var rightParens = (block.match(/\}/g)? block.match(/\}/g).length: 0);
		if(leftParens > rightParens){
			blockQuery = true;
			startPrompt();
			return;
		}else{
			blockQuery = false;
		}
		var result;
		try{
			result = eval('eval')(block); //indirect call so it's global
		}catch(err){
			result = err;
		}
		result = String(result);
		cout(result);
	}
	var processQuery = function(input) {
		if(jsmode){
			processJs(input);
			startPrompt();
			return;
		}
		if (input) {
			if(input == "javascript" || input == "js" || input == "code" || input == "node"){
				jsmode = true;
				jqconsole.SetPromptLabel("   > ");
				jqconsole.Write('\n');
				startPrompt();
				return;
			}
			jqconsole.Write(process(input),'jqconsole-output',false);
		} else {
			jqconsole.Write('\n Here is a list of commands:\n' + format('help'), 'jqconsole-output', false);
		}
		startPrompt();
	}
	var startPrompt = function() {
		jqconsole.Prompt(true, processQuery);
	};

	startPrompt();
});
