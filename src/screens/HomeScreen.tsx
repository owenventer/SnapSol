import { Text, FlatList ,Button} from "react-native";
import { useState, useEffect } from "react";
import tw from "twrnc";
import nacl from "tweetnacl";
import { Screen } from "../components/Screen";
import { Section } from "../components/Section";
import { useDidLaunch, usePublicKey } from "../hooks/xnft-hooks";
import {PublicKey} from "@solana/web3.js";
import { ClockInButton } from "../components/ClockInButton";



export function HomeScreen() {
  
  const publicKey=usePublicKey();

  /* USE FOR WHEN YOU WANT TO GET USERNAME, USE FROM SERVER
  let username  = ''
  getUsername()
  async function getUsername() {
    let x = await fetch('https://xnft-api-server.fly.dev/v1/users/fromPubkey?publicKey=FMX4YZ6o1ckX4x7X2DZ2ghxwcFy6764CJKUPNkChv7tj&blockchain=solana');
    let y = await x?.text();
    console.log(y);
    username=y;
  }
  */
  
 
    
  //need to use usedidlaunch???
  return(
        <iframe
                 width="100%" 
                height="100%" 
         // src="https://app.solanapay.com/new?label=Solana+Pay&recipient=9AihNo84zvCbJNPH6aceCa3SuGDCJZrRuJ3XR1SypZ5n"
         src="https://pixelbands.io"
    />
      
    );
  
}
