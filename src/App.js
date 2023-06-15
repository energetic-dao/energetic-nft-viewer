import { Suspense, useState } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import * as THREE from 'three';
import { OrbitControls } from "@react-three/drei"
import Content from "./components/Content";
import { useNftLookup } from "./hooks/useNftLookup";

import {BrowserRouter, Route, Routes, useParams } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}></Route>
                <Route path="/viewer/:hash" element={<SceneCanvas isImage={false} />}></Route>
                {<Route path="/assets/:hash" element={<SceneCanvas  isImage={true}  />}></Route>}
            </Routes>
        </BrowserRouter>
    )
}


const Scene = ({ metadata, isImage, setImage}) => {
    const { gl} = useThree();

    if (isImage) {
        setTimeout(() => {
            setImage(gl.domElement.toDataURL('image/png'))
        }, 200);
    }

    return (
        <>
            <OrbitControls enableRotate={!isImage} enableZoom={!isImage}/>
            <Suspense>
                <group scale={[1.2, 1.2, 1.2]}>
                    <spotLight intensity={0.9} position={[30, 100, 50]} angle={0.3} color="#ffffff"/>
                    <ambientLight intensity={0.1}/>
                    <Content nftMetadata={metadata}/>
                </group>
            </Suspense>
        </>
    )
}

const SceneCanvas = ({ isImage }) => {
    const { hash } = useParams();
    const [image, setImage] = useState(null);

    const [nftMetadata, loading] = useNftLookup(hash);

    if (loading) {
        return <div style={{ color: 'white', display: "flex", justifyContent: 'center', alignItems: 'center' }}>Loading...</div>
    }

    if (image !==  null) {
        return <img style={{ background: new THREE.Color(nftMetadata.color).getStyle() }} src={image}  alt={nftMetadata} />
    }

    return (
        <>
            <Canvas gl={{ preserveDrawingBuffer: true }} shadows={true} style={{ background: nftMetadata.color }}
                    camera={{position: [-20, 40, 30]}}>
                <Scene metadata={nftMetadata} isImage={isImage} setImage={setImage}  />
            </Canvas>
        </>
    )
}

const Base = () => {
    return (
        <div>
            <h1>Energetic Nft viewer</h1>
        </div>
    )
}