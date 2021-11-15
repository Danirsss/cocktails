const API = `https://www.thecocktaildb.com/api/json/v1/1/`
const API_lIST = `${API}filter.php?c=Cocktail`

const API_SEARCH = `${API}search.php?s=` // + name
const API_GET_DETAIL = `${API}lookup.php?i=`


const getCoctailsByName= async (e)=>{
    let name = e.target.value
    if(name.length > 1){
        const res = await fetch(API_SEARCH + name)
        const req = await res.json()
        console.log(req.drinks);
        renderCoctails(req.drinks)
    }else{
        getAllCoctails()
    }
}


const getAllCoctails = async()=>{
    const res = await fetch(API_lIST)
    const req = await res.json()
    console.log(req.drinks);
    renderCoctails(req.drinks)
}
getAllCoctails()
let output = document.getElementById('output')

const renderCoctails = (drinks)=>{
    output.innerHTML=''
    drinks.map(drink=>{
        let div = document.createElement('div')
        let img = document.createElement('img')
        let name = document.createElement('h3')
        name.textContent=drink.strDrink
        img.src = drink.strDrinkThumb
        div.append(img, name)
        output.append(div)
    })
}