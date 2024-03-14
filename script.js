let inp= document.querySelector('.inp')
let btn= document.querySelector('.btn')
let hh= document.querySelector('.hh')
let recd= document.querySelector('.btns')
let close= document.querySelector('.close')
let recdetail= document.querySelector('.recpdetail')
let rec= document.querySelector('.recipe-container')
let bg= document.querySelector('.bg')
rec.innerHTML=`<h1>search anyrecipe here </h1>`

 async function meals(inps){
    let  url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inps}
    `
    rec.innerHTML=`<h1>searching recipe......  </h1>`

    let datas=  await fetch(url)
    let data= await datas.json()
    // console.log(data.meals[0])
    rec.innerHTML='';
        data.meals.forEach(eac=>{
        let di= document.createElement('div')
         di.classList.add('divdata')
         di.innerHTML=`<img src="${eac.strMealThumb}">
         <h2>${eac. strMeal}</h2>
         <h4>${eac. strCategory}</h4><br>
         <h4>${eac. strArea} Dish</h4><br>`

         let newbtn= document.createElement('button')
         newbtn.textContent='View Recipe'
         di.appendChild(newbtn)

        //  addenent
        newbtn.addEventListener('click',()=>{
            recipdata(eac)
        })
rec.appendChild(di)
    })
}



// function ingrsd 

const fetching=(eac)=>{
    let mt='';
for(let i=1;i<=20;i++){
    const int= eac[`strIngredient${i}`];
    if(int){
        const me=eac[`strMeasure${i}`]
        mt+=`<li> ${me}${int}</li>`
    }
    else{
        break
    }
}
return mt;
}
// ul list
const recipdata=(eac)=>{
    recdetail.innerHTML=`
    <h1>${eac.strMeal} this is pizza </h1>
    <h3> ingredents</h3>
    <ul>${fetching(eac)}</ul>
    `
    recdetail.parentElement.style.display='block';
}
// closee
close.addEventListener('click',()=>{
    recdetail. parentElement.style.display='none'
})

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let inps= inp.value.trim()
    if(inp.value==''){
        // alert('please search recipe first ...')
        let body=document.querySelector('.bg')
        body.src='not.webp'
        body.style.display='block'

        // rec.style.body.backgroundcolor='black'
        
    }
    else{
   meals(inps)
    }
})