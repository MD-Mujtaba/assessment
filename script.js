function selectOption(element) {
  const expandableDivs = document.querySelectorAll('.expandable');

  // Hide dropdowns for all other divs
  expandableDivs.forEach(div => {
    if (div !== element) {
      const dropdownContainer = div.querySelector('.dropdowns');
      if (dropdownContainer) {
        dropdownContainer.style.display = 'none';
      }
      div.classList.remove('selected');
    }
  });

  // Find the corresponding radio button inside the selected "expandable" div and select it
  const radioButton = element.querySelector('input[type="radio"]');
  if (radioButton) {
    radioButton.checked = true;
  }

  // Get the "pair" id nested inside the selected "expandable" div
  const pairId = element.querySelector('.pair label').getAttribute('for');

  // Check if the dropdowns have already been added, to avoid adding duplicates
  let dropdownContainer = element.querySelector('.dropdowns');
  if (!dropdownContainer) {
    // Create the dropdowns based on the pairId
    let pairCount = parseInt(pairId.charAt(pairId.length - 1), 10);

    // Calculate the total number of dropdowns (pairs * 2)
    let totalDropdowns = pairCount * 2;

    // Create an array to store the dropdown elements
    const dropdowns = [];

    // Create the required number of dropdowns and their options
    for (let i = 1; i <= totalDropdowns; i++) {
      const dropdown = document.createElement('select');
      if (i % 2 === 1) {
        dropdown.innerHTML = `
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        `;
      } else {
        dropdown.innerHTML = `
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Red">Red</option>
        `;
      }
      dropdowns.push(dropdown);
    }

    // Create a div to contain all dropdowns
    dropdownContainer = document.createElement('div');
    dropdownContainer.classList.add('dropdowns');

    // Append the dropdowns to the container with appropriate labels
    for (let i = 0; i < dropdowns.length; i += 2) {
      const pairLabel = document.createElement('label');
      pairLabel.textContent = `#${(i / 2) + 1}`;

      const pairDiv = document.createElement('div');
      pairDiv.classList.add('pair-dropdowns');

      pairDiv.appendChild(pairLabel);
      pairDiv.appendChild(dropdowns[i]);
      pairDiv.appendChild(dropdowns[i + 1]);

      dropdownContainer.appendChild(pairDiv);
    }

    // Add the dropdown container to the "expandable" div
    element.appendChild(dropdownContainer);
  }

  // Show the dropdowns for the selected div
  dropdownContainer.style.display = 'block';

  // Add the background color to the selected div
  element.classList.add('selected');
}
