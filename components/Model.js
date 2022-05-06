import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import styles from "../styles/model.module.css"
import { useState, useRef, useEffect } from "react";

function ModelMesh(props) {
    const ref = useRef();

    const [hover, setHover] = useState(false);

    useFrame(() => {
        if(ref.current) {
            ref.current.rotation.x += 0.001;
            ref.current.rotation.z += 0.001;
        }
    });
    
    return (
        <mesh 
            ref={ref}
            rotation={[90, 0, 20]}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <OrbitControls enableZoom={false}/>
            <icosahedronBufferGeometry attach="geometry" args={[2, 0]}/>
            <meshNormalMaterial attach='material'/>
        </mesh>
    )
}
export default function Model(props) {
    return (
        <div className={styles.parent}>
            <Canvas className={styles.canvas}>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <ModelMesh/>
            </Canvas>
        </div>
    )
}