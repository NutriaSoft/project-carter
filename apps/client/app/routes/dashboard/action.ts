import { getSession } from "~/utils/sidebar.server";
import type {Route} from "./+types/_layout";


export default function DashboardLayoutAction({ request }: Route.ActionArgs) {
  // const session = await getSession(request.headers.get("Cookie"));
  // const formData = await request.formData();
  // const isSidebarOpen = formData.get("isSidebarOpen") === "true";
  return null 
}