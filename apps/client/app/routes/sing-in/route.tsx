import { SingInForm } from "./sing-in-form.component";
import { SingInAction } from "./sing-in.action";

// import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";

// import { WretchError } from "wretch/resolver";
// import { authServer } from "~/utils/auh-server.server";

// export async function action({ request }: ActionFunctionArgs) {
//   const {
//     errors,
//     data,
//     receivedValues: defaultValues,
//   } = await getValidatedFormData<LoginFormData>(request, resolver);

//   if (errors) {
//     console.error(errors);
//     // The keys "errors" and "defaultValue" are picked up automatically by useRemixForm
//     return Response.json({ errors, defaultValues }, { status: 400 });
//   }

//   console.log("data:", JSON.stringify(data, null, 4));

//   return null;
//   // try {
//   //   const requestClone = request.clone();
//   //   const formData = await requestClone.formData();
//   //   const { email, password } = parse(LoginSchema, {
//   //     password: String(formData.get("password")),
//   //     email: String(formData.get("email")),
//   //   });
//   //   const authRequest = await authServer
//   //     .headers({ ...requestClone.headers })
//   //     .url("/sign-in/email")
//   //     .post({ email, password })
//   //     .res();
//   //   const mergedHeaders = new Headers([
//   //     ...requestClone.headers.entries(),
//   //     ...authRequest.headers.entries(),
//   //   ]);
//   //   mergedHeaders.delete("content-length");
//   //   return redirect("/dashboard", { headers: mergedHeaders });
//   // } catch (exception) {
//   //   if (exception instanceof Response) return exception;
//   //   if (exception instanceof WretchError) {
//   //     return json({ authError: exception.message });
//   //   }
//   //   if (exception instanceof ValiError) {
//   //     return json({ formError: flatten(exception.issues).nested });
//   //   }
//   // }
// }

// export async function loader({ request }: LoaderFunctionArgs) {
//   const requestClone = request.clone();

//   const authRequest = await authServer
//     .headers({ ...requestClone.headers })
//     .get("/get-session")
//     .res();

//   const mergedHeaders = new Headers([
//     ...requestClone.headers.entries(),
//     ...authRequest.headers.entries(),
//   ]);

//   if (!mergedHeaders.get("cookie")?.includes("better-auth")) return null;

//   return redirect("/dashboard", {
//     headers: mergedHeaders,
//   });
// }

export const action = SingInAction;

export default function IndexSingIn() {
	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-6">
			<div className="w-full max-w-sm">
				<SingInForm />
			</div>
		</div>
	);
}
