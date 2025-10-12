---
permalink: /
title: "About me"
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

---
permalink: /
title: "About me"
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="scroll-scale-container" style="height: 100vh;">
  <div class="scroll-scale-content">
    <!-- 在这里放置您想缩放的内容 -->
    <div style="text-align: center; max-width: 800px; padding: 2rem;">
      **Hao is currently a Machine Learning and Backend Developer at China Merchants Bank Co.,**  
      He graduated with a B.Eng. in Artificial Technology and Science from South China University of Technology (SCUT). In 2021, he earned his M.Sc. degree in Electrical and Computer Engineering from the University of Florida. He applied Natural Language Processing techniques to analyze health and log data within a mobile app, which boasts over 100 million users.  
      His research interests are focused on model security and robustness in Computer Vision using Large Vision Models, AI for Systems, and the integration of AI with IoT (Internet of Things)."
      He is now working as a research assitant under the supervision of Professor Antonio at Purdue University.
    </div>
  </div>
</div>

<div id="page-content" style="padding-top: 2rem;">
  {% include about/news.html %}
  {% include about/research.html %}
  {% include about/experience.html %}
  {% include about/education.html %}

  <div style="padding: 2rem;">
    <dl style="font-family: Arial, sans-serif; font-size: 14px;color: #333; text-align: left; border: 2px solid #3f51b5; padding: 10px; border-radius: 10px;">
      <dt>My Documents</dt>
      <dd class="link" style="background-color: #f2f2f2; border-radius: 10px; margin-bottom: 10px; padding: 10px;">
        <a href="./files/CV_research.pdf" style="color: black; text-decoration: none;">CV</a>
      </dd>
      <dd class="link" style="background-color: #f2f2f2; border-radius: 10px; margin-bottom: 10px; padding: 10px;">
        <a href="./files/transcript_graduate.pdf" style="color: black; text-decoration: none;">Transcript (Graduate)</a>
        <a href="./files/Diploma.pdf" style="color: black; text-decoration: none;">Certificate (Graduate)</a>
      </dd>
      <dd class="link" style="background-color: #f2f2f2; border-radius: 10px; margin-bottom: 10px; padding: 10px;">
        <a href="./files/Transcript_Undergraduate.pdf" style="color: black; text-decoration: none;">Transcript(Undergraduate)</a>
        <a href="./files/undergraduateTranscript.pdf" style="color: black; text-decoration: none;">Certificate (Undergraduate)</a>
      </dd>
    </dl>
  </div>

  <script>
    const links = document.querySelectorAll(".link");

    links.forEach(link => {
      link.addEventListener("mouseenter", function() {
        this.style.color = "red";
        this.style.fontSize = "20px";
        this.style.transform = "scale(1.01)";
      });
      link.addEventListener("mouseleave", function() {
        this.style.color = "blue";
        this.style.fontSize = "14px";
        this.style.transform = "scale(1)";
      });
    });
  </script>
</div>

