import React from "react";


import ProgenyRoot from "./root";
import EconomicAnalysis from "./economic_analysis/entry";


const routes = {
  "/": () => <ProgenyRoot />,
  "/economicslides": () => <EconomicAnalysis />,
};

export default routes;
