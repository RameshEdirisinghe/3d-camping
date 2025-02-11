import { OrbitControls } from "@react-three/drei";
import { Text } from '@react-three/drei';


export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Text font={"fonts/Poppins-Black.ttf"}>
         MY CAMPING {"\n"}               LIFE
        <meshBasicMaterial color= "white"/>
      </Text>
    </>
  );
};
