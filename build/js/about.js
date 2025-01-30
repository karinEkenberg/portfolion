export async function LoadAbout() {
  try {
    const response = await fetch("about.html");
    if (!response.ok) throw new Error("Could not fetch about.html");

    const htmlContent = await response.text();
    document.getElementById("about-placeholder").innerHTML = htmlContent;
  } catch (error) {
    console.error("Error loading about:", error);
  }
}
