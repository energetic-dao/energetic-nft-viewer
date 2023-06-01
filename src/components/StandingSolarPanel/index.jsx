import useAssets from "../../hooks/useAssets";

const StandingSolarPanel = (props) => {
    const { nodes, materials } = useAssets('energetic-dao-standing-solar-panel');

    const hasStandingSolarPanel = props?.amount > 0;
    if (!hasStandingSolarPanel) {
        return null;
    }

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["standing-panel002"].geometry}
                material={materials["palette.005"]}
                position={[6.44, 10.53, 7.94]}
                rotation={[Math.PI / 2, 0, -0.9]}
            />
        </group>
    );
};

export default StandingSolarPanel;


