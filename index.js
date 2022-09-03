const loadAllCategorise =async ()=>{
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    return data.data.news_category;
} 

 const setCategorise =async ()=>{
  const data = await  loadAllCategorise();
  const menu = document.getElementById('allMenu');
  for(const category of data){
   const {category_id,category_name}=category;
    const a = document.createElement('a');
     a.classList.add('font-xl', 'px-3','btn','btn-ghost', 'py-2', 'text-slate-700', 'rounded-lg', 'hover:bg-slate-100', 'hover:text-slate-900')
    a.innerHTML = `<span onclick="clickCategory(${category_id})" > ${category_name}</span>
    `
   
    menu.appendChild(a);
  }
 
 }


// const displayNews =async ()=>{
//     const response = await fetch("https://openapi.programming-hero.com/api/news/category/01");
//     const data = await response.json();
//     console.log(data.data)
//     return data.data;
// } 

// const showdisplayNews =async ()=>{
//     const data = await  displayNews();
//     const showDisplay = document.getElementById('showNews');
//     for(const detail of data){
//       console.log(detail);
//       const {author,image_url,details,rating,title,total_view}=detail;
//       const div = document.createElement('div');
//        div.classList.add('grid','gap-8');
//       div.innerHTML = `<div  class="card grid grid-cols-2 card-side bg-base-100 shadow-xl">
//       <figure><img src="${image_url}" alt="Movie"></figure>
//       <div class="card-body">
//         <h2 class="card-title">${title}</h2>
//         <p>${details}</p>
//         <div class="card-actions justify-end">
//           <button class="btn btn-primary">Watch</button>
//         </div>
//       </div>
//     </div>
//       `
//       showDisplay.appendChild(div);
//     }
//    }
//    showdisplayNews();
 setCategorise();

const clickCategory=(category_id,)=>{
  fetch(`https://openapi.programming-hero.com/api/news/category/0${category_id}`)
  .then(res => res.json())
  .then(data => displayNews(data.data))
}
 const displayNews = (news) =>{
   

    const showDisplay = document.getElementById('showNews');
    for(const detail of news){
      console.log(detail);
      const {author,image_url,details,rating,title,total_view}=detail;
     const detailSlice = details.slice(0,150);
      const div = document.createElement('div');
       div.classList.add('card', 'w-full', 'bg-base-100', 'shadow-xl');
      div.innerHTML = ` 
      <figure><img src="${image_url}" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">
        ${title}
        </h2>
        <p>${detailSlice}...</p>
        <div class="grid grid-cols-4 gap-4">
          <div>
          <img class="w-1/4 rounded-full" src="${author.img}">
          <h5>${author.name}</h5>
          <small>${author.date}</small>
          </div>
          <div>01</div>
          <div>01</div>
        
          <div>09</div>
        </div>
      </div>
   
      `
      showDisplay.appendChild(div);
    }
 }
  
  


clickCategory();