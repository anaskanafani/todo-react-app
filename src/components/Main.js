import React from "react";
import { Col, Container, Row } from "reactstrap";
import ListItem from "./ListItem";
import {BsPlusCircle} from "react-icons/bs"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitle: "List Title",
      listText: "List Text",
      listChecked: true,
      addForm: "Insert new task",
    };
    this.toggleIcon = this.toggleIcon.bind(this);
  }

  toggleIcon() {
    this.setState({ listChecked: !this.state.listChecked });
  }

  
  render() {

    return (
      <>
        <Container className="container">
          <Row>
            <Col sm={{ size: 8, offset: 4 }}>
              <h1 className="list-title">{this.state.listTitle}</h1>
            </Col>
          </Row>
          <Row>
            <ListItem
              decoratedClass={this.state.decoratedClass}
              onClick={this.toggleIcon}
              listTitle={this.state.listTitle}
              listText={this.state.listText}
              listChecked={this.state.listChecked}
            />
          </Row>
          <Row>
            <Col sm={12}>
                <form className="add-form">
                <i className="plus-icon">
                <BsPlusCircle/>
                </i>
                <input className="add-input" placeholder={this.state.addForm} type="text"></input>
                </form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
