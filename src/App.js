import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Content from "./components/Content";

export default function App() {
    return (
        <>
            <Canvas shadows={true}  camera={{ position: [-20, 40, 30] }}>
                <OrbitControls enableRotate={true} enableZoom={true} />
                <Suspense fallback={null}>
                    <group scale={[1.2, 1.2, 1.2]}>
                        <spotLight intensity={0.9} position={[30, 100, 50]} angle={0.3} color="#ffffff" />
                        <ambientLight intensity={0.1} />
                        <Content />
                    </group>
                </Suspense>
            </Canvas>
        </>
    )
}
