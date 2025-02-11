import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Text font ={"fonts/Poppins-Black.ttf"} >
        Camping{"\n"} Life
        <meshBasicMaterial color="white" />
      </Text>
    </>
  );
};
