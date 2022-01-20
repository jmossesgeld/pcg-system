import { Box, Button } from "@mui/material";
import logo from "./logo.png";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const border = 20;

export default function ExportPDF(props) {
  const onClick = () => {
    html2canvas(document.querySelector(props.idToPrint)).then((canvas) => {
      const doc = new jsPDF();
      const img = canvas.toDataURL("image/png");
      doc.addImage(img, "JPEG", 0, 7, 210, 90 * props.noOfItems);
      doc.save("a4.pdf");
    });
  };

  return (
    <Box sx={{ flexGrow: 1, width:500, margin:"auto", mt:1, mb:1 }}>
      <Button variant="contained" color="primary" fullWidth onClick={onClick}>
      🖨️ PRINT PAGE
      </Button>
    </Box>
  );
}
