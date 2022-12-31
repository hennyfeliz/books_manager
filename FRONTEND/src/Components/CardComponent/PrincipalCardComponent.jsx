import "./CardStyles.css"

export const PrincipalCardComponent = (props) => {
  return (
    <>
      <section className="products_section">
        <h1 className="products_title">Our products</h1>
        {props.children}
      </section>
    </>
  );
};
