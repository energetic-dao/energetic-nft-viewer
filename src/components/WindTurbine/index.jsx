import useAssets from "../../hooks/useAssets";

const WindTurbine = (props) => {
    const { nodes, materials } = useAssets('energetic-dao-wind-turbine');

    const hasWindTurbine = props?.amount > 0;
    if (!hasWindTurbine) {
        return null;
    }

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["wind-turbine001"].geometry}
                material={materials["palette.002"]}
                position={[-5.12, 8.64, -9.13]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
        </group>
    );
};

export default WindTurbine;


