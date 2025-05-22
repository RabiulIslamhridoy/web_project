// family planning main
function family_planning(){
    const container = document.getElementById("main-content");
    container.innerHTML = "";

    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `
    <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #fff;"id="change_div">

    <!-- Header -->
    <header style="background-color: white; margin-left:20% padding: 15px;">
        <h1 style="color: red; ">পরিবার পরিকল্পনা</h1>
    </header>

    <!-- Navigation Menu -->

    <nav style="font-size: 12px; display: flex; list-style: none;">
    <ul style="display: flex; gap: 10px; padding: 0; margin: 0; list-style: none;">
        <li style="text-decoration: underline;">
            <a href="#" style="color: blue;" onclick="family_planning()">গর্ভনিয়ন্ত্রণ পদ্ধতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="projonod_shastho()">প্রজনন স্বাস্থ্য</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="jonmobiroti()">জন্ম বিরতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="sthayee_samoyeek()">স্থায়ী ও সাময়িক পদ্ধতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;"onclick="poribar_porikolpona_totho()">পরিবার পরিকল্পনা তথ্য</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="projonon_odhikar()">প্রজনন অধিকার</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="poroshoder_vomika()">পুরুষদের ভূমিকা</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="proshobbotor_porikolpona()">প্রসবোত্তর পরিকল্পনা</a>
        </li>
    </ul>
</nav>





    <div style="display: flex; margin-top:10px;">


    <div class="container" style="border-right: 2px solid #ddd; margin-bottom:10px; ">
    <div class="flex-container" >
        <div class="main-news" style="border-right: 2px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.002)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h2>বেশি মাংস, বেশি ডিম দেয় নতুন প্রজাতির এই হাঁস</h2>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="side-news">
        <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
            <h3>ইউরোপে পড়ালেখা এই জনপ্রিয় বৃত্তির সুযোগ কি আপনি নিতে চান</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
    </div>
    
    <div class="flex-container" style="margin-top:8px;">
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Fashion Show" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>পোশাকে, ফ্যাশনে জন্ম উত্তরের মঞ্চ</h3>
            <p>৫ ঘন্টা আগে</p>
        </div>
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Scientist" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>প্রথম হওয়া সায়েন্স লেখা-কিভাবে কষ্ট স্বার্থক হলো</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="news-item">
            <img src="./src/images/exampleImage.avif" alt="Student" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</h3>
            <p>৯ ঘন্টা আগে এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</p>
        </div>
    </div>
    
</div>

<div class="sidebar">

        <img src="./src/images/exampleImage.avif" alt="Scientist" style="padding-bottom:5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
        <div style="border-bottom: 3px solid #ddd;"></div>
        <h3 >সর্বশেষ</h3>
        <ul >
            <li style="border-bottom: 2px solid #ddd; margin-top:5px; margin-bottom:5px;">লিভারপুলকে হারিয়ে ৭০ বছর পর ইউরোপে 'গ্যালিপ্সি' নিউজকাস্ট</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নির্বাচন বিভ্রান্তির কারণে জনগণ সঠিক সিদ্ধান্ত নিতে পারছে না</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নারীদের হারিয়ে 'ব্লুজ' দলের ইনভেস্টমেন্ট বাড়ছে</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
            <li>মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
        </ul>
    </div>

</div>
    
        </div>

        <div style="border-top: 3px solid #1119f5; margin-top:10px;">

        </div>

    <div style="margin-top:10px;">
    <h2>সর্বশেষ খবর</h2>
    </div>

    <div class="swiper mySwiper" style=";margin-top:15px;border-bottom: 2px solid #ddd; padding-bottom:8px;">
    <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 1" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 1 Title</h3>
            <p>Short description of Slide 1.</p>
        </div>
        <!-- Slide 2 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 2" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 2 Title</h3>
            <p>Short description of Slide 2.</p>
        </div>
        <!-- Slide 3 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 3" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 3 Title</h3>
            <p>Short description of Slide 3.</p>
        </div>
        <!-- Slide 4 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 4" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 4 Title</h3>
            <p>Short description of Slide 4.</p>
        </div>
    </div>

    <!-- Pagination & Navigation -->
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>

<div style="border-top: 3px solid #ddd;margin-top:30px;">

</div>

<div style="margin-top:10px;">
<h2>আরও খবর</h2>
</div>

 `;
    container.appendChild(card);

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 3, /* Shows 3 slides initially */
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3, /* On tablets, show 3 slides */
            },
            480: {
                slidesPerView: 2, /* On small screens, show 2 slides */
            },
            320: {
                slidesPerView: 1, /* On mobile, show 1 slide */
            }
        }
    });
    
family_planning_card();

}


function family_planning_card(){
    const container = document.getElementById("main-content");
    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `

    <div style="display: flex;flex-direction: column;gap: 20px;align-items: center;margin-left:18%; margin-right:14%;margin-top:30px; padding-left:5%;padding-right:5%;">
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">ঈদের কেনাকাটায় ৮টি জরুরি সতর্কতা</h3>
                <p style="color: #555; margin: 5px 0;">ঈদের কেনাকাটায় কারণে দোকানপাট ভিড়ে... </p>
                <p style="color: #999; font-size: 14px;">৯ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Shopping" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">বাড়ির ছেলশিশ্টিকে ঠিকভাবে বড় করছেন তো</h3>
                <p style="color: #555; margin: 5px 0;">ছোট থেকে শিশুদের শেখা...</p>
                <p style="color: #999; font-size: 14px;">১২ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Education" style="border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">কেমন হলো হামজা-জামালদের নতুন জার্সি</h3>
                <p style="color: #555; margin: 5px 0;">২৫ মার্চে ভারত...</p>
                <p style="color: #999; font-size: 14px;">২৬ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Jersey" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>

        
    </div>

 `;
    container.appendChild(card);

    show_more();

}

function show_more(){
    const showmoreButton = document.getElementById("show_more");
    if (showmoreButton) {
        showmoreButton.remove(); // This properly removes the button from the DOM
    }

    // Get the container where new content will be added
    const container = document.getElementById("main-content");

    // Create a new div instead of invalid <main-content>
    const card = document.createElement("div");
    card.classList.add("card");

    
    card.innerHTML = `
    <button id="show_more" style="display: block; width: 150px; margin: 20px auto; padding: 10px 15px; font-size: 16px; font-weight: bold; color: white; background: linear-gradient(45deg, #ff6600, #ff3300); border: none; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);" onclick="family_planning_card()">
    Show More
</button>
    `;

    // Append new content to the container
    container.appendChild(card);
}

















