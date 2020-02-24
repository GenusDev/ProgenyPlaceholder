import React, { useContext, useEffect } from "react";
import Title from "./title";
import Source from "./source";
import Discuss from "./discuss";
import Divider from "./divider";
import Display from "./display";
import Background from "./background";
import { store } from "economic_analysis/utils/store";
import story from "../narrative/story";
import styled from "@emotion/styled";

const AbsoluteElements = props => {
  const { state, dispatch } = useContext(store);
  const currentSlideNumber = state.currentSlideNumber;
  const currentSlide = story[currentSlideNumber];

  useEffect(() => {
    const screenWidths = window.scrollY / window.outerHeight;
    if (screenWidths > currentSlide.end) {
      const nextSlideNumber = currentSlideNumber + 1;
      dispatch({
        type: "SET_SLIDE_NUMBER",
        payload: nextSlideNumber
      });
    } else if (screenWidths < currentSlide.start) {
      const nextSlideNumber = currentSlideNumber - 1;
      dispatch({
        type: "SET_SLIDE_NUMBER",
        payload: nextSlideNumber
      });
    }
    // eslint-disable-next-line
  }, [window.scrollY]);

  return (
    <AbsoluteElementsContainer>
      <SlideInstructions>slide down 🔻 for animated content</SlideInstructions>
      <Background />
      <Title />
      <Display />
      <Discuss />
      <Divider />
      <Source />
    </AbsoluteElementsContainer>
  );
};

export default AbsoluteElements;

export const AbsoluteElementsContainer = styled.div({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});


export const SlideInstructions = styled.p({
  color: "white",
});

