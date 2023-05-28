import useAssets from "../../hooks/useAssets";

const Plot = (props) => {
    const { nodes, materials } = useAssets('energetic-dao-plot');

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.plot001.geometry}
                material={materials["palette.004"]}
                position={[0.11, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
};

export default Plot;


