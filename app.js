var express = require("express");
var path = require("path");
var lingua  = require("lingua");
var compression = require('compression');
var helmet = require('helmet');

const http_port = 4000;

// Using express and ejs as a view engine
var app = express();
app.set("view engine", "ejs");

// Authorize to search files in these directories
app.use(express.static(path.join(__dirname, "images"))); // Images
app.use(express.static(path.join(__dirname, "public"))); // CSS and JS

// ejs files location
app.set("views", path.join(__dirname, "/views"));

// Lingua configuration
app.use(lingua(app, {
    defaultLocale: "en",
    path: __dirname + "/i18n",
	storageKey: "lang"
}));

// Compress all responses
app.use(compression())

// Protect for well-known web vulnerabilities
app.use(helmet())

// Main page (startingpoint)
app.get("/", function(req, res) {
	// Umami (https://github.com/mikecao/umami) is used to make some anonymous statistics and is hosted on stats.triathlon-calculator.app.
	res.set("Content-Security-Policy", "default-src 'self' 'unsafe-inline' https://stats.triathlon-calculator.app; script-src 'self' 'unsafe-inline' https://stats.triathlon-calculator.app;");
	res.set("Set-Cookie", "flavor=choco; SameSite=None; Secure");
	res.render("index.ejs");
})

app.get("/about", function(req, res) {
	res.set("Content-Security-Policy", "default-src 'self' 'unsafe-inline' https://stats.triathlon-calculator.app; script-src 'self' 'unsafe-inline' https://stats.triathlon-calculator.app;");
	res.set("Set-Cookie", "flavor=choco; SameSite=None; Secure");
	res.render("about.ejs");
});

app.get("*", function(req, res) {
	res.status(404); // Send error code 404
	res.render("404.ejs");
});

// Run server
app.listen(http_port)
