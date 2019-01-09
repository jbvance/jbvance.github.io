document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();
});

const loadPortfolio = async () => {
   const url = 'data.json';
   const response = await fetch(url);
   console.log('response', response);
   const data = await response.json();
   let html = '';
   data.portfolio.forEach(item => {
    html += `
        <div class="item">
            <img src="img/${item.id}.jpg" >
            <div class="content">
                <h3>${item.projectname}</h3>
                <p>${item.desc}</p>
            </div>
        </div>
    `
   });
   // render html to DOM
   document.querySelector('#portfolio').innerHTML = html;
};