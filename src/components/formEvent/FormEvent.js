import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CirclePicker } from 'react-color';

const FormEvent = ({ onClouse, onSave, form }) => {
	const [newEvent, setEvent] = useState({
		title: form.form === 'upd' ? form.event.title : '',
		datestart: form.form === 'upd' ? form.event.datestart : '',
		time: form.form === 'upd' ? form.event.time : '',
		forPicker: form.form === 'upd' ? form.event.forPicker : '',
		color: form.form === 'upd' ? form.event.color : '#3b86ff',
		note: form.form === 'upd' ? form.event.note : '',
	});

	const [displayColorPicker, setPicColor] = useState(false);

	const handleChange = (e) => {
		const {name, value} = e.target;

		setEvent({
			...newEvent,
			[name]: value,
		})
	}

	const clean = () => {
		setEvent({title: '', forPicker: '', time: '', note: ''});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formatEvent = {
			...newEvent,
			start: newEvent.time !== '' ? `${newEvent.datestart}T${newEvent.time}` : newEvent.datestart
		}

		if (form.form === 'upd') {
			onSave({ ...form.event, ...formatEvent}, 'upd');
		} else {
			onSave(formatEvent, 'add');
		}

		onClouse({form: '', event: {}});
	}

	const handleDate = (currDate) => {
		const newDate = currDate.toLocaleDateString().split('.').reverse().join('-');

		setEvent({
			...newEvent,
			start: currDate,
			datestart: newDate,
			forPicker: currDate,
		});
	}

	const colorClick = () => {

		setPicColor(!displayColorPicker);
	}

	const colorCheck = (arg) => {

		setEvent({
			...newEvent,
			color: arg.hex,
		});

		setPicColor(!displayColorPicker);
	}

  return (
		<div className="form-box" style={form.position}>
			<form className="form" action="" onSubmit={handleSubmit}>
				<button
					className="close form__button"
					type="button"
					onClick={() => onClouse({form: '', event: {}})}
				>
					x
				</button>

				<input
					className="form__input"
					type="text"
					name="title"
					placeholder="event name"
					value={newEvent.title}
					onChange={handleChange}
				/>
				<DatePicker
					className="form__input"
					placeholderText="event date"
					dateFormat="yyyy-MM-dd"
					selected={newEvent.forPicker}
					onChange={handleDate}
      	/>
				<input
					className="form__input"
					type="time"
					name="time"
					placeholder="event time"
					value={newEvent.time}
					onChange={handleChange}
				/>
				<input
					className="form__input"
					name="note"
					placeholder="notes"
					value={newEvent.note}
					onChange={handleChange}
				/>
				<div
					className="form__color"
					style={{ backgroundColor: newEvent.color }}
					onClick={colorClick}
				/>
					{
						displayColorPicker && (
						<CirclePicker
							colors={[
								"#f44336", "#e91e63", "#9c27b0",
								"#673ab7", "#3f51b5", "#3b86ff",
								"#03a9f4", "#00bcd4", "#009688",
								"#4caf50", "#8bc34a", "#cddc39",
								"#ffeb3b", "#ffc107", "#ff9800",
								"#ff5722", "#795548", "#607d8b"
							]}
							onChange={colorCheck}
						/>)
					}

				<div className="form__button-group">
					{
						form.form === 'upd'
							? <button
									className="form__button red-button"
									type="button"
									onClick={() => onSave(form.event, 'del')}
								>
									DISCARD
								</button>
							: <button
									className="form__button red-button"
									type="reset"
									onClick={clean}
								>
									Cansel
								</button>
					}
					<button type="submit" className="form__button m-button">
						{form.form === 'upd' ? 'EDIT' : 'Save'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormEvent;