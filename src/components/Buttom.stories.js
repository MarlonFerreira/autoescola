import React from "react";
import { actions } from "@storybook/addon-actions";

import Buttom from "./Button";
import styled from "styled-components";

export default {
  title: "Components/Button",
  component: Buttom,
};

const events = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Buttom {...events}>Default</Buttom>
      <Buttom color="primary" {...events}>
        Primary
      </Buttom>
      <Buttom color="danger" {...events}>
        Danger
      </Buttom>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Buttom disabled {...events}>
        Default
      </Buttom>
      <Buttom color="primary" disabled {...events}>
        Primary
      </Buttom>
      <Buttom color="danger" disabled {...events}>
        Danger
      </Buttom>
    </Toolbar>
  </div>
);

export const outlined = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Buttom variant="outlined" {...events}>
        Default
      </Buttom>
      <Buttom variant="outlined" color="primary" {...events}>
        Primary
      </Buttom>
      <Buttom variant="outlined" color="danger" {...events}>
        Danger
      </Buttom>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Buttom variant="outlined" disabled {...events}>
        Default
      </Buttom>
      <Buttom variant="outlined" color="primary" disabled {...events}>
        Primary
      </Buttom>
      <Buttom variant="outlined" color="danger" disabled {...events}>
        Danger
      </Buttom>
    </Toolbar>
  </div>
);

export const link = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Buttom variant="link" {...events}>
        Default
      </Buttom>
      <Buttom variant="link" color="primary" {...events}>
        Primary
      </Buttom>
      <Buttom variant="link" color="danger" {...events}>
        Danger
      </Buttom>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Buttom variant="link" disabled {...events}>
        Default
      </Buttom>
      <Buttom variant="link" color="primary" disabled {...events}>
        Primary
      </Buttom>
      <Buttom variant="link" color="danger" disabled {...events}>
        Danger
      </Buttom>
    </Toolbar>
  </div>
);
