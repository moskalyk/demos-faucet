import React, {useState} from 'react';
import {useTheme} from '@0xsequence/design-system'
import { useOpenConnectModal } from '@0xsequence/kit';

import './App.css'
import {
  useDisconnect,
  useAccount,
} from 'wagmi';

import {Button, Spinner, Box } from '@0xsequence/design-system'

const App = () => {
  const [isMinting, setIsMinting] = useState(false)
  const { setOpenConnectModal } = useOpenConnectModal();

  const { isConnected, address } = useAccount();
  const { setTheme } = useTheme()
  const { disconnect } = useDisconnect();

  setTheme('light')
  const onClick = () => {
    setOpenConnectModal(true);
    console.log(document.getElementById('container'))
  };

  const mint = async () => {
    console.log('minting')
    const amount = 100; // or whatever your amount is
    setIsMinting(true)
    // Create the fetch request
    const res = await fetch('https://tiny-rice-1049.tpin.workers.dev', {
      method: 'POST', // Specify the method
      headers: {
        'Content-Type': 'application/json', // Specify the content type as JSON
      },
      body: JSON.stringify({
        address: address,
        amount: amount,
      }), // Convert the JavaScript object to a JSON string
    })

    console.log(await res.text())
    setIsMinting(false)

    // .then(response => response.json()) // Parse the JSON response
    // .then(data => {
    //   console.log('Success:', data); // Handle success
    // })
    // .catch((error) => {
    //   console.error('Error:', error); // Handle errors
    // });
  }

  return(
      <div className='App'>
        <div className="rotating-coin">
          <p>꩜</p>
        </div>
        
<div className="main flex" id="m">
  <div className="keyboard flex" id="k">
    <div className="screen flex" id="s"></div>
    <div className="keyboard__front face"></div>
    <div className="keyboard__back face"></div>
    <div className="keyboard__right face"></div>
    <div className="keyboard__left face"></div>
    <div className="keyboard__top face">
      <div className="keys">
        <div className="key flex">
          <div className="key__front face face--key-b3"></div>
          <div className="key__back face face--key-b1"></div>
          <div className="key__right face face--key-b1"></div>
          <div className="key__left face face--key-b2"></div>
          <div className="key__top face face--key-b1"></div>
          <div className="key__bottom face face--key-b2"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key key--w2 flex">
          <div className="key__front key__front--w2 face face--key-b3"></div>
          <div className="key__back key__back--w2 face face--key-b1"></div>
          <div className="key__right key__right--w2 face face--key-b1"></div>
          <div className="key__left key__left--w2 face face--key-b2"></div>
          <div className="key__top key__top--w2 face face--key-b1"></div>
          <div className="key__bottom key__bottom--w2 face face--key-b2"></div>
        </div>
      </div>
      <div className="keys">
        <div className="key key--w2 flex">
          <div className="key__front key__front--w2 face face--key-b3"></div>
          <div className="key__back key__back--w2 face face--key-b1"></div>
          <div className="key__right key__right--w2 face face--key-b1"></div>
          <div className="key__left key__left--w2 face face--key-b2"></div>
          <div className="key__top key__top--w2 face face--key-b1"></div>
          <div className="key__bottom key__bottom--w2 face face--key-b2"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face face--key-b3"></div>
          <div className="key__back face face--key-b1"></div>
          <div className="key__right face face--key-b1"></div>
          <div className="key__left face face--key-b2"></div>
          <div className="key__top face face--key-b1"></div>
          <div className="key__bottom face face--key-b2"></div>
        </div>
      </div>
      <div className="keys">
        <div className="key key--w3 flex">
          <div className="key__front key__front--w3 face face--key-b3"></div>
          <div className="key__back key__back--w3 face face--key-b1"></div>
          <div className="key__right key__right--w3 face face--key-b1"></div>
          <div className="key__left key__left--w3 face face--key-b2"></div>
          <div className="key__top key__top--w3 face face--key-b1"></div>
          <div className="key__bottom key__bottom--w3 face face--key-b2"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key key--w2 flex">
          <div className="key__front key__front--w2 face face--key-o3"></div>
          <div className="key__back key__back--w2 face face--key-o1"></div>
          <div className="key__right key__right--w2 face face--key-o1"></div>
          <div className="key__left key__left--w2 face face--key-o2"></div>
          <div className="key__top key__top--w2 face face--key-o1"></div>
          <div className="key__bottom key__bottom--w2 face face--key-o2"></div>
        </div>
      </div>
      <div className="keys">
        <div className="key key--w2 flex">
          <div className="key__front key__front--w2 face face--key-b3"></div>
          <div className="key__back key__back--w2 face face--key-b1"></div>
          <div className="key__right key__right--w2 face face--key-b1"></div>
          <div className="key__left key__left--w2 face face--key-b2"></div>
          <div className="key__top key__top--w2 face face--key-b1"></div>
          <div className="key__bottom key__bottom--w2 face face--key-b2"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key flex">
          <div className="key__front face"></div>
          <div className="key__back face"></div>
          <div className="key__right face"></div>
          <div className="key__left face"></div>
          <div className="key__top face"></div>
          <div className="key__bottom face"></div>
        </div>
        <div className="key key--w3 flex">
          <div className="key__front key__front--w3 face face--key-b3"></div>
          <div className="key__back key__back--w3 face face--key-b1"></div>
          <div className="key__right key__right--w3 face face--key-b1"></div>
          <div className="key__left key__left--w3 face face--key-b2"></div>
          <div className="key__top key__top--w3 face face--key-b1"></div>
          <div className="key__bottom key__bottom--w3 face face--key-b2"></div>
        </div>
      </div>
      <div className="keys">
        <div className="key flex">
          <div className="key__front face face--key-b3"></div>
          <div className="key__back face face--key-b1"></div>
          <div className="key__right face face--key-b1"></div>
          <div className="key__left face face--key-b2"></div>
          <div className="key__top face face--key-b1"></div>
          <div className="key__bottom face face--key-b2"></div>
        </div>
        <div className="key flex">
          <div className="key__front face face--key-o3"></div>
          <div className="key__back face face--key-o1"></div>
          <div className="key__right face face--key-o1"></div>
          <div className="key__left face face--key-o2"></div>
          <div className="key__top face face--key-o1"></div>
          <div className="key__bottom face face--key-o2"></div>
        </div>
        <div className="key flex">
          <div className="key__front face face--key-b3"></div>
          <div className="key__back face face--key-b1"></div>
          <div className="key__right face face--key-b1"></div>
          <div className="key__left face face--key-b2"></div>
          <div className="key__top face face--key-b1"></div>
          <div className="key__bottom face face--key-b2"></div>
        </div>
        <div className="key flex">
          <div className="key__front face face--key-b3"></div>
          <div className="key__back face face--key-b1"></div>
          <div className="key__right face face--key-b1"></div>
          <div className="key__left face face--key-b2"></div>
          <div className="key__top face face--key-b1"></div>
          <div className="key__bottom face face--key-b2"></div>
        </div>
        <div className="key key--w6 flex">
          <div className="key__front key__front--w6 face"></div>
          <div className="key__back key__back--w6 face"></div>
          <div className="key__right key__right--w6 face"></div>
          <div className="key__left key__left--w6 face"></div>
          <div className="key__top key__top--w6 face"></div>
          <div className="key__bottom key__bottom--w6 face">       </div>
        </div>
        <div className="key flex">
          <div className="key__front face face--key-b3"></div>
          <div className="key__back face face--key-b1"></div>
          <div className="key__right face face--key-b1"></div>
          <div className="key__left face face--key-b2"></div>
          <div className="key__top face face--key-b1"></div>
          <div className="key__bottom face face--key-b2"></div>
        </div>
        <div className="key flex">
          <div className="key__front face face--key-b3"></div>
          <div className="key__back face face--key-b1"></div>
          <div className="key__right face face--key-b1"></div>
          <div className="key__left face face--key-b2"></div>
          <div className="key__top face face--key-b1"></div>
          <div className="key__bottom face face--key-b2"></div>
        </div>
        <div className="key flex">
          <div className="key__front face face--key-b3"></div>
          <div className="key__back face face--key-b1"></div>
          <div className="key__right face face--key-b1"></div>
          <div className="key__left face face--key-b2"></div>
          <div className="key__top face face--key-b1"></div>
          <div className="key__bottom face face--key-b2"></div>
        </div>
        <div className="key flex">
          <div className="key__front face face--key-b3"></div>
          <div className="key__back face face--key-b1"></div>
          <div className="key__right face face--key-b1"></div>
          <div className="key__left face face--key-b2"></div>
          <div className="key__top face face--key-b1"></div>
          <div className="key__bottom face face--key-b2"></div>
        </div>
        <div className="key flex">
          <div className="key__front face face--key-b3"></div>
          <div className="key__back face face--key-b1"></div>
          <div className="key__right face face--key-b1"></div>
          <div className="key__left face face--key-b2"></div>
          <div className="key__top face face--key-b1"></div>
          <div className="key__bottom face face--key-b2"></div>
        </div>
      </div>
    </div>
    <div className="keyboard__bottom face"></div>
  </div>
</div>
        {isConnected && (
          <div
            style={{ position: 'fixed', top: '30px', right: '30px', cursor: 'pointer'}}
            onClick={() => disconnect()}
          >
            Sign Out
          </div>
        )}
        <br/>
        {!isConnected ? (
          <div
            style={{ cursor: 'pointer', position: 'fixed', bottom: '20vh' }}
            onClick={() => onClick()}
          >
            Click to login
          </div>
        ) : isMinting ? <div style={{ position: 'fixed', bottom: '20vh' }}><Box><Spinner/></Box> </div>: <Button label="claim" height="9" onClick={() => mint()}/>}
        <br/>
        <br/>
        <br/>
      </div>
    );
}

export default App;
