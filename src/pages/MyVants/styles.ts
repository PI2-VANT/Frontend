import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
    grid-column-gap: 35px;
    grid-row-gap: 67px;
    justify-content: center;
    padding: 78px 50px;
`
