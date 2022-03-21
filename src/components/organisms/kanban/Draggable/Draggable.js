import { Draggable } from 'react-beautiful-dnd-next';

const MyDraggable = ({ item, index }) => {
	return (
		<Draggable draggableId={item.id} index={index}>
			{(provided, snapshot) => {
				return (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						style={{
							userSelect: 'none',
							padding: 16,
							margin: '0 0 8px 0',
							minHeight: '50px',
							border: '2px solid white',
							backgroundColor: snapshot.isDragging
								? '#121212'
								: '#3A3A3A',
							color: 'white',
							...provided.draggableProps.style
						}}
					>
						{item.title}
					</div>
				);
			}}
		</Draggable>
	);
};

export default MyDraggable;
