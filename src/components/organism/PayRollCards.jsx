import PayrollCard from "../molecule/PayrollCard";
import { PayRollData } from "../../constants/PayRollData";

export default function PayRollCards() {
  return (
    <div>
        {PayRollData.map((Data, index) => (
          <PayrollCard key={index} {...Data} /> ))}
     
    </div>
  )
}
