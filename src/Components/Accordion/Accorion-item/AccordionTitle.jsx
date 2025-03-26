import { useDispatch } from "react-redux";
import { toggleItem } from "../../../redux-store/Accordeon-store/accordionSlice";
import { useAccordionItemContext } from "./AccordionItem";
export default function AccordionTitle({ title }) {
  const id = useAccordionItemContext()
  const dispatch = useDispatch();
  return <h3 onClick={() => dispatch(  toggleItem(id)  )   }>{title}</h3>;
}
