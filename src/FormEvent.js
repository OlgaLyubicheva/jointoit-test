import React, { useState } from 'react';

const FormEvent = ({ onClouse, onSave, form }) => {
	const [newEvent, setEvent] = useState({
		title: form.form === 'upd' ? form.event.title : '',
		start: form.form === 'upd' ? form.event.start : '',
		time: form.form === 'upd' ? form.event.time : '',
		note: form.form === 'upd' ? form.event.note : '',
	});

	const handleChange = (e) => {
		const {name, value} = e.target;

		setEvent({
			...newEvent,
			[name]: value,
		})
	}

	const clean = () => {
		setEvent({title: '', start: '', time: '', note: ''});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (form.form === 'upd') {
			onSave({ ...form.event, ...newEvent}, 'upd');
		} else {
			onSave(newEvent, 'add');
		}

		onClouse({form: '', event: {}});
	}

  return (
		<div className="form-box">
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
					value={newEvent.title}
					onChange={handleChange}
				/>
				<input
					className="form__input"
					type="date"
					name="start"
					value={newEvent.start}
					onChange={(handleChange)}
				/>
				<input
					className="form__input"
					type="time"
					name="time"
					value={newEvent.time}
					onChange={handleChange}
				/>
				<input
					className="form__input"
					name="note"
					value={newEvent.note}
					onChange={handleChange}
				/>
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
				<button type="submit" className="form__button m-button">Save</button>
			</form>
		</div>
	);
};

export default FormEvent;