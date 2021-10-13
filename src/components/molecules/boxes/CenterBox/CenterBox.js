import styles from './CenterBox.module.scss';
import Image from 'next/image';

const CenterBox = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.innerWrapper}>
				<figure className={styles.logoWrapper}>
					<Image
						src="/logo.png"
						layout="fill"
						objectFit="contain"
						alt="Logo"
					/>
				</figure>
				{children}
			</div>
		</div>
	);
};

export default CenterBox;
