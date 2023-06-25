//Feito por Isabelli Santiago e Kevin Santiago


import React,{useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View,Image, TouchableOpacity, Animated } from 'react-native';

export default function App() {
    const [offset] = useState(new Animated.ValueXY({x: 0, y: 90}));
    const [opacity] = useState(new Animated.Value(0));

    useEffect(()=> {
      Animated.parallel([
        Animated.spring(offset.y,{
        toValue:0,
        speed: 4,
        bounciness: 30
      }),
      Animated.timing(opacity,{
        toValue: 1,
        duration: 500,      }

      )
    ]).start()
      
    },[])
  return (
  <KeyboardAvoidingView style={styles.background}> 
    
    <View style={styles.containerLogo}>
      <Image
        source={require('./assets/logo.png')}
        style={{ alignSelf: "center",
        width: 108,
        height: 129,  
      }}
      />
    </View>
    <Animated.View 
    style={[
      styles.container,
      {
        opacity: opacity,
        transform:[
          { translateY: offset.y}
        ]
      }
    ]}
    >
      <TextInput
        style={styles.input}
        placeholder='Email'
        autoCorrect={false}
        onChangeText={()=>{}}
      />
    
      <TextInput
        style={styles.input}
        placeholder='Senha'
        autoCorrect={false}
        onChangeText={()=>{}}
      />

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.submitText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRegister}>
        <Text style={styles.submitRegister}>Criar conta gratuita</Text>
      </TouchableOpacity>

    </Animated.View>
  </KeyboardAvoidingView>  
    );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
  containerLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },
  input:{
    backgroundColor: 'white',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit:{
    backgroundColor: "#35AAFF",
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText:{
    color: '#FFF',
    fontSize:18
  },
  btnRegister:{
    marginTop: 10
  },
  registerText:{
    color: '#FFF'
  }
});
