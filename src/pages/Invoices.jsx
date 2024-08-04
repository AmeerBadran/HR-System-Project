import RootLayout from "../components/HOC/RootLayout";
import PagesTitle from "../components/molecule/PagesTitle";
import InvoicesPages from  "../components/organism/InvoicesPages.jsx";
import { useState } from 'react';

function Invoices() {
  const [activeButtonIndex, setActiveButtonIndex] = useState(()=>0);
  return (
    <div className="w-full">
      <PagesTitle pageTitle={'Invoices'} activeButtonIndex={activeButtonIndex} setActiveButtonIndex={setActiveButtonIndex}/>
      <div className="mt-6">
          <InvoicesPages activeButtonIndex={activeButtonIndex}/>
      </div>
      
    </div>
  )
}

const WrappedFooter = RootLayout(Invoices);

export default WrappedFooter;

