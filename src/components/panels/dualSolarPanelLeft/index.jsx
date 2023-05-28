import useAssets from "../../../hooks/useAssets";

const DualSolarPanelLeft = (props) => {
    const { nodes, materials } = useAssets('energetic-dao-dual-left-panel');

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["roof-panel-left001"].geometry}
                material={materials["palette.001"]}
                position={[-3.58, 15.64, -2.43]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["roof-panel-left002"].geometry}
                material={materials["palette.010"]}
                position={[-3.58, 15.64, 2.28]}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
};

export default DualSolarPanelLeft;


