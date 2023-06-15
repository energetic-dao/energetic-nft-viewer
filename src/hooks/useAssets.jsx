import { useGLTF } from '@react-three/drei'

const useAssets = (name) => {
    const { nodes, materials, animations } = useGLTF(`/Models/${name}.glb`)
    return { nodes, materials, animations }
}

export default useAssets;
