const PETALS = [
  { left: "8%", delay: "0s", duration: "14s", size: 10 },
  { left: "22%", delay: "3s", duration: "18s", size: 8 },
  { left: "41%", delay: "1s", duration: "16s", size: 12 },
  { left: "63%", delay: "5s", duration: "20s", size: 9 },
  { left: "78%", delay: "2.4s", duration: "15s", size: 11 },
  { left: "91%", delay: "6s", duration: "19s", size: 7 },
];

export default function Petals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden>
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal absolute top-[-12vh] rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.4,
            animationDelay: p.delay,
            animationDuration: p.duration,
            background: i % 2 === 0 ? "#c5a35a" : "#6b2d3c",
            opacity: 0.45,
            borderRadius: "40% 60% 50% 50%",
          }}
        />
      ))}
    </div>
  );
}
