import { useState } from 'react'
import SendbirdApp from "@sendbird/uikit-react/App";

import "@sendbird/uikit-react/dist/index.css";
import '../App.css'

function Test() {
  return (
    <div className="App">
        <SendbirdApp
            // Add the two lines below.
            appId={"36E86D9D-46C3-4330-85D5-19FCA7F835BF"}   // Specify your Sendbird application ID.
            userId={"2"}        // Specify your user ID.
        />
    </div>
);
}

export default Test
