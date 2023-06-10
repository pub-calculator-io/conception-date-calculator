function calculate() {
	const basedOn = input.get('based_on').index().val();
	const dueDate = input.get('due_date').date().raw();
	const firstDay = input.get('first_day').date().raw();
	let avgCyclesLength = input.get('avg_cycles_length').index().val();
	const ultrasoundDate = input.get('ultrasound_date').date().raw();
	const pregnancyWeeks = input.get('pregnancy_weeks').val();
	const pregnancyDays = input.get('pregnancy_days').val();

	if(!input.valid()) return;
	avgCyclesLength = avgCyclesLength + 22;

	if(basedOn === 0) {
		if(!dueDate) {
			return input.error('due_date', 'Please enter a due date', true);
		}
		else {
			const date = dueDate;
			const startDate = dueDate;
			startDate.setDate(date.getDate() - 268);
			showResult(startDate);
		}
	}
	else if(basedOn === 1) {
		if(!firstDay) {
			return input.error('first_day', 'Please enter a first day', true);
		}
		else {
			const date = firstDay;
			const startDate = firstDay;
			const cycleDays = Number(avgCyclesLength - 16);
			startDate.setDate(date.getDate() + cycleDays);
			showResult(startDate);
		}
	}
	else if(basedOn === 2) {
		if(!ultrasoundDate) {
			input.error('ultrasound_date', 'Please enter a ultrasound date');
		}
		if(!pregnancyWeeks) {
			input.error('pregnancy_weeks', 'Please length of pregnancy at the time');
		}
		if(!input.valid()) return;
		const date = ultrasoundDate;
		const days = Number(pregnancyWeeks * 7) + Number(pregnancyDays);
		const startDate = ultrasoundDate;
		startDate.setDate(date.getDate() - days + 12);
		showResult(startDate);
	}
}

function showResult(startDate){
	const date1 = startDate;
	const date2 = new Date(startDate);
	const date3 = new Date(startDate);
	const date4 = new Date(startDate);
	const date5 = new Date(startDate);
	const date6 = new Date(startDate);
	const date7 = new Date(startDate);
	const date8 = new Date(startDate);

	date2.setDate(date1.getDate() + 4);
	date3.setDate(date1.getDate() - 3);
	date4.setDate(date1.getDate() + 4);
	date5.setDate(date1.getDate() - 1);
	date6.setDate(date1.getDate() + 9);
	date7.setDate(date1.getDate() - 6);
	date8.setDate(date1.getDate() + 9);

	output.val(formattedDate(date1) + ' - ' + formattedDate(date2)).set('conception-probable');
	output.val(formattedDate(date5) + ' - ' + formattedDate(date6)).set('conception-possible');
	output.val(formattedDate(date3) + ' - ' + formattedDate(date4)).set('sex-probable');
	output.val(formattedDate(date7) + ' - ' + formattedDate(date8)).set('sex-possible');
}

function formattedDate(date){
	const monthNames = ["Jan", "Feb", "Marc", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const day = date.getDate();
	const month = monthNames[date.getMonth()]
	const year = date.getFullYear();
	return month + ' ' + day + ', ' + year;
}
