var mongoose = require('mongoose');
var User = mongoose.model('User');
var TwitterStrategy = require('passport-twitter').Strategy;
var config = require('./config.js');
var timeline = "";
module.exports = function (passport) {

	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	passport.deserializeUser(function (obj, done) {
		done(null, obj);
	});

	passport.use(new TwitterStrategy({
		consumerKey: config.twitter.key,
		consumerSecret: config.twitter.secret,
		callbackURL: 'http://localhost:5000/auth/twitter/callback'
	}, function (accessToken, refreshToken, profile, done) {
		timeline = profile._json.status.text;
		console.log('timeline', timeline);
		// momento y ya está almacenado en ella
		User.findOne({ provider_id: profile.id }, function (err, user) {
			if (err) throw (err);
			if (!err && user != null) return done(null, user);
			var user = new User({
				provider_id: profile.id,
				provider: profile.provider,
				name: profile.displayName,
				photo: profile.photos[0].value,
				timeline: timeline,
				experience: profile.experience
			});
			user.save(function (err) {
				if (err) throw err;
				done(null, user);
			});
		});
	}));

};
