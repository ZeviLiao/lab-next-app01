import styles from "./page.module.css";

async function PostsList() {
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

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Posts List</h1>
        <PostsList />
      </main>
    </div>
  );
}
