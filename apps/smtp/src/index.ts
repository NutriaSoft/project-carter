import MailDev from "maildev";

// Define a route for the base path
const maildev = new MailDev({
	smtp: 1025,
});

// Maildev now running on localhost:1080/maildev
maildev.listen((err) => {
	console.log("📨 We can now sent emails to port 1025!");
});
