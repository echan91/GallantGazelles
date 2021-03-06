import React, { Component } from 'react';
import UserComments from './UserComments.jsx';
import { Container, Divider, Grid, Header, Image, Item, Menu, Segment } from 'semantic-ui-react';

export default class userProfile extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'comments' };

    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Segment basic>
        <Container text textAlign='center'>
          <Segment color='red' padded='very' piled>
            <Item>
              <Item.Image size='small' shape='circular' src='http://react.semantic-ui.com/assets/images/wireframe/image.png' />
              <Divider hidden />
              <Item.Content>
                <Item.Header as='h2'>Craig Rodrigues</Item.Header>
                <Item.Meta>
                  <p><span className='occupation'>Software Developer</span> | <span className='location'>Atlanta, GA</span></p>
                </Item.Meta>
                <Divider hidden />
                <Item.Description><p>Student @HackReactor SF. Learning to code day by day. My blog has all my progress! I follow interesting and awesome people.</p></Item.Description>
              </Item.Content>
            </Item>
          </Segment>
        </Container>

        <Segment basic textAlign='center'>
          <Menu compact pointing>
            <Menu.Item name='comments' active={activeItem === 'comments'} onClick={this.handleItemClick} />
            <Menu.Item name='portfolio' active={activeItem === 'portfolio'} onClick={this.handleItemClick} />
            <Menu.Item name='following' active={activeItem === 'following'} onClick={this.handleItemClick} />
            <Menu.Item name='favorites' active={activeItem === 'favorites'} onClick={this.handleItemClick} />
          </Menu>
        </Segment>

        <Segment padded>
          { this.state.activeItem === 'comments' ? <UserComments /> : null }
        </Segment>

      </Segment>

    )
  }
}