// projonod_shastho
function projonod_shastho(){
    const container = document.getElementById("main-content");
    container.innerHTML = "";

    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `
    <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #fff;"id="change_div">

    <!-- Header -->
    <header style="background-color: white; margin-left:20% padding: 15px;">
        <h1 style="color: red; margin-left: 8%; font-size: 38px;margin-bottom:35px; ">পরিবার পরিকল্পনা</h1>
    </header>

    <!-- Navigation Menu -->

    <nav style="margin-left:18%; padding: 10px 0; font-size: 12px; display: flex; list-style: none;">
    <ul style="display: flex; gap: 10px; padding: 0; margin: 0; list-style: none;">
        <li >
            <a href="#" style="color: black;text-decoration: none;" onclick="family_planning()">গর্ভনিয়ন্ত্রণ পদ্ধতি</a>
        </li>
        <li style="text-decoration: underline;">
            <a href="#" style="color: black; " onclick="projonod_shastho()">প্রজনন স্বাস্থ্য</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="jonmobiroti()">জন্ম বিরতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="sthayee_samoyeek()">স্থায়ী ও সাময়িক পদ্ধতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;"onclick="poribar_porikolpona_totho()">পরিবার পরিকল্পনা তথ্য</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="projonon_odhikar()">প্রজনন অধিকার</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="poroshoder_vomika()">পুরুষদের ভূমিকা</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="proshobbotor_porikolpona()">প্রসবোত্তর পরিকল্পনা</a>
        </li>
    </ul>
</nav>





    <div style="display: flex; margin-left:18%; margin-right:14%;margin-top:10px;">


    <div class="container" style="border-right: 2px solid #ddd; margin-bottom:10px; ">
    <div class="flex-container" >
        <div class="main-news" style="border-right: 2px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.002)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h2>বেশি মাংস, বেশি ডিম দেয় নতুন প্রজাতির এই হাঁস</h2>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="side-news">
        <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
            <h3>ইউরোপে পড়ালেখা এই জনপ্রিয় বৃত্তির সুযোগ কি আপনি নিতে চান</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
    </div>
    
    <div class="flex-container" style="margin-top:8px;">
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Fashion Show" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>পোশাকে, ফ্যাশনে জন্ম উত্তরের মঞ্চ</h3>
            <p>৫ ঘন্টা আগে</p>
        </div>
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Scientist" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>প্রথম হওয়া সায়েন্স লেখা-কিভাবে কষ্ট স্বার্থক হলো</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="news-item">
            <img src="./src/images/exampleImage.avif" alt="Student" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</h3>
            <p>৯ ঘন্টা আগে এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</p>
        </div>
    </div>
    
</div>

<div class="sidebar">

        <img src="./src/images/exampleImage.avif" alt="Scientist" style="padding-bottom:5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
        <div style="border-bottom: 3px solid #ddd;"></div>
        <h3 >সর্বশেষ</h3>
        <ul >
            <li style="border-bottom: 2px solid #ddd; margin-top:5px; margin-bottom:5px;">লিভারপুলকে হারিয়ে ৭০ বছর পর ইউরোপে 'গ্যালিপ্সি' নিউজকাস্ট</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নির্বাচন বিভ্রান্তির কারণে জনগণ সঠিক সিদ্ধান্ত নিতে পারছে না</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নারীদের হারিয়ে 'ব্লুজ' দলের ইনভেস্টমেন্ট বাড়ছে</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
            <li>মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
        </ul>
    </div>

</div>
    
        </div>

        <div style="border-top: 3px solid #1119f5; margin-left:18%; margin-right:14%;margin-top:10px;">

        </div>

    <div style="margin-left:18%; margin-right:14%;margin-top:10px;">
    <h2>সর্বশেষ খবর</h2>
    </div>

    <div class="swiper mySwiper" style="margin-left:18%; margin-right:14%;margin-top:15px;border-bottom: 2px solid #ddd; padding-bottom:8px;">
    <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 1" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 1 Title</h3>
            <p>Short description of Slide 1.</p>
        </div>
        <!-- Slide 2 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 2" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 2 Title</h3>
            <p>Short description of Slide 2.</p>
        </div>
        <!-- Slide 3 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 3" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 3 Title</h3>
            <p>Short description of Slide 3.</p>
        </div>
        <!-- Slide 4 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 4" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 4 Title</h3>
            <p>Short description of Slide 4.</p>
        </div>
    </div>

    <!-- Pagination & Navigation -->
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>

<div style="border-top: 3px solid #ddd; margin-left:18%; margin-right:14%;margin-top:30px;">

</div>

<div style="margin-left:18%; margin-right:14%;margin-top:10px;">
<h2>আরও খবর</h2>
</div>

 `;
    container.appendChild(card);

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 3, /* Shows 3 slides initially */
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3, /* On tablets, show 3 slides */
            },
            480: {
                slidesPerView: 2, /* On small screens, show 2 slides */
            },
            320: {
                slidesPerView: 1, /* On mobile, show 1 slide */
            }
        }
    });
    
    projonod_shastho_card();

}


function projonod_shastho_card(){
    const container = document.getElementById("main-content");
    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `

    <div style="display: flex;flex-direction: column;gap: 20px;align-items: center;margin-left:18%; margin-right:14%;margin-top:30px; padding-left:5%;padding-right:5%;">
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">ঈদের কেনাকাটায় ৮টি জরুরি সতর্কতা</h3>
                <p style="color: #555; margin: 5px 0;">ঈদের কেনাকাটায় কারণে দোকানপাট ভিড়ে... </p>
                <p style="color: #999; font-size: 14px;">৯ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Shopping" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">বাড়ির ছেলশিশ্টিকে ঠিকভাবে বড় করছেন তো</h3>
                <p style="color: #555; margin: 5px 0;">ছোট থেকে শিশুদের শেখা...</p>
                <p style="color: #999; font-size: 14px;">১২ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Education" style="border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">কেমন হলো হামজা-জামালদের নতুন জার্সি</h3>
                <p style="color: #555; margin: 5px 0;">২৫ মার্চে ভারত...</p>
                <p style="color: #999; font-size: 14px;">২৬ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Jersey" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>

        
    </div>

 `;
    container.appendChild(card);

    projonod_shastho_show_more();

}

function projonod_shastho_show_more(){
    const showmoreButton = document.getElementById("show_more");
    if (showmoreButton) {
        showmoreButton.remove(); 
    }

    // Get the container where new content will be added
    const container = document.getElementById("main-content");

    // Create a new div instead of invalid <main-content>
    const card = document.createElement("div");
    card.classList.add("card");

    
    card.innerHTML = `
    <button id="show_more" style="display: block; width: 150px; margin: 20px auto; padding: 10px 15px; font-size: 16px; font-weight: bold; color: white; background: linear-gradient(45deg, #ff6600, #ff3300); border: none; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);" onclick="family_planning_card()">
    Show More
</button>
    `;

    // Append new content to the container
    container.appendChild(card);
}


















