export async function GET() {
  return Response.json({ notes: [] });
}

export async function POST() {
  return Response.json({ note: null }, { status: 201 });
}
