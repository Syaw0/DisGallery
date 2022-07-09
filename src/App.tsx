import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';

function App() {

  globalStyle()

  return (
    <Flex id='wrapper' data-testid="app" css={{

    }}>

    </Flex>
  );
}

export default App;
