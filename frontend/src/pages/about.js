import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  const style = {
    maxWidth: "80%"
  };
  return (
    <Container style={style} fluid>
      <div className="py-5 ">
        <h1>About</h1>
        <br />
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          semper quam eget erat facilisis maximus. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Quisque
          molestie nibh dolor, ac facilisis sapien consequat in. Maecenas congue
          sodales tellus vel efficitur. Curabitur sodales dolor a nisl mattis
          ultrices. Vivamus sed odio ut erat hendrerit posuere. In dictum eget
          purus vitae finibus. Cras pretium, magna nec mattis ultricies, nunc
          enim pharetra mauris, eu fermentum sapien leo ac dui. Pellentesque
          neque ligula, congue eget finibus id, finibus sed magna. Ut fringilla
          mi ac lacus egestas tempor. Donec molestie condimentum ultrices. Fusce
          vestibulum lobortis felis, et posuere ex. Sed consequat lacus nec enim
          eleifend, eget porta dolor commodo. Morbi malesuada sollicitudin
          blandit. Proin laoreet purus in luctus scelerisque. Curabitur turpis
          neque, suscipit non nibh nec, blandit ullamcorper orci.
        </p>
      </div>
    </Container>
  );
};

export default About;
