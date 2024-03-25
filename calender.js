function createCalendar() {
    const currentDate = new Date();

    const monthYearElement = document.getElementById('month-year');
    const weekdaysElement = document.getElementById('weekdays');
    const daysElement = document.getElementById('days');

    // Display current month and year
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthYearString = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    monthYearElement.textContent = monthYearString;

    // Create weekdays
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let weekday of weekdays) {
        const weekdayElement = document.createElement('div');
        weekdayElement.classList.add('weekday');
        weekdayElement.textContent = weekday;
        weekdaysElement.appendChild(weekdayElement);
    }

    daysElement.innerHTML = '';

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        daysElement.appendChild(emptyDay);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i;

        if (currentDate.getDate() === i && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear()) {
            dayElement.classList.add('today');
        }

        daysElement.appendChild(dayElement);
    }
}

createCalendar();