import type { Route } from "./+types/route";

export default function CreateMemberAction({ request }: Route.ActionArgs) {
	console.log(request);

	return null;
}
