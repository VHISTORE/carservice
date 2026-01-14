const services = [
    { title: "Vehicle Diagnostics", icon: "fa-laptop-code", desc: "Digital scan of all vehicle control units with a detailed report.", price: "£39+" },
    { title: "Oil & Filters Service", icon: "fa-oil-can", desc: "High-grade oil change and filter replacement for engine health.", price: "£40+", labour: true },
    { title: "Scratch & Chip Painting", icon: "fa-brush", desc: "Invisible repairs for scratches and paint chips.", price: "£99+" },
    { title: "Headlight Restore", icon: "fa-bolt-lightning", desc: "Restoring clarity and protection to yellowed lenses.", price: "£60/set" },
    { title: "Alloy Wheel Painting", icon: "fa-circle-notch", desc: "Premium refinishing to make your wheels look brand new.", price: "£40/whl" },
    { title: "Chip Tuning", icon: "fa-microchip", desc: "Software optimization for power, torque, and fuel economy.", price: "£199+" },
    { title: "Bumper Repair", icon: "fa-car-side", desc: "Expert plastic welding and seamless repainting.", price: "From £80" },
    { title: "Body Polishing", icon: "fa-wand-magic-sparkles", desc: "Deep gloss restoration and paint protection.", price: "£130+" },
    { title: "Key Coding", icon: "fa-key", desc: "Programming of transponders and remote key fobs.", price: "£50+" }
];

const container = document.getElementById('services-container');

services.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <i class="fas ${s.icon}"></i>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="card-price">
            <span class="labour-tag">${s.labour ? 'Labour only' : 'Service'}</span>
            <span class="price-val">${s.price}</span>
        </div>
    `;
    container.appendChild(card);
});
