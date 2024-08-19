import React from 'react';
import { standardTheme } from './components/theme_provider.ts';
import Bubble from './components/bubble.tsx';
const App = () => {
    return <Bubble theme={standardTheme}
                   margin='0px'
                   borderRadius='5px'
                   padding='5px'/>;
}

export default App;