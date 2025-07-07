"use client";

import styles from "./page.module.css";
import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const PostsList = React.lazy(() => import("./PostsList"));

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Posts List</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <PostsList />
          </Suspense>
        </main>
      </div>
    </QueryClientProvider>
  );
}
