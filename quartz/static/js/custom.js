document.addEventListener("DOMContentLoaded", () => {
  // Map slugs to CSS classes
  const cardStyles = {
    "Eberron-Lore": "card-lore",
    "House-Rules": "card-house",
    "Races": "card-races",
    // Add more mappings as needed
  };

  // Only run on the cards index page
  if (document.body.dataset.slug === "cards/index") {
    document.querySelectorAll(".section-li a").forEach((link) => {
      const href = link.getAttribute("href");
      const slug = href?.split("/").pop();
      const cssClass = cardStyles[slug];
      if (cssClass) {
        const li = link.closest(".section-li");
        if (li) li.classList.add(cssClass);
      }
    });
  }
});
