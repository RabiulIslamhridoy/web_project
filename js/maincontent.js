const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('id');
console.log(username);


const mainContent = document.getElementById('main-content');

mainContent.innerHTML = `<h1 style="text-align: center;">image  ${username}</h1>

<section style="width: 100%;">
  <div style="text-align: center; overflow: hidden;">
    <img 
      src="../src/images/${username}" 
      alt="Happy couple"  
      style="
        width: 70%;
        height: 400px;;
        max-height: 80vh;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
        display: block;
        margin: 0 auto;
      "
      onmouseover="this.style.transform='scale(1.01)'" 
      onmouseout="this.style.transform='scale(1)'"
    >
  </div>
</section>

<br>
<br>



`;
