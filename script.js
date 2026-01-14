const services = [
    { title: "Vehicle Diagnostics", icon: "fa-microchip", desc: "Full system scan for all electronic modules and hidden faults.", price: "£39+" },
    { title: "Oil & Filters", icon: "fa-oil-can", desc: "Premium oil replacement with OEM filters and interval reset.", price: "£40+", labour: true },
    { title: "Chip Tuning", icon: "fa-bolt", desc: "Unlock power and improve fuel economy with Stage 1 remapping.", price: "£199+" },
    { title: "Scratch Repair", icon: "fa-paint-brush", desc: "Professional paint restoration and chip removal.", price: "£99+" },
    { title: "Alloy Wheels", icon: "fa-compact-disc", desc: "Full refurbishment and custom painting for all wheel sizes.", price: "£40/whl" },
    { title: "Body Polishing", icon: "fa-wand-magic-sparkles", desc: "3-stage machine polish for a mirror-like showroom finish.", price: "£130+" },
    { title: "DPF Cleaning", icon: "fa-smog", desc: "Deep chemical cleaning to restore diesel filter performance.", price: "£90+" },
    { title: "Key Programming", icon: "fa-key", desc: "Advanced coding for new keys and remote fobs.", price: "£50+" },
    { title: "Tyre Service", icon: "fa-circle-notch", desc: "4 new tyres fitted with precision wheel balancing.", price: "£250" }
];

const container = document.getElementById('services-container');

services.forEach((s) => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.setAttribute('data-aos', 'fade-up');
    
    card.innerHTML = `
        <div class="card-icon"><i class="fas ${s.icon}"></i></div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="card-footer">
            <span class="tag">${s.labour ? 'LABOUR ONLY' : 'PRO SERVICE'}</span>
            <span class="price">${s.price}</span>
        </div>
    `;
    container.appendChild(card);
});
