
/* Mobile nav */
const menuToggle=document.querySelector('.menu-toggle');
const mainNav=document.querySelector('.main-nav');
if(menuToggle&&mainNav){
  menuToggle.addEventListener('click',()=>{
    const open=mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',open);
  });
  mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));
}

/* Reveal on scroll */
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}
}),{threshold:.12}):null;
document.querySelectorAll('.reveal').forEach(el=>{if(io)io.observe(el);else el.classList.add('visible')});

/* Footer year */
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

/* Contact form (Formspree-ready) */
const FORM_ENDPOINT='https://formspree.io/f/YOUR_FORM_ID'; /* <- replace with your Formspree ID */
const form=document.getElementById('contact-form');
if(form){
  const status=document.getElementById('form-status');
  const budgetField=document.getElementById('budget-field');
  const typeSelect=document.getElementById('inquiry-type');
  if(typeSelect&&budgetField){
    typeSelect.addEventListener('change',()=>{
      budgetField.classList.toggle('hidden',typeSelect.value!=='Freelance Project');
    });
  }
  const setErr=(id,msg)=>{
    const f=document.getElementById(id).closest('.field');
    f.classList.toggle('invalid',!!msg);
    if(msg)f.querySelector('.error').textContent=msg;
  };
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    let ok=true;
    const name=form.name.value.trim(), email=form.email.value.trim(),
          type=form.inquiry_type.value, message=form.message.value.trim();
    setErr('name', name.length<2?'Please enter your full name.':'');
    setErr('email', !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)?'Please enter a valid email address.':'');
    setErr('inquiry-type', !type?'Please select an inquiry type.':'');
    setErr('message', message.length<10?'Please write a message of at least 10 characters.':'');
    ok=[...form.querySelectorAll('.field')].every(f=>!f.classList.contains('invalid'));
    if(!ok){status.className='form-status err';status.textContent='Please fix the highlighted fields and try again.';return;}
    if(FORM_ENDPOINT.includes('YOUR_FORM_ID')){
      status.className='form-status info';
      status.innerHTML='This form is not connected to a delivery service yet. To activate it, create a free form at <strong>formspree.io</strong>, paste your endpoint into <code>assets/js/main.js</code> (variable <code>FORM_ENDPOINT</code>), and redeploy. You can also reach Karen directly at <a href="mailto:karenakram92@gmail.com">karenakram92@gmail.com</a>.';
      return;
    }
    try{
      const res=await fetch(FORM_ENDPOINT,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
      if(res.ok){status.className='form-status ok';status.textContent='Thank you! Your message has been sent. Karen will get back to you soon.';form.reset();if(budgetField)budgetField.classList.add('hidden');}
      else{status.className='form-status err';status.textContent='Something went wrong. Please try again or email karenakram92@gmail.com directly.';}
    }catch{
      status.className='form-status err';status.textContent='Network error. Please try again or email karenakram92@gmail.com directly.';
    }
  });
}
