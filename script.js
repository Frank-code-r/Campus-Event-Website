document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.getElementById('calendar');
    const filterSelect = document.getElementById('eventFilter');

    // Sample events
    const events = [
        { title: 'AI Workshop', start: '2024-05-15', type: 'workshop' },
        { title: 'Networking Seminar', start: '2024-05-18', type: 'seminar' },
        { title: 'Robotics Club Meet', start: '2024-05-20', type: 'club' },
        { title: 'Data Science Workshop', start: '2024-05-25', type: 'workshop' },
        { title: 'Leadership Seminar', start: '2024-05-28', type: 'seminar' },
    ];

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            start: 'prev,next today',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,listWeek',
        },
        events: events,
    });

    calendar.render();

    // Filter events based on type
    filterSelect.addEventListener('change', () => {
        const filterValue = filterSelect.value;
        if (filterValue === 'all') {
            calendar.removeAllEvents();
            calendar.addEventSource(events);
        } else {
            const filteredEvents = events.filter(event => event.type === filterValue);
            calendar.removeAllEvents();
            calendar.addEventSource(filteredEvents);
        }
    });
});


//For login/registration logic
document.addEventListener('DOMContentLoaded', () => {
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const formTitle = document.getElementById('form-title');

    // Switch to Registration Form
    showRegister.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        formTitle.textContent = 'Register';
    });

    // Switch to Login Form
    showLogin.addEventListener('click', () => {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.textContent = 'Login';
    });

    // Handle Registration Form Submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const preferences = Array.from(document.getElementById('event-preferences').selectedOptions).map(option => option.value);

        localStorage.setItem('user', JSON.stringify({ name, email, password, preferences }));
        alert('Registration successful! You can now log in.');
        registerForm.reset();
        showLogin.click();
    });

    // Handle Login Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert(`Welcome back, ${storedUser.name}!`);
            window.location.href = 'events.html'; // Redirect to events page
        } else {
            alert('Invalid email or password.');
        }

        loginForm.reset();
    });
});

// Event RSVP functionality
document.addEventListener('DOMContentLoaded', function() {
    const rsvpButtons = document.querySelectorAll('.rsvp-btn');
    
    rsvpButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventId = this.getAttribute('data-event-id');
            const availableSeatsElement = document.getElementById(`event-${eventId}-seats`);
            let availableSeats = parseInt(availableSeatsElement.innerText);
            
            if (availableSeats > 0) {
                // Update available seats
                availableSeats--;
                availableSeatsElement.innerText = availableSeats;
                
                // Simulate storing the event in the user's profile (for demonstration)
                console.log(`User RSVP'd for Event ${eventId}`);
                alert('You have successfully RSVP\'d for the event!');
            } else {
                alert('Sorry, no seats available for this event!');
            }
        });
    });
});

//API register user
async function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    console.log(data);
}
