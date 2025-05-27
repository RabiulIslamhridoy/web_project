// home page control
// right click disabled

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});












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















<section style="margin-top: 40px; ">

  <div style="display: flex; gap: 10px; flex-wrap: wrap;">
 
    <!-- Card 1 -->
    <div style="
      display: flex;
      width: 32%;
      min-width: 300px;
      height: 100px;
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      
    ">

    
      <img src="./src/images/home/newsfeed1.jpg" 
           alt="" 
           style="width: 40%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s ease-in-out;" 
           onmouseover="this.style.transform='scale(1.09)'" 
           onmouseout="this.style.transform='scale(1)'" />
        
      <h1 style="
        margin: 0;
        padding: 10px;
        width: 65%;
        font-size: 0.9rem;
        
      ">  <a href="./js/maincontent.html?id=home/newsfeed1.jpg" style="text-decoration: none;color: #000;"> 
      প্রতিদিন স্বাস্থ্য সেবা জানতে ভিজিট করুন
       
      </h1>
      </a>
    </div>

    <!-- Card 2 -->
    <div style="
      display: flex;
      width: 32%;
      min-width: 300px;
      height: 100px;
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      
    ">
      <img src="./src/images/home/newsfeed2.jpg" 
           alt="" 
           style="width: 40%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s ease-in-out;" 
           onmouseover="this.style.transform='scale(1.09)'" 
           onmouseout="this.style.transform='scale(1)'" />

      <h1 style="
        margin: 0;
        padding: 10px;
        width: 65%;
        font-size: 0.9rem;
        color: #000;
      ">
      <a href="./js/maincontent.html?id=home/newsfeed2.jpg" style="text-decoration: none;color: #000;"> 
      ব্যায়াম সর্ম্পরকিত তথ্য জানতে ভিজিট করুন 
        </a>
      </h1>
    </div>

    <!-- Card 3 -->
    <div style="
    display: flex;
    width: 32%;
    min-width: 300px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    
  ">
    <img src="./src/images/home/newsfeed3.jpg" 
         alt="" 
         style="width: 40%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s ease-in-out;" 
         onmouseover="this.style.transform='scale(1.09)'" 
         onmouseout="this.style.transform='scale(1)'" />

    <h1 style="
      margin: 0;
      padding: 10px;
      width: 65%;
      font-size: 0.9rem;
      color: #000;
    "><a href="./js/maincontent.html?id=home/newsfeed3.jpg" style="text-decoration: none;color: #000;"> 
    প্রতিদিন খাবার সম্পর্কে জানতে ভিজিট করুন 
     </a> 
    </h1>
  </div>

</section>

<section style="margin-top: 40px;">

  <div style="display: flex; gap: 10px; flex-wrap: wrap;">

    <!-- Card 4 -->
    <div style="
      display: flex;
      width: 32%;
      min-width: 300px;
      height: 100px;
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      
    ">
      <img src="./src/images/home/newsfeed4.jpg" 
           alt="" 
           style="width: 40%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s ease-in-out;" 
           onmouseover="this.style.transform='scale(1.09)'" 
           onmouseout="this.style.transform='scale(1)'" />

      <h1 style="
        margin: 0;
        padding: 10px;
        width: 65%;
        font-size: 0.9rem;
        color: #000;
      "><a href="./js/maincontent.html?id=home/newsfeed4.jpg" style="text-decoration: none;color: #000;"> 
      কাজের সময় সম্পর্কে জানুন 
      </h1>
      </a>
    </div>

    <!-- Card 5 -->
    <div style="
      display: flex;
      width: 32%;
      min-width: 300px;
      height: 100px;
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      
    ">
      <img src="./src/images/home/newsfeed5.jpg" 
           alt="" 
           style="width: 40%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s ease-in-out;" 
           onmouseover="this.style.transform='scale(1.09)'" 
           onmouseout="this.style.transform='scale(1)'" />

      <h1 style="
        margin: 0;
        padding: 10px;
        width: 65%;
        font-size: 0.9rem;
        color: #000;
      ">
      <a href="./js/maincontent.html?id=home/newsfeed5.jpg" style="text-decoration: none;color: #000;"> 
      ঘুম সম্পর্কিত জানতে ভিজিট করুন 
      </h1>
      </a>
    </div>

    <!-- Card 6 -->
    <div style="
    display: flex;
    width: 32%;
    min-width: 300px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    
  ">
    <img src="./src/images/home/newsfeed6.jpg" 
         alt="" 
         style="width: 40%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s ease-in-out;" 
         onmouseover="this.style.transform='scale(1.09)'" 
         onmouseout="this.style.transform='scale(1)'" />

    <h1 style="
      margin: 0;
      padding: 10px;
      width: 65%;
      font-size: 0.9rem;
      color: #000;
    ">
    <a href="./js/maincontent.html?id=home/newsfeed6.jpg" style="text-decoration: none;color: #000;">
    প্রতিদিন পড়াশোনার সময় সম্পর্কে জানুন 
    </h1>
    </a>
  </div>
  
