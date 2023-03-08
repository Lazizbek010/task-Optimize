const telNumber = document.querySelector('.tel-number')
const openTel = document.querySelector('.open-tel')
const searchSel = document.querySelector('.search__sel')
const searchOptions = document.querySelector('.search__sel__options')
const resLangSel = document.querySelector('.res-lang-sel')
const resLangOptions = document.querySelector('.res-lang__options')


let open = true

openTel.addEventListener('click', ()=>{
    if(open){
        telNumber.textContent = '+998 71 207-77-77'
        open = false
    }else{
        telNumber.textContent = '+998 71 207-XX-XX'
        open = true
    }
})

searchSel.addEventListener('click', ()=>{
    searchOptions.classList.toggle('block')
})

resLangSel.addEventListener('click', ()=>{
    resLangOptions.classList.toggle('block')
})