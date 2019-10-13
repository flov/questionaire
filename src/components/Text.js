import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openEditForm: false
    }
  }
  render() {
    return (
      <div className="flex-row">
        <p>
          example text
        </p>
      </div>
    );
  }
}
export default Text;

