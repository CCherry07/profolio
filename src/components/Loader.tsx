import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html>
      <span className="canvas-loader"></span>
      <p style={{
        fontSize: "1.5rem",
        color: "#fff",
        fontWeight: 800,
        marginTop: "2rem"
      }}>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader
