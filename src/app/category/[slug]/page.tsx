export default async function DetailCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
