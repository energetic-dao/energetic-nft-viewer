import useAssets from "../../../hooks/useAssets";

const BackupBattery = (props) => {
    const { nodes, materials } = useAssets('energetic-dao-backup-battery');

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["battery-addition"].geometry}
                material={materials["palette.007"]}
                position={[-5.9, 11.08, 3.46]}
                rotation={[Math.PI / 2, 0, 0]}
            />
        </group>
    );
};

export default BackupBattery;


