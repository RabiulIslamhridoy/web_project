// home page control
// right click disabled

// document.addEventListener("contextmenu", function(event) {
//     event.preventDefault();
// });












function loadContenthome() {
    const container = document.getElementById("main-content");
    container.innerHTML = "";
    const card = document.createElement("main-content");

    card.classList.add("card");
    card.innerHTML = `
    <section style="width: 100%;">
  <div style="text-align: center; overflow: hidden;">
    <img 
      src="./src/images/home/main_banner.jpg" 
      alt="Happy couple"  
      style="
        width: 100%;
        height: auto;
        max-height: 80vh;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
        display: block;
      "
      onmouseover="this.style.transform='scale(1.01)'" 
      onmouseout="this.style.transform='scale(1)'"
    >
  </div>
</section>





<section style="margin-top: 40px;">
  <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: space-between;">

    <!-- Card Template -->
    <div style="display: flex; width: 32%; min-width: 300px; height: 100px; border-radius: 8px; overflow: hidden; position: relative;">
      <img src="./src/images/home/newsfeed1.jpg" alt="" style="width: 40%; height: 100%; object-fit: cover; transition: transform 0.3s ease-in-out;" onmouseover="this.style.transform='scale(1.09)'" onmouseout="this.style.transform='scale(1)'">
      <div style="padding: 10px; width: 60%;">
        <a href="./js/maincontent.html?id=home/newsfeed1.jpg" style="text-decoration: none; color: #000;">
          <h2 style="font-size: 0.9rem; margin: 0;">প্রতিদিন স্বাস্থ্য সেবা জানতে ভিজিট করুন</h2>
        </a>
      </div>
    </div>

    <!-- Repeat for other cards -->

    <div style="display: flex; width: 32%; min-width: 300px; height: 100px; border-radius: 8px; overflow: hidden; position: relative;">
      <img src="./src/images/home/newsfeed2.jpg" alt="" style="width: 40%; height: 100%; object-fit: cover; transition: transform 0.3s ease-in-out;" onmouseover="this.style.transform='scale(1.09)'" onmouseout="this.style.transform='scale(1)'">
      <div style="padding: 10px; width: 60%;">
        <a href="./js/maincontent.html?id=home/newsfeed2.jpg" style="text-decoration: none; color: #000;">
          <h2 style="font-size: 0.9rem; margin: 0;">ব্যায়াম সর্ম্পরকিত তথ্য জানতে ভিজিট করুন</h2>
        </a>
      </div>
    </div>

    <div style="display: flex; width: 32%; min-width: 300px; height: 100px; border-radius: 8px; overflow: hidden; position: relative;">
      <img src="./src/images/home/newsfeed3.jpg" alt="" style="width: 40%; height: 100%; object-fit: cover; transition: transform 0.3s ease-in-out;" onmouseover="this.style.transform='scale(1.09)'" onmouseout="this.style.transform='scale(1)'">
      <div style="padding: 10px; width: 60%;">
        <a href="./js/maincontent.html?id=home/newsfeed3.jpg" style="text-decoration: none; color: #000;">
          <h2 style="font-size: 0.9rem; margin: 0;">প্রতিদিন খাবার সম্পর্কে জানতে ভিজিট করুন</h2>
        </a>
      </div>
    </div>

  </div>
</section>

<section style="margin-top: 40px;">
  <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: space-between;">

    <div style="display: flex; width: 32%; min-width: 300px; height: 100px; border-radius: 8px; overflow: hidden; position: relative;">
      <img src="./src/images/home/newsfeed4.jpg" alt="" style="width: 40%; height: 100%; object-fit: cover; transition: transform 0.3s ease-in-out;" onmouseover="this.style.transform='scale(1.09)'" onmouseout="this.style.transform='scale(1)'">
      <div style="padding: 10px; width: 60%;">
        <a href="./js/maincontent.html?id=home/newsfeed4.jpg" style="text-decoration: none; color: #000;">
          <h2 style="font-size: 0.9rem; margin: 0;">কাজের সময় সম্পর্কে জানুন</h2>
        </a>
      </div>
    </div>

    <div style="display: flex; width: 32%; min-width: 300px; height: 100px; border-radius: 8px; overflow: hidden; position: relative;">
      <img src="./src/images/home/newsfeed5.jpg" alt="" style="width: 40%; height: 100%; object-fit: cover; transition: transform 0.3s ease-in-out;" onmouseover="this.style.transform='scale(1.09)'" onmouseout="this.style.transform='scale(1)'">
      <div style="padding: 10px; width: 60%;">
        <a href="./js/maincontent.html?id=home/newsfeed5.jpg" style="text-decoration: none; color: #000;">
          <h2 style="font-size: 0.9rem; margin: 0;">ঘুম সম্পর্কিত জানতে ভিজিট করুন</h2>
        </a>
      </div>
    </div>

    <div style="display: flex; width: 32%; min-width: 300px; height: 100px; border-radius: 8px; overflow: hidden; position: relative;">
      <img src="./src/images/home/newsfeed6.jpg" alt="" style="width: 40%; height: 100%; object-fit: cover; transition: transform 0.3s ease-in-out;" onmouseover="this.style.transform='scale(1.09)'" onmouseout="this.style.transform='scale(1)'">
      <div style="padding: 10px; width: 60%;">
        <a href="./js/maincontent.html?id=home/newsfeed6.jpg" style="text-decoration: none; color: #000;">
          <h2 style="font-size: 0.9rem; margin: 0;">প্রতিদিন পড়াশোনার সময় সম্পর্কে জানুন</h2>
        </a>
      </div>
    </div>

  </div>
</section>








<section style="margin-top: 40px;">
  <div>
    <h2 style="font-size: 24px; margin: 20px 0; border-bottom: 3px solid #ddd; padding-bottom: 10px;">Find Health Care</h2>
  </div>

  <div class="card-container">
    <div class="card">
      <img src="./src/images/home/hospital_vector.jpg" alt="Hospital">
      <h1>Hospital</h1>
    </div>

    <div class="card">
      <img src="./src/images/home/appoitment.jpg" alt="Appointment">
      <h1>Appointment</h1>
    </div>
    <div class="card">
      <img src="./src/images/home/doctor.jpg" alt="Doctor">
      <h1>Doctor & Specialist</h1>
    </div>
    <div class="card">
      <img src="./src/images/home/ambulance.jpg" alt="Ambulance">
      <h1>Ambulance Booking</h1>
    </div>
    <div class="card">
      <img src="./src/images/home/campus.jpg" alt="Health Camps">
      <h1>Health Camps</h1>
    </div>


    <div id="hiddenCards" style="display: none; flex-wrap: wrap; gap: 20px;">
    <div class="card">
      <img src="./src/images/home/doctor.jpg" alt="Doctor">
      <h1>Doctor & Specialist</h1>
    </div>
    <div class="card">
      <img src="./src/images/home/ambulance.jpg" alt="Ambulance">
      <h1>Ambulance Booking</h1>
    </div>
    <div class="card">
      <img src="./src/images/home/campus.jpg" alt="Health Camps">
      <h1>Health Camps</h1>
    </div>
  </div>


  </div>














  
</section>


<section style="text-align: right;margin-top: 10px;">
  <div">
  <button id="viewAllBtn" style="background-color: #ffffff; color: blue; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-right: 20px; ">View All</button>
  </section>



<section style="margin-top:40px;">
  <div>
    <h2 style="font-size: 24px; margin: 20px 0; border-bottom: 3px solid #ddd; padding-bottom: 10px;">
      Health Resources
    </h2>
  </div>

  <div class="health-container">

    <div class="health-card">
      <img src="./src/images/home/mother_care.jpg" alt="mother_care">
      <h1>মাতৃস্বাস্থ্য</h1>
    </div>

    <div class="health-card">
      <img src="./src/images/home/baby_care.jpg" alt="baby_care">
      <h1>শিশুর যত্ন</h1>
    </div>

    <a href="./js/health_resources/family_planing.html" class="health-card">
      <img src="./src/images/home/family_palaning.jpg" alt="family_planing">
      <h1>পরিবার পরিকল্পনা</h1>
    </a>

    <div class="health-card">
      <img src="./src/images/home/general_health.jpg" alt="general_health">
      <h1>সাধারণ স্বাস্থ্য</h1>
    </div>

    <div class="health-card">
      <img src="./src/images/home/health&fitness.jpg" alt="health_fitness">
      <h1>পুষ্টি ও ফিটনেস</h1>
    </div>
    
    
    
    
    <div id="hiddenCardshealthresources" style="display: none; flex-wrap: wrap; gap: 20px;">
    <div class="card">
      <img src="./src/images/home/doctor.jpg" alt="Doctor">
      <h1>Doctor & Specialist</h1>
    </div>
    <div class="card">
      <img src="./src/images/home/ambulance.jpg" alt="Ambulance">
      <h1>Ambulance Booking</h1>
    </div>
    <div class="card">
      <img src="./src/images/home/campus.jpg" alt="Health Camps">
      <h1>Health Camps</h1>
    </div>
  </div>


  </div>
</section>



<section style="text-align: right;margin-top: 10px;">
  <div">
  <button id="viewAllBtnhealthresources" style="background-color: #ffffff; color: blue; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-right: 20px; ">View All</button>
  </section>









<section style="margin-top:40px;">
  <div>
    <h2 style="font-size: 24px; margin: 20px 0; border-bottom: 3px solid #ddd; padding-bottom: 10px;">
      Health Education
    </h2>
  </div>

  <div class="education-container">

    <div class="education-card">
      <img src="./src/images/home/indrastrial_edu.jpg" alt="Institutional Networking">
      <h1>Institutional Networking<br>(Connecting with Institutes and Students)</h1>
    </div>

    <div class="education-card">
      <img src="./src/images/home/Managing_Admission.jpg" alt="Managing Admission">
      <h1>Managing Admission</h1>
    </div>

    <a href="#" class="education-card">
      <img src="./src/images/home/course_sort.jpg" alt="Courses">
      <h1>Courses (Short Course / Long Course)</h1>
    </a>

    <div class="education-card">
      <img src="./src/images/home/traning.jpg" alt="Training">
      <h1>Training</h1>
    </div>

    <div class="education-card">
      <img src="./src/images/home/intranship.jpg" alt="Internship">
      <h1>Internship</h1>
    </div>
    <div id="hiddenCardshealtheducation" style="display: none; flex-wrap: wrap; gap: 20px;">
    <div class="card">
      <img src="./src/images/home/doctor.jpg" alt="Doctor">
      <h1>Doctor & Specialist</h1>
    </div>
    <div class="card">
      <img src="./src/images/home/ambulance.jpg" alt="Ambulance">
      <h1>Ambulance Booking</h1>
    </div>
    <div class="card">
      <img src="./src/images/home/campus.jpg" alt="Health Camps">
      <h1>Health Camps</h1>
    </div>
  </div>


  </div>
</section>



<section style="text-align: right;margin-top: 10px;">
  <div">
  <button id="viewAllBtnhealtheducation" style="background-color: #ffffff; color: blue; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-right: 20px; ">View All</button>
  </section>




 `;
    container.appendChild(card);



    const btn = document.getElementById('viewAllBtn');
    const hiddenCards = document.getElementById('hiddenCards');
  
    btn.addEventListener('click', () => {
      if (hiddenCards.style.display === 'none') {
        hiddenCards.style.display = 'flex';
        btn.textContent = 'View Less';
      } else {
        hiddenCards.style.display = 'none';
        btn.textContent = 'View All';
      }
    });

    const viewAllBtnhealthresources = document.getElementById('viewAllBtnhealthresources');
    const hiddenCardshealthresources = document.getElementById('hiddenCardshealthresources');
  
    viewAllBtnhealthresources.addEventListener('click', () => {
      if (hiddenCardshealthresources.style.display === 'none') {
        hiddenCardshealthresources.style.display = 'flex';
        viewAllBtnhealthresources.textContent = 'View Less';
      } else {
        hiddenCardshealthresources.style.display = 'none';
        viewAllBtnhealthresources.textContent = 'View All';
      }
    });




    const viewAllBtnhealtheducation = document.getElementById('viewAllBtnhealtheducation');
    const hiddenCardshealtheducation = document.getElementById('hiddenCardshealtheducation');
  
    viewAllBtnhealtheducation.addEventListener('click', () => {
      if (hiddenCardshealtheducation.style.display === 'none') {
        hiddenCardshealtheducation.style.display = 'flex';
        viewAllBtnhealtheducation.textContent = 'View Less';
      } else {
        hiddenCardshealtheducation.style.display = 'none';
        viewAllBtnhealtheducation.textContent = 'View All';
      }
    });













    
    homeMiddle();
}






       
  











