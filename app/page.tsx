import styles from "./page.module.css";
import React, { Suspense } from "react";
import Providers from "./Providers";

const PostsList = React.lazy(() => import("./PostsList"));

export default function Home() {
  return (
    <Providers>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Posts List</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <PostsList />
          </Suspense>
        </main>
      </div>
    </Providers>
  );
}
