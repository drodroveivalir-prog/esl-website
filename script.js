const menuToggle=document.getElementById("menuToggle"),nav=document.getElementById("mainNav");
menuToggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)});
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const form=document.getElementById("contactForm"), status=document.getElementById("formStatus");
form?.addEventListener("submit",async(e)=>{
  if(form.action.includes("YOUR_FORM_ID")){e.preventDefault();status.className="form-status error";status.textContent="Please configure the Formspree form ID before publishing this form.";return;}
  e.preventDefault();status.className="form-status";status.textContent="Sending enquiry…";
  try{
    const response=await fetch(form.action,{method:"POST",body:new FormData(form),headers:{Accept:"application/json"}});
    if(response.ok){form.reset();status.className="form-status success";status.textContent="Thank you. Your enquiry has been sent to ESL.";}
    else throw new Error();
  }catch(err){status.className="form-status error";status.textContent="The enquiry could not be sent. Please call ESL or email info@eslfiji.com.fj."}
});
