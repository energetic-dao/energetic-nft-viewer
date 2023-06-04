import useAssets from "../../hooks/useAssets";
import {useAnimations} from "@react-three/drei";
import {useEffect, useRef} from "react";

const WindTurbine = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useAssets(
        "energetic-dao-rotating-wind-turbine"
    );

    const { actions } = useAnimations(animations, group);

    useEffect(()=> {
        actions?.windTurbineRotation?.play()
    })

    const hasWindTurbine = props?.amount > 0;
    if (!hasWindTurbine) {
        return null;
    }

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="wind-turbine003"
                    castShadow
                    receiveShadow
                    geometry={nodes["wind-turbine003"].geometry}
                    material={materials["Material.001"]}
                    position={[-5.05, 15.89, -8.7]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                />
                <mesh
                    name="wind-turbine002"
                    castShadow
                    receiveShadow
                    geometry={nodes["wind-turbine002"].geometry}
                    material={materials["palette.016"]}
                    position={[-5.05, 15.89, -8.7]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                />
                <mesh
                    name="windTurbine"
                    castShadow
                    receiveShadow
                    geometry={nodes.windTurbine.geometry}
                    material={materials["palette.016"]}
                    position={[-5.06, 19.27, -7.48]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
            </group>
        </group>
    );
};

export default WindTurbine;


