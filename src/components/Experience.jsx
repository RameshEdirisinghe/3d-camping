import { Environment, OrbitControls } from "@react-three/drei";
import { Text } from '@react-three/drei';
import { Camping } from "./Camping";


export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Text font={"fonts/Poppins-Black.ttf"}
        position-x={-1.3}
        position-y={-0.5}
        position-z={1}
        lineHeight={0.8}
        textAlign="center"
        // rotation-y={degToRad(30)}
        anchorY={"bottom"}>
         WHY  I  LOVE{"\n"}CAMPING
        <meshBasicMaterial color= "white"/>
      </Text>
      <Camping />
      <Environment preset="sunset" />
    </>
  );
};
