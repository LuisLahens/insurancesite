let services = [
  {
    link: 'car/car.html',
    icon: `<i class="fa-solid fa-car"></i>`,
    title: `<p class="serviceTitles">Vehicle</p>`
  },
  {
    link: 'house/house.html',
    icon: `<i class="fa-solid fa-house"></i>`,
    title: `<p class="serviceTitles">House</p>`
  },
  {
    link: 'boat/boat.html',
    icon: `<i class="fa-solid fa-sailboat"></i>`,
    title: `<p class="serviceTitles">Boat</p>`
  },
  {
    link: 'health/health.html',
    icon: `<i class="fa-solid fa-briefcase-medical"></i>`,
    title: `<p class="serviceTitles">Health</p>`
  },
  {
    link: 'workerscomp/workers.html',
    icon: `<i class="fa-solid fa-helmet-safety"></i>`,
    title: `<p class="serviceTitles">General Liability</p>`
  }
]

services.forEach((service) => {
  document.querySelector('.serviceGrid')
  .innerHTML += `
  <a href="${service.link}" class="serviceItems">
    ${service.icon}
    ${service.title}
 </a> 
  `
})

