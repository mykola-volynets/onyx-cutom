// Redirect root to /projects page
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/projects");
  return null;
}
