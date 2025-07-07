"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function PostsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return res.data as { id: number; title: string }[];
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
} 