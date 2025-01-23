import type { MetaFunction } from "react-router";

export const DashboardMeta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
}