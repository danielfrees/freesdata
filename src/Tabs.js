import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import logo from './art/freesdata_logo.svg';
import RSSParser from 'rss-parser';

function TabsComponent() {
  const [articles, setArticles] = useState([]);

  const tabTitles = ['Home', 'Articles', 'About'];

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

  useEffect(() => {
    const parser = new RSSParser();
    const feedUrl = 'https://medium.com/feed/@danielfrees';
    parser.parseURL(feedUrl).then((feed) => {
      setArticles(feed.items);
    });
  }, []);

  return (
    <Tabs>
      <TabList>
        {tabTitles.map((title, index) => (
          <Tab key={index}>{title}</Tab>
        ))}
      </TabList>
      <TabPanel>{mainTab()}</TabPanel>
      <TabPanel>
        <ul>
          {articles.map((article) => (
            <li key={article.guid}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
            </li>
          ))}
        </ul>
      </TabPanel>
      <TabPanel>Hi, I'm Paul!</TabPanel>
    </Tabs>
  );
}

export default TabsComponent;
