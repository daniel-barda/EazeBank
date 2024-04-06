import styled from "styled-components";
import PropTypes from "prop-types"; // ES6

const StyledEmpty = styled.p`
  font-size: 1.6rem;
`;

function Empty({ resourceName }) {
  return <StyledEmpty>No {resourceName} could be found.</StyledEmpty>;
}

export default Empty;

Empty.propTypes = {
  message: PropTypes.string,
};
