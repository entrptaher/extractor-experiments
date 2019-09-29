import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)} className="data" style={{ border: "1px solid #ccc" }}>
        {this.state.show || this.props.alwaysShow ? (
          <div>
            Name: <b>{this.props.name}</b><br />
            {this.props.apple && <>Fav: <b class="apple">Apple</b><br /></>}
            {this.props.mango && <>Fav: <b class="mango">Mango</b></>}
          </div>
        ) : "****"}
      </div>
    );
  }
}

export default Toggle;