document.addEventListener('DOMContentLoaded', () => {
// select
    const select = function() {
    const selectHeader = document.querySelectorAll('.select-header')
    const select_icon = document.querySelector('.select-icon')
    const selectItem = document.querySelectorAll('.select-item')

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    })

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    })

    function selectToggle() {
        this.parentElement.classList.toggle('active')
        select_icon.classList.toggle('toggle')
    }

    // закрывается список по клику вне
    document.addEventListener('click', function(event) {
        const clickInside = selectHeader[0].parentElement.contains(event.target);
        if (!clickInside) {
            selectHeader[0].parentElement.classList.remove('active')
            select_icon.classList.remove('toggle')
        }
    }) 

    function selectChoose() {
        let text = this.innerText;
        let current = this.closest('.select').querySelector('.select-current')
        let currentText = current.innerText;
        current.innerText = text;
        this.innerText = currentText;
    }
    }

    select();


    const carousel = function() {
        let items = document.querySelectorAll('.carousel .carousel-item')
        let next = document.querySelector('.next')
        let prev = document.querySelector('.prev')
        let circles = document.querySelectorAll('.circle span')

        let active = 1;

        function startCarousel() {
            let sst = 0;

            items[active].style.transform = 'none';
            items[active].style.zIndex = 2;
            items[active].style.opacity = 1;

            for (let i = active+1; i < items.length; i++){
                sst++;
                items[i].style.transform = `translateX(${40*sst}px) scale(${1-0.1*sst})`;
                items[i].style.zIndex = 1;
                items[i].style.opacity = sst > 2 ? 0 : 0.6;
            }

            if (active > 1){
                prev.style.display='block'
            } else {
                prev.style.display='none'
            }

            circles.forEach((circle, index) => {
                circle.addEventListener('click', function() {
                    active = index+1;
                    startCarousel()
                })
    
            })
            sst = 0;
            
            for (let i = active-1; i > 0; i--){
                sst++;
                items[i].style.transform = `translateX(${-40*sst}px) scale(${1-0.1*sst})`;
                items[i].style.zIndex = 1;
                items[i].style.opacity = sst > 2 ? 0 : 0.6;

            }
        }
        startCarousel();
        
        next.onclick = () => {
            active = active + 1 < items.length && active + 1;
            startCarousel();
        }
        prev.onclick = () => {
            active = active - 1 >= 0 ? active - 1 : active;
            startCarousel();
        }
        
    }

    carousel()

    // accordion

    const accordion = function() {
        let itemAccordion = document.querySelectorAll('.accordion_title')
        itemAccordion.forEach((item, index) => {
            
            if (index === 0){
                item.nextElementSibling.classList.add('active')
                item.classList.add('active-color')
            }
            

            item.addEventListener('click', function() {
                item.nextElementSibling.classList.toggle('active')
                item.classList.toggle('active-color')
                
            })

        })
    }

    accordion()

    const hoverImg = document.querySelectorAll('.footer_social-net img')

    hoverImg.forEach(item => {
        const origSrc = item.src

        item.addEventListener('mouseover', function() {
            item.src = item.getAttribute('data_hover')
        })

        item.addEventListener('mouseout', function() {
            item.src = origSrc
        })

    })

    // бургер

    const btnBurger = document.querySelector('.burger') 
    const btnClose = document.querySelector('.close-menu')

    const burger = document.querySelector('.burger-menu')

    const body = document.body;


    btnBurger.addEventListener('click', function() {
        this.classList.add('close')
        burger.classList.remove('close')
        body.classList.add('no-scrolling')
    })

    btnClose.addEventListener('click', function() {
        burger.classList.add('close')
        btnBurger.classList.remove('close')
        body.classList.remove('no-scrolling')
    })


    const scroll = function() {
        const about = document.querySelector('.about')
        const features = document.querySelector('.features')
        const requirements = document.querySelector('.requirements')
        const quotes = document.querySelector('.quotes')

        


        about.addEventListener('click', function() {
            document.querySelector('.box-1').scrollIntoView({behavior: 'smooth'})
        })

        features.addEventListener('click', function() {
            document.querySelector('.box-2').scrollIntoView({behavior:'smooth'})
        })

        requirements.addEventListener('click', function() {
            document.querySelector('.box-3').scrollIntoView({behavior: 'smooth'})
        })

        quotes.addEventListener('click', function() {
            document.querySelector('.box-4').scrollIntoView({behavior: 'smooth'})
        })


    }

    scroll()


})



 