import { useEffect, useState } from "react";
import "./App.css";
import abi from "./contract/chai.json";
import { ethers } from "ethers";
import { BrowserProvider } from "ethers";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setaccount] = useState("not connected");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = '0x00bd8301af00e4a140d2491070c5292ac23b10b7';
      const contractAbi = abi.abi;

      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
          );
          console.log('contract', contract);
          console.log('state', state);

          setaccount(account);
          setState({ provider, signer, contract });
        }
        else {
          alert("please install metamask")
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet()


  }, []);
  return <div className="App">
    eth
  </div>;
}

export default App;
