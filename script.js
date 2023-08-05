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
  
    // Check if the dropdowns have already been added, to avoid adding duplicates
    let dropdownContainer = element.querySelector('.dropdowns');
    if (!dropdownContainer) {
      // Create the first dropdown and its expandable
      const label1 = document.createElement('label');
      const dropdown1 = document.createElement('select');
      dropdown1.innerHTML = `
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      `;
  
      // Create the second dropdown and its expandable
      const dropdown2 = document.createElement('select');
      dropdown2.innerHTML = `
        <option value="size1">Size 1</option>
        <option value="size2">Size 2</option>
        <option value="size3">Size 3</option>
      `;
  
      // Create a div to contain both dropdowns
      dropdownContainer = document.createElement('div');
      dropdownContainer.classList.add('dropdowns');
  
      // Append the dropdowns to the container
      dropdownContainer.appendChild(dropdown1);
      dropdownContainer.appendChild(dropdown2);
  
      // Add the dropdown container to the "expandable" div
      element.appendChild(dropdownContainer);
    }
  
    // Show the dropdowns for the selected div
    dropdownContainer.style.display = 'block';

    // Add the background color to the selected div
    element.classList.add('selected');
  }
  