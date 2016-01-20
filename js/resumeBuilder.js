var bio = {
	"name": "Ridhdhi Patel",
	"role": "Web Developer",
	"contacts": {
		"mobile": "408-802-3711",
		"email": "Ridhdhi2285@gmail.com",
		"github": "ridhdhi85",
		"twitter": "#RidhdhiP",
		"location": "Oklahoma City",
	},
	"bioURL": "images/fry.jpg",
	"welcomeMessage": "I am working as sr sofware engineer in Test and i am learning web-development to switch my career to development",
	"skills": [
	"Programming", "Reading", "Learning new technologies"
	]
};

var work = {
	"jobs": [
		{
			"employer": "Netsuite inc",
			"title": "Sr Software engineer in Test",
			"location": "Oklahoma City, Oklahoma",
			"dateWorked": "Feb 2015 - current",
			"description": "Working as SET on Javascript, java and automation using seleniu/java"
		},
		{
			"employer": "Truecar inc",
			"title": "Test automation engineer",
			"location": "Los angeles, California",
			"dateWorked": "May 2012 - Feb 2015",
			"description": "Worked on Python automation development"
		}
	]
};

var educations = {
	"schools": [
		{
			"name": "Sanjose State University",
			"location": "Sanjose, California",
			"degree": "Master in Software engineering",
			"majors": ["Software engineering", "Java"],
			"yearGraduated": "Dec 2008",
			"url": "http://www.sjsu.edu"
		},
		{
			"name": "North gujarat University",
			"location": "India",
			"degree": "Bachelor in Computer engineering",
			"majors": ["Computer engineering", "c/c++"],
			"yearGraduated": "May 2006",
			"url": "http://www.ngu.ac.in"
		}
	],
	"onlineCourse": [
		{
			"title": "Front-end Web development",
			"school": "Udacity",
			"dates": "2015-2016",
			"url": "https://www.udacity.com"
		},
		{
			"title": "Introduction to Computer Science and Programming Using Python",
			"school": "Edx",
			"dates": "2012",
			"url": "https://www.edx.org"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Online portfolio project",
			"dates": "Jan 2016",
			"description": "Using HTML and CSS testiofnkljfdbhkjfgnhklfgnhkjnfdhkdfjnhlfdhnfgklhnfglkhnfglkhnfglkhfgnhlkfgnhl",
			"images": ["images/fry.jpg", "images/fry.jpg"]
		},
		{
			"title": "Online Resume project",
			"dates": "Jan 2016",
			"description": "Using Javascript sd gdfhfg hgfjhgjhjhgjghjghjghjghjhgjhgjgjghjhgjghjhgj",
			"images": ["images/fry.jpg", "images/fry.jpg"]
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioURL);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

if (bio["skills"].length > 0) {
	$("#header").append(HTMLskillsStart);

	for (var i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

var formattedMobile =  HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail =  HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGitHub =  HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGitHub);

var formattedTwitter =  HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedLocation =  HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

function displayWork()
{
	for (var job in work["jobs"])
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][job].employer);
		var formattedTitle =  HTMLworkTitle.replace("%data%", work["jobs"][job].title);
		var formattedDate =  HTMLworkDates.replace("%data%", work["jobs"][job].dateWorked);
		var formattedDescription =  HTMLworkDescription.replace("%data%", work["jobs"][job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDate + formattedDescription);
	}
}

displayWork();

projects.display = function() {
	for (var project in projects["projects"]) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

educations.display = function() {
	for (var education in educations["schools"]) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", educations["schools"][education].name);
		$(".education-entry:last").append(formattedName);

		var formattedLocation = HTMLschoolLocation.replace("%data%", educations["schools"][education].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDegree = HTMLschoolDegree.replace("%data%", educations["schools"][education].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedYearsGraduated = HTMLschoolDates.replace("%data%", educations["schools"][education].yearGraduated);
		$(".education-entry:last").append(formattedYearsGraduated);

		// var formattedUrl = HTMLschoolLocation.replace("%data%", educations["schools"][education].url);
		// $(".education-entry:last").append(formattedUrl);

		if (educations["schools"][education].majors.length > 0) {
			for (major in educations["schools"][education].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", educations["schools"][education].majors[major]);

				$(".education-entry:last").append(formattedMajor);
			}
		}
	}

	if (educations["onlineCourse"].length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);

		for (onlineCourse in educations["onlineCourse"]) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", educations["onlineCourse"][onlineCourse].title);
			$(".education-entry:last").append(formattedTitle);

			var formattedSchool = HTMLonlineSchool.replace("%data%", educations["onlineCourse"][onlineCourse].school);
			$(".education-entry:last").append(formattedSchool);

			var formattedDates = HTMLonlineDates.replace("%data%", educations["onlineCourse"][onlineCourse].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedUrl = HTMLonlineURL.replace("%data%", educations["onlineCourse"][onlineCourse].url);
			$(".education-entry:last").append(formattedUrl);
		}
	}
}

educations.display();

$("#mapDiv").append(googleMap);
// locations(work)
