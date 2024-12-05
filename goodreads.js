function hideUnwantedLanguageOptions() {
    const filterBoard = document.getElementsByClassName('ReviewFiltersModal')[0];
    const radioGroups = filterBoard.getElementsByClassName('RadioGroup');
    const languageFilter = radioGroups[radioGroups.length - 1];
    const divs = languageFilter.getElementsByClassName('RadioGroup__input');

    Array.from(divs).forEach(div => {
        const label = div.querySelector('.RadioInput'); // Get the nested label
        if (!label) return;
        const labelText = label.textContent.trim();
        if (!labelText.includes("English") && !labelText.includes("Tiếng Việt")) {
            div.style.display = 'none';    
        }
    });
}

// Set up a MutationObserver to detect when the overlay appears in the DOM
const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const overlay = document.querySelector('.Overlay.Overlay--floating');
            if (overlay) {
                hideUnwantedLanguageOptions();
                break;
            }
        }
    }
});

// Start observing the document body for added nodes
observer.observe(document.body, { childList: true, subtree: true });
