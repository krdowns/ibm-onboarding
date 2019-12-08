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
          hasScrollingContent
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
              Esse quis fugiat consequat ut cillum sit cillum enim in commodo
              cupidatat. Incididunt minim commodo adipisicing irure
              reprehenderit ut sit aliquip ullamco mollit aute ullamco
              excepteur. Occaecat velit anim reprehenderit excepteur ea veniam
              consequat consectetur excepteur aute voluptate minim proident
              velit. Sint magna dolor veniam voluptate est pariatur deserunt
              excepteur sunt sit qui. Veniam aliquip mollit mollit ut ullamco.
            </p>
          </div>
        </Modal>
      </div>
      <img className="background" src={background} alt="background" />
    </div>
  );
}

export default App;
