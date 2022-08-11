let mems = [
    {id:1, tittle:'Шрекс',price:200,img:'https://www.meme-arsenal.com/memes/cca1b4b5432594b04cb02c5bdf26193b.jpg',text:'Порно шрек дракон горячая русская девочка внимательно смотрит в чувственные глаза длинноволосого мачо. Русская блудница наливает по чуть-чуть водку, чокается и пьет. Красная шапка с кокаином и сигаретой задевает члена неопытного сексуального раба. Мозолистая рука держит две белые гланды.'},
    {id:2, tittle:'Блонда просит ещё',price:300,img:'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101693/02c0a6b52cb8d571de2ac90607700c7e/960x540',text:'Горячая блондинка с фотографии просит еще. Секс на старой кровати с русскими удобствами. Горячий половой акт на диване. Студент-практикант проводит по всем местам девушку. Молодой художник хочет рисовать половой акт. Теплый анальный секс между вспотевшим от возбуждения молодым человеком и миниатюрной русоволосой девицей.'},
    {id:3, tittle:'Приторная банька',price:400,img:'https://lastfm.freetls.fastly.net/i/u/770x0/aad675a38350b86e7b7f207afaa0fd56.jpg',text:'Приторная русская беседа в бане. Беременные русские девки на сносях. Очаровательная рыжеволосая девушка в красном кружевном лифчике. Грудь маленькой девы свисает до пупка.'}
]

const toHTML = mem=>`
<div class="col">
<div class="card">
    <img class="card-img-top" style="height:300px;" src="${mem.img}" alt="${mem.tittle}">
    <div class="card-body">
      <h5 class="card-title">${mem.tittle}</h5>
      <p class="card-text" style="height:320px">${mem.text}</p>
      <a href="#" class="btn btn-primary" data-btn="price" data-id="${mem.id}">Посмотреть мем</a>
      <a href="#" class="btn btn-danger" data-btn="remove">Удалить</a>
    </div>
  </div>
</div>

`

function render() {
    const html = mems.map(toHTML).join('')
    document.querySelector('#mems').innerHTML=html
}

render()

const modal =$.modal({
    tittle:'ШРЭКСИНГ НАЧАЛСЯ',
    closable: true,
    width:'400px',
    footerButtons:[
        {text:'OK', type:'primary', handler(){
            console.log ('Primary btn clicked')
            modal.close()
        }},
        {text:'Я ПИДОР', type:'danger', handler(){
            console.log ('Danger btn clicked')
            modal.close()
        }
    }
    ]
    
})

document.addEventListener('click',event =>{
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    
    if (btnType==='price'){
        const mem = mems.find(f=>f.id===id)
        modal.setContent(` <h4>ВАШ ВИНДОВС ЗАБЛОКИРОВАН</h4> <p>ЧТОБЫ РАЗБЛОКИРОВАТЬ ВИНДОВС НУЖНО ПЕРЕВЕСТИ <strong> ${mem.price}$</strong>, СБЕРБАНК ПО НОМЕРУ ТЕЛЕФОНА ПЕРЕВОД 7-901-901-83-16, Никита Сергеевич К.</p>`),
        modal.open()

        console.log(id,mem)
    }
})