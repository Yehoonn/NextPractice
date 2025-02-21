import Image from "next/image";
export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "85%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <main>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          style={{ cursor: "pointer" }}
        />
      </main>
    </div>
  );
}
