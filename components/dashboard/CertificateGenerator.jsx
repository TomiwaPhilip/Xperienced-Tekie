import jsPDF from "jspdf";

const CertificateGenerator = () => {
  const handlePDF = () => {
    // Create a new jsPDF document
    var doc = new jsPDF({
      orientation: "landscape",
      format: "a4",
      unit: "mm",
    });

    // Load the image
    var img = new Image();
    img.src = "/assets/images/Xperienced Tekie (1).png";

    // Add the image to the document
    doc.addImage(img, 0, 0, 297, 210);

    // Get the dimensions of the bigger rectangle
    var bigRect = {
      x: 106,
      y: 116,
      width: 170,
      height: 100,
    };

    // Get the dimensions of the smaller rectangle
    var smallRect = {
      x: 127,
      y: 127,
      width: 170,
      height: 45,
    };

    // Add text to the bigger rectangle
    doc.setFontSize(40);
    doc.setFont("Courier-Bold");
    doc.setTextColor(0, 0, 0); // Black
    doc.text(bigRect.x + 5, bigRect.y + 5, "Tomiwa Philip");

    // Add text to the smaller rectangle
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Black
    doc.text(smallRect.x + 5, smallRect.y + 5, "frontend");

    // Save the PDF document
    doc.save("certificate.pdf");
  };

  return (
    <div>
      <h1>Certificate Generator</h1>
      <button onClick={handlePDF}>Generate Certificate</button>
    </div>
  );
};

export default CertificateGenerator;
