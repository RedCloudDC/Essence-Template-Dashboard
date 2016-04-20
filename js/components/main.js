import React from 'react';
import ClassNames from 'classnames';
import DashboardHeader from '../components/header'

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem} from 'react-essence';

class DashboardMain extends React.Component {

    render() {
        return (
          <Block>
              <Block classes={'e-container'}>
                <Block classes={'dashboard-main e-background-white'}>
                  <DashboardHeader />
                </Block>
              </Block>
          </Block>
        );
    }
}

module.exports = DashboardMain;