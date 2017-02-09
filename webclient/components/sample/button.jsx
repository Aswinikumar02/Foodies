import React from 'react';
import {Button} from 'semantic-ui-react';

class Buttoncomp extends React.Component{
  constructor() {
      super();
  }
  render () {
        return (
     <Button onClick={this.onClick} size='large' primary>{this.props.value}</Button>
   );
    }
}
module.exports = Buttoncomp;
