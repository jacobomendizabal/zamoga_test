
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String, //user name
	provider_id: { type: String, unique: true }, // ID Twitter 
	photo: String, // Avatar user
	createdAt: { type: Date, default: Date.now }, // Date created
	timeline: String, // Tweets
	experience: { type: String, default: 'I have worked in software development for companies in Bolivia and for foreign companies (USA, China, Switzerland), I have used agile application development methodologies such as Scrum and Agile Coach, I have worked with task tracking tools such as Trello, Kanban Flow, JIRA , Git, Project Manager, Monday, Zeplin and well-known team communication tools such as Skype, Zoom, WorkMail, Google Drive, Google Docs and others, either in a local or cloud environment such as AWS. GCP and Azure, I have develop applications in Java, Php, AngularJs, Javascript, C #, VbNet, Lotus Notes, Ionic, Typescript, Cordova, AngularJS, Angular2 +; with LAMP, MEAN, WAMP infrastructures in Sql Server, Oracle, Postgres, MySql, MariaDb databases and Tomcat, Glasfish, NodeJs and Loopback application servers, as well as corporate applications such as ERPs and reporting technologies such as Crystal Report, Jreport and BI. Also, I have handled Hadoop, Pig and Hbase as far as Big Data is concerned, implementing MEAN, LAMP, WAMP backend; my profile is summarized in more than 18 years of experience as a developer.' } //Experiencia
});

var User = mongoose.model('User', UserSchema);
