import { RefObject } from "react";

export interface IMenuProps {
    servicesRef?: RefObject<HTMLDivElement>;
    scheduleRef?: RefObject<HTMLDivElement>;
    reviewsRef?: RefObject<HTMLDivElement>;
  }