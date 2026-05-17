const pillarData = {
  purpose: {
    kicker: "Be your best self",
    title: "Purpose & Potential",
    quote:
      "I strive for a life of meaning, developing and growing to achieve my potential and ambitions.",
    items: ["Self awareness", "Self development", "Career development"],
  },
  health: {
    kicker: "Nurture body, mind and soul",
    title: "Positive Health",
    quote:
      "I create a healthy lifestyle that supports my mental and physical wellbeing.",
    items: ["Medical health and cover", "Physical wellbeing", "Mental and spiritual wellbeing"],
  },
  people: {
    kicker: "Advance through community together",
    title: "People",
    quote: "I can be my best when I connect and learn with and through others.",
    items: ["Circles", "Webinars", "Workshops", "Events"],
  },
  wealth: {
    kicker: "Pursue financial freedom",
    title: "Personal Wealth",
    quote:
      "I seek independence, flexibility, and opportunities to live a full, rich life and build a proud legacy.",
    items: ["Savings and investment", "Retirement", "At-risk benefits", "Wills and estates"],
  },
};

const buttons = document.querySelectorAll(".wheel-point");
const kicker = document.querySelector("#pillar-kicker");
const title = document.querySelector("#pillar-title");
const quote = document.querySelector("#pillar-quote");
const list = document.querySelector("#pillar-list");

function renderPillar(key) {
  const data = pillarData[key];

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.pillar === key);
  });

  kicker.textContent = data.kicker;
  title.textContent = data.title;
  quote.textContent = data.quote;
  list.replaceChildren(
    ...data.items.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    }),
  );
}

buttons.forEach((button) => {
  button.addEventListener("click", () => renderPillar(button.dataset.pillar));
});
