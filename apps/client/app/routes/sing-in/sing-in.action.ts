import { valibotResolver } from "@hookform/resolvers/valibot";
import { authClient } from "@package/auth";
import { getValidatedFormData } from "@package/ui/src/hooks/use-remix-form";
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

	// const {
	//   data: authClientData,
	//   error: authClientError
	// } = await authClient.signIn.email(formData);

	// if (authClientError) {
	//   console.error("authClientError ERROR", { authClientError, formValues });
	//   // The keys "errors" and "defaultValue" are picked up automatically by useRemixForm
	//   return Response.json({ authClientError, formValues }, { status: 400 });
	// }

	// console.log(authClientData);

	console.log("data:", JSON.stringify(formData, null, 4));

	return null;
}
