import { useSelector } from "react-redux";
import { useAccordionItemContext } from "./AccordionItem";
export default function AccordionContent({ children }) {
  const id = useAccordionItemContext();
  
  const openItemId = useSelector((state) => state.accordion.openItemId);

  const isOpen = openItemId === id;
  return isOpen ? (
    <div className="accordion-item-context">{children}</div>
  ) : null;
}
