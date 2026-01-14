const services = [
    { title: "Vehicle Diagnostics", icon: "fa-microchip", desc: "Full system diagnostics for all vehicle modules with official report.", price: "£39+" },
    { title: "Oil & Filters Service", icon: "fa-oil-can", desc: "Complete oil and filter replacement with interval reset.", price: "£40+", labour: true },
    { title: "Chip Tuning (Engine)", icon: "fa-gauge-high", desc: "Professional ECU remapping — Stage 1, ECO or Custom tune.", price: "£199+" },
    { title: "Scratch & Chip Painting", icon: "fa-paint-roller", desc: "Professional finish. Final price depends on damage level.", price: "£99+" },
    { title: "Bumper Repair", icon: "fa-car-side", desc: "Plastic bumper repair, welding and repainting.", price: "Ask" },
    { title: "Headlight Restoration", icon: "fa-sun", desc: "Sanding, polishing and UV protection coating.", price: "£60/set" },
    { title: "Alloy Wheel Painting", icon: "fa-circle-dot", desc: "Full refurbishment and painting of alloy wheels.", price: "£40/whl" },
    { title: "DPF & EGR Cleaning", icon: "fa-wind", desc: "Deep cleaning for restored airflow and performance.", price: "£60+" },
    { title: "Shot Blasting", icon: "fa-spray-can", desc: "Sand and grit blasting for any metal or alloy parts.", price: "£25+" },
    { title: "Hub & Bearing", icon: "fa-gear", desc: "Replacement of wheel bearings and hubs.", price: "£35+", labour: true },
    { title: "Suspension Repair", icon: "fa-wrench", desc: "Diagnostics and replacement of suspension components.", price: "£120+" },
    { title: "Clutch Replacement", icon: "fa-sliders", desc: "Complete clutch kit replacement and adjustment.", price: "£220+" },
    { title: "Body Polishing", icon: "fa-sparkles", desc: "Three-stage body polishing for high-gloss finish.", price: "£130+" },
    { title: "Key Programming", icon: "fa-key", desc: "Coding of car keys, remotes, and transponders.", price: "£50+" },
    { title: "4 New Tyres", icon: "fa-truck-monster", desc: "Full set replacement including wheel balancing.", price: "£250" }
];

const container = document.getElementById('services-container');

services.forEach((s, index) => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index % 3) * 50);
    
    card.innerHTML = `
        <div class="card-icon-box">
            <i class="fas ${s.icon}"></i>
        </div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="price-tag">
            <span class="labour">${s.labour ? 'Labour only' : 'Workshop Service'}</span>
            <span class="val">${s.price}</span>
        </div>
    `;
    container.appendChild(card);
});
