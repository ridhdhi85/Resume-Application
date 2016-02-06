var bio = {
	"name": "Ridhdhi Patel",
	"role": "Web Developer",
	"contacts": {
		"mobile": "xxx-xxx-xxxx",
		"email": "Ridhdhixx@gmail.com",
		"github": "ridhdhi85",
		"twitter": "#RidhdhiP",
		"linkedin": "https://www.linkedin.com/in/riddhipatel",
		"location": "Oklahoma City"
	},
	"biopic": "images/pic.jpg",
	"welcomeMessage": "I am working as SR Sofware engineer in Test and i am learning web-development to switch my career to development",
	"skills": [
		"Java", "Javascript", "Groovy", "web-development", "automation", "selenium", "Agile Methodologies", "Scrum", "Web services"
	]
};

var work = {
	"jobs": [{
			"employer": "Netsuite inc",
			"title": "Sr Software engineer in Test",
			"location": "Oklahoma City, Oklahoma",
			"dates": "Feb 2015 - current",
			"description": "Working as SET on Javascript, java and automation using selenium/java."
		},
		{
			"employer": "Truecar inc",
			"title": "Test automation engineer",
			"location": "Los angeles, California",
			"dates": "May 2012 - Feb 2015",
			"description": "Worked on Python automation framework development"
		},
		{
			"employer": "Yahoo inc",
			"title": "Tech Yahoo Software Quality Engineer",
			"location": "Carlsbad, California",
			"dates": "OCT 2011 - May 2012",
			"description": "Worked on Display advertising Platform Team as Quality Engineer."
	}]
};

var educations = {
	"schools": [{
			"name": "Sanjose State University",
			"location": "Sanjose, California",
			"degree": "Master in Software engineering",
			"majors": ["Software engineering"],
			"dates": "Dec 2008",
			"url": "http://www.sjsu.edu"
		},
		{
			"name": "North gujarat University",
			"location": "India",
			"degree": "Bachelor in Computer engineering",
			"majors": ["Computer engineering"],
			"dates": "May 2006",
			"url": "http://www.ngu.ac.in"
	}],
	"onlineCourse": [{
			"title": "Front-end Web development",
			"school": "Udacity",
			"date": "2015-2016",
			"url": "https://www.udacity.com"
		},
		{
			"title": "Introduction to Computer Science and Programming Using Python",
			"school": "Edx",
			"date": "2012",
			"url": "https://www.edx.org"
	}]
};

var projects = {
	"projects": [{
			"title": "Online portfolio project",
			"dates": "Jan 2016",
			"description": "Using HTML and CSS and Bootstrap",
			"images": ["images/portfolio.jpg"]
		},
		{
			"title": "Online Resume project",
			"dates": "Jan 2016",
			"description": "Using Javascript, CSS, Html and Polymer",
			"images": ["images/resume_footer_sm.jpg", "images/resume_intro_sm.jpg", "images/resume_responsive_sm.jpg"]
	}]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
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
	$("#footerContacts").append(formattedMobile);

	var formattedEmail =  HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGitHub =  HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);

	var formattedTwitter =  HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLocation =  HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
};

bio.display();

work.display = function() {

	for (var job = 0; job < work["jobs"].length; job++) {

		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][job].employer);
		var formattedTitle =  HTMLworkTitle.replace("%data%", work["jobs"][job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);

		var formattedDate =  HTMLworkDates.replace("%data%", work["jobs"][job].dates);
		$(".work-entry:last").append(formattedDate);

		var formattedDescription =  HTMLworkDescription.replace("%data%", work["jobs"][job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

work.display();

projects.display = function() {
	for (var project = 0; project < projects["projects"].length; project++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image = 0; image < projects.projects[project].images.length; image++) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

educations.display = function() {
	for (var education = 0; education < educations["schools"].length; education++) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", educations["schools"][education].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", educations["schools"][education].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);

		var formattedLocation = HTMLschoolLocation.replace("%data%", educations["schools"][education].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedYearsGraduated = HTMLschoolDates.replace("%data%", educations["schools"][education].dates);
		$(".education-entry:last").append(formattedYearsGraduated);

		// var formattedUrl = HTMLschoolLocation.replace("%data%", educations["schools"][education].url);
		// $(".education-entry:last").append(formattedUrl);

		if (educations["schools"][education].majors.length > 0) {
			for (var major = 0; major < educations["schools"][education].majors.length; major++) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", educations["schools"][education].majors[major]);

				$(".education-entry:last").append(formattedMajor);
			}
		}
	}

	if (educations["onlineCourse"].length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);

		for (var onlineCourse = 0; onlineCourse < educations["onlineCourse"].length; onlineCourse++) {

			var formattedTitle = HTMLonlineTitle.replace("%data%", educations["onlineCourse"][onlineCourse].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", educations["onlineCourse"][onlineCourse].school);
			$(".education-entry:last").append(formattedTitle + formattedSchool);

			var formattedDates = HTMLonlineDates.replace("%data%", educations["onlineCourse"][onlineCourse].date);
			$(".education-entry:last").append(formattedDates);

			var formattedUrl = HTMLonlineURL.replace("%data%", educations["onlineCourse"][onlineCourse].url);
			$(".education-entry:last").append(formattedUrl);
		}
	}
};

educations.display();

$("#mapDiv").append(googleMap);
