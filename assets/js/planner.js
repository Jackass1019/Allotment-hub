/*
 * planner.js
 *
 * Provides an interactive grid to plan your allotment beds.  Users
 * choose a crop from the dropdown list and click squares on the
 * grid to assign that crop to the chosen position.  The plan is
 * stored in localStorage so it persists between sessions.  A
 * button allows the plan to be cleared.
 */

document.addEventListener('DOMContentLoaded', async () => {
  const gridElement = document.getElementById('plannerGrid');
  const cropSelect = document.getElementById('cropSelect');
  const clearBtn = document.getElementById('clearPlan');
  const rows = 10;
  const cols = 10;
  let plan = JSON.parse(localStorage.getItem('gardenPlan')) || {};

  // Fetch crop names from JSON or fallback to global
  let plants = [];
  try {
    const res = await fetch('data/plants.json');
    plants = await res.json();
  } catch (err) {
    if (Array.isArray(window.plantsData)) {
      plants = window.plantsData;
    } else {
      console.error('Unable to load plant list', err);
    }
  }
  // Populate dropdown
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = '-- Select crop --';
  cropSelect.appendChild(defaultOption);
  plants.forEach(p => {
    const option = document.createElement('option');
    option.value = p.name;
    option.textContent = p.name;
    cropSelect.appendChild(option);
  });

  // Build grid
  gridElement.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  function buildGrid() {
    gridElement.innerHTML = '';
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cell = document.createElement('div');
        cell.dataset.row = r;
        cell.dataset.col = c;
        const key = `${r}-${c}`;
        if (plan[key]) {
          cell.textContent = abbreviation(plan[key]);
          cell.classList.add('active');
        }
        cell.addEventListener('click', () => {
          const selectedCrop = cropSelect.value;
          if (!selectedCrop) return;
          const cellKey = `${r}-${c}`;
          if (plan[cellKey] === selectedCrop) {
            // remove assignment
            delete plan[cellKey];
            cell.textContent = '';
            cell.classList.remove('active');
          } else {
            // assign selected crop
            plan[cellKey] = selectedCrop;
            cell.textContent = abbreviation(selectedCrop);
            cell.classList.add('active');
          }
          savePlan();
        });
        gridElement.appendChild(cell);
      }
    }
  }

  function abbreviation(name) {
    return name.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase();
  }

  function savePlan() {
    localStorage.setItem('gardenPlan', JSON.stringify(plan));
  }

  clearBtn.addEventListener('click', () => {
    if (confirm('Clear the entire plan?')) {
      plan = {};
      savePlan();
      buildGrid();
    }
  });

  buildGrid();
});