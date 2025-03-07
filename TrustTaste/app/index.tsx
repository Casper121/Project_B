import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { TabsController } from './tabs/TabsController';

export default () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <TabsController />
    </ApplicationProvider>
  );
};