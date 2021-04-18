class DateOption {
	static FORMAT: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
	};

	static format = (date: Date) => {
		return date.toLocaleDateString('es-ES', DateOption.FORMAT);
	};

  static getMonthName = (idx: number) => {
    const objDate = new Date();
    objDate.setDate(1);
    objDate.setMonth(idx - 1);
    const locale = 'es-Es';
    return objDate.toLocaleString(locale, { month: 'long' });
  };
}

export default DateOption;
