/*
 * plant.js
 *
 * Handles the individual plant detail page.  Reads the plant name
 * from the query string, fetches the corresponding record from
 * plants.json and renders its history and growing advice.  If the
 * plant cannot be found, an error message is shown.
 */

document.addEventListener('DOMContentLoaded', async () => {
  // Parse query parameter
  const params = new URLSearchParams(window.location.search);
  const plantName = params.get('name');
  const nameEl = document.getElementById('plantName');
  const typeEl = document.getElementById('plantType');
  const historyEl = document.getElementById('plantHistory');
  const growingEl = document.getElementById('plantGrowing');
  const monthsEl = document.getElementById('plantMonths');
  if (!plantName) {
    nameEl.textContent = 'Plant not specified';
    historyEl.textContent = '';
    growingEl.textContent = '';
    monthsEl.textContent = '';
    return;
  }
  // Load plant data.  We prefer to use the embedded global `plantsData` to avoid
  // issues with fetching local files via the `file://` protocol, which can
  // result in errors or outdated cached data.  If `plantsData` is not
  // available for some reason we fall back to loading the JSON file.
  let plants = [];
  if (Array.isArray(window.plantsData)) {
    plants = window.plantsData;
  } else {
    try {
      const res = await fetch('data/plants.json');
      plants = await res.json();
    } catch (err) {
      nameEl.textContent = 'Error loading plant data';
      console.error(err);
      return;
    }
  }
  const plant = plants.find(p => p.name === decodeURIComponent(plantName));
  if (!plant) {
    nameEl.textContent = 'Plant not found';
    return;
  }
  nameEl.textContent = plant.name;
  typeEl.textContent = plant.type;
  // Set image if available
  const imgEl = document.getElementById('plantImage');
  if (plant.image && imgEl) {
    try {
      // Convert relative image paths to absolute URLs.  This helps when
      // running via the file:// protocol, where relative paths can
      // sometimes be mis-resolved by the browser.
      const imageUrl = new URL(plant.image, window.location.href).href;
      imgEl.src = imageUrl;
    } catch (_) {
      imgEl.src = plant.image;
    }
    imgEl.alt = `${plant.name} photo`;
  }
  // Remove citation markers from history and growing strings for display
  const cleanHistory = plant.history.replace(/【[^】]*】/g, '');
  const cleanGrowing = plant.growing.replace(/【[^】]*】/g, '');
  historyEl.innerHTML = `<strong>History:</strong> ${cleanHistory}`;
  growingEl.innerHTML = `<strong>Growing advice:</strong> ${cleanGrowing}`;
  monthsEl.innerHTML = `<strong>Sowing months:</strong> ${plant.sowing_months.join(', ')}`;
});