</section>







































    <section style="margin-top:40px;">
    <div>
    <h2 style=" font-size: 24px; margin: 20px 0;border-bottom: 3px solid #ddd; padding-bottom:10px;">Find Health Care</h2>
    </div>

  <div style="
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  ">


            
            <div style="
            width: 19%;
            min-width: 100px;
            max-height: 400px;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            ">
            <img src="./src/images/home/hospital_vector.jpg"
                alt="Happy couple"
                style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out;"
                
                onmouseover="this.style.transform='scale(1.09)'" 
                onmouseout="this.style.transform='scale(1)'"
                >

            <h1 style="
                position: absolute;
                bottom: 0;
                left: 0;
                margin: 0;
                width: 100%;
                color: white;
                background: rgba(0, 0, 0, 0.6);
                padding: 10px;
                font-size: 0.9rem;
                text-align: center;
                box-sizing: border-box;
            ">
               Hospital
            </h1>
            </div>
   

                <div style="
                width: 19%;
                min-width: 100px;
                max-height: 400px;
                position: relative;
                overflow: hidden;
                border-radius: 8px;
            ">
                <img src="./src/images/home/appoitment.jpg" 
                    alt="Happy couple" 
                    style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out; "
                    onmouseover="this.style.transform='scale(1.09)'" 
                    onmouseout="this.style.transform='scale(1)'"
                    
                    >
            
                <h1 style="
                position: absolute;
                bottom: 0;
                left: 0;
                margin: 0;
                width: 100%;
                color: white;
                background: rgba(0, 0, 0, 0.6);
                padding: 10px;
                font-size: 0.9rem;
                text-align: center;
                box-sizing: border-box;
                ">
               Appointment
                </h1>
            </div>
            <div style="
            width: 19%;
            min-width: 100px;
            max-height: 400px;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            ">
            <img src="./src/images/home/doctor.jpg" 
                alt=""
                style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out;"
                onmouseover="this.style.transform='scale(1.09)'" 
                onmouseout="this.style.transform='scale(1)'"
                
                >
            
            <h1 style="
                position: absolute;
                bottom: 0;
                left: 0;
                margin: 0;
                width: 100%;
                color: white;
                background: rgba(0, 0, 0, 0.6);
                padding: 10px;
                font-size: 0.9rem;
                text-align: center;
                box-sizing: border-box;
            ">
               Doctor & Specialist
            </h1>

            </div>
            <div style="
            width: 19%;
            min-width: 100px;
            max-height: 400px;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
        ">
            <img src="./src/images/home/ambulance.jpg" 
                alt="Happy couple" 
                style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out; "
                onmouseover="this.style.transform='scale(1.09)'" 
                onmouseout="this.style.transform='scale(1)'"
                
                >
        
            <h1 style="
            position: absolute;
            bottom: 0;
            left: 0;
            margin: 0;
            width: 100%;
            color: white;
            background: rgba(0, 0, 0, 0.6);
            padding: 10px;
            font-size: 0.9rem;
            text-align: center;
            box-sizing: border-box;
            ">
            Ambulance Booking
            </h1>
        </div>
        <div style="
        width: 19%;
        min-width: 100px;
        max-height: 400px;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        ">
        <img src="./src/images/home/campus.jpg" 
            alt="" 
            style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out; " 
            onmouseover="this.style.transform='scale(1.09)'" 
            onmouseout="this.style.transform='scale(1)'"
            
            >
        
        <h1 style="
            position: absolute;
            bottom: 0;
            left: 0;
            margin: 0;
            width: 100%;
            color: white;
            background: rgba(0, 0, 0, 0.6);
            padding: 10px;
            font-size: 0.9rem;
            text-align: center;
            box-sizing: border-box;
        ">
        Health Camps
        </h1>
        </div>
         
  </div>
</section>

















