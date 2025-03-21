import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import  TabsController from './tabs/TabsController';
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import StartPage from './onboarding/StartPage';

export default () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <StartPage/>
        {/**<TabsController /> */}
      </ApplicationProvider>
    </>
  );
};