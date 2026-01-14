const services = [
    { title: "Diagnostics", icon: "fa-compass", desc: "Digital health check for your car's complex electronics.", price: "£39" },
    { title: "Oil & Filters", icon: "fa-droplet", desc: "Precision maintenance with premium synthetic oils.", price: "£40" },
    { title: "Chip Tuning", icon: "fa-bolt", desc: "Unleash hidden performance with custom ECU remapping.", price: "£199" },
    { title: "Body Work", icon: "fa-wand-sparkles", desc: "Seamless scratch repair and premium polishing.", price: "£99" },
    { title: "Wheel Refurb", icon: "fa-dharmachakra", desc: "Custom painting and restoration for alloy wheels.", price: "£40" },
    { title: "Key Coding", icon: "fa-key", desc: "Expert programming for all modern car keys.", price: "£50" }
];

const grid = document.getElementById('services-grid');

services.forEach(s => {
    const div = document.createElement('div');
    div.className = 'service-box';
    div.innerHTML = `
        <i class="fas ${s.icon}"></i>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="price-row">
            <span class="price-val">${s.price}</span>
            <div class="btn-arrow"><i class="fas fa-arrow-right"></i></div>
        </div>
    `;
    grid.appendChild(div);
});
