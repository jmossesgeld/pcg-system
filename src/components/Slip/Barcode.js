import JsBarcode from "jsbarcode";
import { createCanvas } from "canvas";

export default function Sample(props) {
  const canvas = createCanvas(1, 1);
  JsBarcode(canvas, String(props.control + 1), {
    format: "CODE39",
    width: props.width || 3,
    height: props.height || 50,
    displayValue: false,
  });
  const img = canvas.toDataURL("image/png");
  return <img src={img} alt="barcode" />;
}
