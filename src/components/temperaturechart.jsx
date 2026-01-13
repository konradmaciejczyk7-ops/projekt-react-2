export default function TemperatureChart({ forecast }) {
  return (
    <svg width="300" height="100">
      {forecast.map((day, index) => (
        <circle
          key={index}
          cx={index * 60 + 20}
          cy={100 - day.temp * 3}
          r="4"
          fill="white"
        />
      ))}
    </svg>
  );
}
