import useAssets from "../../../hooks/useAssets";

const DualSolarPanelRight = (props) => {
    const { nodes, materials } = useAssets('energetic-dao-dual-right-panel');

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["roof-panel-right"].geometry}
                material={materials["palette.009"]}
                position={[0.55, 15.68, -2.41]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["roof-panel-right001"].geometry}
                material={materials["palette.011"]}
                position={[0.55, 15.68, 2.3]}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
};

export default DualSolarPanelRight;