// jonmobiroti
function jonmobiroti(){
    const container = document.getElementById("main-content");
    container.innerHTML = "";

    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `
    <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #fff;"id="change_div">

    <!-- Header -->
    <header style="background-color: white; margin-left:20% padding: 15px;">
        <h1 style="color: red; margin-left: 8%; font-size: 38px;margin-bottom:35px; ">পরিবার পরিকল্পনা</h1>
    </header>

    <!-- Navigation Menu -->

    <nav style="margin-left:18%; padding: 10px 0; font-size: 12px; display: flex; list-style: none;">
    <ul style="display: flex; gap: 10px; padding: 0; margin: 0; list-style: none;">
        <li >
            <a href="#" style="color: black;text-decoration: none;" onclick="family_planning()">গর্ভনিয়ন্ত্রণ পদ্ধতি</a>
        </li>
        <li >
            <a href="#" style="color: black; text-decoration: none;" onclick="projonod_shastho()">প্রজনন স্বাস্থ্য</a>
        </li>
        <li style="text-decoration: underline;">
            <a href="#" style="color: black; " onclick="jonmobiroti()">জন্ম বিরতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="sthayee_samoyeek()">স্থায়ী ও সাময়িক পদ্ধতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;"onclick="poribar_porikolpona_totho()">পরিবার পরিকল্পনা তথ্য</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="projonon_odhikar()">প্রজনন অধিকার</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="poroshoder_vomika()">পুরুষদের ভূমিকা</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="proshobbotor_porikolpona()">প্রসবোত্তর পরিকল্পনা</a>
        </li>
    </ul>
</nav>





    <div style="display: flex; margin-left:18%; margin-right:14%;margin-top:10px;">


    <div class="container" style="border-right: 2px solid #ddd; margin-bottom:10px; ">
    <div class="flex-container" >
        <div class="main-news" style="border-right: 2px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.002)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h2>বেশি মাংস, বেশি ডিম দেয় নতুন প্রজাতির এই হাঁস</h2>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="side-news">
        <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
            <h3>ইউরোপে পড়ালেখা এই জনপ্রিয় বৃত্তির সুযোগ কি আপনি নিতে চান</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
    </div>
    
    <div class="flex-container" style="margin-top:8px;">
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Fashion Show" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>পোশাকে, ফ্যাশনে জন্ম উত্তরের মঞ্চ</h3>
            <p>৫ ঘন্টা আগে</p>
        </div>
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Scientist" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>প্রথম হওয়া সায়েন্স লেখা-কিভাবে কষ্ট স্বার্থক হলো</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="news-item">
            <img src="./src/images/exampleImage.avif" alt="Student" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</h3>
            <p>৯ ঘন্টা আগে এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</p>
        </div>
    </div>
    
</div>

<div class="sidebar">

        <img src="./src/images/exampleImage.avif" alt="Scientist" style="padding-bottom:5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
        <div style="border-bottom: 3px solid #ddd;"></div>
        <h3 >সর্বশেষ</h3>
        <ul >
            <li style="border-bottom: 2px solid #ddd; margin-top:5px; margin-bottom:5px;">লিভারপুলকে হারিয়ে ৭০ বছর পর ইউরোপে 'গ্যালিপ্সি' নিউজকাস্ট</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নির্বাচন বিভ্রান্তির কারণে জনগণ সঠিক সিদ্ধান্ত নিতে পারছে না</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নারীদের হারিয়ে 'ব্লুজ' দলের ইনভেস্টমেন্ট বাড়ছে</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
            <li>মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
        </ul>
    </div>

</div>
    
        </div>

        <div style="border-top: 3px solid #1119f5; margin-left:18%; margin-right:14%;margin-top:10px;">

        </div>

    <div style="margin-left:18%; margin-right:14%;margin-top:10px;">
    <h2>সর্বশেষ খবর</h2>
    </div>

    <div class="swiper mySwiper" style="margin-left:18%; margin-right:14%;margin-top:15px;border-bottom: 2px solid #ddd; padding-bottom:8px;">
    <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 1" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 1 Title</h3>
            <p>Short description of Slide 1.</p>
        </div>
        <!-- Slide 2 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 2" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 2 Title</h3>
            <p>Short description of Slide 2.</p>
        </div>
        <!-- Slide 3 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 3" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 3 Title</h3>
            <p>Short description of Slide 3.</p>
        </div>
        <!-- Slide 4 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 4" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 4 Title</h3>
            <p>Short description of Slide 4.</p>
        </div>
    </div>

    <!-- Pagination & Navigation -->
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>

<div style="border-top: 3px solid #ddd; margin-left:18%; margin-right:14%;margin-top:30px;">

</div>

<div style="margin-left:18%; margin-right:14%;margin-top:10px;">
<h2>আরও খবর</h2>
</div>

 `;
    container.appendChild(card);

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 3, /* Shows 3 slides initially */
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3, /* On tablets, show 3 slides */
            },
            480: {
                slidesPerView: 2, /* On small screens, show 2 slides */
            },
            320: {
                slidesPerView: 1, /* On mobile, show 1 slide */
            }
        }
    });
    
    jonmobiroti_card();

}


function jonmobiroti_card(){
    const container = document.getElementById("main-content");
    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `

    <div style="display: flex;flex-direction: column;gap: 20px;align-items: center;margin-left:18%; margin-right:14%;margin-top:30px; padding-left:5%;padding-right:5%;">
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">ঈদের কেনাকাটায় ৮টি জরুরি সতর্কতা</h3>
                <p style="color: #555; margin: 5px 0;">ঈদের কেনাকাটায় কারণে দোকানপাট ভিড়ে... </p>
                <p style="color: #999; font-size: 14px;">৯ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Shopping" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">বাড়ির ছেলশিশ্টিকে ঠিকভাবে বড় করছেন তো</h3>
                <p style="color: #555; margin: 5px 0;">ছোট থেকে শিশুদের শেখা...</p>
                <p style="color: #999; font-size: 14px;">১২ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Education" style="border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">কেমন হলো হামজা-জামালদের নতুন জার্সি</h3>
                <p style="color: #555; margin: 5px 0;">২৫ মার্চে ভারত...</p>
                <p style="color: #999; font-size: 14px;">২৬ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Jersey" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>

        
    </div>

 `;
    container.appendChild(card);

    jonmobiroti_show_more();

}

function jonmobiroti_show_more(){
    const showmoreButton = document.getElementById("show_more");
    if (showmoreButton) {
        showmoreButton.remove(); 
    }

    // Get the container where new content will be added
    const container = document.getElementById("main-content");

    // Create a new div instead of invalid <main-content>
    const card = document.createElement("div");
    card.classList.add("card");

    
    card.innerHTML = `
    <button id="show_more" style="display: block; width: 150px; margin: 20px auto; padding: 10px 15px; font-size: 16px; font-weight: bold; color: white; background: linear-gradient(45deg, #ff6600, #ff3300); border: none; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);" onclick="family_planning_card()">
    Show More
</button>
    `;

    // Append new content to the container
    container.appendChild(card);
}




























