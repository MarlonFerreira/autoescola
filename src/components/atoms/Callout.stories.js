import React from "react";

import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";

import SpeedImage from "draws/Speed";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutMedia },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça a sua matrícula agora mesmo</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ut
        est iure, nihil veritatis officiis excepturi consequuntur nobis deserunt
        laborum libero nemo ducimus omnis at blanditiis reprehenderit aperiam.
        Cum, consectetur!
      </p>
      <CalloutActions>
        <Button color="primary">Matricular</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <SpeedImage></SpeedImage>
    </CalloutMedia>
  </Callout>
);
