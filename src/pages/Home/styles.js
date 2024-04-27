import styled from 'styled-components';

const HomeWrapper = styled.div`
	.upload-image {
		.image {
			position: relative;
			height: 279px;
			display: flex;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			label {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 1.5rem;
				border-radius: 50%;
				background-color: rgba(0, 0, 0, 0.4);
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				cursor: pointer;
				width: max-content;
			}

			p {
				position: absolute;
				top: 70%;
				left: 50%;
				transform: translate(-50%, -50%);
			}

			input[type='file'] {
				display: none;
			}
		}
	}
`;

export default HomeWrapper;
