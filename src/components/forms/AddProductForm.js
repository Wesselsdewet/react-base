import React, { useRef } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddProduct(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const product = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddProduct(product);
  }

  return (
    <Form onSubmit={submitHandler} className="mb-5">
      <Form.Group>
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control type="text" id="title" ref={titleRef} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="opening-text">Opening Text</Form.Label>
        <Form.Control type="textarea" rows="5" id="opening-text" ref={openingTextRef} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="date">Release Date</Form.Label>
        <Form.Control type="text" id="date" ref={releaseDateRef} />
      </Form.Group>
      <Button type="submit">Add Product</Button>
    </Form>
  );
}

export default AddProduct;
