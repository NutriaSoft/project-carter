import { createTransport } from "nodemailer";

export const smtp_transporter = createTransport({
	host: "0.0.0.0",
	port: 1025,
	secure: false,
	auth: {
		// user: "maddison53@ethereal.email",
		// pass: "jn7jnAPss4f63QBp6D",
	},
});

export const verificationEmail = async (url: string, user: unknown) => {
	const origin_url = new URL(url);

	console.log(origin_url);

	const { messageId } = await smtp_transporter.sendMail({
		from: '"Project Carter" <project_carter@ethereal.email>',
		to: "bar@example.com",
		subject: "Account Verification 📨",
		html: `
          <b>Hello world HTML</b>
          <span style="color:white">${url}</span>
          <p style="color:white">${JSON.stringify(user)} </p>
        `,
	});

	console.log("Message sent: %s", messageId); // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};
