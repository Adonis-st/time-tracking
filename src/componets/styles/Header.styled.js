import styled from 'styled-components';

export const StyledHeader = styled.header`
	padding: 20px;
	background-color: ${(props) => props.bg};

	h1 {
		color: white;
	}

	&:hover {
		background-color: black;
	}
`;
