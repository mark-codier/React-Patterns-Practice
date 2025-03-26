import "./App.css";
import Accordion from "./Components/Accordion/Accordion";
import SearchList from "./Components/SearchList/SearchList";
import places from "./places";

function App() {
  return (
    <main>
      <h1>React Patterns & Practices</h1>
      <section>
        <h2>Compound Components</h2>
        <p>
          Compound components are a pattern where a parent component manages the
          state and logic, while the child components handle the rendering.
        </p>
        <h3>Example:</h3>
        {/* <select name="" id="">
          <option value="">Frontend library</option>
          <option value="">react js</option>
          <option value="">vue js</option>
        </select> */}
        <Accordion className="accordion">
          <Accordion.Item id="a" className="accordion-item">
            <Accordion.Title title="Why do we create our own compound components?" />
            <Accordion.Content>
              <p>
                We create our own compound components to provide a more flexible
                and reusable API for our users.
              </p>
              <p>It is better for costomizing elements however we want</p>
              <p>
                We balance the styles and structure of our project ourselvse, so
                that we do not waste learning third-party libraries
              </p>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="b" className="accordion-item">
            <Accordion.Title title="Why do we create our own compound components????" />
            <Accordion.Content>
              <p>
                We create our own compound components to provide a more flexible
                and reusable API for our users.
              </p>
              <p>It is better for costomizing elements however we want</p>
              <p>
                We balance the styles and structure of our project ourselvse, so
                that we do not waste learning third-party libraries
              </p>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <h2>Render Proops</h2>
      <section>
        <p>
          Render props is a pattern where a component takes a function as a prop
          and calls it to render its content.
        </p>
        <SearchList itemKeyFn={(item) => item.title} items={places}>
          {(item) => (
            <>
              <img src={item.image} />
              <h2>{item.title}</h2>
              <p>Description: {item.description}</p>
            </>
          )}
        </SearchList>
        {/* <SearchList items={places} /> */}
      </section>
    </main>
  );
}

export default App;
