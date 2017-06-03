import React, { Component } from 'react';
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const defaultCategory = {
  label: ''
}

class CategoryModal extends Component {
  constructor() {
    super();
    this.state = {
      category: {...defaultCategory}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentWillReceiveProps(props) {
    this.setState({
      category: {...defaultCategory, ...props.category}
    })
  }
  onSubmit() {
    this.props.onSubmit(this.state.category)
  }
  onChange(attrs) {
    this.setState( {
      category: {...this.state.category, ...attrs}
    })
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onCancel}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.category ? 'Edit Category' : 'New Category'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <FormGroup controlId="formInlineName">
              <ControlLabel>Label</ControlLabel>
              <FormControl type="text" placeholder="label" value={this.state.category.label}
                onChange={ev => this.onChange({
                  label: ev.target.value
                })}/>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onCancel}>Close</Button>
          <Button type="submit" onClick={this.onSubmit}>
            {this.props.category ? 'Apply' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default CategoryModal;