// sthayee_samoyeek
function sthayee_samoyeek(){
    const container = document.getElementById("main-content");
    container.innerHTML = "";

    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `
    <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #fff;"id="change_div">

    <!-- Header -->
    <header style="background-color: white; margin-left:20% padding: 15px;">
        <h1 style="color: red; margin-left: 8%; font-size: 38px;margin-bottom:35px; ">পরিবার পরিকল্পনা</h1>
    </header>

    <!-- Navigation Menu -->

    <nav style="margin-left:18%; padding: 10px 0; font-size: 12px; display: flex; list-style: none;">
    <ul style="display: flex; gap: 10px; padding: 0; margin: 0; list-style: none;">
        <li >
            <a href="#" style="color: black;text-decoration: none;" onclick="family_planning()">গর্ভনিয়ন্ত্রণ পদ্ধতি</a>
        </li>
        <li >
            <a href="#" style="color: black; text-decoration: none; " onclick="projonod_shastho()">প্রজনন স্বাস্থ্য</a>
        </li>
        <li >
            <a href="#" style="color: black; text-decoration: none;" onclick="jonmobiroti()">জন্ম বিরতি</a>
        </li>
        <li style="text-decoration: underline;">
            <a href="#" style="color: black; " onclick="sthayee_samoyeek()">স্থায়ী ও সাময়িক পদ্ধতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;"onclick="poribar_porikolpona_totho()">পরিবার পরিকল্পনা তথ্য</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="projonon_odhikar()">প্রজনন অধিকার</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="poroshoder_vomika()">পুরুষদের ভূমিকা</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="proshobbotor_porikolpona()">প্রসবোত্তর পরিকল্পনা</a>
        </li>
    </ul>
</nav>





    <div style="display: flex; margin-left:18%; margin-right:14%;margin-top:10px;">


    <div class="container" style="border-right: 2px solid #ddd; margin-bottom:10px; ">
    <div class="flex-container" style="flex-wrap:wrap;">
        <div class="main-news" style="border-right: 2px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.002)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h2>বেশি মাংস, বেশি ডিম দেয় নতুন প্রজাতির এই হাঁস</h2>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="side-news">
        <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
            <h3>ইউরোপে পড়ালেখা এই জনপ্রিয় বৃত্তির সুযোগ কি আপনি নিতে চান</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
    </div>
    
    <div class="flex-container" style="margin-top:8px;">
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Fashion Show" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>পোশাকে, ফ্যাশনে জন্ম উত্তরের মঞ্চ</h3>
            <p>৫ ঘন্টা আগে</p>
        </div>
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Scientist" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>প্রথম হওয়া সায়েন্স লেখা-কিভাবে কষ্ট স্বার্থক হলো</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="news-item">
            <img src="./src/images/exampleImage.avif" alt="Student" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</h3>
            <p>৯ ঘন্টা আগে এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</p>
        </div>
    </div>
    
</div>

<div class="sidebar">

        <img src="./src/images/exampleImage.avif" alt="Scientist" style="padding-bottom:5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
        <div style="border-bottom: 3px solid #ddd;"></div>
        <h3 >সর্বশেষ</h3>
        <ul >
            <li style="border-bottom: 2px solid #ddd; margin-top:5px; margin-bottom:5px;">লিভারপুলকে হারিয়ে ৭০ বছর পর ইউরোপে 'গ্যালিপ্সি' নিউজকাস্ট</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নির্বাচন বিভ্রান্তির কারণে জনগণ সঠিক সিদ্ধান্ত নিতে পারছে না</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নারীদের হারিয়ে 'ব্লুজ' দলের ইনভেস্টমেন্ট বাড়ছে</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
            <li>মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
        </ul>
    </div>

</div>
    
        </div>

        <div style="border-top: 3px solid #1119f5; margin-left:18%; margin-right:14%;margin-top:10px;">

        </div>

    <div style="margin-left:18%; margin-right:14%;margin-top:10px;">
    <h2>সর্বশেষ খবর</h2>
    </div>

    <div class="swiper mySwiper" style="margin-left:18%; margin-right:14%;margin-top:15px;border-bottom: 2px solid #ddd; padding-bottom:8px;">
    <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 1" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 1 Title</h3>
            <p>Short description of Slide 1.</p>
        </div>
        <!-- Slide 2 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 2" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 2 Title</h3>
            <p>Short description of Slide 2.</p>
        </div>
        <!-- Slide 3 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 3" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 3 Title</h3>
            <p>Short description of Slide 3.</p>
        </div>
        <!-- Slide 4 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 4" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 4 Title</h3>
            <p>Short description of Slide 4.</p>
        </div>
    </div>

    <!-- Pagination & Navigation -->
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>

<div style="border-top: 3px solid #ddd; margin-left:18%; margin-right:14%;margin-top:30px;">

</div>

<div style="margin-left:18%; margin-right:14%;margin-top:10px;">
<h2>আরও খবর</h2>
</div>

 `;
    container.appendChild(card);

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 3, /* Shows 3 slides initially */
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3, /* On tablets, show 3 slides */
            },
            480: {
                slidesPerView: 2, /* On small screens, show 2 slides */
            },
            320: {
                slidesPerView: 1, /* On mobile, show 1 slide */
            }
        }
    });
    
    jonmobiroti_card();

}


function sthayee_samoyeek_card(){
    const container = document.getElementById("main-content");
    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `

    <div style="display: flex;flex-direction: column;gap: 20px;align-items: center;margin-left:18%; margin-right:14%;margin-top:30px; padding-left:5%;padding-right:5%;">
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">ঈদের কেনাকাটায় ৮টি জরুরি সতর্কতা</h3>
                <p style="color: #555; margin: 5px 0;">ঈদের কেনাকাটায় কারণে দোকানপাট ভিড়ে... </p>
                <p style="color: #999; font-size: 14px;">৯ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Shopping" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">বাড়ির ছেলশিশ্টিকে ঠিকভাবে বড় করছেন তো</h3>
                <p style="color: #555; margin: 5px 0;">ছোট থেকে শিশুদের শেখা...</p>
                <p style="color: #999; font-size: 14px;">১২ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Education" style="border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">কেমন হলো হামজা-জামালদের নতুন জার্সি</h3>
                <p style="color: #555; margin: 5px 0;">২৫ মার্চে ভারত...</p>
                <p style="color: #999; font-size: 14px;">২৬ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Jersey" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>

        
    </div>

 `;
    container.appendChild(card);

    sthayee_samoyeek_show_more();

}

function sthayee_samoyeek_show_more(){
    const showmoreButton = document.getElementById("show_more");
    if (showmoreButton) {
        showmoreButton.remove(); 
    }

    // Get the container where new content will be added
    const container = document.getElementById("main-content");

    // Create a new div instead of invalid <main-content>
    const card = document.createElement("div");
    card.classList.add("card");

    
    card.innerHTML = `
    <button id="show_more" style="display: block; width: 150px; margin: 20px auto; padding: 10px 15px; font-size: 16px; font-weight: bold; color: white; background: linear-gradient(45deg, #ff6600, #ff3300); border: none; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);" onclick="family_planning_card()">
    Show More
</button>
    `;

    // Append new content to the container
    container.appendChild(card);
}
















