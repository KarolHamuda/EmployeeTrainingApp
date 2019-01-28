import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { DeviceProvider } from './components/ContextProvider/DeviceProvider';
import { MyProvider } from './components/ContextProvider/MyProvider';
import  Checklist  from './components/Site/Checklist';
import { Site } from './components/Site/Site';
import { Device } from './components/Device/Device';
import DeviceChecklist from './components/Device/DeviceChecklist';

export class App extends Component {
  displayName = App.name

  render() {
    return (
        <MyProvider>
          <DeviceProvider>
          <Layout>
            <Route exact path='/Site/:id' component={Site} />
            <Route exact path='/' component={Site} />
            <Route exact path ='/Device/:id' component={Device} />
            <Route path='/Checklist' component={Checklist} />
            <Route path='/DeviceChecklist' component={DeviceChecklist} />
          </Layout>
          </DeviceProvider>
        </MyProvider>
    );
  }
}
