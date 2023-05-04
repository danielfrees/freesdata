import "core-js/stable";
import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import logo from './art/freesdata_logo.svg';
import Blog from "./Components/Blog/Blog";
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import SingleBlog from "./Components/SingleBlog/SingleBlog";
import Layout from "./Components/Menubar/Layout/Layout";
import Footer from "./Components/Footer/Footer";
import Aboutauthor from "./Components/About-Author/Aboutauthor";
import Aboutproject from "./Components/About-project/Aboutproject";


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

  return (
    <Tabs>
      <TabList>
        {tabTitles.map((title, index) => (
          <Tab key={index}>{title}</Tab>
        ))}
      </TabList>
      <TabPanel>{mainTab()}</TabPanel>
      <TabPanel>
        //Pull in the Medium stream renderer
        <HashRouter >
          <Layout />
          <Switch>
            <Route path="/about-author" exact component={Aboutauthor}></Route>
            <Route path="/about-project" exact component={Aboutproject}></Route>
            <Route path="/:id" exact component={SingleBlog}></Route>
            <Route path="/" exact component={Blog}></Route>
          </Switch>
          <Footer />
        </HashRouter>
      </TabPanel>
      <TabPanel>Hi, I'm Paul!</TabPanel>
    </Tabs>
  );
}

export default TabsComponent;
