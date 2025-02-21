import { users } from "@/app/utils/testData";

export async function GET() {
  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
}
