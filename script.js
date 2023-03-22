const ekleBtn=document.querySelector("#ekleBtn")
const harcama=document.querySelector("#harcama")
const fiyat=document.querySelector("#fiyat")
const durum=document.querySelector("#durum")
const list=document.querySelector(".list")
const toplam=document.querySelector("#toplam")

let total=0
function addExpense(event){
    event.preventDefault()
    if(!harcama.value||!fiyat.value)
    {
        alert("Bu alanları boş geçemezsiniz")
        return 
    }
   
    const listItem=document.createElement("div")
    listItem.classList.add("listItem")
    listItem.innerHTML=`
    <h1>${harcama.value}</h1>
    <h2><span>${fiyat.value}</span> &#8378;</h2>
    <div class="buttons">
        <img id='delete' src="images/Delete.png" alt="">
        <img id='payment' src="images/payment.png" alt="">
    </div>
    `
    
    list.appendChild(listItem)
    toplam.innerText=total+=Number(fiyat.value)
    fiyat.value=""
    harcama.value=""


}

ekleBtn.addEventListener("click",addExpense)
list.addEventListener("click",handleClick)

function handleClick(e){
    const eleman=e.target
    if(eleman.id==='delete')
    {
       const hrc=eleman.parentElement.parentElement
       const Kalan=hrc.querySelector('span').innerText
       total-=Number(Kalan)
       toplam.innerText=total

       hrc.classList.add("fall")
       hrc.addEventListener("transitionend",()=>{
        hrc.remove()

       })
      
       
      
      
    }

}