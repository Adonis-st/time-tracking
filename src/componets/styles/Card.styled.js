import styled from 'styled-components';

export const StyledCard = styled.div`
	margin: 0 auto;
	width: 90%;
	display: flex;
	flex-direction: column;
	margin-bottom: 1em;
	color: white;
`;

export const BgContainer = styled.div`
	display: flex;
	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.theme.borderRadius};
	position: relative;
	top: 20px;

	img {
		margin-left: auto;
		margin-right: 1em;
		display: block;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: hsl(235, 46%, 20%);
	padding: 2.1em;
	border-radius: ${(props) => props.theme.borderRadius};
	z-index: 1;

	h3 {
		margin-bottom: 0.5em;
		font-size: 1.125rem;
		font-weight: 500;
	}

	h3 + p {
		font-size: 2rem;
	}

	img {
		margin-left: auto;
		margin-bottom: 1em;
		display: block;
	}

	img + p {
		font-size: 0.938rem;
	}
`;
