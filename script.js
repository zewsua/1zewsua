document.querySelector('.advance__button').addEventListener('click', ()=>{
    const all = document.querySelector('[text="all"]')
    const exact = document.querySelector('[text="exact"]')
    const any = document.querySelector('[text="any"]')
    const none = document.querySelector('[text="none"]')
    let endpoint = 'https://images.google.com/search?q='
    let is_search = false
    if (all.value !== ''){
        endpoint = endpoint + all.value
        is_search = true
    }
    if(exact.value !== ''){
        endpoint = endpoint + ' '+  exact.value
        is_search = true
    }
    if(any.value !== ''){
        endpoint = endpoint + ' "' + any.value + '"'
        is_search = true
    }
    if(none.value !== ''){
        endpoint = endpoint + ' -' + none.value
        is_search = true
    }
    if(is_search){
        window.location = endpoint
    }
})