// poribar_porikolpona_totho
function poribar_porikolpona_totho(){
    const container = document.getElementById("main-content");
    container.innerHTML = "";

    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `
    <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #fff;"id="change_div">

    <!-- Header -->
    <header style="background-color: white; margin-left:20% padding: 15px;">
        <h1 style="color: red; margin-left: 8%; font-size: 38px;margin-bottom:35px; ">পরিবার পরিকল্পনা</h1>
    </header>

    <!-- Navigation Menu -->

    <nav style="margin-left:18%; padding: 10px 0; font-size: 12px; display: flex; list-style: none;">
    <ul style="display: flex; gap: 10px; padding: 0; margin: 0; list-style: none;">
        <li >
            <a href="#" style="color: black;text-decoration: none;" onclick="family_planning()">গর্ভনিয়ন্ত্রণ পদ্ধতি</a>
        </li>
        <li >
            <a href="#" style="color: black;  text-decoration: none;" onclick="projonod_shastho()">প্রজনন স্বাস্থ্য</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="jonmobiroti()">জন্ম বিরতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="sthayee_samoyeek()">স্থায়ী ও সাময়িক পদ্ধতি</a>
        </li>
        <li style="text-decoration: underline;">
            <a href="#" style="color: black;"onclick="poribar_porikolpona_totho()">পরিবার পরিকল্পনা তথ্য</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="projonon_odhikar()">প্রজনন অধিকার</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="poroshoder_vomika()">পুরুষদের ভূমিকা</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="proshobbotor_porikolpona()">প্রসবোত্তর পরিকল্পনা</a>
        </li>
    </ul>
</nav>





    <div style="display: flex; margin-left:18%; margin-right:14%;margin-top:10px;">


    <div class="container" style="border-right: 2px solid #ddd; margin-bottom:10px; ">
    <div class="flex-container" >
        <div class="main-news" style="border-right: 2px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.002)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h2>বেশি মাংস, বেশি ডিম দেয় নতুন প্রজাতির এই হাঁস</h2>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="side-news">
        <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
            <h3>ইউরোপে পড়ালেখা এই জনপ্রিয় বৃত্তির সুযোগ কি আপনি নিতে চান</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
    </div>
    
    <div class="flex-container" style="margin-top:8px;">
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Fashion Show" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>পোশাকে, ফ্যাশনে জন্ম উত্তরের মঞ্চ</h3>
            <p>৫ ঘন্টা আগে</p>
        </div>
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Scientist" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>প্রথম হওয়া সায়েন্স লেখা-কিভাবে কষ্ট স্বার্থক হলো</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="news-item">
            <img src="./src/images/exampleImage.avif" alt="Student" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</h3>
            <p>৯ ঘন্টা আগে এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</p>
        </div>
    </div>
    
</div>

<div class="sidebar">

        <img src="./src/images/exampleImage.avif" alt="Scientist" style="padding-bottom:5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
        <div style="border-bottom: 3px solid #ddd;"></div>
        <h3 >সর্বশেষ</h3>
        <ul >
            <li style="border-bottom: 2px solid #ddd; margin-top:5px; margin-bottom:5px;">লিভারপুলকে হারিয়ে ৭০ বছর পর ইউরোপে 'গ্যালিপ্সি' নিউজকাস্ট</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নির্বাচন বিভ্রান্তির কারণে জনগণ সঠিক সিদ্ধান্ত নিতে পারছে না</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নারীদের হারিয়ে 'ব্লুজ' দলের ইনভেস্টমেন্ট বাড়ছে</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
            <li>মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
        </ul>
    </div>

</div>
    
        </div>

        <div style="border-top: 3px solid #1119f5; margin-left:18%; margin-right:14%;margin-top:10px;">

        </div>

    <div style="margin-left:18%; margin-right:14%;margin-top:10px;">
    <h2>সর্বশেষ খবর</h2>
    </div>

    <div class="swiper mySwiper" style="margin-left:18%; margin-right:14%;margin-top:15px;border-bottom: 2px solid #ddd; padding-bottom:8px;">
    <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 1" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 1 Title</h3>
            <p>Short description of Slide 1.</p>
        </div>
        <!-- Slide 2 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 2" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 2 Title</h3>
            <p>Short description of Slide 2.</p>
        </div>
        <!-- Slide 3 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 3" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 3 Title</h3>
            <p>Short description of Slide 3.</p>
        </div>
        <!-- Slide 4 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 4" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 4 Title</h3>
            <p>Short description of Slide 4.</p>
        </div>
    </div>

    <!-- Pagination & Navigation -->
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>

<div style="border-top: 3px solid #ddd; margin-left:18%; margin-right:14%;margin-top:30px;">

</div>

<div style="margin-left:18%; margin-right:14%;margin-top:10px;">
<h2>আরও খবর</h2>
</div>

 `;
    container.appendChild(card);

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 3, /* Shows 3 slides initially */
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3, /* On tablets, show 3 slides */
            },
            480: {
                slidesPerView: 2, /* On small screens, show 2 slides */
            },
            320: {
                slidesPerView: 1, /* On mobile, show 1 slide */
            }
        }
    });
    
    poribar_porikolpona_totho_card();

}


function poribar_porikolpona_totho_card(){
    const container = document.getElementById("main-content");
    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `

    <div style="display: flex;flex-direction: column;gap: 20px;align-items: center;margin-left:18%; margin-right:14%;margin-top:30px; padding-left:5%;padding-right:5%;">
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">ঈদের কেনাকাটায় ৮টি জরুরি সতর্কতা</h3>
                <p style="color: #555; margin: 5px 0;">ঈদের কেনাকাটায় কারণে দোকানপাট ভিড়ে... </p>
                <p style="color: #999; font-size: 14px;">৯ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Shopping" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">বাড়ির ছেলশিশ্টিকে ঠিকভাবে বড় করছেন তো</h3>
                <p style="color: #555; margin: 5px 0;">ছোট থেকে শিশুদের শেখা...</p>
                <p style="color: #999; font-size: 14px;">১২ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Education" style="border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">কেমন হলো হামজা-জামালদের নতুন জার্সি</h3>
                <p style="color: #555; margin: 5px 0;">২৫ মার্চে ভারত...</p>
                <p style="color: #999; font-size: 14px;">২৬ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Jersey" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>

        
    </div>

 `;
    container.appendChild(card);

    poribar_porikolpona_totho_show_more();

}

function poribar_porikolpona_totho_show_more(){
    const showmoreButton = document.getElementById("show_more");
    if (showmoreButton) {
        showmoreButton.remove(); 
    }

    // Get the container where new content will be added
    const container = document.getElementById("main-content");

    // Create a new div instead of invalid <main-content>
    const card = document.createElement("div");
    card.classList.add("card");

    
    card.innerHTML = `
    <button id="show_more" style="display: block; width: 150px; margin: 20px auto; padding: 10px 15px; font-size: 16px; font-weight: bold; color: white; background: linear-gradient(45deg, #ff6600, #ff3300); border: none; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);" onclick="family_planning_card()">
    Show More
</button>
    `;

    // Append new content to the container
    container.appendChild(card);
}











