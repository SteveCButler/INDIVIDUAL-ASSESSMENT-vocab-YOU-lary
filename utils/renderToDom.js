const renderToDom = (divId, domString) => {
  const selectDiv = document.querySelector(divId);
  selectDiv.innerHTML = domString;
};

export default renderToDom;
