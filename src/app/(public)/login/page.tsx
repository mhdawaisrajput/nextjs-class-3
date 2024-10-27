"use client";
import { useRouter } from "next/navigation";

export default function LoginPage(){
  const router = useRouter();
    return (
      <>
      <h1>This is a Login Page.!</h1>
      <button type="button" onClick={() => router.push('http://localhost:3000/admit-card')}>Get Admit Card</button>
      </>
    )
};