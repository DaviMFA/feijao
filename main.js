/* Abre a fecha o menu quando clicar no icone: com três linha e X*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for ( const element of toggle) {
    element.addEventListener( 'click', function(){
        nav.classList.toggle( 'show')
    })
}

/*Quando clicar em um item do menu, esconder o menu */ 
  
const links = document.querySelectorAll(' nav ul li a')

    for (const link of links) {
         link.addEventListener( 'click', function(){
            nav.classList.remove( 'show')
        })
    }
    

/* mudar o header da página quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

//Testimonials carosel slider swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* Scrollrevil*/
const scrollReveal = ScrollReveal({
  origin:'top',
  distance:'30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#cardapio .image, #cardapio .text,
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .band, footer .social, 
  footer .logo, footer p
  `,
  {interval: 100}
  )

/* back to top*/
 const backToTopButton = document.querySelector('.back-to-top')
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add( 'show')
    } else {
      backToTopButton.classList.remove("show")
    }
  })

  /*Menu ativo conforme selecionar  a seção é selecionada*/
  const sections = document.querySelectorAll('main section[id]')
  function ativarOMenuNaSencao(){
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for ( const section of sections) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionid = section.getAttribute('id')

      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd){  
      document
      .querySelector ('nav ul li a[href *=' + sectionId + '] ')
      .classList.add('active') 

      } else {
        document
        .querySelector('nav ul li a [href *=' + sectionId + ']')
        .classList.remove('active')
      }
    }
  }

  /*====  when Scroll ===*/
  window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTopButton()
    ativarOMenuNaSencao()
  })