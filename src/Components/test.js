<Modal show={show} onHide={handleClose}>
  <Modal.Body>
    <form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text>Username</InputGroup.Text>
        <FormControl
          placeholder="Your username"
          name="username"
          type="text"
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Password</InputGroup.Text>
        <FormControl
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
        />
      </InputGroup>
      <Button variant="outline-dark" type="submit">
        LOGIN
      </Button>
    </form>
  </Modal.Body>
</Modal>;
