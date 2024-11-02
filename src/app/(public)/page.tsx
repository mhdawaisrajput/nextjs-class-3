export default function HomePage() {
  return (
    <>
      <h1>This is a Home Page.!</h1>
    </>
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////.

// panaverse: >>>>  step03_route_groups/app.

// step03_route_groups/app/page.tsx:

// import Link from "next/link";
// export default function Home() {
//   return (
//     <div>
//       Hello World from Panaverse DAO!
//       <br />
//       <Link href="/name">Go to name page</Link>
//     </div>
//   );
// }



// panaverse: >>>>  step03_route_groups/app/layout.tsx:

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html>
//       <head></head>
//       <body>{children}</body>
//     </html>
//   );
// }



// panaverse: >>>>  step03_route_groups/app/(personal)/name/page.tsx:

// ("use client");
// import { useRouter } from "next/navigation";
// export /*default*/ function GiveName() {
//   const router = useRouter();
//   return (
//     <div>
//       My name is Zia.
//       <br />
//       <button type="button" onClick={() => router.push("/name/address")}>
//         Get Address
//       </button>
//     </div>
//   );
// }



// panaverse: >>>>  step03_route_groups/app/(personal)/name/address/page.tsx:

// export /*default*/ function GiveAddress() {
//   return <div>I live in Karachi, Pakistan</div>;
// };



// panaverse: >>>>  panaverse: >>>>  step06_rendering_theory:
// panaverse: >>>>  Reading it from repo.
