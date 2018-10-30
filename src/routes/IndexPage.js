import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Spin } from 'antd';
import { func } from 'prop-types';

class IndexPage extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var a = 1000;
    (function() {
      console.log(`one${a}`);
      let a = 50010;
      console.log(`two${a}`);
      return function(m) {
        console.log(`three${m}`);
        console.log(`four${a}`);
      }
    })(200);
  }

  render() {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
      </div>
    );
  }
}

// function IndexPage() {
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
//         <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
//       </ul>
//     </div>
//   );
// }

IndexPage.propTypes = {
};

export default connect()(IndexPage);
