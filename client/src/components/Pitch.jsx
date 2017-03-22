import React from 'react';
import Video from './Video.jsx';
import Comment from './Comment.jsx';
import { Button, Container, Divider, Grid, Header, Icon, Image, Item, Label, Segment, Statistic } from 'semantic-ui-react';

export default () => (
  <Segment basic>
    <Video />
    <Container text>
      <Grid padded columns={2}>
        <Grid.Column width={5}>
          <Image centered size='small' src='https://ph-files.imgix.net/8a2b7acf-d24d-46f3-9060-723db65625a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop&dpr=2' />
          <Segment basic textAlign='center'>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as='h1'><Icon color='green' name='check' />1609 Votes</Item.Header>
              </Item.Content>
            </Item>
            <Item>
              <Button icon size='big'><Icon name='arrow up' /></Button>
              <Button icon size='big'><Icon name='arrow down' /></Button>
            </Item>
          </Item.Group>
          </Segment>
        </Grid.Column>
        <Grid.Column width={11}>
          <Header as='h1'>
            Shift
            <Header.Subheader>
              Switch between Gmail accounts like a boss
            </Header.Subheader>
          </Header>
          <p>Spicy jalapeno bacon ipsum dolor amet jowl cow ribeye corned beef. Pastrami tongue meatloaf chuck, bresaola pig strip steak andouille corned beef kielbasa brisket.</p>
          <p>Spicy jalapeno bacon ipsum dolor amet jowl cow ribeye corned beef. Pastrami tongue meatloaf chuck, bresaola pig strip steak andouille corned beef kielbasa brisket.</p>
          <p><Label>Tech</Label><Label>iPhone</Label></p>
        </Grid.Column>
      </Grid>
    </Container>

    <Comment />

  </Segment>
)