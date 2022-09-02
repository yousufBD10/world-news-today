const loadAllCategorise =async ()=>{
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    return data.data.news_category;
} 

 const setCategorise =async ()=>{
  const data = await  loadAllCategorise();
  const menu = document.getElementById('allMenu');
  for(const category of data){
    
    const a = document.createElement('a');
     a.classList.add('font-xl', 'px-3','btn','btn-ghost', 'py-2', 'text-slate-700', 'rounded-lg', 'hover:bg-slate-100', 'hover:text-slate-900')
    a.innerHTML = `<span> ${category.category_name}</span>
    `
    menu.appendChild(a);
  }
 }
 setCategorise();
//  loadAllCategorise();
 