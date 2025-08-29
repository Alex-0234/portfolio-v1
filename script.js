

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

document.addEventListener('DOMContentLoaded', ()=> {
    console.log('Inicialized');
    

    /* Constants */
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const headerImage = document.getElementById('header-image');
    const headerH1 = document.getElementById('header-name');
    const main = document.querySelector('main');
    const myToggle = document.getElementById('myToggle');
    const sidebarIcon = document.getElementById('sidebar-icon');
    const sidebar = document.getElementById('sidebar');
    const sidebarX = document.getElementById('sidebar-x');

    const sectionArray = Array.from(document.querySelectorAll('.section'))
    sectionAlignment(sectionArray);
    /* Initial settings */
    sidebarIcon.style.opacity = "0";

    /* Event Listeners */ 
    myToggle.addEventListener('change', () => {
        myToggle.checked ? body.classList.add('light-theme') : body.classList.remove('light-theme');
    });
    sidebarIcon.addEventListener('click', ()=> {
        sidebar.classList.toggle('sidebarHidden');
        sidebar.classList.toggle('sidebarShow');
        if(sidebar.classList.contains('sidebarShow')){
            sectionArray.forEach(section => {
                section.style.transform = 'translateX(-100px)'
            });
        };
    });

    sidebarX.addEventListener('click', ()=> {
        sidebar.classList.toggle('sidebarHidden');
        sidebar.classList.toggle('sidebarShow');
        if (sidebar.classList.contains('sidebarHidden')) {
            sectionAlignment(sectionArray);
        }
    })
    window.addEventListener('scroll', ()=> {
        maxHeight = 70;
        minHeight = 8;
        
        let  newHeight = (maxHeight - window.scrollY / 10 );
        if (newHeight < maxHeight) { maxHeight = newHeight; }
        if (newHeight > maxHeight) { maxHeight = newHeight; }
        let imageHeight = (70 - newHeight) * 10;
        if (!(newHeight < minHeight)) { 
            header.style.height = newHeight + "vh";
            sidebarIcon.style.opacity = "0";
            headerImage.style.transform = `translateY(-${imageHeight}px)`;
            headerH1.style.transform = `translateY(-${imageHeight}px)`;
        } else {
            header.style.height = minHeight + "vh";
            sidebarIcon.style.opacity = "1";
        }

    })
})

function sectionAlignment(sectionArray) {
        sectionArray.forEach((section, i) => {
            if ((i + 4) % 2 === 0) {
                section.style.transform = 'translateX(-100px)';
            } else {
                section.style.transform = 'translateX(100px)';
            }
        })
    }
