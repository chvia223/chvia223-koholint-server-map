const regionMap = 'images/map-in-regions.png';
const defaultMap = 'images/koho-world-map.png';

const regionCheckbox = document.querySelector('#region-borders-checkbox');


const placeRegionOverlay = () => {

    let checkboxState = document.querySelector('#region-borders-checkbox');
    console.log(checkboxState.checked);

    if (checkboxState.checked) {
        document.querySelector('#displayed-map').src = regionMap;
    } else if (!checkboxState.checked) {
        document.querySelector('#displayed-map').src = defaultMap; 
    }

    console.log(document.querySelector('#displayed-map').src)
}

regionCheckbox.addEventListener('change', placeRegionOverlay);