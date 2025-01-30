export async function LoadContact() {
  try {
    const responce = await fetch("contact.html");
    if (!responce.ok) throw new Error("Could not fetch contact.html");

    const htmlContent = await responce.text();
    document.getElementById("contact-placeholder").innerHTML = htmlContent;
  } catch (error) {
    console.error("Error loading contact:", error);
  }
}
