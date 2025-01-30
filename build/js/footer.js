export async function LoadFooter() {
  try {
    const response = await fetch("footer.html");
    if (!response.ok) throw new Error("Could not fetch footer.html");

    const htmlContent = await response.text();
    document.getElementById("footer-placeholder").innerHTML = htmlContent;
  } catch (error) {
    console.error("Error loading footer:", error);
  }
}
