import React from "react";

const ApiRequest = async (url = "", optionsObj = null, errMrg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("Reload the page!!");
  } catch (error) {
    errMrg = error.message;
  } finally {
    return errMrg;
  }
};

export default ApiRequest;
