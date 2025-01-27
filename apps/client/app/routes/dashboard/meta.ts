import type { MetaFunction } from "react-router";

export const DashboardMeta: MetaFunction = () => {
  return [
    { title: "Remix shadcn Dashboard" },
    { name: "description", content: "Welcome to Remix!" },
  ];
}