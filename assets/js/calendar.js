/*
 * calendar.js
 *
 * Fetches the plant data from the JSON file and builds an interactive
 * sowing calendar.  Users can either view a full table showing all
 * crops and their recommended sowing months, or filter by a
 * particular month using the dropdown menu.  The table highlights
 * cells where sowing is recommended.
 */

document.addEventListener('DOMContentLoaded', async () => {
  const tableContainer = document.getElementById('calendarTableContainer');
  const filteredList = document.getElementById('filteredList');
  const monthSelect = document.getElementById('monthSelect');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Retrieve plant data either from the JSON file or from the
  // preloaded global variable.  The global `plantsData` is used
  // when fetching local files is not permitted by the browser.
  let plants = [];
  try {
    const res = await fetch('data/plants.json');
    plants = await res.json();
  } catch (err) {
    if (Array.isArray(window.plantsData)) {
      plants = window.plantsData;
    } else {
      tableContainer.textContent = 'Unable to load planting data.';
      console.error(err);
      return;
    }
  }

  // Build the full calendar table
  function buildTable() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.appendChild(createCell('th', 'Plant'));
    months.forEach(month => {
      headerRow.appendChild(createCell('th', month));
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    plants.forEach(plant => {
      const row = document.createElement('tr');
      row.appendChild(createCell('td', plant.name));
      months.forEach(month => {
        const cell = createCell('td', '');
        if (plant.sowing_months.includes(month)) {
          cell.textContent = '✓';
          cell.style.backgroundColor = 'var(--accent)';
          cell.style.color = 'white';
          cell.style.textAlign = 'center';
        }
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
  }

  function createCell(tag, text) {
    const cell = document.createElement(tag);
    cell.textContent = text;
    return cell;
  }

  // Filter plants by selected month
  function filterByMonth(month) {
    if (!month) {
      // Show full table and hide list
      filteredList.style.display = 'none';
      tableContainer.style.display = 'block';
      return;
    }
    const listWrapper = document.createElement('div');
    const heading = document.createElement('h3');
    heading.textContent = `Crops to sow in ${month}`;
    listWrapper.appendChild(heading);
    const ul = document.createElement('ul');
    const matching = plants.filter(p => p.sowing_months.includes(month));
    if (matching.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'No recommended sowings this month.';
      ul.appendChild(li);
    } else {
      matching.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p.name;
        ul.appendChild(li);
      });
    }
    listWrapper.appendChild(ul);
    filteredList.innerHTML = '';
    filteredList.appendChild(listWrapper);
    // hide table and show list
    tableContainer.style.display = 'none';
    filteredList.style.display = 'block';
  }

  // Event listener for month select
  monthSelect.addEventListener('change', (e) => {
    const month = e.target.value;
    filterByMonth(month);
  });

  // Build the table on initial load
  buildTable();
});