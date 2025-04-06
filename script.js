// Simulated Risk Zones (you can expand with more data later)
const simulatedZones = [
    { name: "Region A", riskLevel: "High" },
    { name: "Region B", riskLevel: "Moderate" },
    { name: "Region C", riskLevel: "Low" }
];

function updateRiskMap() {
    const mapContainer = document.getElementById("map");
    mapContainer.innerHTML = ""; // Clear previous content

    simulatedZones.forEach(zone => {
        const div = document.createElement("div");
        div.className = `zone ${zone.riskLevel.toLowerCase()}`;
        div.textContent = `${zone.name} - Risk: ${zone.riskLevel}`;
        mapContainer.appendChild(div);
    });
}

function updateAlerts() {
    const alertsList = document.getElementById("alerts-list");
    alertsList.innerHTML = "";
    simulatedZones.filter(z => z.riskLevel === "High").forEach(zone => {
        const li = document.createElement("li");
        li.textContent = `⚠️ Alert: ${zone.name} is at HIGH risk!`;
        alertsList.appendChild(li);
    });
}

function simulateSafePath() {
    const start = document.getElementById("start-zone").value;
    const end = document.getElementById("end-zone").value;
    const output = document.getElementById("safe-path-output");

    if (start === end) {
        output.textContent = "Start and End zones are the same. You are safe.";
    } else {
        const risky = simulatedZones.find(z => z.name === start || z.name === end);
        output.textContent = risky && risky.riskLevel === "High" ?
            `Warning: One of the selected zones is at HIGH risk! Reroute advised.` :
            `Path from ${start} to ${end} is currently safe.`;
    }
}

function updateDateTime() {
    const datetime = document.getElementById("current-datetime");
    const now = new Date();
    datetime.textContent = now.toLocaleString();
}

// Run these on load
window.onload = function() {
    updateRiskMap();
    updateAlerts();
    updateDateTime();
    setInterval(updateDateTime, 1000); // update clock every second
};
