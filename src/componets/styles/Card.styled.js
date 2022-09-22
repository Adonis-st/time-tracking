import styled from 'styled-components';

export const StyledCard = styled.div`
	margin: 0 auto;
	width: 90%;
	display: flex;
	flex-direction: column;
	margin-bottom: 0.6em;
	color: white;
	@media (min-width: 500px) {
		width: 31%;
		min-width: 186px;
	}
`;

export const BgContainer = styled.div`
	display: flex;
	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.theme.borderRadius};
	position: relative;
	height: 55px;
	top: 20px;

	img {
		margin-left: auto;
		margin-right: 1em;
		display: block;
		object-fit: cover;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: hsl(235, 46%, 20%);
	padding: 2.1em;
	padding-left: 1.7em;
	border-radius: ${(props) => props.theme.borderRadius};
	z-index: 1;

	div:first-child {
		display: flex;
		justify-content: space-between;
	}
	h3 {
		margin-bottom: 0.5em;
		font-size: 1.125rem;
		font-weight: 500;
	}

	img {
		height: 6px;
		margin-top: 0.5em;
	}

	.second-div {
		display: flex;
		justify-content: space-between;
	}

	.second-div p {
		font-size: 2rem;
		font-weight: 300;
	}

	.second-div p:last-child {
		font-size: 0.938rem;
		color: #bbc0ff;
		margin-top: 0.7em;
	}

	@media (min-width: 500px) {
		flex-direction: column;

		.second-div p {
			font-size: 3.5rem;
		}

		.second-div {
			flex-direction: column;
		}
	}

	img {
		height: 4px;
	}
`;
