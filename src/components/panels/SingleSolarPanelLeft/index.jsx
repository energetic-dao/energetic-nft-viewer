import useAssets from "../../../hooks/useAssets";

const SingleSolarPanelLeft = (props) => {
    const { nodes, materials } = useAssets('energetic-dao-single-left-panel');

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["roof-panel-left"].geometry}
                material={materials["palette.008"]}
                position={[-3.58, 15.64, -0.21]}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
};

export default SingleSolarPanelLeft;


