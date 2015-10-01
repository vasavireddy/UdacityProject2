/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio={
	"name" : "Vasavi Reddy ",
	"role" : "Front End Ninja",
	"contacts" : {
		"email" : "vasavireddy@gmail.com",
		"twitter" : "@vasavimreddy",
		"linkedin" : "vasavireddy",
		"location" : "San Francisco, CA",
		"github" : "vasavireddy",
		"mobile" : "510-676-8084"
	},
	"bioPic" : "images/vasavi.jpg",
	"welcome" : "Hi! I'm Vasavi, and I like to design and code things. I'm currently a UX Design Intern at WebDAM.",
	"skills" : ["UX/UI Design", "HTML/CSS", "Javascript/jQuery" ]
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedName, formattedRole);

	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").prepend(formattedImage);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	$("#footerContacts").append(formattedLinkedin);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);
	$("#topContacts").append(formattedwelcomeMsg);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
	}
};

var education = {
	"schools": [
		{
			"name": "General Assembly",
			"location": "San Francisco, CA",
			"degree": "Not Available",
			"dates": "September 2014- June 2015",
			"major": ["UX Design", "Visual Design"]
		},
		{
			"name": "University of California, Riverside",
			"location": "Riverside, CA",
			"degree": "BA",
			"dates": "September 2009- August 2013",
			"major": ["Economics and Administrative Studies"]
		}
	],
	"online": [
		{
			"title": "Frontend Nanodegree",
			"school" : "Udacity",
			"dates" : "2015",
			"URL" : "https://www.udacity.com"

		},
	]
};

var work = {
	"jobs": [
		{
			"employer" : "WebDAM",
			"title" : "UX Design Intern",
			"dates" : "June 2015 - current",
			"location" : "San Mateo, CA",
			"description" : "Provide high quality UX/UI Design services including concepts, designs, and mockups."

		},
		{
			"employer" : "Freelance",
			"title" : "UX Designer",
			"dates" : "January 2015 - June 2015",
			"location" : "San Francisco, CA",
			"description" : "Helped improve data quality and provided UX consultation for various early-stage startups."

		},
		{
			"employer" : "SF Triathlon Club",
			"title" : "UX Designer",
			"dates" : "October 2014 - December 2014",
			"location" : "San Francisco, CA",
			"description" : "Client project analyzing current member’s needs and how to effectively re-design the site to meet the user’s needs."

		},
		{
			"employer" : "SFMTA",
			"title" : "UX Designer",
			"dates" : "October 2014 - October 2014",
			"location" : "San Francisco, CA",
			"description" : "Concept design project aimed to increase MUNI ridership during off-peak hours through a mobile app."
		}
	]
};

var projects = {
  "projects": [
    {
      "title" : "Portfolio Mockup",
      "dates" : "2015",
      "description" : "Udacity Project 1 - HTML/CSS"
    },
    {
      "title" : "Interactive Resume",
      "dates" : "2015",
      "description" : "Udacity Project 2 - Javascript"
    }
  ]
};


work.display = function (){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

projects.display = function (){
	for (item in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
		$(".project-entry:last").append(formattedprojectTitle);

		var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
		$(".project-entry:last").append(formattedprojectDates);

		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
		$(".project-entry:last").append(formattedprojectDescription);
	}
};

 education.display = function (){
	 for (university in education.schools) {
	  	$("#education").append(HTMLschoolStart);

	  	//var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[university].degree);
	  	//$(".education-entry:last").append(formattedDegree);

	  	var formattedName = HTMLschoolName.replace("%data%", education.schools[university].name);
	  	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[university].dates);
	  	//var formattedNameDates = formattedName + formattedDates ;
	  	$(".education-entry:last").append(formattedName);
	  	$(".education-entry:last").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[university].major);
	  	$(".education-entry:last").append(formattedMajor);
	  }

	for (course in education.online){
		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.online[course].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.online[course].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.online[course].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.online[course].URL);
		$(".education-entry:last").append(formattedURL);

	}

};

bio.display();
work.display();
projects.display();
education.display();

//log x and y locations of clicks to console
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

console.log(locationizer(work));

function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];

}
$('#header').append(internationalizeButton);

$("#mapDiv").append(googleMap);
