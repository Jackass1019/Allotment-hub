/*
 * buy_sell.js
 *
 * Implements a simple buy & sell bulletin board using the browser's
 * localStorage.  Users can add listings with a title, description,
 * type (for sale or wanted) and contact information.  Listings are
 * displayed in a list and can be removed by the user.  Since there
 * is no backend, the data is stored only in the user's browser.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('listingForm');
  const listingsContainer = document.getElementById('listingsContainer');

  // Load existing listings from localStorage or initialise empty array
  let listings = JSON.parse(localStorage.getItem('allotmentListings')) || [];

  // Function to save listings to localStorage
  function saveListings() {
    localStorage.setItem('allotmentListings', JSON.stringify(listings));
  }

  // Render listings to the page
  function renderListings() {
    listingsContainer.innerHTML = '';
    if (listings.length === 0) {
      listingsContainer.textContent = 'No listings yet. Be the first to add one!';
      return;
    }
    listings.forEach(listing => {
      const itemDiv = document.createElement('div');
      itemDiv.style.borderBottom = '1px solid var(--border)';
      itemDiv.style.padding = '10px 0';

      const header = document.createElement('div');
      header.style.display = 'flex';
      header.style.justifyContent = 'space-between';
      header.style.alignItems = 'center';
      const title = document.createElement('strong');
      title.textContent = `${listing.itemName} (${listing.itemType})`;
      header.appendChild(title);
      // Remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.style.backgroundColor = 'var(--primary)';
      removeBtn.style.color = 'white';
      removeBtn.style.border = 'none';
      removeBtn.style.padding = '4px 8px';
      removeBtn.style.borderRadius = '4px';
      removeBtn.style.cursor = 'pointer';
      removeBtn.addEventListener('click', () => {
        listings = listings.filter(l => l.id !== listing.id);
        saveListings();
        renderListings();
      });
      header.appendChild(removeBtn);
      itemDiv.appendChild(header);

      const desc = document.createElement('p');
      desc.textContent = listing.itemDescription;
      itemDiv.appendChild(desc);

      const contact = document.createElement('p');
      contact.innerHTML = `<strong>Contact:</strong> ${listing.contactInfo}`;
      itemDiv.appendChild(contact);

      const date = document.createElement('p');
      date.style.fontSize = '0.85rem';
      date.style.color = 'var(--muted)';
      const dateObj = new Date(listing.timestamp);
      date.textContent = dateObj.toLocaleString();
      itemDiv.appendChild(date);

      listingsContainer.appendChild(itemDiv);
    });
  }

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemName = document.getElementById('itemName').value.trim();
    const itemDescription = document.getElementById('itemDescription').value.trim();
    const itemType = document.getElementById('itemType').value;
    const contactInfo = document.getElementById('contactInfo').value.trim();
    if (!itemName || !itemDescription || !contactInfo) {
      alert('Please fill in all fields.');
      return;
    }
    const newListing = {
      id: Date.now(),
      itemName,
      itemDescription,
      itemType,
      contactInfo,
      timestamp: Date.now()
    };
    listings.unshift(newListing);
    saveListings();
    renderListings();
    form.reset();
  });

  // Initial render
  renderListings();
});