import {
  COUNT_CARD_1280,
  COUNT_CARD_786,
  COUNT_CARD_FOR_PAGE_1280,
  COUNT_CARD_FOR_PAGE_360,
  COUNT_CARD_FOR_PAGE_768,
} from "./constants";

export const getLoadStep = (width) => {
  if (width >= 1280) {
    return COUNT_CARD_1280;
  }

  if (width >= 768) {
    return COUNT_CARD_786;
  }
};

export const getInitialCount = (width) => {
  if (width >= 1280) {
    return COUNT_CARD_FOR_PAGE_1280;
  }

  if (width >= 768) {
    return COUNT_CARD_FOR_PAGE_768;
  }

  return COUNT_CARD_FOR_PAGE_360;
};
