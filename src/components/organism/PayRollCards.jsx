import PayrollCard from "../molecule/PayrollCard";
import { PayRollData } from "../../constants/PayRollData";

export default function PayRollCards() {
  return (
    <div className="grid xl:grid-cols-2 gap-7">
        {PayRollData.map((Data, index) => (
          <PayrollCard key={index} {...Data} /> ))}
     
    </div>
  )
}
