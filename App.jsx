import React from "react";
import { StatusBar } from 'expo-status-bar';

import Navigator from "./src/routes/Navigator";

const App = () => {
  return (
    <>
      <StatusBar style='light' backgroundColor='#003DCB' translucent={false} />
      <Navigator />
    </>
  );
};

export default App;
