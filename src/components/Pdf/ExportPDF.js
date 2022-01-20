import { Button } from "@mui/material";
import logo from "./logo.png";
import { jsPDF } from "jspdf";

const border = 20;

export default function ExportPDF(props) {
  const onClick = () => {
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.addImage(logo, 50, 50);
    doc.save("a4.pdf");
  };

  return (
    <Button variant="contained" color="primary" fullWidth onClick={onClick}>
      Generate
    </Button>
  );
}
