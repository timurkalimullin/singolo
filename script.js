const operations = {
    anchors: ()=>{
        const navLinks = document.querySelector('.header__nav').querySelectorAll('a[href^="#"]');
        navLinks.forEach(item=>{
            item.addEventListener('click', function(e) {
                e.preventDefault();
                navLinks.forEach(el=>{
                    el.classList.remove('active');
                })
                item.classList.add('active')

                let destination = item.getAttribute('href').replace(/\#/, '');
                destination = document.getElementById(destination).offsetTop - 95;

                scrollTo({left:0,top:destination, behavior:'smooth'});

            })
        })
    },

    portfolio: ()=> {
        const portfolioTabs = document.querySelectorAll('.portfolio__nav ul li');
        let cards = document.querySelectorAll('.portfolio__img__wrapper ul li');

        portfolioTabs.forEach(item=>{
                item.addEventListener('click', function(e){
                    if (item.className !=='active') {
                        e.preventDefault;

                        portfolioTabs.forEach(el=>{
                            el.classList.remove('active');
                        })
                        item.classList.add('active');
            
                        cards.forEach((item,i)=>{
                            if (i>=0 && i<5) {
                                document.querySelector('.portfolio__img__wrapper ul').append(item)
                            }
                        })
                        cards = document.querySelectorAll('.portfolio__img__wrapper ul li');
                    }
                })
        })

        cards.forEach(item=>{
            item.addEventListener('click', (e)=>{
                cards.forEach(el=>{
                    el.classList.remove('select');
                })
                item.classList.add('select')
            })
        })
    },

    modal: ()=> {
        const submit = document.getElementById('formSingolo'),
        subject = document.getElementById('subject_input'),
        descr = document.getElementById('project_description'),
        name = document.getElementById('name_input'),
        email = document.getElementById('email_input');

        submit.addEventListener('submit', (e)=>{
            e.preventDefault();

            if (!/^[a-z0-9_-]{2,16}$/.test(name.value)) {
                alert('Введите корректное имя, от 2 до 16 символов');
                return;
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email.value)) {
                alert('Введите корректную электронную почту');
                return;
            }

            if (subject.value) {
                document.getElementById('modalSubj').innerHTML = `Тема: ${subject.value}`;
            } else if (subject.value.toLowerCase() == '') {
                document.getElementById('modalSubj').innerHTML = 'Без темы'
            }
            
            if (descr.value) {
                document.getElementById('modalDescr').innerHTML = `Описание: ${descr.value}`;
            } else if (descr.value.toLowerCase() == '') {
                document.getElementById('modalDescr').innerHTML = 'Без описания'
            }
            

            document.getElementById('modal').style.display = 'block';
            document.body.style.overflow = "hidden";
        })

        document.getElementById('modalBtn').addEventListener('click', (e)=>{
            e.preventDefault();
            document.getElementById('modalSubj').innerHTML = '';
            document.getElementById('modalDescr').innerHTML = '';
            document.body.style.overflow = "";
            document.getElementById('formSingolo').reset();
            document.getElementById('modal').style.display = 'none';

        })
    },

    
    slider:()=>{
        let slides = document.querySelectorAll('.slide'),
        activeSlide = 0,
        isEnabled = true;

        function changeActiveSlide(n) {
            activeSlide = (n + slides.length)%slides.length;
        }

        function previousSlide(n) {
            hideSlide('to-right')
            changeActiveSlide(n-1);
            showSlide('from-left');
        }

        function nextSlide(n) {
            hideSlide('to-left')
            changeActiveSlide(n+1);
            showSlide('from-right');
        }

        function hideSlide(direction) {
            isEnabled = false;
            slides[activeSlide].classList.add(direction);
            slides[activeSlide].addEventListener('animationend', function(){
                this.classList.remove('active', direction);
            })
        }

        function showSlide(direction) {
            slides[activeSlide].classList.add('coming', direction);
            slides[activeSlide].addEventListener('animationend', function(){
                this.classList.remove('coming', direction);
                this.classList.add('active');
                isEnabled = true;
            })
        }

        function changeColor() {
            document.querySelector('.slider').classList.toggle('blue');
        }

        document.querySelector('#left').addEventListener('click', function() {
        if (isEnabled) {
            previousSlide(activeSlide);
            changeColor();
        }
        })

        document.querySelector('#right').addEventListener('click', function() {
        if (isEnabled) {
            nextSlide(activeSlide);
            changeColor();
        }
        })

    },
    
    screenToggle:()=>{
        let phone = document.querySelectorAll('.phone_body');
        phone.forEach((el,i)=>{
            el.addEventListener('click', function(event){
                console.log(this)
                event.target.parentElement.querySelector('.screen').classList.toggle('hide')
            })
        })
    }
}

operations.anchors();
operations.portfolio();
operations.modal();
operations.slider();
operations.screenToggle();




