const allLocations = buildings || placeList.map(p => ({
    name: p.properties.name,
    lat: p.geometry.coordinates[0],
    lng: p.geometry.coordinates[1]
  }));
  
  const startSelect = document.getElementById('start-select');
  const endSelect = document.getElementById('end-select');
  
  allLocations.forEach(loc => {
    let opt1 = document.createElement('option');
    opt1.value = `${loc.lat},${loc.lng}`;
    opt1.textContent = loc.name;
    startSelect.appendChild(opt1);
  
    let opt2 = document.createElement('option');
    opt2.value = `${loc.lat},${loc.lng}`;
    opt2.textContent = loc.name;
    endSelect.appendChild(opt2);
  });
  
  document.getElementById('find-path-btn').onclick = function() {
    const startVal = startSelect.value;
    const endVal = endSelect.value;
    if (!startVal || !endVal) {
      alert("Please select both start and destination locations.");
      return;
    }
    if (startVal === endVal) {
      alert("Start and destination cannot be the same.");
      return;
    }
    window.open(`https://www.google.com/maps/dir/${startVal}/${endVal}`, '_blank');
  };
  