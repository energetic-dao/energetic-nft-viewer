import useAssets from "../../../hooks/useAssets";

const MainBattery = (props) => {
    const { nodes, materials } = useAssets('energetic-dao-main-battery');

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["battery-main"].geometry}
                material={materials["palette.006"]}
                position={[-5.9, 8.79, 3.44]}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
};

export default MainBattery;


