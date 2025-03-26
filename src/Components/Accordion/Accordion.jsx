import AccordionItem from "./Accorion-item/AccordionItem";
import AccordionTitle from './Accorion-item/AccordionTitle'
import AccordionContent from "./Accorion-item/AccordionContent";
import { Provider } from "react-redux";
import accordionStore from "../../redux-store/Accordeon-store/store";
export default function Accordion({ className, children }) {
  return (
    <Provider store={accordionStore} >
      <ul className={className}>{children}</ul>
    </Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
// react context => @redux/toolkit