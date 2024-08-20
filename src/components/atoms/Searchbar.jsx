import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { invoiceListData } from '../../constants/invoicesListData';


const values = invoiceListData.map((option, index) => ({
  id: index,
  name: option.status,
}));




export default function Searchbar() {
  const [selected, setSelected] = useState(values[0]);
  console.log(selected.name)
  return (
    <Listbox value={selected} onChange={setSelected} className="w-36 ">

      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-[#2A2D36] py-1.5 pl-3 pr-10 text-left font-normal text-white text-lg shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions className="absolute text-white font-medium z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#191c25] py-1 text-base shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none sm:text-sm">
          {values.map((option) => (
            <ListboxOption
              key={option.id}
              value={option}
              className={({ focus }) =>
                `relative cursor-default select-none py-2 pl-3 pr-9 ${focus ? 'bg-cyan-400 text-white' : 'text-white'}`
              }
            >
              {({ selected }) => (
                <>
                  <span className={`block truncate ${selected ? 'font-normal' : 'font-light'}`}>
                    {option.name}
                  </span>
                  {selected && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-cyan-700">
                      <CheckIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  )}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
