import { Button, Image, Text } from "react-native";
import * as Linking from "expo-linking";
import { atom, useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { Section } from "../components/Section";
import { Screen } from "../components/Screen";
import React from "react";
import QRCode from "react-qr-code";
import { useDidLaunch, usePublicKey } from "../hooks/xnft-hooks";

const testAtom = atom<"native" | "bright">({
  key: "testAtom",
  default: "native",
});

function LearnMoreLink({ url }: { url: string }) {
  return <Text onPress={() => Linking.openURL(url)}>Learn more</Text>;
}

export function ExamplesScreens() {
  const publicKey=usePublicKey();
  const [future, setFuture] = useRecoilState(testAtom);
  const [amount, setValue] = useState("0.1");



  const qrValue="solana:"+publicKey.toString()+"?amount="+amount+"&&label=SnapSol+Payment"

  return (
    <Screen>
      <Section title="Cost">
      <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Amount to pay"
        />

      </Section>
         <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={qrValue}
    viewBox={`0 0 256 256`}
    />
    </Screen>
  );
}
