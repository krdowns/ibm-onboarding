import React from "react";
import "./App.scss";

import background from "./background.jpg";
import scene from "./Scene_3_1000.png";
import { Modal } from "carbon-components-react";

function App() {
  return (
    <div className="App">
      <div className="modal-container">
        <Modal
          className="onboarding-modal"
          focusTrap={false}
          hasscrollingcontent="false"
          iconDescription="Close the modal"
          aria-label="Label"
          modalAriaLabel="A label to be read by screen readers on the modal root node"
          onBlur={function noRefCheck() {}}
          onClick={function noRefCheck() {}}
          onFocus={function noRefCheck() {}}
          onKeyDown={function noRefCheck() {}}
          onRequestClose={function noRefCheck() {}}
          onRequestSubmit={function noRefCheck() {}}
          onSecondarySubmit={function noRefCheck() {}}
          open
          passiveModal={false}
          primaryButtonDisabled={false}
          primaryButtonText="Next"
          secondaryButtonText="Back"
          selectorPrimaryFocus="[data-modal-primary-focus]"
        >
          <React.Fragment key=".1">
            <div className="scene-container">
              <img className="scene" src={scene} alt="scene" />
            </div>
          </React.Fragment>
          <div>
            <p>
              This is truly an almighty mountain. Let's put a touch more of the
              magic here. Be careful. You can always add more - but you can't
              take it away. So often we avoid running water, and running water
              is a lot of fun. We're trying to teach you a technique here and
              how to use it. You don't want to kill all your dark areas they are
              very important.
            </p>
          </div>
        </Modal>
      </div>
      <img className="background" src={background} alt="background" />
    </div>
  );
}

export default App;
