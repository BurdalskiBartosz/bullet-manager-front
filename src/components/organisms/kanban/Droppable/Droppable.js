import { Droppable } from 'react-beautiful-dnd-next';
import MyDraggable from '../Draggable/Draggable';

const MyDroppable = ({ column, columnId }) => {
	return (
		<Droppable droppableId={columnId} key={columnId}>
			{(provided, snapshot) => {
				return (
					<div
						{...provided.droppableProps}
						ref={provided.innerRef}
						style={{
							background: snapshot.isDraggingOver
								? 'lightblue'
								: 'lightgrey',
							padding: 4,
							width: 250,
							minHeight: 500
						}}
					>
						{column.items.map((item, index) => (
							<MyDraggable
								item={item}
								index={index}
								key={item.id}
							/>
						))}
						{provided.placeholder}
					</div>
				);
			}}
		</Droppable>
	);
};

export default MyDroppable;
