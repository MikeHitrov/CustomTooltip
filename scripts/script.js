function addTooltip(elementId, text, delayBeforeShow, delayAfterShow) {
  //Getting the tooltip required element
  const element = document.getElementById(elementId);

  //Creating the base element
  const base = document.getElementById("tooltip");

  //Defining the offset distance
  const offsetDistance = 35;

  //Adding stylesheet
  base.classList.add("tooltip");

  element.addEventListener("mouseover", (event) => {
    // Checking if tooltip is empty or not.
    if (text != null) {
      base.innerHTML = text;

      // Checking for any "tooltip" element
      if (base.style.display == "inline-block") {
        base.style.display = "none"; // Hiding old tooltip
      }

      //Setting the timeout before the tooltip shows
      setTimeout(() => {
        base.style.top = element.offsetTop + offsetDistance + 'px';
        base.style.left = element.offsetLeft + offsetDistance + 'px';
        base.style.display = 'inline-block';
        document.body.appendChild(base);
      }, delayBeforeShow);
    }
  });

  element.addEventListener("mouseleave", (event) => {
    //Setting the timeout before the tooltip is being removes
    setTimeout(() => {
      base.style.display = "none"; //Hiding the tooltip
    }, delayAfterShow);
  });
}
