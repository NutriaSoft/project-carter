import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Preview,
	Tailwind,
	Text,
} from "@react-email/components";

export default function SingInEmailTemplate() {
	return (
		<Tailwind>
			<Html>
				<Head />
				<Preview>Confirm your email address</Preview>
				<Body className="bg-white my-0 mx-auto p-0 text-zinc-900 font-sans">
					<Container className="my-0 mx-auto py-0 px-5 flex justify-center items-center">
						<Img
							src="https://remix.run/_brand/remix-light.png"
							alt="Cat"
							height="100"
						/>
						<Heading className="text-4xl font-bold my-7 mx-0">
							Confirm your email address
						</Heading>
						<Text className="text-xl mb-7">
							Your confirmation code is below - enter it in your open browser
							window and we'll help you get signed in.
						</Text>

						<Button
							href=""
							className="inline-flex w-full mx-auto justify-center items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							{/* <CheckCircleIcon aria-hidden="true" className="-ml-0.5 size-5" /> */}
							Go to Dashboard
						</Button>
					</Container>
				</Body>
			</Html>
		</Tailwind>
	);
}
