import useAssets from "../../../hooks/useAssets";

const SingleSolarPanelRight = (props) => {
    const { nodes, materials } = useAssets('energetic-dao-single-right-panel');

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["roof-panel-right002"].geometry}
                material={materials["palette.012"]}
                position={[0.55, 15.68, -0.18]}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
};

export default SingleSolarPanelRight;


