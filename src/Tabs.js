import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import logo from './art/freesdata_logo.svg';

function TabsComponent() {
  const tabTitles = ['Tab 1', 'Tab 2', 'Tab 3'];

  function mainTab() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Daniel Frees' website. 
                His AI minions are currently hard at work building the most beautiful page you've ever seen.
                Beta version will be live 06/01/2023.
            </p>
        </header>
    );
  }
    
  const tabContent = [<div key="mainTab">{mainTab()}</div>, 
                    'Content 2', 
                    'Content 3'];

  return (
    <Tabs>
      <TabList>
        {tabTitles.map((title, index) => (
          <Tab key={index}>{title}</Tab>
        ))}
      </TabList>
      {tabContent.map((content, index) => (
        <TabPanel key={index}>{content}</TabPanel>
      ))}
    </Tabs>
  );
}

export default TabsComponent;
