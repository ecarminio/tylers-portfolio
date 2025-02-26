export async function GET() {
  return new Response(JSON.stringify({ key: process.env.OPENAI_API_KEY || "Not Found" }), {
    headers: { "Content-Type": "application/json" },
  });
}
