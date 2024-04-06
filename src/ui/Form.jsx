import styled, { css } from "styled-components";
import PropTypes from "prop-types"; // ES6

const StyledForm = styled.form`
  box-shadow: 1rem 1.5rem 6rem rgba(0, 0, 0, 0.2);
  padding: 1.6rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  gap: 2rem;
`;

export const StyledFormGroup = styled.div`
  ${(props) =>
    props.type === "flex" &&
    css`
      display: flex;
      align-items: center;
      gap: 2rem;
    `}

  ${(props) =>
    props.type === "grid" &&
    css`
      display: grid;
      grid-template-columns: 23rem auto 1fr;
      align-items: center;
    `}
`;

const StyledFormLabel = styled.label`
  text-transform: capitalize;
`;

function Form({ children, styleProp = null, onSubmit = null }) {
  return (
    <StyledForm onSubmit={onSubmit} style={styleProp}>
      {children}
    </StyledForm>
  );
}

function FormLabel({ label, styleProp = null }) {
  return (
    <StyledFormLabel style={styleProp} htmlFor={label}>
      {label}
    </StyledFormLabel>
  );
}

Form.FormLabel = FormLabel;

// propTypes
Form.propTypes = {
  children: PropTypes.any,
  styleProp: PropTypes.any,
  onSubmit: PropTypes.func,
};

FormLabel.propTypes = {
  label: PropTypes.string,
  styleProp: PropTypes.any,
};

StyledFormGroup.defaultProps = {
  type: "flex",
};

export default Form;