<section style="margin-top:40px;">
    <div>
    <h2 style=" font-size: 24px; margin: 20px 0;border-bottom: 3px solid #ddd; padding-bottom:10px;">Health Resources</h2>
    </div>

  <div style="
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  ">


            
            <div style="
            width: 19%;
            min-width: 100px;
            max-height: 400px;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            ">
            <img src="./src/images/home/mother_care.jpg"
                alt="mother_care"
                style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out;"
                
                onmouseover="this.style.transform='scale(1.09)'" 
                onmouseout="this.style.transform='scale(1)'"
                >

            <h1 style="
                position: absolute;
                bottom: 0;
                left: 0;
                margin: 0;
                width: 100%;
                color: white;
                background: rgba(0, 0, 0, 0.6);
                padding: 10px;
                font-size: 0.9rem;
                text-align: center;
                box-sizing: border-box;
            ">
            মাতৃস্বাস্থ্য
            </h1>
            </div>
   

                <div style="
                width: 19%;
                min-width: 100px;
                max-height: 400px;
                position: relative;
                overflow: hidden;
                border-radius: 8px;
            ">
                <img src="./src/images/home/baby_care.jpg" 
                    alt="Happy couple" 
                    style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out; "
                    onmouseover="this.style.transform='scale(1.09)'" 
                    onmouseout="this.style.transform='scale(1)'"
                    
                    >
            
                <h1 style="
                position: absolute;
                bottom: 0;
                left: 0;
                margin: 0;
                width: 100%;
                color: white;
                background: rgba(0, 0, 0, 0.6);
                padding: 10px;
                font-size: 0.9rem;
                text-align: center;
                box-sizing: border-box;
                ">
                শিশুর যত্ন
                </h1>

            </div>
            <div  style="
            width: 19%;
            min-width: 100px;
            max-height: 400px;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            ">
            <a href="./js/health_resources/family_planing.html"">
            <img src="./src/images/home/family_palaning.jpg" 
                alt=""
                style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out;"
                onmouseover="this.style.transform='scale(1.09)'" 
                onmouseout="this.style.transform='scale(1)'"
                
                >
            
            <h1 style="
                position: absolute;
                bottom: 0;
                left: 0;
                margin: 0;
                width: 100%;
                color: white;
                background: rgba(0, 0, 0, 0.6);
                padding: 10px;
                font-size: 0.9rem;
                text-align: center;
                box-sizing: border-box;
            ">
            পরিবার পরিকল্পনা
            </h1>
            </a>
            </div>
            <div style="
            width: 19%;
            min-width: 100px;
            max-height: 400px;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
        ">
            <img src="./src/images/home/general_health.jpg" 
                alt="Happy couple" 
                style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out; "
                onmouseover="this.style.transform='scale(1.09)'" 
                onmouseout="this.style.transform='scale(1)'"
                
                >
        
            <h1 style="
            position: absolute;
            bottom: 0;
            left: 0;
            margin: 0;
            width: 100%;
            color: white;
            background: rgba(0, 0, 0, 0.6);
            padding: 10px;
            font-size: 0.9rem;
            text-align: center;
            box-sizing: border-box;
            ">
            সাধারণ স্বাস্থ্য
            </h1>
        </div>
        <div style="
        width: 19%;
        min-width: 100px;
        max-height: 400px;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        ">
        <img src="./src/images/home/health&fitness.jpg" 
            alt="" 
            style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out; " 
            onmouseover="this.style.transform='scale(1.09)'" 
            onmouseout="this.style.transform='scale(1)'"
            
            >
        
        <h1 style="
            position: absolute;
            bottom: 0;
            left: 0;
            margin: 0;
            width: 100%;
            color: white;
            background: rgba(0, 0, 0, 0.6);
            padding: 10px;
            font-size: 0.9rem;
            text-align: center;
            box-sizing: border-box;
        ">
        পুষ্টি ও ফিটনেস
        </h1>
        </div>
         
  </div>
</section>


















