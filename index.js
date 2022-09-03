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
       div.classList.add('card', 'w-full', 'bg-base-100', 'shadow-xl','mt-5');
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
         <div>
         <h5>${author.name? author.name:'Unknown' }</h5>
         <small class="opacity-60">${author.published_date}</small>
         </div>
          </div>

          <div class="flex">
          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="#000" stroke-width="2" d="M12,17 C9.27272727,17 6,14.2222222 6,12 C6,9.77777778 9.27272727,7 12,7 C14.7272727,7 18,9.77777778 18,12 C18,14.2222222 14.7272727,17 12,17 Z M11,12 C11,12.55225 11.44775,13 12,13 C12.55225,13 13,12.55225 13,12 C13,11.44775 12.55225,11 12,11 C11.44775,11 11,11.44775 11,12 Z"/>
</svg> <span>${total_view? total_view:'No views'}M</span>
          </div>

          <div>
          <div class="flex">
          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polygon fill="#FFC95E" fill-rule="evenodd" points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"/>
        </svg>
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <polygon fill="#FFC95E" fill-rule="evenodd" points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"/>
</svg>
<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <polygon fill="#FFC95E" fill-rule="evenodd" points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"/>
</svg>
<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <polygon fill="#FFC95E" fill-rule="evenodd" points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"/>
</svg>
<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd">
    <polygon fill="#000" fill-opacity=".2" points="12 16.667 12 2 14.5 9.5 22 9.5 16 14 19 22"/>
    <polygon fill="#FFC95E" points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2"/>
  </g>
</svg>
        </div>
          </div>
        
          <div class="bg-slat-400 grid justify-items-end">
          <button class=""><svg width="24px" height="24px" viewBox="0 0 24 24" id="magicoon-Regular" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#41416e;}</style></defs><title>arrow-right</title><g id="arrow-right-Regular"><path id="arrow-right-Regular-2" data-name="arrow-right-Regular" class="cls-1" d="M21.53,12.531l-7,7a.75.75,0,0,1-1.06-1.061l5.719-5.72H3a.75.75,0,0,1,0-1.5H19.189L13.47,5.531A.75.75,0,1,1,14.53,4.47l7,7A.75.75,0,0,1,21.53,12.531Z"/></g></svg></button>
          </div>
        </div>
      </div>
   
      `
      showDisplay.appendChild(div);
    }
 }
  
  


clickCategory();