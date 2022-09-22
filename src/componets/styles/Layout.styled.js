import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 500px) {
		margin: 5em auto;
		flex-direction: row;
		width: 70%;
		max-width: 1200px;
		.main-card {
			margin-right: 1em;
		}

		.cards {
			margin-top: 1.65em;
			display: flex;
			flex-wrap: wrap;
			min-width: 400px;
		}
	}
`;