//projonon_odhikar
function projonon_odhikar(){
    const container = document.getElementById("main-content");
    container.innerHTML = "";

    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `
    <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #fff;"id="change_div">

    <!-- Header -->
    <header style="background-color: white; margin-left:20% padding: 15px;">
        <h1 style="color: red; margin-left: 8%; font-size: 38px;margin-bottom:35px; ">পরিবার পরিকল্পনা</h1>
    </header>

    <!-- Navigation Menu -->

    <nav style="margin-left:18%; padding: 10px 0; font-size: 12px; display: flex; list-style: none;">
    <ul style="display: flex; gap: 10px; padding: 0; margin: 0; list-style: none;">
        <li >
            <a href="#" style="color: black;text-decoration: none;" onclick="family_planning()">গর্ভনিয়ন্ত্রণ পদ্ধতি</a>
        </li>
        <li>
            <a href="#" style="color: black;text-decoration: none; " onclick="projonod_shastho()">প্রজনন স্বাস্থ্য</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="jonmobiroti()">জন্ম বিরতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="sthayee_samoyeek()">স্থায়ী ও সাময়িক পদ্ধতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;"onclick="poribar_porikolpona_totho()">পরিবার পরিকল্পনা তথ্য</a>
        </li>
        <li  style="text-decoration: underline;">
            <a href="#" style="color: black; " onclick="projonon_odhikar()">প্রজনন অধিকার</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="poroshoder_vomika()">পুরুষদের ভূমিকা</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="proshobbotor_porikolpona()">প্রসবোত্তর পরিকল্পনা</a>
        </li>
    </ul>
</nav>





    <div style="display: flex; margin-left:18%; margin-right:14%;margin-top:10px;">


    <div class="container" style="border-right: 2px solid #ddd; margin-bottom:10px; ">
    <div class="flex-container" >
        <div class="main-news" style="border-right: 2px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.002)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h2>বেশি মাংস, বেশি ডিম দেয় নতুন প্রজাতির এই হাঁস</h2>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="side-news">
        <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
            <h3>ইউরোপে পড়ালেখা এই জনপ্রিয় বৃত্তির সুযোগ কি আপনি নিতে চান</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
    </div>
    
    <div class="flex-container" style="margin-top:8px;">
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Fashion Show" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>পোশাকে, ফ্যাশনে জন্ম উত্তরের মঞ্চ</h3>
            <p>৫ ঘন্টা আগে</p>
        </div>
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Scientist" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>প্রথম হওয়া সায়েন্স লেখা-কিভাবে কষ্ট স্বার্থক হলো</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="news-item">
            <img src="./src/images/exampleImage.avif" alt="Student" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</h3>
            <p>৯ ঘন্টা আগে এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</p>
        </div>
    </div>
    
</div>

<div class="sidebar">

        <img src="./src/images/exampleImage.avif" alt="Scientist" style="padding-bottom:5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
        <div style="border-bottom: 3px solid #ddd;"></div>
        <h3 >সর্বশেষ</h3>
        <ul >
            <li style="border-bottom: 2px solid #ddd; margin-top:5px; margin-bottom:5px;">লিভারপুলকে হারিয়ে ৭০ বছর পর ইউরোপে 'গ্যালিপ্সি' নিউজকাস্ট</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নির্বাচন বিভ্রান্তির কারণে জনগণ সঠিক সিদ্ধান্ত নিতে পারছে না</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নারীদের হারিয়ে 'ব্লুজ' দলের ইনভেস্টমেন্ট বাড়ছে</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
            <li>মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
        </ul>
    </div>

</div>
    
        </div>

        <div style="border-top: 3px solid #1119f5; margin-left:18%; margin-right:14%;margin-top:10px;">

        </div>

    <div style="margin-left:18%; margin-right:14%;margin-top:10px;">
    <h2>সর্বশেষ খবর</h2>
    </div>

    <div class="swiper mySwiper" style="margin-left:18%; margin-right:14%;margin-top:15px;border-bottom: 2px solid #ddd; padding-bottom:8px;">
    <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 1" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 1 Title</h3>
            <p>Short description of Slide 1.</p>
        </div>
        <!-- Slide 2 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 2" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 2 Title</h3>
            <p>Short description of Slide 2.</p>
        </div>
        <!-- Slide 3 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 3" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 3 Title</h3>
            <p>Short description of Slide 3.</p>
        </div>
        <!-- Slide 4 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 4" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 4 Title</h3>
            <p>Short description of Slide 4.</p>
        </div>
    </div>

    <!-- Pagination & Navigation -->
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>

<div style="border-top: 3px solid #ddd; margin-left:18%; margin-right:14%;margin-top:30px;">

</div>

<div style="margin-left:18%; margin-right:14%;margin-top:10px;">
<h2>আরও খবর</h2>
</div>

 `;
    container.appendChild(card);

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 3, /* Shows 3 slides initially */
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3, /* On tablets, show 3 slides */
            },
            480: {
                slidesPerView: 2, /* On small screens, show 2 slides */
            },
            320: {
                slidesPerView: 1, /* On mobile, show 1 slide */
            }
        }
    });
    
    projonod_shastho_card();

}


function projonon_odhikar_card(){
    const container = document.getElementById("main-content");
    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `

    <div style="display: flex;flex-direction: column;gap: 20px;align-items: center;margin-left:18%; margin-right:14%;margin-top:30px; padding-left:5%;padding-right:5%;">
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">ঈদের কেনাকাটায় ৮টি জরুরি সতর্কতা</h3>
                <p style="color: #555; margin: 5px 0;">ঈদের কেনাকাটায় কারণে দোকানপাট ভিড়ে... </p>
                <p style="color: #999; font-size: 14px;">৯ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Shopping" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">বাড়ির ছেলশিশ্টিকে ঠিকভাবে বড় করছেন তো</h3>
                <p style="color: #555; margin: 5px 0;">ছোট থেকে শিশুদের শেখা...</p>
                <p style="color: #999; font-size: 14px;">১২ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Education" style="border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">কেমন হলো হামজা-জামালদের নতুন জার্সি</h3>
                <p style="color: #555; margin: 5px 0;">২৫ মার্চে ভারত...</p>
                <p style="color: #999; font-size: 14px;">২৬ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Jersey" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>

        
    </div>

 `;
    container.appendChild(card);

    projonon_odhikar_show_more();

}

function projonon_odhikar_show_more(){
    const showmoreButton = document.getElementById("show_more");
    if (showmoreButton) {
        showmoreButton.remove(); 
    }

    // Get the container where new content will be added
    const container = document.getElementById("main-content");

    // Create a new div instead of invalid <main-content>
    const card = document.createElement("div");
    card.classList.add("card");

    
    card.innerHTML = `
    <button id="show_more" style="display: block; width: 150px; margin: 20px auto; padding: 10px 15px; font-size: 16px; font-weight: bold; color: white; background: linear-gradient(45deg, #ff6600, #ff3300); border: none; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);" onclick="family_planning_card()">
    Show More
</button>
    `;

    // Append new content to the container
    container.appendChild(card);
}










