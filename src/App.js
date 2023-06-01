import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Content from "./components/Content";
import { useNftLookup } from "./hooks/useNftLookup";

import qs from 'query-string';

export default function App() {
    const query = qs.parse(window.location.search);

    const [nftMetadata, loading] = useNftLookup(query['tokenId']);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
		<Canvas shadows={true} style={{ background: nftMetadata.background }} camera={{ position: [-20, 40, 30] }}>
                <OrbitControls enableRotate={true} enableZoom={true} />
                <Suspense>
                    <group scale={[1.2, 1.2, 1.2]}>
                        <spotLight intensity={0.9} position={[30, 100, 50]} angle={0.3} color="#ffffff" />
                        <ambientLight intensity={0.1} />
                        <Content nftMetadata={nftMetadata} />
                    </group>
                </Suspense>
            </Canvas>
        </>
    )
}
