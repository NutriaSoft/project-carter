import { Button } from "@package/ui/components/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@package/ui/components/card";
import { Link } from "react-router";

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
						<Button asChild className="w-full">
							<Link to="/dashboard">Go to Dashboard</Link>
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
