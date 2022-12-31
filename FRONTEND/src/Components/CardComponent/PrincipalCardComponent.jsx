import "./CardStyles.css"

export const PrincipalCardComponent = (props) => {
  return (
    <>
      <section className="products_section">
        <h1 className="products_title">Our books</h1>
        {props.children}
      </section>
    </>
  );
};
