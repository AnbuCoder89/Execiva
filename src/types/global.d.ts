declare module '*.glb' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

// Add types for the GLTF model
interface GLTF {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material & {
      map?: THREE.Texture;
    };
  };
}

declare module 'three-stdlib' {
  export function useGLTF(path: string): GLTF;
  export function useTexture(path: string): THREE.Texture;
}
