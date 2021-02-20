import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum quos
      architecto at quod minima id, unde cumque ea reiciendis aliquid
      exercitationem iusto, tempore totam veniam ab odit eligendi quasi.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum quos
      architecto at quod minima id, unde cumque ea reiciendis aliquid
      exercitationem iusto, tempore totam veniam ab odit eligendi quasi.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum quos
      architecto at quod minima id, unde cumque ea reiciendis aliquid
      exercitationem iusto, tempore totam veniam ab odit eligendi quasi.
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum quos
      architecto at quod minima id, unde cumque ea reiciendis aliquid
      exercitationem iusto, tempore totam veniam ab odit eligendi quasi.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum quos
      architecto at quod minima id, unde cumque ea reiciendis aliquid
      exercitationem iusto, tempore totam veniam ab odit eligendi quasi.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum quos
      architecto at quod minima id, unde cumque ea reiciendis aliquid
      exercitationem iusto, tempore totam veniam ab odit eligendi quasi.
    </Accordion>
  </AccordionGroup>
);
