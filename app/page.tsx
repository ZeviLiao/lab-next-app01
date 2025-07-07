import styles from "./page.module.css";
import dynamic from "next/dynamic";
import Providers from "./Providers";

const PostsList = dynamic(() => import("./PostsList"), {
  loading: () => <div>Loading...</div>,
  ssr: true,
});

export default function Home() {
  return (
    <Providers>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Posts List</h1>
          <PostsList />
        </main>
      </div>
    </Providers>
  );
}
