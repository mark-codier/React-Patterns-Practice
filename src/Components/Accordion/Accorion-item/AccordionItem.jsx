import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const id = useContext(AccordionItemContext);
  if (!id) {
    throw new Error(
      "AccordionItem-related components must used only inside <Accordion.Item />"
    );
  }
  return id;
}

export default function AccordionItem({ id, children, className }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}
// ai engineering >= cloud engineering