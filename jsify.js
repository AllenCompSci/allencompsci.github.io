var tilt = 0;

var Teacher = "Taylor Hudson : Taylor_Hudson";

var ClubPresident = "Bobby Thakkar";

var ClubVP = "Max Patrick";

var HighSchool = "Allen High School";

var ASCII = function(){
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
	hello: "Allen Computer Science aims to " + specialify("promote Computer Science, development and innovation") + "\n\tin the Allen community by providing " + specialify("an place to soar") + " to those interested in\n\tfurthering their pursuit of the field and attending " + specialify("competitions") + " ranging\n\tfrom " + specialify("hackathons") + " to " + specialify("algorithm contests") + ".",
	help: [{
		name: specialify("help"),
		description: "Display all commands"
	}, {
		name: specialify("hello"),
		description: "Display introduction message"
	}, {
		name: specialify("team"),
		description: "Teacher : " + Teacher + "| Club President : " + ClubPresident + " | Club Vice President : " + ClubVP
 	}, {
		name: specialify("competitions"),
		description: "Show upcoming algorithm competitions and hackathons"
	}, {
		name: specialify("links"),
		description: "Displays links to permission slips, resources, and more"
	}, {
		name: specialify("showcase"),
		description: "HS students\' cool projects"
	}, {
		name: specialify("contact"),
		description: "Contact Allen High School Computer Science Organization club executives"
	}, {
		name: specialify("twitter"),
		description: linkify("@EagleHacks", "https://twitter.com/eaglehacks")
	}],
	contact: "Feel free to send us an email (<a href='mailto:Taylor_Hudson@allenisd.org'>Taylor Hudson</a>) or contact a club executive (type <span class='special'>team</span>) individually.",
	team: [{
		name: specialify("Bobby") + " Thakkar",
		position: "JEDI"
	}, {
		name: specialify("Max") + " Patrick",
		position: "Gambler"
	}, {
		name: specialify("Taylor") + " Hudson",
		position: "Provider of Room"
	}, {
		name: specialify("Aashay") + " Patel",
		position: "Most absent officer"
	}, {
		name: specialify("Bobby") + " Thakkar",
		position: "Again, because he does so much."
	}],
	competitions: "Competition schedule coming soon!",
	links: [
		{
			name : linkify(Allen High School, "http://www.allenisd.org/allenhs"),
			description: "Link back to AHS" 
		},
		{
			name : linkify(Taylor Hudson, "https://www.allenisd.org/Domain/3279"),
			description: "Faculty Page"
		}
		],
	showcase: [{
		name: linkify("Cool Project Ideas?","http://github.com"),
		authors: "By <span class='special'>you</span>? Contact us if you've made a cool project you'd like featured!"
	}],
	soar:[{
		name: linkify("Follow Us on GitHub", "http://github.com/allencompsci"), 
		authors : "You."
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
	var intro = ASCII() +"\n"+ "Welcome to Allen Computer Science at " + "Allen High School" +"!\nType 'hello' below to learn what we're all about! Try '?' for more.\n\n";
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
