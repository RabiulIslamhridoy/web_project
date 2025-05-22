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





    <section>
    <div>
    <h2 style=" font-size: 24px; margin: 20px 0;border-bottom: 3px solid #ddd;">Find Health Care</h2>
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






<section>
    <div>
    <h2 style=" font-size: 24px; margin: 20px 0;border-bottom: 3px solid #ddd;">Health Resources</h2>
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
            <a href="#" onclick="family_planning()">
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


















<section>
    <div>
    <h2 style=" font-size: 24px; margin: 20px 0;border-bottom: 3px solid #ddd;">Health Education</h2>
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
        card.innerHTML = ` <section class="articles">
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
    }




    });
}


function loadContent(page) {
    let content = {

     










//Hospitals page





//Appointments page

        'appointments': `
            <h2>Types of appointments</h2>
            <p>You have a lot of choices for birth control, from condoms to pills. Find the right one for you.</p>
        `,


//Doctor and Specialist page
        'doctor_specialist': `
            <h2>Doctor and Specialist </h2>
            <p>Hormonal birth control includes pills, patches, and injections to prevent pregnancy.</p>
        `,

//Ambulance Booking page
        'ambulance_booking': `
            <h2>ambulance_booking</h2>
            <p>Emergency contraception can prevent pregnancy if you had unprotected</p>
            <p>Natural family planning involves tracking ovulation to prevent pregnancy.</p>
        `,

//Health Camps page
        'health_camps': `
            <h2>Health camps Page</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
        `,

//Health Toolkits page

        'health_toolkits': `
            <h2>health_toolkits</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
        `,
//Health Insurance page
        'health_insurance': `
            <h2>health_insurance </h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
        `



,







//Maternal Health page


        'manternal_health': `
            <h2>Maternal Health</h2>
            <p>Maternal health refers</p>
        `,




//baby_care page

        'baby_care': `
            <h2>Baby Care</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
        `,


//adolescent_care page
        'adolescent_care': `
            <h2>Adolescent Care</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
            `,

//general_healthcare page
        'general_healthcare': `
            <h2>General Healthcare</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
            `,

//nutrition_fitness page
        'nutrition_fitness': `
            <h2>Nutrition and Fitness</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
            `,

//geriatric_health page

        'geriatric_health': `
            <h2>Geriatric Health</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
            `,
//global_health page
        'global_health': `
            <h2>Global Health</h2>
            <p>Permanent birth control options include vasectomy and tubal ligation.</p>
            `,







            'login': `
            <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: linear-gradient(135deg, #667eea, #764ba2); margin: 0; font-family: Arial, sans-serif;">

        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.2); width: 100%; max-width: 350px; text-align: center;">
            <h2 style="color: #333;">Login</h2>
    
            <input type="email" placeholder="Email" style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px; font-size: 16px;">
            
            <input type="password" placeholder="Password" style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px; font-size: 16px;">
            
            <button style="width: 100%; padding: 10px; background: #667eea; color: white; border: none; border-radius: 5px; font-size: 18px; cursor: pointer;">Login</button>
            
            <div style="margin-top: 15px;">
                <a href="#" style="text-decoration: none; color: #667eea;">Forgot Password?</a>
                <br>
                <a href="#" style="text-decoration: none; color: #764ba2;">Register</a>
            </div>
        </div>
     `,





    };

    document.getElementById('main-content').innerHTML = content[page];
}

loadContenthome()