<section style="margin-top:40px;">
    <div>
    <h2 style=" font-size: 24px; margin: 20px 0;border-bottom: 3px solid #ddd; padding-bottom:10px;">Health Education</h2>
    </div>

  <div style="
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  ">


            
            <div style="
            width: 19%;
            min-width: 100px;
            max-height: 400px;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            ">
            <img src="./src/images/home/indrastrial_edu.jpg"
                alt="mother_care"
                style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out;"
                
                onmouseover="this.style.transform='scale(1.09)'" 
                onmouseout="this.style.transform='scale(1)'"
                >

            <h1 style="
                position: absolute;
                bottom: 0;
                left: 0;
                margin: 0;
                width: 100%;
                color: white;
                background: rgba(0, 0, 0, 0.6);
                padding: 10px;
                font-size: 0.9rem;
                text-align: center;
                box-sizing: border-box;
            ">
            Institutional Networking
            (Connecting with Institutes and Students)
            </h1>
            </div>
   

                <div style="
                width: 19%;
                min-width: 100px;
                max-height: 400px;
                position: relative;
                overflow: hidden;
                border-radius: 8px;
            ">
                <img src="./src/images/home/Managing_Admission.jpg" 
                    alt="Happy couple" 
                    style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out; "
                    onmouseover="this.style.transform='scale(1.09)'" 
                    onmouseout="this.style.transform='scale(1)'"
                    
                    >
            
                <h1 style="
                position: absolute;
                bottom: 0;
                left: 0;
                margin: 0;
                width: 100%;
                color: white;
                background: rgba(0, 0, 0, 0.6);
                padding: 10px;
                font-size: 0.9rem;
                text-align: center;
                box-sizing: border-box;
                ">
                Managing Admission
                </h1>

            </div>
            <div  style="
            width: 19%;
            min-width: 100px;
            max-height: 400px;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            ">
            <a href="#" onclick="">
            <img src="./src/images/home/course_sort.jpg" 
                alt=""
                style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out;"
                onmouseover="this.style.transform='scale(1.09)'" 
                onmouseout="this.style.transform='scale(1)'"
                
                >
            
            <h1 style="
                position: absolute;
                bottom: 0;
                left: 0;
                margin: 0;
                width: 100%;
                color: white;
                background: rgba(0, 0, 0, 0.6);
                padding: 10px;
                font-size: 0.9rem;
                text-align: center;
                box-sizing: border-box;
            ">
            Courses (Short Course/ Long Course)
            </h1>
            </a>
            </div>
            <div style="
            width: 19%;
            min-width: 100px;
            max-height: 400px;
            position: relative;
            overflow: hidden;
            border-radius: 8px;
        ">
            <img src="./src/images/home/traning.jpg" 
                alt="Happy couple" 
                style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out; "
                onmouseover="this.style.transform='scale(1.09)'" 
                onmouseout="this.style.transform='scale(1)'"
                
                >
        
            <h1 style="
            position: absolute;
            bottom: 0;
            left: 0;
            margin: 0;
            width: 100%;
            color: white;
            background: rgba(0, 0, 0, 0.6);
            padding: 10px;
            font-size: 0.9rem;
            text-align: center;
            box-sizing: border-box;
            ">
            Training
            </h1>
        </div>
        <div style="
        width: 19%;
        min-width: 100px;
        max-height: 400px;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        ">
        <img src="./src/images/home/intranship.jpg" 
            alt="" 
            style="width: 100%; height: auto; object-fit: cover; display: block; transition: transform 0.3s ease-in-out; " 
            onmouseover="this.style.transform='scale(1.09)'" 
            onmouseout="this.style.transform='scale(1)'"
            
            >
        
        <h1 style="
            position: absolute;
            bottom: 0;
            left: 0;
            margin: 0;
            width: 100%;
            color: white;
            background: rgba(0, 0, 0, 0.6);
            padding: 10px;
            font-size: 0.9rem;
            text-align: center;
            box-sizing: border-box;
        ">
        Internship
        </h1>
        </div>
         
  </div>
