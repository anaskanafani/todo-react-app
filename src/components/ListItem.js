import React from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import { Col } from "reactstrap";
import { IoMdRemoveCircleOutline } from "react-icons/io";


class ListItem extends React.Component {
  render() {
    
    return (
      <Col sm={12}>
        <div className="list-item">
          <p
            className={
              this.props.listChecked ? "list-text decorated" : "list-text"
            }
          >
            {" "}
            <i className="check-icon" onClick={this.props.onClick}>
              {this.props.listChecked ? (
                <RiCheckboxCircleLine />
              ) : (
                <RiCheckboxBlankCircleLine />
              )}
            </i>
            {this.props.listText}
            <i className="remove-icon" color="danger">
            <IoMdRemoveCircleOutline/>
            </i>
          </p>
        </div>
      </Col>
    );
  }
}

export default ListItem;
