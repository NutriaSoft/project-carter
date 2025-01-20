import { Button } from "@package/ui/components/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@package/ui/components/card";

export default function SingUpSuccess() {
	return (
		<div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-dvh">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<Card>
					<CardHeader>
						<CardTitle className="text-2xl">Register</CardTitle>
						<CardDescription>
							Check your email imbox on create a new account by filling out the
							form below.
						</CardDescription>
					</CardHeader>
					<CardFooter>
						<Button className="w-full">Go to Dashboard</Button>
					</CardFooter>
				</Card>

				{/* <img
					alt="Your Company"
					src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
					className="mx-auto h-10 w-auto"
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
			
				</h2> */}
			</div>
		</div>
	);
}
