import styled from 'styled-components';

export const StyledMainCard = styled.div`
	margin: 0 auto;
	width: 90%;
	display: flex;
	flex-direction: column;
	margin-top: 1em;
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
	padding: 2.1em 0;
	background-color: hsl(235, 46%, 20%);
	position: relative;
	bottom: 20px;

	ul {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 0;
		list-style: none;
		max-width: 425px;
		margin-top: 0.8em;
		gap: 1rem;
	}

	li {
		list-style: none;
		color: #7078c9;
		font-weight: 400;
		font-size: 1.125rem;
		gap: 1rem;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	li li:last-child {
	}

	li:hover {
		color: white;
	}

	.active {
		color: white;
	}
`;
