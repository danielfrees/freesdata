import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function TabsComponent() {
  const tabTitles = ['Tab 1', 'Tab 2', 'Tab 3'];
  const tabContent = ['Content 1', 'Content 2', 'Content 3'];

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