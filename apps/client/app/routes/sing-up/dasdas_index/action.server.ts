import { valibotResolver } from "@hookform/resolvers/valibot";
import { getValidatedFormData } from "@package/ui/hooks/use-remix-form";
import type { InferInput } from "valibot";
import type { Route } from "../+types/layout";
import { SingUpSchema } from "./sing-up.schema";

export default async function SingUpAction({ request }: Route.ActionArgs) {
	console.log(await request.clone().formData());

	const { errors, data, receivedValues } = await getValidatedFormData<
		InferInput<typeof SingUpSchema>
	>(request, valibotResolver(SingUpSchema), true);

	
	if (errors) {
		console.error("ACTION ERROR", { errors, receivedValues });
		// The keys "errors" and "defaultValue" are picked up automatically by useRemixForm
		return Response.json({ errors, receivedValues }, { status: 400 });
	}
	console.log("data:", JSON.stringify(data, null, 4));
	return data;
}

