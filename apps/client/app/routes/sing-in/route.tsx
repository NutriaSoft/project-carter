import { SingInForm } from "./sing-in-form.component";
import { SingInAction } from "./sing-in.action";
import { SingInLoader } from "./sing-in.loader";

export const action = SingInAction;
export const loader = SingInLoader;

export default function IndexSingIn() {
	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-6">
			<div className="w-full max-w-sm">
				<SingInForm />
			</div>
		</div>
	);
}
