// Link.react.js
import * as React from 'react';

enum State {
  HOVERED = 0,
  NORMAL = 1,
};

interface LinkProps{
  name: string;
  link: string;
}

interface LinkState{
  status: State;
}

export default class Link extends React.Component<LinkProps, LinkState> {
    
  static defaultProps: LinkProps = {
    name: "Placeholder link name",
    link: "#"
  };
  
  state: LinkState = {
    status: State.NORMAL
  };

  render() {
    return (<a href={this.props.link}>{this.props.name}</a>);
  }
} 

