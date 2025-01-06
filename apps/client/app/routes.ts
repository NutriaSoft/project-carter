import { remixConfigRoutes } from "@react-router/remix-config-routes-adapter";
import type { RouteConfig } from "@remix-run/route-config";
import { flatRoutes } from "remix-flat-routes";

export default remixConfigRoutes((defineRoutes) => {
	return flatRoutes("routes", defineRoutes, {
		/* options */
	});
}) satisfies RouteConfig;
