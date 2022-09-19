import styled from 'styled-components';

export const StyledMainCard = styled.div`
	margin: 0 auto;
	width: 90%;
	display: flex;
	flex-direction: column;
	margin-top: 1em;
	margin-bottom: 3em;
`;

export const Hero = styled.div`
	display: flex;
	align-items: center;
	padding: 2.1em;
	background-color: hsl(246, 80%, 60%);
	border-radius: ${(props) => props.theme.borderRadius};
	z-index: 1;

	p {
		font-size: 0.938rem;
		margin-bottom: 0.25em;
		font-weight: 400;
		color: ${(props) => props.theme.color.secondary};
	}

	h1 {
		font-size: 1.5rem;
		color: ${(props) => props.theme.color.primary};
		font-weight: 300;
	}

	img {
		order: -1;
		width: 25%;
		height: 25%;
		margin-right: 1em;
		border: 2px #fff solid;
		border-radius: 50%;
		max-width: 88px;
	}
`;

export const Nav = styled.nav`
	border-radius: ${(props) => props.theme.borderRadius};
	padding: 2.2em 0;
	background-color: hsl(235, 46%, 20%);
	position: relative;
	bottom: 20px;

	ul {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 0;
		max-width: 425px;
	}

	li {
		list-style: none;
		margin-right: 1em;
		color: #7078c9;
		font-weight: 400;
	}

	li:last-child {
		margin-right: 0;
	}

	li:hover {
		color: white;
	}
`;
