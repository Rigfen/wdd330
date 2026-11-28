export async function loadHeaderFooter() {
  const base = import.meta.env.BASE_URL;

  // Load header and footer files
  const [headerResponse, footerResponse] = await Promise.all([
    fetch(`${base}partials/header.html`),
    fetch(`${base}partials/footer.html`),
  ]);

  // Check that both files loaded successfully
  if (!headerResponse.ok || !footerResponse.ok) {
    throw new Error("Could not load the header or footer.");
  }

  const [headerHTML, footerHTML] = await Promise.all([
    headerResponse.text(),
    footerResponse.text(),
  ]);

  // Add the header and footer to the page
  const header = document.querySelector("#main-header");
  const footer = document.querySelector("#main-footer");

  if (header) {
    header.outerHTML = headerHTML;
  }

  if (footer) {
    footer.outerHTML = footerHTML;
  }

  // Display the current year
  const year = document.querySelector("#current-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Handle header search
  const searchForm = document.querySelector("#search-form");

  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const searchTerm = document.querySelector("#search-input").value.trim();

      if (!searchTerm) return;

      window.location.href = `${base}equipment/?search=${encodeURIComponent(searchTerm)}`;
    });
  }
}
