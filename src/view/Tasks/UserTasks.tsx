import { AddUserTaskForm, Link, Table } from 'components';
import { useEffect, useState } from 'react';
import { useGetUserTasksQuery } from 'store/api/userTask';
import { tTableData } from 'types/table';
import { appRootRoute } from 'utils/constants';
import { transformApiToTableData } from 'utils/table';
// import { Link } from 'react-router-dom';

export type UserTask = {
	id: number;
	title: string;
	plannedFinishDate: string;
	description: string;
	category?: string | JSX.Element;
};

const UserTasks = () => {
	const [tableData, setTableData] = useState<tTableData[]>();
	const [offset, setOffset] = useState<number>(0);

	const { data: userTasksData } = useGetUserTasksQuery();

	useEffect(() => {
		if (userTasksData?.length) {
			const tableDataa = userTasksData.map(
				({ id, title, plannedFinishDate, description, category }) => {
					return {
						id,
						title,
						plannedFinishDate: new Date(
							plannedFinishDate
						).toLocaleDateString(),
						description,
						category: category?.name ? (
							<Link
								link={`${appRootRoute}/category/${category.name}`}
							>
								{category.name}
							</Link>
						) : (
							''
						)
					};
				}
			);

			const data = transformApiToTableData(tableDataa, offset);
			setTableData(data);
		}
	}, [userTasksData]);
	return (
		<div>
			<AddUserTaskForm />

			{tableData?.length && (
				<Table
					headData={[
						'title',
						'plannedFinishDate',
						'description',
						'category'
					]}
					data={tableData}
				/>
			)}
		</div>
	);
};

export default UserTasks;