</section>







 `;
    container.appendChild(card);
    secondSection();
}







function secondSection() {

    const container = document.getElementById("main-content");
   
    
    let data = [
        { title: "Card 1", description: "This is the first card." },
        { title: "Card 2", description: "This is the second card." },
        
    ];

    data.forEach((item, index) => {
        if(index % 2 === 0) {
        const card = document.createElement("main-content");
        card.classList.add("card");
        card.innerHTML = ` <section class="articles" style="margin-top:30px;">
        <div class="section-header">
            <span>${index+1} OF ${data.length} / <strong>OVERVIEW</strong></span>
            <a href="#" class="view-all">View All</a>
        </div>

        <div class="article-container">
            <div class="article-image">
                <img src="./src/images/chapter_1_birth_control_1418968089.webp" alt="Happy couple">
            </div>
            <div class="article-list">
                <div class="article">
                    <h3>What to Consider When Choosing Birth Control</h3>
                    <p>The best birth control is the method you're most likely to use. Here are some other
                        things to consider as you decide.</p>
                </div>
                <div class="article">
                    <h3><a href="#">How and Where to Get Birth Control</a></h3>
                    <p>You've got lots of birth control options. Here's how to get them, and what to do if costs
                        get in the way.</p>
                </div>
                <div class="article">
                    <h3>Birth Control: How to Talk to Your OB/GYN</h3>
                    <p>If you plan to use birth control other than condoms, you'll need to see a doctor. First,
                        you need to start the conversation.</p>
                </div>
                <div class="article">
                    <h3>How to Talk to Your Partner About Birth Control</h3>
                    <p>Birth control can be an awkward topic. But it's an important heart-to-heart talk to have
                        before sex with your partner.</p>
                </div>
            </div>
        </div>
    </section>

     `;
        container.appendChild(card);
    }

    else{
        const card = document.createElement("main-content");
        card.classList.add("card");
        card.innerHTML = ` 

        <section class="articles">
        
        </section>




        <section class="articles">
            <div class="section-header">
                <span>${index+1} OF ${data.length}/ <strong>TYPES</strong></span>
                <a href="#" class="view-all">View All</a>
            </div>
    
            <div class="article-container">
                <div class="article-list">
                    <div class="article">
                        <h3>Birth Control: What Type Is Right for You?</h3>
                        <p>You have a lot of choices for birth control, from condoms to caps to pills. Find one that
                            you're confident with.</p>
                    </div>
                    <div class="article">
                        <h3>How Effective Are Different Types of Birth Control?</h3>
                        <p>The effectiveness of some birth control methods depends in part on how carefully you use
                            them.</p>
                    </div>
                    <div class="article">
                        <h3>Nonhormonal Birth Control</h3>
                        <p>Nonhormonal birth control is any method that doesn't affect women's hormones. But they
                            might not be ideal for some people.</p>
                    </div>
                    <div class="article">
                        <h3>Best Birth Control for STI and Pregnancy Prevention</h3>
                        <p>If your goal is to prevent both pregnancy and STIs, there are only a few ways to make
                            that happen.</p>
                    </div>
                </div>
                <div class="article-image">
                    <img src="./src/images/chapter_1_birth_control_1418968089.webp">
                </div>
            </div>
        </section>

     `;
        container.appendChild(card);
        homeMiddle();
    }

    });
}












function homeMiddle(){

    const container = document.getElementById("main-content");
   
    const card = document.createElement("main-content");

    card.classList.add("card");
    card.innerHTML = `
    <h2 style="color: #002D72; text-transform: uppercase; font-size: 16px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">
    Featured Stories
  </h2>

  <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 20px;margin-bottom:40px;">

    <!-- Card 1 -->
    <div style="flex: 1 1 300px; box-shadow: 0 0 10px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; background: white; min-width: 250px;">
      <img src="./src/images/home/middlesection_image1.jpg" alt="DNA Test" style="width: 100%; height: auto; display: block;">
      <div style="padding: 15px;">
        <h3 style="font-size: 16px; margin: 0 0 10px;">Decoding Your DNA: What Genetic Testing Reveals</h3>
        <p style="font-size: 14px; color: #555;">
          In this podcast, Dr. Huma Q. Rana breaks down genetic testing, its benefits, and what the results could mean for your health and your family.
        </p>
      </div>
    </div>

    <!-- Card 2 -->
    <div style="flex: 1 1 300px; box-shadow: 0 0 10px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; background: white; min-width: 250px;">
      <img src="./src/images/home/middlesection_image2.jpg" alt="Diet" style="width: 100%; height: auto; display: block;">
      <div style="padding: 15px;">
        <h3 style="font-size: 16px; margin: 0 0 10px;">How The Portfolio Diet Reduces Cholesterol Levels</h3>
        <p style="font-size: 14px; color: #555;">
          The Portfolio Diet focuses on lowering cholesterol, not weight loss. Discover the cholesterol-fighting foods to include in your diet.
        </p>
      </div>
    </div>

    <!-- Card 3 -->
    <div style="flex: 1 1 300px; box-shadow: 0 0 10px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; background: white; min-width: 250px;">
      <img src="./src/images/home/middlesection_image3.jpg" alt="Knee Care" style="width: 100%; height: auto; display: block;">
      <div style="padding: 15px;">
        <h3 style="font-size: 16px; margin: 0 0 10px;">Why Cartilage Restoration Might Delay Your Knee Replacement</h3>
        <p style="font-size: 14px; color: #555;">
          Knee replacement relieves severe pain but doesn’t last forever. Cartilage restoration could be an option -- here's what to know.
        </p>
      </div>
    </div>

  </div>
    `;

    container.appendChild(card);
}


loadContenthome()