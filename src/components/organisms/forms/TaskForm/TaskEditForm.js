import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from 'src/components/atoms/Button';
import Input from 'src/components/molecules/inputs/Input/Input';
import Select from 'src/components/molecules/inputs/Select/Select';
import { prioritySelectValues, typeSelectValues } from './selectData';

import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import { TextField } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { dateFormat } from 'src/utils/dateFormat';
import { Controller } from 'react-hook-form';

const TaskEditForm = ({ handleSubmit, errors, control }) => {
	return (
		<>
			<Typography variant="h3">Edytuj zadanie</Typography>
			<Box component="form" onSubmit={handleSubmit()}>
				<Input
					name="title"
					label="Tytuł zadania"
					error={{
						isError: errors.title,
						message: 'Musisz podać nazwę zadania'
					}}
					control={control}
				/>
				<Input
					name="content"
					label="Treść zadania"
					error={{
						isError: errors.content,
						message: 'Musisz podać treść zadania'
					}}
					control={control}
					multiline
					rows={4}
				/>

				<Controller
					name="date"
					control={control}
					render={({ field }) => (
						<LocalizationProvider dateAdapter={DateAdapter}>
							<DesktopDatePicker
								label="Zmień datę"
								onChange={(date) => {
									const formattedDate = dateFormat(date);
									return field.onChange(formattedDate);
								}}
								selected={field.value}
								value={field.value}
								renderInput={(params) => (
									<TextField
										{...params}
										sx={{
											width: '100%',
											maxWidth: '330px',
											mb: 2.5
										}}
									/>
								)}
							/>
						</LocalizationProvider>
					)}
				/>
				<Select
					name="priority"
					label="Priorytet"
					control={control}
					options={prioritySelectValues}
				/>

				<Button type="submit" variant="contained">
					Edytuj
				</Button>
			</Box>
		</>
	);
};

export default TaskEditForm;
