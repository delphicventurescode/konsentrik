/**
 * tabs.js
 * Handles the logic for switching between wellness modules
 */

function openTab(tabName, element) {
    // 1. Select the iframe that hosts our sub-apps
    const frame = document.getElementById('app-frame');
    
    // 2. Select all tab buttons to manage their 'active' state
    const buttons = document.getElementsByClassName('tab-btn');
    
    // 3. Update the iframe source based on the folder structure:
    // e.g., 'breathing/breathing.html'
    frame.src = `${tabName}/${tabName}.html`;

    // 4. Remove the 'active' class from all buttons
    for (let btn of buttons) {
        btn.classList.remove('active');
    }

    // 5. Add the 'active' class to the button that was clicked
    element.classList.add('active');
}