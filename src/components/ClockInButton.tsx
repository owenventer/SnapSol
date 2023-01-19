import { ReactNode } from "react";
import { View, Text, StyleSheet,Button } from "react-native";
import { useDidLaunch, usePublicKey } from "../hooks/xnft-hooks";
import { Screen } from "./Screen";
import nacl from "tweetnacl"


type Props = {
  signInType:string,
  typeVerb:string,
};

export function ClockInButton({signInType,typeVerb}:Props) {
  
    const publicKey=usePublicKey();
  async function onClickSign() {
    const date= new Date();
         // Encode anything as bytes
         const message = new TextEncoder().encode(typeVerb+" on "+date.toLocaleDateString()+" at "+date.toLocaleTimeString());
         // Sign the bytes using the wallet
         const signature = await window.xnft.solana.signMessage(message);
    
         // Verify that the bytes were signed using the private key that matches the known public key
        
        const result = nacl.sign.detached.verify(
          message,
          signature,
          publicKey?.toBytes(),
        );
         console.log("verifiedEmployee:",result);
        if(!result){ throw new Error('Invalid signature!')}else{
         console.log(publicKey+" "+typeVerb+" on "+date.toLocaleDateString()+" at "+date.toLocaleTimeString());
        };
  } 
  return (
    <Button title={signInType} onPress={onClickSign}></Button>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    marginBottom: 200,
    backgroundColor:"white",
    height:"100%",
    
  },
  title: {
    textAlign: "center",
    color:"black",
  },
  example: {
    marginTop: 50,
  },
  center:{
    margin: "auto",
    width: "50%",

    padding: "10px",
    backgroundColor:"white",
    
  },
});
