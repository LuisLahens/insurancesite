let agencyNetwork = [
{
  img: 'https://images.contentstack.io/v3/assets/blt62d40591b3650da3/blt72c5ebc95e884f8c/5ca763a5082f61c34628d081/share-opengraph-1200.png',
  description: 'Progressive',
  button: 'https://www.progressive.com/'
},
{
  img: 'https://res.cloudinary.com/value-penguin/image/upload/c_limit,dpr_1.0,f_auto,h_1600,q_auto,w_1600/v1/referral_logos/us/insurance/uaic-1',
  description: 'UAIC',
  button: 'https://www.uaig.net/uaichome/#/uaichome'
},
{
  img: 'https://www.investopedia.com/thmb/x32uS9VGBqNV6j-1LidTDB58ZKU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/national-general-logo-422a96464eca48ac89697435a6fc977b.png',
  description: 'National General',
  button: 'https://nationalgeneral.com/'
},
{
  img: 'https://uspto.report/TM/90049813/APP20200716083358/2.jpeg',
  description: 'Responsive Auto Insurance',
  button: 'https://responsiveauto.com/'
},
{
  img: 'https://www.acicompanies.com/images/Logos/Ascendant-Logo.png',
  description: 'Ascendant Insurance Solutions',
  button: 'https://www.acicompanies.com/'
},
{
  img: 'https://nsurancenation.com/media/post/Granada_img_41.png',
  description: 'Granada Insurance Company',
  button: 'https://www.granadainsurance.com/'
}, 
{
  img: 'https://res.cloudinary.com/value-penguin/image/upload/c_fit,dpr_1.0,f_auto,h_1600,q_auto,w_200/v1/referral_logos/us/insurance/infinity-2',
  description: 'Infinity Insurance',
  button: 'https://www.infinityauto.com/'
},
{
  img: 'https://universalinsuranceholdings.com/wp-content/uploads/2018/09/upcic-logo-1.png',
  description: 'Universal Property & Casualty Insurance',
  button: 'https://universalproperty.com/'
}
]

agencyNetwork.forEach((info) => {
  document.querySelector('.networkGrid')
  .innerHTML += `
   <div class='grid'>
    <img src='${info.img}' class='insuranceImages'>
    <p class='insuranceNames'>${info.description}</p>
   <a href='${info.button}'>
    <button class='insuranceLink'>Learn More...</button>
   </a> 
   </div> 
  `
})

