import { InnerWrapper, LogoWrapper, Wrapper } from './AuthTemplate.styles';
import Image from 'next/image';

const AuthTemplate = ({ children }) => {
	return (
		<Wrapper>
			<InnerWrapper>
				<LogoWrapper>
					<Image
						src="/logo.png"
						layout="fill"
						objectFit="contain"
						alt="Logo"
					/>
				</LogoWrapper>
				{children}
			</InnerWrapper>
		</Wrapper>
	);
};

export default AuthTemplate;
