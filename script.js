const services = [
    {
        title: "Vehicle Diagnostics",
        desc: "Full system diagnostics for all vehicle modules. Price may vary depending on the vehicle type.",
        price: "From £39"
    },
    {
        title: "Oil & Filters Service",
        desc: "Complete oil and filter replacement with service interval reset. Price may vary depending on vehicle and oil type.",
        price: "From £40",
        notes: "Labour only. Parts not included."
    },
    {
        title: "Scratch & Chip Painting",
        desc: "Scratch and chip repair with professional finish. Final price depends on the level of damage.",
        price: "From £99"
    },
    {
        title: "Bumper Repair",
        desc: "Plastic bumper repair, welding and repainting. Price depends on the size and type of damage.",
        price: "Contact for price"
    },
    {
        title: "Headlight Restoration",
        desc: "Sanding, polishing and clear lacquer coating with UV protection. Price depends on lens condition and damage.",
        price: "From £60 / set"
    },
    {
        title: "Alloy Wheel Painting",
        desc: "Full refurbishment and painting of alloy wheels. Price depends on wheel size and damage.",
        price: "From £40 / wheel"
    },
    {
        title: "DPF Cleaning",
        desc: "Professional diesel particulate filter deep cleaning. Price depends on vehicle model and condition.",
        price: "From £90"
    },
    {
        title: "EGR Cleaning",
        desc: "Cleaning of the EGR valve for restored airflow and performance.",
        price: "From £60"
    },
    {
        title: "Shot Blasting",
        desc: "Professional sand and grit blasting for subframes, wheels, suspension arms, and more.",
        price: "From £25"
    },
    {
        title: "Hub & Bearing Replacement",
        desc: "Replacement of wheel bearings and hubs. Final price depends on vehicle make.",
        price: "From £35 / hub",
        notes: "Labour only. Parts not included."
    },
    {
        title: "Suspension Repair",
        desc: "Diagnostics and replacement of suspension components. Price depends on complexity.",
        price: "From £120"
    },
    {
        title: "Clutch Replacement",
        desc: "Complete clutch kit replacement and adjustment. Price depends on vehicle model.",
        price: "From £220"
    },
    {
        title: "Body Polishing",
        desc: "Three-stage body polishing for high-gloss finish. Price depends on paint condition.",
        price: "From £130"
    },
    {
        title: "Full Car Wash",
        desc: "Exterior and interior professional hand wash. Price depends on vehicle size.",
        price: "From £30"
    },
    {
        title: "Chip Tuning (Engine)",
        desc: "Professional ECU remapping — Stage 1, ECO or Custom tune.",
        price: "From £199"
    },
    {
        title: "Key Programming",
        desc: "Programming and coding of car keys, remotes, and transponders. Proof of ownership required.",
        price: "From £50"
    },
    {
        title: "4 New Tyres & Balancing",
        desc: "Complete replacement of all 4 brand-new tyres, including fitting and full wheel balancing.",
        price: "£250 / full set"
    }
];

const container = document.getElementById('services-container');

services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    
    card.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.desc}</p>
        <div class="price">${service.price}</div>
        ${service.notes ? `<span class="notes">${service.notes}</span>` : ''}
    `;
    
    container.appendChild(card);
});
