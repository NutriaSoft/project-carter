import { valibotResolver } from "@hookform/resolvers/valibot";
import { getValidatedFormData } from "@package/ui/hooks/use-remix-form";
import type { InferInput } from "valibot";
import type { Route } from "./+types/route";
import { SingInSchema } from "./sing-in.schema";

export async function SingInAction({ request }: Route.ActionArgs) {
	const {
		errors: formError,
		data: formData,
		receivedValues: formValues,
	} = await getValidatedFormData<InferInput<typeof SingInSchema>>(
		request,
		valibotResolver(SingInSchema),
		true,
	);

	if (formError) {
		console.error("ACTION ERROR", { formError, formValues });
		// The keys "errors" and "defaultValue" are picked up automatically by useRemixForm
		return Response.json({ formError, formValues }, { status: 400 });
	}
	console.log("data:", JSON.stringify(formData, null, 4));
	return null;
}
