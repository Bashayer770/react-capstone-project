import { Button, InputGroup, FormControl, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import worldmapimg from "../Assests/worldmapimg.png";
import slogo from "../Assests/slogo.png";
import UserSvg from "../svg/UserSvg";
import LockSvg from "../svg/LockSvg";

function LoginModel() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <div className="backGround_">
      <div className="motherContainer">
        <div className="Logo_">
          <img src={slogo} width="85" />
          <div className="theh5">
            <div>SIGHT</div>
            <div className="Bewhite">S E E R</div>
          </div>
        </div>
        <div className="imageTextContainer">
          <img className="worldimage" src={worldmapimg} width="100%" />
          <h6 className="theh6">LOG IN</h6>

          {/* <Button variant="outline-light mx-3" onClick={handleShow}> */}
          {/* LOGIN */}
          {/* </Button> */}

          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <InputGroup className="usernameLoginInput">
                <InputGroup.Text></InputGroup.Text>
                <UserSvg />
                <FormControl
                  placeholder=" username"
                  name="username"
                  type="text"
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup className="passwordLoginInput">
                <InputGroup.Text></InputGroup.Text>
                <LockSvg />
                <FormControl
                  name="password"
                  type="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </InputGroup>

              <input
                className="rememberMecheckbox"
                type="checkbox"
                unchecked
              ></input>
              <h6 className="rememberText">Remember me</h6>

              <Button className="Button_" variant="outline-dark" type="submit">
                LOG IN
              </Button>
              <div className="SignupOptionContainer">
                <h6>Don’t have an account? </h6>
                <h6 className="signUpOption">SIGN UP</h6>
              </div>
            </form>
          </Modal.Body>
        </div>
      </div>
    </div>
  );
}

export default LoginModel;
