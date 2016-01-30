import '../scss/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello';

const App = React.createClass({
  render() {
    return (
      <div>
        <Hello name='Lyndsey' />
      </div>
    )
  }
});

ReactDOM.render(<App />, document.querySelector('#app'));
