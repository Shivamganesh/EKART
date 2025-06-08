import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {
  Viro360Image,
  Viro3DObject,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroOmniLight,
  ViroQuad,
  ViroSpotLight,
} from '@reactvision/react-viro';

const ARWorldScene = () => {
  return (
    <ViroARScene>
      <Viro360Image source={require('@assets/images/360.jpg')} />
      <ViroAmbientLight color="#fffff" />


      <Viro3DObject
        source={require('@assets/3dmodels/blackpanther/object_bpanther_anim.vrx')}
        resources={[
          require('@assets/3dmodels/blackpanther/object_bpanther_Base_Color.png'),
          require('@assets/3dmodels/blackpanther/object_bpanther_Metallic.png'),
          require('@assets/3dmodels/blackpanther/object_bpanther_Mixed_AO.png'),
          require('@assets/3dmodels/blackpanther/object_bpanther_Normal_OpenGL.png'),
          require('@assets/3dmodels/blackpanther/object_bpanther_Roughness.png'),
        ]}
        position={[0,-1,-5]}
        rotation={[0,0,0]}
        scale={[0.5,0.5,.5]}
        type='VRX'
        dragType='FixedToWorld'
        onDrag={() =>{

        }

        }
      />

      <ViroOmniLight
      intensity={300}
      position={[10,-10,1]}
      color={"#FFFFFF"}
      attenuationStartDistance={20}
      attenuationEndDistance={30} />

      <ViroSpotLight
      position={[0,8,-2]}
      color="#ffffff"
      direction={[0,-1,0]}
      intensity={50}
      attenuationStartDistance={5}
      attenuationEndDistance={10}
      innerAngle={5}
      outerAngle={20}
      castsShadow={true} />

      <ViroQuad 
      rotation={[-90, 0, 0]}
      position={[0, -1.6, 0 ]}
      width={5}
      height={5}
      arShadowReceiver={true} />


    </ViroARScene>
  );
};

const ARViewer: FC = () => {
  return (
    <>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: ARWorldScene,
        }}
        removeClippedSubviews
        renderToHardwareTextureAndroid
        style={styles.f1}
      />
    </>
  );
};

const styles = StyleSheet.create({
  f1: {
    flex:1,
  },
});

export default ARViewer;
