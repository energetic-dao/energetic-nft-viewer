import useAssets from "../../hooks/useAssets";

const House = (props) => {
    const { nodes, materials } = useAssets('energetic-dao-house');

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.house.geometry}
                material={materials["palette.003"]}
                position={[-1.52, 8.63, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
};

export default House;


