function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthdate;
    const ageDate = new Date(ageInMilliseconds);

    const yearsFromBirth = Math.abs(ageDate.getUTCFullYear() - 1970);
    const monthsFromBirth = ageDate.getUTCMonth();
    const daysFromBirth = ageDate.getUTCDate() - 1;

    const nextBirthday = new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const nextBirthdayWeekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(nextBirthday);

    const timeLeft = nextBirthday - currentDate;
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const monthsLeft = Math.ceil(daysLeft / 30);

    document.getElementById('result').innerHTML = `
        <p style="color: #2c3e50;">Current Age: ${yearsFromBirth} years, ${monthsFromBirth} months, ${daysFromBirth} days</p>
        <p style="color: #34495e;">Next Birthday On : ${nextBirthdayWeekday}</p>
        
    `;
}