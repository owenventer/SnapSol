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
      <Screen>
        <Text>
          Welcome, {publicKey.toString()}
        </Text>
        <Section title="Clocking in">
            <ClockInButton signInType="Clock In" typeVerb="clocked in"></ClockInButton>

            </Section>
      </Screen>
    );
  
}
