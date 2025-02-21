import { users } from "@/app/utils/testData";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // URL에서 동적 ID 추출
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(user), {
    headers: { "Content-Type": "application/json" },
  });
}