// poroshoder_vomika
function poroshoder_vomika(){
    const container = document.getElementById("main-content");
    container.innerHTML = "";

    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `
    <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #fff;"id="change_div">

    <!-- Header -->
    <header style="background-color: white; margin-left:20% padding: 15px;">
        <h1 style="color: red; margin-left: 8%; font-size: 38px;margin-bottom:35px; ">পরিবার পরিকল্পনা</h1>
    </header>

    <!-- Navigation Menu -->

    <nav style="margin-left:18%; padding: 10px 0; font-size: 12px; display: flex; list-style: none;">
    <ul style="display: flex; gap: 10px; padding: 0; margin: 0; list-style: none;">
        <li >
            <a href="#" style="color: black;text-decoration: none;" onclick="family_planning()">গর্ভনিয়ন্ত্রণ পদ্ধতি</a>
        </li>
        <li >
            <a href="#" style="color: black;text-decoration: none; " onclick="projonod_shastho()">প্রজনন স্বাস্থ্য</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="jonmobiroti()">জন্ম বিরতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="sthayee_samoyeek()">স্থায়ী ও সাময়িক পদ্ধতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;"onclick="poribar_porikolpona_totho()">পরিবার পরিকল্পনা তথ্য</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="projonon_odhikar()">প্রজনন অধিকার</a>
        </li>
        <li style="text-decoration: underline;">
            <a href="#" style="color: black; " onclick="poroshoder_vomika()">পুরুষদের ভূমিকা</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="proshobbotor_porikolpona()">প্রসবোত্তর পরিকল্পনা</a>
        </li>
    </ul>
</nav>





    <div style="display: flex; margin-left:18%; margin-right:14%;margin-top:10px;">


    <div class="container" style="border-right: 2px solid #ddd; margin-bottom:10px; ">
    <div class="flex-container" >
        <div class="main-news" style="border-right: 2px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.002)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h2>বেশি মাংস, বেশি ডিম দেয় নতুন প্রজাতির এই হাঁস</h2>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="side-news">
        <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
            <h3>ইউরোপে পড়ালেখা এই জনপ্রিয় বৃত্তির সুযোগ কি আপনি নিতে চান</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
    </div>
    
    <div class="flex-container" style="margin-top:8px;">
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Fashion Show" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>পোশাকে, ফ্যাশনে জন্ম উত্তরের মঞ্চ</h3>
            <p>৫ ঘন্টা আগে</p>
        </div>
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Scientist" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>প্রথম হওয়া সায়েন্স লেখা-কিভাবে কষ্ট স্বার্থক হলো</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="news-item">
            <img src="./src/images/exampleImage.avif" alt="Student" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</h3>
            <p>৯ ঘন্টা আগে এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</p>
        </div>
    </div>
    
</div>

<div class="sidebar">

        <img src="./src/images/exampleImage.avif" alt="Scientist" style="padding-bottom:5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
        <div style="border-bottom: 3px solid #ddd;"></div>
        <h3 >সর্বশেষ</h3>
        <ul >
            <li style="border-bottom: 2px solid #ddd; margin-top:5px; margin-bottom:5px;">লিভারপুলকে হারিয়ে ৭০ বছর পর ইউরোপে 'গ্যালিপ্সি' নিউজকাস্ট</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নির্বাচন বিভ্রান্তির কারণে জনগণ সঠিক সিদ্ধান্ত নিতে পারছে না</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নারীদের হারিয়ে 'ব্লুজ' দলের ইনভেস্টমেন্ট বাড়ছে</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
            <li>মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
        </ul>
    </div>

</div>
    
        </div>

        <div style="border-top: 3px solid #1119f5; margin-left:18%; margin-right:14%;margin-top:10px;">

        </div>

    <div style="margin-left:18%; margin-right:14%;margin-top:10px;">
    <h2>সর্বশেষ খবর</h2>
    </div>

    <div class="swiper mySwiper" style="margin-left:18%; margin-right:14%;margin-top:15px;border-bottom: 2px solid #ddd; padding-bottom:8px;">
    <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 1" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 1 Title</h3>
            <p>Short description of Slide 1.</p>
        </div>
        <!-- Slide 2 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 2" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 2 Title</h3>
            <p>Short description of Slide 2.</p>
        </div>
        <!-- Slide 3 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 3" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 3 Title</h3>
            <p>Short description of Slide 3.</p>
        </div>
        <!-- Slide 4 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 4" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 4 Title</h3>
            <p>Short description of Slide 4.</p>
        </div>
    </div>

    <!-- Pagination & Navigation -->
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>

<div style="border-top: 3px solid #ddd; margin-left:18%; margin-right:14%;margin-top:30px;">

</div>

<div style="margin-left:18%; margin-right:14%;margin-top:10px;">
<h2>আরও খবর</h2>
</div>

 `;
    container.appendChild(card);

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 3, /* Shows 3 slides initially */
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3, /* On tablets, show 3 slides */
            },
            480: {
                slidesPerView: 2, /* On small screens, show 2 slides */
            },
            320: {
                slidesPerView: 1, /* On mobile, show 1 slide */
            }
        }
    });
    
    poroshoder_vomika_card();

}


function poroshoder_vomika_card(){
    const container = document.getElementById("main-content");
    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `

    <div style="display: flex;flex-direction: column;gap: 20px;align-items: center;margin-left:18%; margin-right:14%;margin-top:30px; padding-left:5%;padding-right:5%;">
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">ঈদের কেনাকাটায় ৮টি জরুরি সতর্কতা</h3>
                <p style="color: #555; margin: 5px 0;">ঈদের কেনাকাটায় কারণে দোকানপাট ভিড়ে... </p>
                <p style="color: #999; font-size: 14px;">৯ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Shopping" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">বাড়ির ছেলশিশ্টিকে ঠিকভাবে বড় করছেন তো</h3>
                <p style="color: #555; margin: 5px 0;">ছোট থেকে শিশুদের শেখা...</p>
                <p style="color: #999; font-size: 14px;">১২ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Education" style="border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">কেমন হলো হামজা-জামালদের নতুন জার্সি</h3>
                <p style="color: #555; margin: 5px 0;">২৫ মার্চে ভারত...</p>
                <p style="color: #999; font-size: 14px;">২৬ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Jersey" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>

        
    </div>

 `;
    container.appendChild(card);

    poroshoder_vomika_show_more();

}

function poroshoder_vomika_show_more(){
    const showmoreButton = document.getElementById("show_more");
    if (showmoreButton) {
        showmoreButton.remove(); 
    }

    // Get the container where new content will be added
    const container = document.getElementById("main-content");

    // Create a new div instead of invalid <main-content>
    const card = document.createElement("div");
    card.classList.add("card");

    
    card.innerHTML = `
    <button id="show_more" style="display: block; width: 150px; margin: 20px auto; padding: 10px 15px; font-size: 16px; font-weight: bold; color: white; background: linear-gradient(45deg, #ff6600, #ff3300); border: none; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);" onclick="family_planning_card()">
    Show More
</button>
    `;

    // Append new content to the container
    container.appendChild(card);
}






