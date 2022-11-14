import styled from "styled-components";
import Select from "react-select";

export const InputSelectContainer = styled.div`
  display: flex;
  border: 2px #aaa solid;
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const SelectCountry = styled(Select)`
  border: none;
  flex: 1;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 8px;
  color: #777;
  border-right: 1px #aaa solid;
`;
