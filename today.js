function updateCalendar() {
    const currentDate = new Date();

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = currentDate.toLocaleDateString('en-US', options);

    document.getElementById('day').textContent = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    const timeString = currentDate.toLocaleTimeString('en-US');
    document.getElementById('time').textContent = timeString;

    setTimeout(updateCalendar, 1000);
}

updateCalendar();