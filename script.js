window.addEventListener("load", function () {
  const workExperience = [
    {
      companyName: "PenChecks",
      companyURL: "https://www.penchecks.com/",
      title: "Frontend Software Engineer",
      dateRange: "January 2022 - Present",
      jobDetails: ["Details to come..."],
    },
    {
      companyName: "alwaysAI",
      companyURL: "https://www.alwaysai.co/",
      title: "Web Developer",
      dateRange: "June 2020 - November 2021",
      jobDetails: [
        "Led redesign of marketing site with Next.js & Tailwind CSS. Oversaw 2 other developers & played key role estimating, managing project timeline, & building components.",
        "Rebuilt blog from ground-up with React, Next.js, TypeScript, & HubSpot as a headless CMS. Project spanned the whole stack, from frontend to creating a Node/Express server & AWS Lambda functions.",
        "Implemented functional & design overhaul overhaul of user signup/signin pages that  led to 2x increase in users logging in post-signup.",
        "Developed custom modules for use in HubSpot landing pages and event triggers to update contact properties via API.",
        "Leverage agency experience to provide UX and SEO insights/strategy.",
      ],
    },
    {
      companyName: "Red Door Interactive",
      companyURL: "https://www.reddoor.biz/",
      title: "Technical Project Manager",
      dateRange: "February 2017 - November 2019",
      jobDetails: [
        "Managed agile and waterfall web development projects for multiple clients at a time.",
        "Oversaw the design, development, and launch of an e-commerce website for a skincare company.",
        "Spearheaded the internal effort to evolve the company’s internal resourcing and delivery monitoring processes through the integration of business intelligence tools. This allowed leadership to be more agile in response to ever-changing resourcing needs.",
      ],
    },
    {
      companyName: "RR Donnelley",
      companyURL: "https://www.rrd.com/",
      title: "Technology Project Manager",
      dateRange: "July 2012 - February 2017",
      jobDetails: [
        "Led technology projects in a deadline driven environment that married digital technology and physical production.",
        "Coordinated a large-scale project for a Fortune 500 company from inception through completion and was responsible for reporting project status to senior management.",
        "Maintained and enhanced client websites using HTML, CSS, JavaScript, and jQuery.",
      ],
    },
  ];

  function showMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    nav.style.visibility = "visible";
    nav.style.transform = "translateX(0vw)";
    document.querySelector("#mobile-menu-button").classList.add("is-active");
  }

  function hideMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    nav.style.visibility = "hidden";
    nav.style.transform = "translateX(100vw)";
    document.querySelector("#mobile-menu-button").classList.remove("is-active");
  }

  function toggleMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    if (nav.style.visibility === "visible") {
      hideMobileMenu();
    } else {
      showMobileMenu();
    }
  }

  function addLineBreak() {
    let isMobile = window.matchMedia("(max-width: 500px)").matches;
    let mobileLineBreak = "";

    if (isMobile) {
      mobileLineBreak = "<br />";
    } else {
      mobileLineBreak = "";
    }

    return mobileLineBreak;
  }

  const initExperienceSection = () => {
    let br = addLineBreak();

    for (let i = 0; i < workExperience.length; i++) {
      document.querySelector("#jobList").innerHTML += `<li data-index=${i}>
                <div class="job-button ease-transition">${workExperience[i].companyName}</div>
            </li>`;
    }

    document
      .querySelectorAll("#jobList > li div")[0]
      .classList.add("job-button-selected");

    document.querySelector(
      ".jobTitle"
    ).innerHTML = `${workExperience[0].title} ${br} <span class="at-symbol">@</span> <a class="animate-links" href="${workExperience[0].companyURL}" target="_blank">${workExperience[0].companyName}</a>`;

    document.querySelector(".jobDateRange").textContent =
      workExperience[0].dateRange;

    workExperience[0].jobDetails.forEach((bullet) => {
      document.querySelector(
        "#job-bulletpoints ul"
      ).innerHTML += `<li>${bullet}</li>`;
    });
  };

  function renderExperienceSection(event) {
    if (event.target.matches(".job-button-selected")) {
      return;
    } else {
      let br = addLineBreak();

      document.querySelector("#job-bulletpoints ul").innerHTML = "";

      let index = event.target.parentElement.attributes["data-index"].value;

      document.querySelector(
        ".jobTitle"
      ).innerHTML = `${workExperience[index].title} ${br} <span class="at-symbol">@</span> <a class="animate-links" href="${workExperience[index].companyURL}" target="_blank">${workExperience[index].companyName}</a>`;

      document.querySelector(".jobDateRange").textContent =
        workExperience[index].dateRange;

      workExperience[index].jobDetails.forEach((bullet) => {
        document.querySelector(
          "#job-bulletpoints ul"
        ).innerHTML += `<li>${bullet}</li>`;
      });

      document
        .querySelectorAll("#jobList li div")
        .forEach((el) => el.classList.remove("job-button-selected"));
      event.target.classList.add("job-button-selected");
    }
  }

  function smoothScrollToCenter(elementId) {
    const el = document.getElementById(elementId);

    const position = elementId === "projects-section" ? "start" : "center";

    el.scrollIntoView({
      behavior: "smooth",
      block: position,
      inline: position,
    });
  }

  document.addEventListener(
    "click",
    function (event) {
      if (event.target.matches(".job-button")) {
        renderExperienceSection(event);
      }
    },
    false
  );

  document.addEventListener(
    "click",
    function (event) {
      if (event.target.matches(".navLink")) {
        console.log(event.target.attributes[1].value);
        smoothScrollToCenter(event.target.attributes[1].value);
      }
    },
    false
  );

  document
    .querySelector("#mobile-menu-button")
    .addEventListener("click", toggleMobileMenu);

  document
    .querySelector("#mobile-nav-tap-close-background")
    .addEventListener("click", hideMobileMenu);

  let mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach((el) => el.addEventListener("click", hideMobileMenu));

  initExperienceSection();
});
