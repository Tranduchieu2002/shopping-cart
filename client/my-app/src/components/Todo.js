import React from 'react'
import Button from '@atlaskit/button'
import Styled from "styled-components"
const StyledButton = Styled(Button)`
   border: solid 1px #ccc;
   margin-top: 10px;
   text-align:left;
`
export default function Todo({todo}) {
   return (
      <StyledButton shouldFitContainer>
         {todo.name}
      </StyledButton>
   )
}
