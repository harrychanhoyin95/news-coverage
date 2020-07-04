import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const MuiTextField = styled(TextField)`
  & > .MuiFormLabel-root {
    /* color: rgba(255, 255, 255, 0.75); */
    color: #fff;

    &.Mui-focused {
      color: #fbc308;
    }
  }

  & > .MuiInputBase-root {
    color: #fff;

    .MuiOutlinedInput-notchedOutline {
      border-color: #fff;
    }

    &.MuiOutlinedInput-root:hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
      }
    }

    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-color: #fbc308 !important;
      }
    }
  }
`;

export const ErrorContainer = styled.div`
  min-height: 20px;
  margin-top: 4px;
`;

export const Error = styled.div`
  color: #fbc308;
  font-size: 14px;
`;
