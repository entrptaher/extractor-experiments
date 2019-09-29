import React from 'react';
import Toggle from './toggle'
import Tabs from './tabs'

const Examples = () => (
  <div>
    <h1>Toggle Example</h1>
    <div id="toggle">
      <div className="firstTwo">
        <Toggle name="One" apple/>
        <Toggle name="Two" mango/>
      </div>
      <div className="lastTwo">
        <Toggle name="Three" mango apple/>
        <Toggle name="Four" apple/>
      </div>
    </div>
    <h1>Non-Toggle Example</h1>
    <div id="toggle">
      <div className="firstTwo">
        <Toggle name="One" apple alwaysShow/>
        <Toggle name="Two" mango alwaysShow/>
      </div>
      <div className="lastTwo">
        <Toggle name="Three" mango apple alwaysShow/>
        <Toggle name="Four" apple alwaysShow/>
      </div>
    </div>
    <h1>Tab Example</h1>
    <div id="tabs">
      <Tabs />
    </div>
  </div>
);

export default Examples;