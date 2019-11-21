import {
  GO_TO_BANDS,
  GO_TO_LOGIN,
  GO_TO_SEARCH,
  GO_TO_BAND_AREA,
  GO_TO_INFO
} from "./actions";

export const goToLogin = () => ({
  type: GO_TO_LOGIN
});

export const goToBands = () => ({
  type: GO_TO_BANDS
});

export const goToSearch = () => ({
  type: GO_TO_SEARCH
});

export const goToBandArea = (login) => ({
  type: GO_TO_BAND_AREA,
  login
});

export const goToInfo = (bandName) => ({
  type: GO_TO_INFO,
  bandName
});