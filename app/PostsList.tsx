export default async function PostsList() {
  await sleep(1000); // 可選：延遲 1 秒方便觀察
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) return <div>Error: {res.statusText}</div>;
  const data = (await res.json()) as { id: number; title: string }[];
  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
} 