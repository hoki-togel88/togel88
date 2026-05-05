// Data Pasaran Dunia Komprehensif
const markets = [
    { name: "SINGAPORE", result: "1234", close: "17:30", draw: "17:45", status: "OPEN" },
    { name: "HONGKONG", result: "5678", close: "22:30", draw: "23:00", status: "OPEN" },
    { name: "SYDNEY", result: "9012", close: "13:20", draw: "13:50", status: "CLOSED" },
    { name: "TOTO MACAU P1", result: "3342", close: "13:00", draw: "13:15", status: "CLOSED" },
    { name: "TOTO MACAU P2", result: "8891", close: "16:00", draw: "16:15", status: "OPEN" },
    { name: "CHINA", result: "4522", close: "15:00", draw: "15:30", status: "CLOSED" },
    { name: "TAIWAN", result: "7761", close: "20:30", draw: "20:45", status: "OPEN" },
    { name: "CAMBODIA", result: "1092", close: "11:30", draw: "11:50", status: "CLOSED" },
];

// Load Tabel Pasaran
function loadMarkets() {
    const tableBody = document.getElementById('market-list');
    tableBody.innerHTML = '';
    markets.forEach(m => {
        tableBody.innerHTML += `
            <tr>
                <td><strong>${m.name}</strong></td>
                <td style="color: #ffd700; font-weight: bold;">${m.result}</td>
                <td>${m.close}</td>
                <td>${m.draw}</td>
                <td style="color: ${m.status === 'OPEN' ? '#00ff00' : '#ff0000'}">${m.status}</td>
            </tr>
        `;
    });
}

// Jam Real-time
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('id-ID', { hour12: false });
    document.getElementById('clock').innerText = time + ' WIB';
}

// Tutup Modal Peraturan
function closeRules() {
    document.getElementById('modal-rules').style.display = 'none';
}

// Inisialisasi
setInterval(updateClock, 1000);
loadMarkets();
