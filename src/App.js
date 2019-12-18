import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Grid,
  Header,
  Divider,
  Search,
  Icon,
  Button,
  Segment,
  Placeholder,
  List,
  Table,
  Menu,
  Label
} from "semantic-ui-react";
function App() {
  return (
    <div>
      <Divider hidden />
      <Container fluid>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Cari Document
                </Header>

                <Search placeholder="Search Document..." />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="file pdf outline" />
                  Tambah Document Baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Grid columns={3} stackable>
          <Grid.Column width={5}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={8}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={3}>
            <h4>Website Terkait</h4>
            <List>
              <List.Item icon="linkify" content={<a href="/">Google</a>} />
              <List.Item icon="linkify" content={<a href="/">Facebook</a>} />
              <List.Item icon="linkify" content={<a href="/">Semantic UI</a>} />
              <List.Item icon="linkify" content={<a href="/">React</a>} />
            </List>
          </Grid.Column>
        </Grid>
      </Container>
      <Container style={{ marginTop: 20 }}>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2" textAlign="right">
                <Search placeholder="Search Document..." />
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Nama Document</Table.HeaderCell>
              <Table.HeaderCell>Jenis File</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Panduan Belajar Javascript</Label>
              </Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar CSS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar React JS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
    </div>
  );
}

export default App;
