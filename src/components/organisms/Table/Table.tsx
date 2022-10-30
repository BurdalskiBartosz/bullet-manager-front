import Font from 'components/atoms/Font';
import { FC } from 'react';
import { tTableData } from 'types/table';
import {
	StyledTable,
	StyledTD,
	StyledTH,
	StyledTHead,
	StyledTR,
	Wrapper
} from './Table.style';

type tProps = {
	headData: string[];
	data: tTableData[];
};

const Table: FC<tProps> = ({ headData, data }) => {
	return (
		<Wrapper>
			<StyledTable>
				<StyledTHead>
					<StyledTR>
						{headData.map((el) => {
							return (
								<StyledTH key={el}>
									<Font>{el}</Font>
								</StyledTH>
							);
						})}
					</StyledTR>
				</StyledTHead>
				<tbody>
					{data.map(({ id, data }) => {
						return (
							<tr key={id}>
								{data.map(({ key, value }) => {
									if (typeof value === 'object')
										return <StyledTD>{value}</StyledTD>;
									return (
										<StyledTD key={key}>
											<Font>{value}</Font>
										</StyledTD>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</StyledTable>
		</Wrapper>
	);
};

export default Table;
