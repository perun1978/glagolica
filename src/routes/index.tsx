import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/glag/AppShell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <AppShell />;
}
