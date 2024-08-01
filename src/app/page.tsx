"use client";
import { useEffect } from "react";
import { googlefetch } from "../../utils/google-fetch";

export default function Home() {
  useEffect(() => {
    googlefetch();
  });
  return <div>EEE</div>;
}
