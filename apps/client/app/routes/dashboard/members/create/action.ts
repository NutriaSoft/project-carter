import { valibotResolver } from "@hookform/resolvers/valibot";
import { getValidatedFormData } from "@package/ui/hooks/use-remix-form";
import type { InferInput } from "valibot";
import type { Route } from "./+types/route";
import { CreateProfileMemberSchema } from "./create.schema";

export async function CreateMemberAction({
	request,
}: Route.ActionArgs) {
	const {
		errors: formError,
		data: formData,
		receivedValues: formValues,
	} = await getValidatedFormData<InferInput<typeof CreateProfileMemberSchema>>(
		request,
		valibotResolver(CreateProfileMemberSchema),
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
