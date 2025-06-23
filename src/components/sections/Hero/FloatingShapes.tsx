import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Box, Sphere, Torus } from '@react-three/drei';
import { useTheme } from '@contexts/ThemeContext';

function Shape({
  position,
  children,
}: {
  position: [number, number, number];
  children: React.ReactNode;
}) {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={1}
      floatingRange={[-0.5, 0.5]}
    >
      <group position={position}>{children}</group>
    </Float>
  );
}

export default function FloatingShapes() {
  const { resolvedTheme } = useTheme();
  const color = resolvedTheme === 'dark' ? '#3b82f6' : '#2563eb';

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Shape position={[-3, 2, -2]}>
          <Box args={[1, 1, 1]}>
            <meshStandardMaterial
              color={color}
              opacity={0.1}
              transparent
              wireframe
            />
          </Box>
        </Shape>

        <Shape position={[3, -1, -2]}>
          <Sphere args={[0.8, 32, 32]}>
            <meshStandardMaterial
              color={color}
              opacity={0.1}
              transparent
              wireframe
            />
          </Sphere>
        </Shape>

        <Shape position={[0, 1, -3]}>
          <Torus args={[1, 0.3, 16, 100]}>
            <meshStandardMaterial
              color={color}
              opacity={0.1}
              transparent
              wireframe
            />
          </Torus>
        </Shape>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
