import MailDev from "maildev";

// Define a route for the base path
const maildev = new MailDev({
	smtp: 1025,
});

// Maildev now running on localhost:1080/maildev
maildev.listen((err) => {
	console.log("📨 We can now sent emails to port 1025!");
});

// Print new emails to the console as they come in
maildev.on("new", (email) => {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	console.log("Received new email with subject: %s", (email as any).subject);
});
