'use strict';
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-header nav');
nav.id='page-nav';
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
document.querySelector('#copyright-year').textContent=new Date().getFullYear();
