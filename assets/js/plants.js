/*
 * plants.js
 *
 * Fetches the plant library data and displays it on the Plant
 * Library page.  Each plant is shown with a short snippet from
 * its history.  Clicking on a plant takes the user to the
 * dedicated plant page with full details.
 */

document.addEventListener('DOMContentLoaded', async () => {
  const plantListEl = document.getElementById('plantList');
  let plants = [];
  try {
    const res = await fetch('data/plants.json');
    plants = await res.json();
  } catch (err) {
    // fall back to global data if fetch fails
    if (Array.isArray(window.plantsData)) {
      plants = window.plantsData;
    } else {
      plantListEl.textContent = 'Unable to load plant data.';
      console.error(err);
      return;
    }
  }
  // Sort by type then name
  plants.sort((a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name));
  plants.forEach(plant => {
    const div = document.createElement('div');
    div.classList.add('plant-item');
    const h4 = document.createElement('h4');
    h4.textContent = plant.name;
    div.appendChild(h4);
    const p = document.createElement('p');
    // Use the first sentence of the history as a teaser
    // Remove citation markers from the history
    const cleanHistory = plant.history.replace(/【[^】]*】/g, '');
    const firstSentence = cleanHistory.split('. ')[0] + '.';
    p.textContent = firstSentence;
    div.appendChild(p);
    div.addEventListener('click', () => {
      const encodedName = encodeURIComponent(plant.name);
      window.location.href = `plant.html?name=${encodedName}`;
    });
    plantListEl.appendChild(div);
  });
});