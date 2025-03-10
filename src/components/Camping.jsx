import { Html, useGLTF } from "@react-three/drei";
import { useAtom } from "jotai";
import React from "react";
import { degToRad } from "three/src/math/MathUtils";
import { currentPageAtom } from "./UI";
// import tailwindcss from '@tailwindcss/vite'

const OverlayItem = ({
  className = "",
  title,
  description,
  price,
  bgColor,
  ...props
}) =>{
  const [currentPage] = useAtom(currentPageAtom);
  return (
    <Html
      transform
      distanceFactor={1.2}
      center
      className={`w-48 rounded-md overflow-hidden ${
        currentPage === "store" ? "" : "opacity-0"
      } transition-opacity duration-1000 ${className}`}
      {...props}
    >
      <div className="bg-white bg-opacity-50 backdrop-blur-lg text-xs p-2 w-full">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <button
        className={`${bgColor} hover:bg-opacity-50 transition-colors duration-500 px-4 py-2 font-bold text-white w-full text-xs`}
      >
        Add to cart ${price}
      </button>
    </Html>
  );
};

export function Camping( html, ...props ) {
  const { nodes, materials } = useGLTF("/models/Swamp Island.glb")
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh name="group2136008734" geometry={nodes.group2136008734.geometry} material={materials.mat11} />
        <mesh name="group1297782163" geometry={nodes.group1297782163.geometry} material={materials.mat20} />
        <mesh name="group853010250" geometry={nodes.group853010250.geometry} material={materials.mat20} />
        <mesh name="group1491434214" geometry={nodes.group1491434214.geometry} material={materials.mat20} />
        <mesh name="group880033640" geometry={nodes.group880033640.geometry} material={materials.mat20} />
        <mesh name="group1242887192" geometry={nodes.group1242887192.geometry} material={materials.mat20} />
        <mesh name="group603141852" geometry={nodes.group603141852.geometry} material={materials.mat20} />
        <mesh name="group158387430" geometry={nodes.group158387430.geometry} material={materials.mat10} />
        <mesh name="group829808155" geometry={nodes.group829808155.geometry} material={materials.mat10} />
        <mesh name="group1050242619" geometry={nodes.group1050242619.geometry} material={materials.mat10} />
        <mesh name="group914355225" geometry={nodes.group914355225.geometry} material={materials.mat10} />
        <mesh name="group2127888576" geometry={nodes.group2127888576.geometry} material={materials.mat10} />
        <mesh name="group110025996" geometry={nodes.group110025996.geometry} material={materials.mat10} />
        <mesh name="group79247777" geometry={nodes.group79247777.geometry} material={materials.mat20} />
        <mesh name="group1996960513" geometry={nodes.group1996960513.geometry} material={materials.mat10} />
        <mesh name="group2041258262" geometry={nodes.group2041258262.geometry} material={materials.mat10} />
        <mesh name="group1636920945" geometry={nodes.group1636920945.geometry} material={materials.mat10} />
        <mesh name="group254298783" geometry={nodes.group254298783.geometry} material={materials.mat10} />
        <mesh name="group129749433" geometry={nodes.group129749433.geometry} material={materials.mat10} />
        <mesh name="group671896262" geometry={nodes.group671896262.geometry} material={materials.mat10} />
        <mesh name="group1747362787" geometry={nodes.group1747362787.geometry} material={materials.mat10} />
        <mesh name="group1728000963" geometry={nodes.group1728000963.geometry} material={materials.mat10} />
        <mesh name="group1172879567" geometry={nodes.group1172879567.geometry} material={materials.mat10} />
        <mesh name="group93090153" geometry={nodes.group93090153.geometry} material={materials.mat10} />
        <mesh name="group880052796" geometry={nodes.group880052796.geometry} material={materials.mat10} />
        <mesh name="group1461179098" geometry={nodes.group1461179098.geometry} material={materials.mat10} />
        <mesh name="group815898156" geometry={nodes.group815898156.geometry} material={materials.mat10} />
        <mesh name="group576487753" geometry={nodes.group576487753.geometry} material={materials.mat10} />
        <mesh name="group1082366060" geometry={nodes.group1082366060.geometry} material={materials.mat10} />
        <mesh name="group160733601" geometry={nodes.group160733601.geometry} material={materials.mat10} />
        <mesh name="group1277536336" geometry={nodes.group1277536336.geometry} material={materials.mat10} />
        <mesh name="group26026151" geometry={nodes.group26026151.geometry} material={materials.mat10} />
        <mesh name="group570053828" geometry={nodes.group570053828.geometry} material={materials.mat10} />
        <mesh name="group1365504722" geometry={nodes.group1365504722.geometry} material={materials.mat10} />
        <mesh name="group145160911" geometry={nodes.group145160911.geometry} material={materials.mat10} />
        <mesh name="group882103373" geometry={nodes.group882103373.geometry} material={materials.mat10} />
        <mesh name="group2091126180" geometry={nodes.group2091126180.geometry} material={materials.mat10} />
        <mesh name="group915963001" geometry={nodes.group915963001.geometry} material={materials.mat10} />
        <mesh name="group1739923540" geometry={nodes.group1739923540.geometry} material={materials.mat10} />
        <mesh name="group1238356241" geometry={nodes.group1238356241.geometry} material={materials.mat10} />
        <mesh name="group1768964151" geometry={nodes.group1768964151.geometry} material={materials.mat16} />
        <mesh name="group840329547" geometry={nodes.group840329547.geometry} material={materials.mat16} />
        <mesh name="group565166185" geometry={nodes.group565166185.geometry} material={materials.mat22} />
        <mesh name="group421353320" geometry={nodes.group421353320.geometry} material={materials.mat16} />
        <mesh name="group1343099969" geometry={nodes.group1343099969.geometry} material={materials.mat22} />
        <mesh name="group407773421" geometry={nodes.group407773421.geometry} material={materials.mat16} />
        <mesh name="group611773619" geometry={nodes.group611773619.geometry} material={materials.mat16} />
        <mesh name="group2008651517" geometry={nodes.group2008651517.geometry} material={materials.mat22} />
        <mesh name="group1801059036" geometry={nodes.group1801059036.geometry} material={materials.mat16} />
        <mesh name="group1452085031" geometry={nodes.group1452085031.geometry} material={materials.mat20} />
        <mesh name="group2039324517" geometry={nodes.group2039324517.geometry} material={materials.mat23} />
        <mesh name="group1927904574" geometry={nodes.group1927904574.geometry} material={materials.mat20} />
        <mesh name="group1142884108" geometry={nodes.group1142884108.geometry} material={materials.mat20} />
        <mesh name="group1542056423" geometry={nodes.group1542056423.geometry} material={materials.mat20} />
        <mesh name="group221385188" geometry={nodes.group221385188.geometry} material={materials.mat19} />
        <mesh name="group1619217945" geometry={nodes.group1619217945.geometry} material={materials.mat19} />
        <mesh name="group1309998384" geometry={nodes.group1309998384.geometry} material={materials.mat19} />
        <mesh name="group1358386406" geometry={nodes.group1358386406.geometry} material={materials.mat19} />
        <mesh name="group1336970504" geometry={nodes.group1336970504.geometry} material={materials.mat22} />
        <mesh name="group904865602" geometry={nodes.group904865602.geometry} material={materials.mat22} />
        <mesh name="group315252924" geometry={nodes.group315252924.geometry} material={materials.mat22} />
        <mesh name="group384158962" geometry={nodes.group384158962.geometry} material={materials.mat22} />
        <mesh name="group2124268194" geometry={nodes.group2124268194.geometry} material={materials.mat16} />
        <mesh name="group1936895037" geometry={nodes.group1936895037.geometry} material={materials.mat20} />
        <mesh name="group2142730587" geometry={nodes.group2142730587.geometry} material={materials.mat22} />
        <mesh name="group1861072529" geometry={nodes.group1861072529.geometry} material={materials.mat16} />
        <mesh name="group1901209621" geometry={nodes.group1901209621.geometry} material={materials.mat22} />
        <mesh name="group490728633" geometry={nodes.group490728633.geometry} material={materials.mat20} />
        <mesh name="group2025685484" geometry={nodes.group2025685484.geometry} material={materials.mat16} />
        <mesh name="group2054480839" geometry={nodes.group2054480839.geometry} material={materials.mat22} />
        <mesh name="group460493169" geometry={nodes.group460493169.geometry} material={materials.mat22} />
        <mesh name="group530821200" geometry={nodes.group530821200.geometry} material={materials.mat22} />
        <mesh name="group590414051" geometry={nodes.group590414051.geometry} material={materials.mat22} />
        <mesh name="group171120536" geometry={nodes.group171120536.geometry} material={materials.mat22} />
        <group name="group1327080236">
          <mesh name="mesh1327080236" geometry={nodes.mesh1327080236.geometry} material={materials.mat20} />
          <mesh name="mesh1327080236_1" geometry={nodes.mesh1327080236_1.geometry} material={materials.mat11} />
        </group>
        <group name="group1458085261">
          <mesh name="mesh1458085261" geometry={nodes.mesh1458085261.geometry} material={materials.mat11} />
          <mesh name="mesh1458085261_1" geometry={nodes.mesh1458085261_1.geometry} material={materials.mat20} />
        </group>
        <group name="group1174504232">
          <mesh name="mesh1174504232" geometry={nodes.mesh1174504232.geometry} material={materials.mat11} />
          <mesh name="mesh1174504232_1" geometry={nodes.mesh1174504232_1.geometry} material={materials.mat20} />
        </group>
        <group name="group2099061238">
          <mesh name="mesh2099061238" geometry={nodes.mesh2099061238.geometry} material={materials.mat11} />
          <mesh name="mesh2099061238_1" geometry={nodes.mesh2099061238_1.geometry} material={materials.mat20} />
        </group>
        <group name="group1461848927">
          <mesh name="mesh1461848927" geometry={nodes.mesh1461848927.geometry} material={materials.mat11} />
          <mesh name="mesh1461848927_1" geometry={nodes.mesh1461848927_1.geometry} material={materials.mat20} />
        </group>
        <group name="group960311259">
          <mesh name="mesh960311259" geometry={nodes.mesh960311259.geometry} material={materials.mat11} />
          <mesh name="mesh960311259_1" geometry={nodes.mesh960311259_1.geometry} material={materials.mat20} />
        </group>
        <group name="group847447240">
          <mesh name="mesh847447240" geometry={nodes.mesh847447240.geometry} material={materials.mat11} />
          <mesh name="mesh847447240_1" geometry={nodes.mesh847447240_1.geometry} material={materials.mat20} />
        </group>
        <group name="group1052670248">
          <mesh name="mesh1052670248" geometry={nodes.mesh1052670248.geometry} material={materials.mat11} />
          <mesh name="mesh1052670248_1" geometry={nodes.mesh1052670248_1.geometry} material={materials.mat20} />
        </group>
        <group name="group912524470">
          <mesh name="mesh912524470" geometry={nodes.mesh912524470.geometry} material={materials.mat11} />
          <mesh name="mesh912524470_1" geometry={nodes.mesh912524470_1.geometry} material={materials.mat20} />
        </group>
        <group name="group1004619122">
          <mesh name="mesh1004619122" geometry={nodes.mesh1004619122.geometry} material={materials.mat20} />
          <mesh name="mesh1004619122_1" geometry={nodes.mesh1004619122_1.geometry} material={materials.mat11} />
        </group>
        <group name="group1776715167">
          <mesh name="mesh1776715167" geometry={nodes.mesh1776715167.geometry} material={materials.mat20} />
          <mesh name="mesh1776715167_1" geometry={nodes.mesh1776715167_1.geometry} material={materials.mat11} />
        </group>
        <group name="group761897651">
          <mesh name="mesh761897651" geometry={nodes.mesh761897651.geometry} material={materials.mat20} />
          <mesh name="mesh761897651_1" geometry={nodes.mesh761897651_1.geometry} material={materials.mat11} />
        </group>
        <group name="group760265186">
          <mesh name="mesh760265186" geometry={nodes.mesh760265186.geometry} material={materials.mat20} />
          <mesh name="mesh760265186_1" geometry={nodes.mesh760265186_1.geometry} material={materials.mat11} />
        </group>
        <group name="group684750817">
          <mesh name="mesh684750817" geometry={nodes.mesh684750817.geometry} material={materials.mat20} />
          <mesh name="mesh684750817_1" geometry={nodes.mesh684750817_1.geometry} material={materials.mat11} />
        </group>
        <group name="group1420377134">
          <mesh name="mesh1420377134" geometry={nodes.mesh1420377134.geometry} material={materials.mat20} />
          <mesh name="mesh1420377134_1" geometry={nodes.mesh1420377134_1.geometry} material={materials.mat11} />
        </group>
        <group name="group1472950353">
          <mesh name="mesh1472950353" geometry={nodes.mesh1472950353.geometry} material={materials.mat20} />
          <mesh name="mesh1472950353_1" geometry={nodes.mesh1472950353_1.geometry} material={materials.mat11} />
        </group>
        <group name="group2141909856">
          <mesh name="mesh2141909856" geometry={nodes.mesh2141909856.geometry} material={materials.mat9} />
          <mesh name="mesh2141909856_1" geometry={nodes.mesh2141909856_1.geometry} material={materials.mat12} />
          <mesh name="mesh2141909856_2" geometry={nodes.mesh2141909856_2.geometry} material={materials.mat19} />
        </group>
        <group name="group1322395327">
          <mesh name="mesh1322395327" geometry={nodes.mesh1322395327.geometry} material={materials.mat19} />
          <mesh name="mesh1322395327_1" geometry={nodes.mesh1322395327_1.geometry} material={materials.mat12} />
          <mesh name="mesh1322395327_2" geometry={nodes.mesh1322395327_2.geometry} material={materials.mat9} />
        </group>
        <group name="group1612256777">
          <mesh name="mesh1612256777" geometry={nodes.mesh1612256777.geometry} material={materials.mat9} />
          <mesh name="mesh1612256777_1" geometry={nodes.mesh1612256777_1.geometry} material={materials.mat12} />
          <mesh name="mesh1612256777_2" geometry={nodes.mesh1612256777_2.geometry} material={materials.mat19} />
        </group>
        <group name="group2068611164">
          <mesh name="mesh2068611164" geometry={nodes.mesh2068611164.geometry} material={materials.mat19} />
          <mesh name="mesh2068611164_1" geometry={nodes.mesh2068611164_1.geometry} material={materials.mat9} />
          <mesh name="mesh2068611164_2" geometry={nodes.mesh2068611164_2.geometry} material={materials.mat12} />
        </group>
        <group name="group1730975042">
          <mesh name="mesh1730975042" geometry={nodes.mesh1730975042.geometry} material={materials.mat12} />
          <mesh name="mesh1730975042_1" geometry={nodes.mesh1730975042_1.geometry} material={materials.mat9} />
          <mesh name="mesh1730975042_2" geometry={nodes.mesh1730975042_2.geometry} material={materials.mat19} />
        </group>
        <group name="group2032016018">
          <mesh name="mesh2032016018" geometry={nodes.mesh2032016018.geometry} material={materials.mat19} />
          <mesh name="mesh2032016018_1" geometry={nodes.mesh2032016018_1.geometry} material={materials.mat12} />
          <mesh name="mesh2032016018_2" geometry={nodes.mesh2032016018_2.geometry} material={materials.mat9} />
        </group>
        <group name="group778790518">
          <mesh name="mesh778790518" geometry={nodes.mesh778790518.geometry} material={materials.mat9} />
          <mesh name="mesh778790518_1" geometry={nodes.mesh778790518_1.geometry} material={materials.mat12} />
        </group>
        <group name="group1659864640">
          <mesh name="mesh1659864640" geometry={nodes.mesh1659864640.geometry} material={materials.mat12} />
          <mesh name="mesh1659864640_1" geometry={nodes.mesh1659864640_1.geometry} material={materials.mat9} />
          <mesh name="mesh1659864640_2" geometry={nodes.mesh1659864640_2.geometry} material={materials.mat19} />
        </group>
        <group name="group288751779">
          <mesh name="mesh288751779" geometry={nodes.mesh288751779.geometry} material={materials.mat19} />
          <mesh name="mesh288751779_1" geometry={nodes.mesh288751779_1.geometry} material={materials.mat12} />
          <mesh name="mesh288751779_2" geometry={nodes.mesh288751779_2.geometry} material={materials.mat9} />
        </group>
        <group name="group447178081">
          <mesh name="mesh447178081" geometry={nodes.mesh447178081.geometry} material={materials.mat19} />
          <mesh name="mesh447178081_1" geometry={nodes.mesh447178081_1.geometry} material={materials.mat12} />
          <mesh name="mesh447178081_2" geometry={nodes.mesh447178081_2.geometry} material={materials.mat9} />
        </group>
        <group name="group1897236688">
          <mesh name="mesh1897236688" geometry={nodes.mesh1897236688.geometry} material={materials.mat19} />
          <mesh name="mesh1897236688_1" geometry={nodes.mesh1897236688_1.geometry} material={materials.mat9} />
          <mesh name="mesh1897236688_2" geometry={nodes.mesh1897236688_2.geometry} material={materials.mat12} />
        </group>
        <group name="group1545068493">
          <mesh name="mesh1545068493" geometry={nodes.mesh1545068493.geometry} material={materials.mat19} />
          <mesh name="mesh1545068493_1" geometry={nodes.mesh1545068493_1.geometry} material={materials.mat12} />
          <mesh name="mesh1545068493_2" geometry={nodes.mesh1545068493_2.geometry} material={materials.mat9} />
        </group>
        <group name="group1779841807">
          <mesh name="mesh1779841807" geometry={nodes.mesh1779841807.geometry} material={materials.mat19} />
          <mesh name="mesh1779841807_1" geometry={nodes.mesh1779841807_1.geometry} material={materials.mat12} />
          <mesh name="mesh1779841807_2" geometry={nodes.mesh1779841807_2.geometry} material={materials.mat9} />
        </group>
        <group name="group1613855375">
          <mesh name="mesh1613855375" geometry={nodes.mesh1613855375.geometry} material={materials.mat12} />
          <mesh name="mesh1613855375_1" geometry={nodes.mesh1613855375_1.geometry} material={materials.mat9} />
        </group>
        <group name="group919541687">
          <mesh name="mesh919541687" geometry={nodes.mesh919541687.geometry} material={materials.mat9} />
          <mesh name="mesh919541687_1" geometry={nodes.mesh919541687_1.geometry} material={materials.mat19} />
          <mesh name="mesh919541687_2" geometry={nodes.mesh919541687_2.geometry} material={materials.mat12} />
        </group>
        <group name="group2111755826">
          <mesh name="mesh2111755826" geometry={nodes.mesh2111755826.geometry} material={materials.mat9} />
          <mesh name="mesh2111755826_1" geometry={nodes.mesh2111755826_1.geometry} material={materials.mat19} />
          <mesh name="mesh2111755826_2" geometry={nodes.mesh2111755826_2.geometry} material={materials.mat12} />
        </group>
        <group name="group1613210848">
          <mesh name="mesh1613210848" geometry={nodes.mesh1613210848.geometry} material={materials.mat9} />
          <mesh name="mesh1613210848_1" geometry={nodes.mesh1613210848_1.geometry} material={materials.mat12} />
          <mesh name="mesh1613210848_2" geometry={nodes.mesh1613210848_2.geometry} material={materials.mat19} />
        </group>
        <group name="bridge">
          <mesh name="mesh1824730829" geometry={nodes.mesh1824730829.geometry} material={materials.mat19} />
          <mesh name="mesh1824730829_1" geometry={nodes.mesh1824730829_1.geometry} material={materials.mat20} />

          {html && (
            <OverlayItem
              rotation-y={degToRad(20)}
              position-x={-1.4}
              position-z={-0.5}
              position-y={-0.1}
              title={"Tent"}
              description={"2 person tent, rest assured you'll be dry."}
              price={"129.99"}
              bgColor={"bg-yellow-500"}
              className={"transition delay-1000"}
            />
          )}
        </group>
        <mesh name="Bonefire" geometry={nodes.Bonefire.geometry} material={materials.mat22} />
        <mesh name="group1428317787" geometry={nodes.group1428317787.geometry} material={materials.mat22} />
        <mesh name="group1121629105" geometry={nodes.group1121629105.geometry} material={materials.mat22} />
        <mesh name="group1031434764" geometry={nodes.group1031434764.geometry} material={materials.mat13} />
        <mesh name="group845297758" geometry={nodes.group845297758.geometry} material={materials.mat13} />
        <mesh name="group1845677397" geometry={nodes.group1845677397.geometry} material={materials.mat13} />
        <mesh name="group575425656" geometry={nodes.group575425656.geometry} material={materials.mat13} />
        <mesh name="group1579994397" geometry={nodes.group1579994397.geometry} material={materials.mat14} />
        <mesh name="group452827338" geometry={nodes.group452827338.geometry} material={materials.mat14} />
        <mesh name="group806275469" geometry={nodes.group806275469.geometry} material={materials.mat14} />
        <mesh name="group177470422" geometry={nodes.group177470422.geometry} material={materials.mat14} />
        <mesh name="group522174342" geometry={nodes.group522174342.geometry} material={materials.mat14} />
        <mesh name="group983657705" geometry={nodes.group983657705.geometry} material={materials.mat14} />
        <mesh name="group1868357813" geometry={nodes.group1868357813.geometry} material={materials.mat14} />
        <group name="Camp">
          <mesh name="mesh176447540" geometry={nodes.mesh176447540.geometry} material={materials.mat14} />
          <mesh name="mesh176447540_1" geometry={nodes.mesh176447540_1.geometry} material={materials.mat12} />
        </group>
        <group name="group47637801">
          <mesh name="mesh47637801" geometry={nodes.mesh47637801.geometry} material={materials.mat19} />
          <mesh name="mesh47637801_1" geometry={nodes.mesh47637801_1.geometry} material={materials.mat12} />
          <mesh name="mesh47637801_2" geometry={nodes.mesh47637801_2.geometry} material={materials.mat9} />
        </group>
        <group name="group1894250264">
          <mesh name="mesh1894250264" geometry={nodes.mesh1894250264.geometry} material={materials.mat9} />
          <mesh name="mesh1894250264_1" geometry={nodes.mesh1894250264_1.geometry} material={materials.mat19} />
          <mesh name="mesh1894250264_2" geometry={nodes.mesh1894250264_2.geometry} material={materials.mat12} />
        </group>
        <group name="group1567217949">
          <mesh name="mesh1567217949" geometry={nodes.mesh1567217949.geometry} material={materials.mat9} />
          <mesh name="mesh1567217949_1" geometry={nodes.mesh1567217949_1.geometry} material={materials.mat19} />
          <mesh name="mesh1567217949_2" geometry={nodes.mesh1567217949_2.geometry} material={materials.mat12} />
        </group>
        <group name="group2029470574">
          <mesh name="mesh2029470574" geometry={nodes.mesh2029470574.geometry} material={materials.mat9} />
          <mesh name="mesh2029470574_1" geometry={nodes.mesh2029470574_1.geometry} material={materials.mat12} />
        </group>
        <group name="group658148697">
          <mesh name="mesh658148697" geometry={nodes.mesh658148697.geometry} material={materials.mat12} />
          <mesh name="mesh658148697_1" geometry={nodes.mesh658148697_1.geometry} material={materials.mat9} />
          <mesh name="mesh658148697_2" geometry={nodes.mesh658148697_2.geometry} material={materials.mat19} />
        </group>
        <group name="group637660504">
          <mesh name="mesh637660504" geometry={nodes.mesh637660504.geometry} material={materials.mat19} />
          <mesh name="mesh637660504_1" geometry={nodes.mesh637660504_1.geometry} material={materials.mat9} />
          <mesh name="mesh637660504_2" geometry={nodes.mesh637660504_2.geometry} material={materials.mat12} />
        </group>
        <group name="group1962738788">
          <mesh name="mesh1962738788" geometry={nodes.mesh1962738788.geometry} material={materials.mat12} />
          <mesh name="mesh1962738788_1" geometry={nodes.mesh1962738788_1.geometry} material={materials.mat9} />
          <mesh name="mesh1962738788_2" geometry={nodes.mesh1962738788_2.geometry} material={materials.mat19} />
        </group>
        <group name="group794915897">
          <mesh name="mesh794915897" geometry={nodes.mesh794915897.geometry} material={materials.mat9} />
          <mesh name="mesh794915897_1" geometry={nodes.mesh794915897_1.geometry} material={materials.mat12} />
        </group>
        <group name="group569347084">
          <mesh name="mesh569347084" geometry={nodes.mesh569347084.geometry} material={materials.mat12} />
          <mesh name="mesh569347084_1" geometry={nodes.mesh569347084_1.geometry} material={materials.mat19} />
          <mesh name="mesh569347084_2" geometry={nodes.mesh569347084_2.geometry} material={materials.mat9} />
        </group>
        <group name="group519474959">
          <mesh name="mesh519474959" geometry={nodes.mesh519474959.geometry} material={materials.mat12} />
          <mesh name="mesh519474959_1" geometry={nodes.mesh519474959_1.geometry} material={materials.mat19} />
          <mesh name="mesh519474959_2" geometry={nodes.mesh519474959_2.geometry} material={materials.mat9} />
        </group>
        <group name="group78677389">
          <mesh name="mesh78677389" geometry={nodes.mesh78677389.geometry} material={materials.mat12} />
          <mesh name="mesh78677389_1" geometry={nodes.mesh78677389_1.geometry} material={materials.mat19} />
          <mesh name="mesh78677389_2" geometry={nodes.mesh78677389_2.geometry} material={materials.mat9} />
        </group>
        <group name="group1774111551">
          <mesh name="mesh1774111551" geometry={nodes.mesh1774111551.geometry} material={materials.mat8} />
          <mesh name="mesh1774111551_1" geometry={nodes.mesh1774111551_1.geometry} material={materials.mat20} />
        </group>
        <group name="group151683662">
          <mesh name="mesh151683662" geometry={nodes.mesh151683662.geometry} material={materials.mat20} />
          <mesh name="mesh151683662_1" geometry={nodes.mesh151683662_1.geometry} material={materials.mat13} />
        </group>
        <group name="group2130633827">
          <mesh name="mesh2130633827" geometry={nodes.mesh2130633827.geometry} material={materials.mat3} />
          <mesh name="mesh2130633827_1" geometry={nodes.mesh2130633827_1.geometry} material={materials.mat9} />
        </group>
        <group name="group740347895">
          <mesh name="mesh740347895" geometry={nodes.mesh740347895.geometry} material={materials.mat9} />
          <mesh name="mesh740347895_1" geometry={nodes.mesh740347895_1.geometry} material={materials.mat3} />
        </group>
        <group name="group1901253999">
          <mesh name="mesh1901253999" geometry={nodes.mesh1901253999.geometry} material={materials.mat9} />
          <mesh name="mesh1901253999_1" geometry={nodes.mesh1901253999_1.geometry} material={materials.mat3} />
        </group>
        <group name="group363956730">
          <mesh name="mesh363956730" geometry={nodes.mesh363956730.geometry} material={materials.mat3} />
          <mesh name="mesh363956730_1" geometry={nodes.mesh363956730_1.geometry} material={materials.mat9} />
        </group>
        <group name="group2094711981">
          <mesh name="mesh2094711981" geometry={nodes.mesh2094711981.geometry} material={materials.mat3} />
          <mesh name="mesh2094711981_1" geometry={nodes.mesh2094711981_1.geometry} material={materials.mat9} />
        </group>
        <group name="group913185213">
          <mesh name="mesh913185213" geometry={nodes.mesh913185213.geometry} material={materials.mat9} />
          <mesh name="mesh913185213_1" geometry={nodes.mesh913185213_1.geometry} material={materials.mat3} />
        </group>
        <group name="group487098986">
          <mesh name="mesh487098986" geometry={nodes.mesh487098986.geometry} material={materials.mat9} />
          <mesh name="mesh487098986_1" geometry={nodes.mesh487098986_1.geometry} material={materials.mat3} />
        </group>
        <group name="group48834337">
          <mesh name="mesh48834337" geometry={nodes.mesh48834337.geometry} material={materials.mat9} />
          <mesh name="mesh48834337_1" geometry={nodes.mesh48834337_1.geometry} material={materials.mat3} />
        </group>
        <group name="group198384851">
          <mesh name="mesh198384851" geometry={nodes.mesh198384851.geometry} material={materials.mat9} />
          <mesh name="mesh198384851_1" geometry={nodes.mesh198384851_1.geometry} material={materials.mat3} />
        </group>
        <group name="group1913496">
          <mesh name="mesh1913496" geometry={nodes.mesh1913496.geometry} material={materials.mat9} />
          <mesh name="mesh1913496_1" geometry={nodes.mesh1913496_1.geometry} material={materials.mat3} />
        </group>
        <group name="group417366982">
          <mesh name="mesh417366982" geometry={nodes.mesh417366982.geometry} material={materials.mat9} />
          <mesh name="mesh417366982_1" geometry={nodes.mesh417366982_1.geometry} material={materials.mat3} />
        </group>
        <group name="group1404788955">
          <mesh name="mesh1404788955" geometry={nodes.mesh1404788955.geometry} material={materials.mat9} />
          <mesh name="mesh1404788955_1" geometry={nodes.mesh1404788955_1.geometry} material={materials.mat3} />
        </group>
        <group name="group508170044">
          <mesh name="mesh508170044" geometry={nodes.mesh508170044.geometry} material={materials.mat9} />
          <mesh name="mesh508170044_1" geometry={nodes.mesh508170044_1.geometry} material={materials.mat3} />
        </group>
        <group name="group1701987842">
          <mesh name="mesh1701987842" geometry={nodes.mesh1701987842.geometry} material={materials.mat3} />
          <mesh name="mesh1701987842_1" geometry={nodes.mesh1701987842_1.geometry} material={materials.mat9} />
        </group>
        <group name="group1286523878">
          <mesh name="mesh1286523878" geometry={nodes.mesh1286523878.geometry} material={materials.mat9} />
          <mesh name="mesh1286523878_1" geometry={nodes.mesh1286523878_1.geometry} material={materials.mat3} />
        </group>
        <group name="group1967346599">
          <mesh name="mesh1967346599" geometry={nodes.mesh1967346599.geometry} material={materials.mat9} />
          <mesh name="mesh1967346599_1" geometry={nodes.mesh1967346599_1.geometry} material={materials.mat22} />
          <mesh name="mesh1967346599_2" geometry={nodes.mesh1967346599_2.geometry} material={materials.mat3} />
        </group>
        <group name="group1214868813">
          <mesh name="mesh1214868813" geometry={nodes.mesh1214868813.geometry} material={materials.mat3} />
          <mesh name="mesh1214868813_1" geometry={nodes.mesh1214868813_1.geometry} material={materials.mat9} />
        </group>
        <group name="group1403107094">
          <mesh name="mesh1403107094" geometry={nodes.mesh1403107094.geometry} material={materials.mat9} />
          <mesh name="mesh1403107094_1" geometry={nodes.mesh1403107094_1.geometry} material={materials.mat3} />
        </group>
        <group name="group433455963">
          <mesh name="mesh433455963" geometry={nodes.mesh433455963.geometry} material={materials.mat9} />
          <mesh name="mesh433455963_1" geometry={nodes.mesh433455963_1.geometry} material={materials.mat3} />
        </group>
        <group name="group1576524445">
          <mesh name="mesh1576524445" geometry={nodes.mesh1576524445.geometry} material={materials.mat9} />
          <mesh name="mesh1576524445_1" geometry={nodes.mesh1576524445_1.geometry} material={materials.mat3} />
        </group>
        <group name="group691286390">
          <mesh name="mesh691286390" geometry={nodes.mesh691286390.geometry} material={materials.mat9} />
          <mesh name="mesh691286390_1" geometry={nodes.mesh691286390_1.geometry} material={materials.mat3} />
        </group>
        <group name="group1551105044">
          <mesh name="mesh1551105044" geometry={nodes.mesh1551105044.geometry} material={materials.mat9} />
          <mesh name="mesh1551105044_1" geometry={nodes.mesh1551105044_1.geometry} material={materials.mat3} />
        </group>
        <group name="group2097680475">
          <mesh name="mesh2097680475" geometry={nodes.mesh2097680475.geometry} material={materials.mat9} />
          <mesh name="mesh2097680475_1" geometry={nodes.mesh2097680475_1.geometry} material={materials.mat3} />
        </group>
        <group name="group2010240440">
          <mesh name="mesh2010240440" geometry={nodes.mesh2010240440.geometry} material={materials.mat9} />
          <mesh name="mesh2010240440_1" geometry={nodes.mesh2010240440_1.geometry} material={materials.mat3} />
        </group>
        <group name="group2006738021">
          <mesh name="mesh2006738021" geometry={nodes.mesh2006738021.geometry} material={materials.mat9} />
          <mesh name="mesh2006738021_1" geometry={nodes.mesh2006738021_1.geometry} material={materials.mat3} />
        </group>
        <group name="group1953012834">
          <mesh name="mesh1953012834" geometry={nodes.mesh1953012834.geometry} material={materials.mat9} />
          <mesh name="mesh1953012834_1" geometry={nodes.mesh1953012834_1.geometry} material={materials.mat3} />
        </group>
        <group name="group387975593">
          <mesh name="mesh387975593" geometry={nodes.mesh387975593.geometry} material={materials.mat9} />
          <mesh name="mesh387975593_1" geometry={nodes.mesh387975593_1.geometry} material={materials.mat3} />
        </group>
        <group name="group660072925">
          <mesh name="mesh660072925" geometry={nodes.mesh660072925.geometry} material={materials.mat9} />
          <mesh name="mesh660072925_1" geometry={nodes.mesh660072925_1.geometry} material={materials.mat3} />
        </group>
        <mesh name="group1361306454" geometry={nodes.group1361306454.geometry} material={materials.mat20} />
        <mesh name="group1832030168" geometry={nodes.group1832030168.geometry} material={materials.mat19} />
        <mesh name="group1003487641" geometry={nodes.group1003487641.geometry} material={materials.mat19} />
        <mesh name="group588255218" geometry={nodes.group588255218.geometry} material={materials.mat19} />
        <group name="group1929495238">
          <mesh name="mesh1929495238" geometry={nodes.mesh1929495238.geometry} material={materials.mat8} />
          <mesh name="mesh1929495238_1" geometry={nodes.mesh1929495238_1.geometry} material={materials.mat10} />
        </group>
        <group name="group1258849289">
          <mesh name="mesh1258849289" geometry={nodes.mesh1258849289.geometry} material={materials.mat10} />
          <mesh name="mesh1258849289_1" geometry={nodes.mesh1258849289_1.geometry} material={materials.mat8} />
        </group>
        <group name="group1230715741">
          <mesh name="mesh1230715741" geometry={nodes.mesh1230715741.geometry} material={materials.mat8} />
          <mesh name="mesh1230715741_1" geometry={nodes.mesh1230715741_1.geometry} material={materials.mat10} />
        </group>
        <group name="group93944674">
          <mesh name="mesh93944674" geometry={nodes.mesh93944674.geometry} material={materials.mat10} />
          <mesh name="mesh93944674_1" geometry={nodes.mesh93944674_1.geometry} material={materials.mat8} />
        </group>
        <group name="group1945336090">
          <mesh name="mesh1945336090" geometry={nodes.mesh1945336090.geometry} material={materials.mat10} />
          <mesh name="mesh1945336090_1" geometry={nodes.mesh1945336090_1.geometry} material={materials.mat8} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Swamp island.glb')
