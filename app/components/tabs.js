import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const TabExample = () => (
  <Tabs>
    <TabList>
      <Tab><div className="navLink">Superman</div></Tab>
      <Tab><div className="navLink">Thanos</div></Tab>
    </TabList>
    <TabPanel>
      <p className="name">Name: <b>Clark</b></p>
      <p className="address">Address: <b>Kripton</b></p>
      <p className="phone">Phone: <b>12345</b></p>
    </TabPanel>
    <TabPanel>
      <p className="name">Name: <b>Supervillain</b></p>
      <p className="phone">Phone: <b>67890</b></p>
    </TabPanel>
  </Tabs>
);

export default TabExample;