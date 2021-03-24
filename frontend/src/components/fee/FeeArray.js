import FeeDollarAnimation from "../animations/fee/FeeDollarAnimation";
import FreeAnimation from "../animations/fee/FreeAnimation";
const FeeArray = [
  {
    id: 1,
    animation: <FreeAnimation />,
    charges: "0$",
    duration: "First 3 days for newly admitted",
  },
  {
    id: 2,
    animation: <FeeDollarAnimation />,
    charges: "30$",
    duration: "2 days in a week",
  },
  {
    id: 3,
    animation: <FeeDollarAnimation />,
    charges: "40$",
    duration: "3 days in a week",
  },
  {
    id: 5,
    animation: <FeeDollarAnimation />,
    charges: "60$",
    duration: "5 days in a week",
  },
];
export default FeeArray;
