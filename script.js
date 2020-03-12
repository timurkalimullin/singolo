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
        const submit = document.getElementById('formSubmit'),
        subject = document.getElementById('subject_input'),
        descr = document.getElementById('project_description'),
        name = document.getElementById('name_input'),
        email = document.getElementById('email_input');

        submit.addEventListener('click', (e)=>{
            e.preventDefault();

            if (!/^[a-z0-9_-]{2,16}$/.test(name.value) || !/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email.value)) {
                alert('Введите корректные контактные данные');
                return;
            }

            if (subject.value.toLowerCase() == 'singolo') {
                document.getElementById('modalSubj').innerHTML = 'Тема: Singolo';
            } else {document.getElementById('modalSubj').innerHTML = 'Без темы';}
            if (descr.value.toLowerCase() == 'portfolio project') {
                document.getElementById('modalDescr').innerHTML = 'Описание: Portfolio project';
            } else {document.getElementById('modalDescr').innerHTML = 'Без описания'}

            document.getElementById('modal').style.display = 'block';
        })

        document.getElementById('modalBtn').addEventListener('click', (e)=>{
            e.preventDefault();
            document.getElementById('modalSubj').innerHTML = '';
            document.getElementById('modalDescr').innerHTML = '';
            document.getElementById('formSingolo').reset();
            document.getElementById('modal').style.display = 'none';

        })
    }
    
}

operations.anchors();
operations.portfolio();
operations.modal();