// proshobbotor_porikolpona
function proshobbotor_porikolpona(){
    const container = document.getElementById("main-content");
    container.innerHTML = "";

    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `
    <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #fff;"id="change_div">

    <!-- Header -->
    <header style="background-color: white; margin-left:20% padding: 15px;">
        <h1 style="color: red; margin-left: 8%; font-size: 38px;margin-bottom:35px; ">পরিবার পরিকল্পনা</h1>
    </header>

    <!-- Navigation Menu -->

    <nav style="margin-left:18%; padding: 10px 0; font-size: 12px; display: flex; list-style: none;">
    <ul style="display: flex; gap: 10px; padding: 0; margin: 0; list-style: none;">
        <li >
            <a href="#" style="color: black;text-decoration: none;" onclick="family_planning()">গর্ভনিয়ন্ত্রণ পদ্ধতি</a>
        </li>
        <li >
            <a href="#" style="color: black; text-decoration: none; " onclick="projonod_shastho()">প্রজনন স্বাস্থ্য</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="jonmobiroti()">জন্ম বিরতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="sthayee_samoyeek()">স্থায়ী ও সাময়িক পদ্ধতি</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;"onclick="poribar_porikolpona_totho()">পরিবার পরিকল্পনা তথ্য</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="projonon_odhikar()">প্রজনন অধিকার</a>
        </li>
        <li>
            <a href="#" style="color: black; text-decoration: none;" onclick="poroshoder_vomika()">পুরুষদের ভূমিকা</a>
        </li>
        <li style="text-decoration: underline;">
            <a href="#" style="color: black; " onclick="proshobbotor_porikolpona()">প্রসবোত্তর পরিকল্পনা</a>
        </li>
    </ul>
</nav>





    <div style="display: flex; margin-left:18%; margin-right:14%;margin-top:10px;">


    <div class="container" style="border-right: 2px solid #ddd; margin-bottom:10px; ">
    <div class="flex-container" >
        <div class="main-news" style="border-right: 2px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.002)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h2>বেশি মাংস, বেশি ডিম দেয় নতুন প্রজাতির এই হাঁস</h2>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="side-news">
        <img src="./src/images/exampleImage.avif" alt="News Image" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
            <h3>ইউরোপে পড়ালেখা এই জনপ্রিয় বৃত্তির সুযোগ কি আপনি নিতে চান</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
    </div>
    
    <div class="flex-container" style="margin-top:8px;">
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Fashion Show" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>পোশাকে, ফ্যাশনে জন্ম উত্তরের মঞ্চ</h3>
            <p>৫ ঘন্টা আগে</p>
        </div>
        <div class="news-item" style="border-right: 1px solid #ddd;">
            <img src="./src/images/exampleImage.avif" alt="Scientist" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>প্রথম হওয়া সায়েন্স লেখা-কিভাবে কষ্ট স্বার্থক হলো</h3>
            <p>৮ ঘন্টা আগে</p>
        </div>
        <div class="news-item">
            <img src="./src/images/exampleImage.avif" alt="Student" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</h3>
            <p>৯ ঘন্টা আগে এআই ব্যবহার করে লোডশেডিং কমাতে চান আইইউবির শিক্ষার্থী হালিমা</p>
        </div>
    </div>
    
</div>

<div class="sidebar">

        <img src="./src/images/exampleImage.avif" alt="Scientist" style="padding-bottom:5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
        onmouseout="this.style.transform='scale(1)'">
        <div style="border-bottom: 3px solid #ddd;"></div>
        <h3 >সর্বশেষ</h3>
        <ul >
            <li style="border-bottom: 2px solid #ddd; margin-top:5px; margin-bottom:5px;">লিভারপুলকে হারিয়ে ৭০ বছর পর ইউরোপে 'গ্যালিপ্সি' নিউজকাস্ট</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নির্বাচন বিভ্রান্তির কারণে জনগণ সঠিক সিদ্ধান্ত নিতে পারছে না</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">নারীদের হারিয়ে 'ব্লুজ' দলের ইনভেস্টমেন্ট বাড়ছে</li>
            <li style="border-bottom: 2px solid #ddd;  margin-top:5px; margin-bottom:5px;">মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
            <li>মতামত: 'ধর্ষণ' শাস্তি ডিএমপি কমান্ডারের ভুল দৃষ্টি</li>
        </ul>
    </div>

</div>
    
        </div>

        <div style="border-top: 3px solid #1119f5; margin-left:18%; margin-right:14%;margin-top:10px;">

        </div>

    <div style="margin-left:18%; margin-right:14%;margin-top:10px;">
    <h2>সর্বশেষ খবর</h2>
    </div>

    <div class="swiper mySwiper" style="margin-left:18%; margin-right:14%;margin-top:15px;border-bottom: 2px solid #ddd; padding-bottom:8px;">
    <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 1" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 1 Title</h3>
            <p>Short description of Slide 1.</p>
        </div>
        <!-- Slide 2 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 2" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 2 Title</h3>
            <p>Short description of Slide 2.</p>
        </div>
        <!-- Slide 3 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 3" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 3 Title</h3>
            <p>Short description of Slide 3.</p>
        </div>
        <!-- Slide 4 -->
        <div class="swiper-slide">
            <img src="./src/images/exampleImage.avif" alt="Slide 4" style="transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.02)'" 
            onmouseout="this.style.transform='scale(1)'">
            <h3>Slide 4 Title</h3>
            <p>Short description of Slide 4.</p>
        </div>
    </div>

    <!-- Pagination & Navigation -->
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>

<div style="border-top: 3px solid #ddd; margin-left:18%; margin-right:14%;margin-top:30px;">

</div>

<div style="margin-left:18%; margin-right:14%;margin-top:10px;">
<h2>আরও খবর</h2>
</div>

 `;
    container.appendChild(card);

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 3, /* Shows 3 slides initially */
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3, /* On tablets, show 3 slides */
            },
            480: {
                slidesPerView: 2, /* On small screens, show 2 slides */
            },
            320: {
                slidesPerView: 1, /* On mobile, show 1 slide */
            }
        }
    });
    
    proshobbotor_porikolpona_card();

}


function proshobbotor_porikolpona_card(){
    const container = document.getElementById("main-content");
    const card = document.createElement("main-content");
    card.classList.add("card");
    card.innerHTML = `

    <div style="display: flex;flex-direction: column;gap: 20px;align-items: center;margin-left:18%; margin-right:14%;margin-top:30px; padding-left:5%;padding-right:5%;">
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">ঈদের কেনাকাটায় ৮টি জরুরি সতর্কতা</h3>
                <p style="color: #555; margin: 5px 0;">ঈদের কেনাকাটায় কারণে দোকানপাট ভিড়ে... </p>
                <p style="color: #999; font-size: 14px;">৯ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Shopping" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">বাড়ির ছেলশিশ্টিকে ঠিকভাবে বড় করছেন তো</h3>
                <p style="color: #555; margin: 5px 0;">ছোট থেকে শিশুদের শেখা...</p>
                <p style="color: #999; font-size: 14px;">১২ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Education" style="border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>
        
        <div class="news-item-last">
            <div class="news-text-last">
                <h3 style="margin: 0; color: #000;">কেমন হলো হামজা-জামালদের নতুন জার্সি</h3>
                <p style="color: #555; margin: 5px 0;">২৫ মার্চে ভারত...</p>
                <p style="color: #999; font-size: 14px;">২৬ ঘণ্টা আগে</p>
            </div>
            <img src="./src/images/exampleImage.avif" alt="Jersey" style=" border-radius: 5px;transition: transform 0.3s ease-in-out;"  onmouseover="this.style.transform='scale(1.07)'" 
            onmouseout="this.style.transform='scale(1)'">
        </div>

        
    </div>

 `;
    container.appendChild(card);

    proshobbotor_porikolpona_show_more();

}

function proshobbotor_porikolpona_show_more(){
    const showmoreButton = document.getElementById("show_more");
    if (showmoreButton) {
        showmoreButton.remove(); 
    }

    // Get the container where new content will be added
    const container = document.getElementById("main-content");

    // Create a new div instead of invalid <main-content>
    const card = document.createElement("div");
    card.classList.add("card");

    
    card.innerHTML = `
    <button id="show_more" style="display: block; width: 150px; margin: 20px auto; padding: 10px 15px; font-size: 16px; font-weight: bold; color: white; background: linear-gradient(45deg, #ff6600, #ff3300); border: none; border-radius: 25px; cursor: pointer; transition: all 0.3s ease; box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);" onclick="family_planning_card()">
    Show More
</button>
    `;

    // Append new content to the container
    container.appendChild(card);
}
