import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yerins Abraham — The Polymath";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#faf8f3",
          color: "#141312",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#7c5316",
          }}
        >
          Yerins Abraham
        </div>
        <div
          style={{
            fontSize: 150,
            fontWeight: 300,
            lineHeight: 1,
            marginTop: 24,
          }}
        >
          The Polymath
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#4b4742",
            marginTop: 40,
            maxWidth: 900,
          }}
        >
          Medical doctor and software engineer, building technology for human
          health.
        </div>
      </div>
    ),
    { ...size }
  );
}