function homeMiddle(){

    const container = document.getElementById("main-content");
   
    const card = document.createElement("main-content");

    card.classList.add("card");
    card.innerHTML = `
    <div style="margin-top:40px;">
    <h2 style="font-size: 24px; margin: 20px 0; border-bottom: 3px solid #ddd; padding-bottom: 10px;">
      Tranding podcasts
    </h2>
  </div>

<div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 20px; margin-bottom: 40px;">

  <!-- Card Template -->
  <div style="flex: 1 1 300px; min-width: 250px; box-shadow: 0 0 10px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; background: white; transition: transform 0.3s ease; cursor: pointer;" 
       onmouseover="this.style.transform='scale(1.02)'" 
       onmouseout="this.style.transform='scale(1)'">
       
    <img src="./src/images/home/middlesection_image1.jpg" alt="DNA Test" 
         style="width: 100%; height: 180px; object-fit: cover; display: block;">
         
    <div style="padding: 15px; height: 150px;">
      <h3 style="font-size: 16px; margin: 0 0 10px;">Decoding Your DNA: What Genetic Testing Reveals</h3>
      <p style="font-size: 14px; color: #555;">
        In this podcast, Dr. Huma Q. Rana breaks down genetic testing, its benefits, and what the results could mean for your health and your family.
      </p>
    </div>
  </div>

  <div style="flex: 1 1 300px; min-width: 250px; box-shadow: 0 0 10px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; background: white; transition: transform 0.3s ease; cursor: pointer;" 
       onmouseover="this.style.transform='scale(1.02)'" 
       onmouseout="this.style.transform='scale(1)'">
       
    <img src="./src/images/home/middlesection_image2.jpg" alt="Diet" 
         style="width: 100%; height: 180px; object-fit: cover; display: block;">
         
    <div style="padding: 15px; height: 150px;">
      <h3 style="font-size: 16px; margin: 0 0 10px;">How The Portfolio Diet Reduces Cholesterol Levels</h3>
      <p style="font-size: 14px; color: #555;">
        The Portfolio Diet focuses on lowering cholesterol, not weight loss. Discover the cholesterol-fighting foods to include in your diet.
      </p>
    </div>
  </div>

  <div style="flex: 1 1 300px; min-width: 250px; box-shadow: 0 0 10px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; background: white; transition: transform 0.3s ease; cursor: pointer;" 
       onmouseover="this.style.transform='scale(1.02)'" 
       onmouseout="this.style.transform='scale(1)'">
       
    <img src="./src/images/home/middlesection_image3.jpg" alt="Knee Care" 
         style="width: 100%; height: 180px; object-fit: cover; display: block;">
         
    <div style="padding: 15px; height: 150px;">
      <h3 style="font-size: 16px; margin: 0 0 10px;">Why Cartilage Restoration Might Delay Your Knee Replacement</h3>
      <p style="font-size: 14px; color: #555;">
        Knee replacement relieves severe pain but doesn’t last forever. Cartilage restoration could be an option -- here's what to know.
      </p>
    </div>
  </div>

</div>






<div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 20px; margin-bottom: 40px;">

  <!-- Card Template -->
  <div style="display:flex;flex: 1 1 300px; min-width: 250px; box-shadow: 0 0 10px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; background: white; transition: transform 0.3s ease; cursor: pointer;" 
       onmouseover="this.style.transform='scale(1.01)'" 
       onmouseout="this.style.transform='scale(1)'">
       
    <img src="./src/images/home/middlesection_image1.jpg" alt="DNA Test" 
         style="width: 50%; height: 300px; object-fit: cover; display: block;">
         
    <div style="padding: 25px; height: 150px;">
      <h3 style="font-size: 16px; margin: 0 0 10px;">Decoding Your DNA: What Genetic Testing Reveals</h3>
      <p style="font-size: 14px; color: #555;">
        In this podcast, Dr. Huma Q. Rana breaks down genetic testing, its benefits, and what the results could mean for your health and your family.
      </p>
    </div>
  </div>
  
  </div>

</div>











<section style="margin-top: 40px;">
  <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: space-between;">

    <!-- Card Template -->
    <div style="display: flex; width: 32%; min-width: 300px; height: 100px; border-radius: 8px; overflow: hidden; position: relative;">
      <img src="./src/images/home/newsfeed1.jpg" alt="" style="width: 40%; height: 100%; object-fit: cover; transition: transform 0.3s ease-in-out;" onmouseover="this.style.transform='scale(1.09)'" onmouseout="this.style.transform='scale(1)'">
      <div style="padding: 10px; width: 60%;">
        <a href="./js/maincontent.html?id=home/newsfeed1.jpg" style="text-decoration: none; color: #000;">
          <h2 style="font-size: 0.9rem; margin: 0;">প্রতিদিন স্বাস্থ্য সেবা জানতে ভিজিট করুন</h2>
        </a>
      </div>
    </div>

    <!-- Repeat for other cards -->

    <div style="display: flex; width: 32%; min-width: 300px; height: 100px; border-radius: 8px; overflow: hidden; position: relative;">
      <img src="./src/images/home/newsfeed2.jpg" alt="" style="width: 40%; height: 100%; object-fit: cover; transition: transform 0.3s ease-in-out;" onmouseover="this.style.transform='scale(1.09)'" onmouseout="this.style.transform='scale(1)'">
      <div style="padding: 10px; width: 60%;">
        <a href="./js/maincontent.html?id=home/newsfeed2.jpg" style="text-decoration: none; color: #000;">
          <h2 style="font-size: 0.9rem; margin: 0;">ব্যায়াম সর্ম্পরকিত তথ্য জানতে ভিজিট করুন</h2>
        </a>
      </div>
    </div>

    <div style="display: flex; width: 32%; min-width: 300px; height: 100px; border-radius: 8px; overflow: hidden; position: relative;">
      <img src="./src/images/home/newsfeed3.jpg" alt="" style="width: 40%; height: 100%; object-fit: cover; transition: transform 0.3s ease-in-out;" onmouseover="this.style.transform='scale(1.09)'" onmouseout="this.style.transform='scale(1)'">
      <div style="padding: 10px; width: 60%;">
        <a href="./js/maincontent.html?id=home/newsfeed3.jpg" style="text-decoration: none; color: #000;">
          <h2 style="font-size: 0.9rem; margin: 0;">প্রতিদিন খাবার সম্পর্কে জানতে ভিজিট করুন</h2>
        </a>
      </div>
    </div>

  </div>
</section>

<section style="margin-top: 40px;">
  <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: space-between;">

    <div style="display: flex; width: 32%; min-width: 300px; height: 100px; border-radius: 8px; overflow: hidden; position: relative;">
      <img src="./src/images/home/newsfeed4.jpg" alt="" style="width: 40%; height: 100%; object-fit: cover; transition: transform 0.3s ease-in-out;" onmouseover="this.style.transform='scale(1.09)'" onmouseout="this.style.transform='scale(1)'">
      <div style="padding: 10px; width: 60%;">
        <a href="./js/maincontent.html?id=home/newsfeed4.jpg" style="text-decoration: none; color: #000;">
          <h2 style="font-size: 0.9rem; margin: 0;">কাজের সময় সম্পর্কে জানুন</h2>
        </a>
      </div>
    </div>

    <div style="display: flex; width: 32%; min-width: 300px; height: 100px; border-radius: 8px; overflow: hidden; position: relative;">
      <img src="./src/images/home/newsfeed5.jpg" alt="" style="width: 40%; height: 100%; object-fit: cover; transition: transform 0.3s ease-in-out;" onmouseover="this.style.transform='scale(1.09)'" onmouseout="this.style.transform='scale(1)'">
      <div style="padding: 10px; width: 60%;">
        <a href="./js/maincontent.html?id=home/newsfeed5.jpg" style="text-decoration: none; color: #000;">
          <h2 style="font-size: 0.9rem; margin: 0;">ঘুম সম্পর্কিত জানতে ভিজিট করুন</h2>
        </a>
      </div>
    </div>

    <div style="display: flex; width: 32%; min-width: 300px; height: 100px; border-radius: 8px; overflow: hidden; position: relative;">
      <img src="./src/images/home/newsfeed6.jpg" alt="" style="width: 40%; height: 100%; object-fit: cover; transition: transform 0.3s ease-in-out;" onmouseover="this.style.transform='scale(1.09)'" onmouseout="this.style.transform='scale(1)'">
      <div style="padding: 10px; width: 60%;">
        <a href="./js/maincontent.html?id=home/newsfeed6.jpg" style="text-decoration: none; color: #000;">
          <h2 style="font-size: 0.9rem; margin: 0;">প্রতিদিন পড়াশোনার সময় সম্পর্কে জানুন</h2>
        </a>
      </div>
    </div>

  </div>
</section>







  
    `;

    container.appendChild(card);
}


loadContenthome()