import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd-next';
import dynamic from 'next/dynamic';
// const DynamicComponent = dynamic(() => import('../Droppable/Droppable'), {
// 	ssr: false
// });
import Droppable from '../Droppable/Droppable';

const onDragEnd = (result, columns, setColumns) => {
	if (!result.destination) return;
	const { source, destination } = result;

	if (source.droppableId !== destination.droppableId) {
		const sourceColumn = columns[source.droppableId];
		const destColumn = columns[destination.droppableId];
		const sourceItems = [...sourceColumn.items];
		const destItems = [...destColumn.items];
		const [removed] = sourceItems.splice(source.index, 1);
		destItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...sourceColumn,
				items: sourceItems
			},
			[destination.droppableId]: {
				...destColumn,
				items: destItems
			}
		});
	} else {
		const column = columns[source.droppableId];
		const copiedItems = [...column.items];
		const [removed] = copiedItems.splice(source.index, 1);
		copiedItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...column,
				items: copiedItems
			}
		});
	}
};

const KanbanWrapper = ({ columnsFromBackend }) => {
	const [columns, setColumns] = useState(columnsFromBackend);
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				height: '100%'
			}}
		>
			<DragDropContext
				onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
			>
				{Object.entries(columns).map(([columnId, column], index) => {
					return (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center'
							}}
							key={columnId}
						>
							<h2>{column.name}</h2>
							<div style={{ margin: 8 }}>
								<Droppable
									column={column}
									columnId={columnId}
								/>
							</div>
						</div>
					);
				})}
			</DragDropContext>
		</div>
	);
};

export default KanbanWrapper;
