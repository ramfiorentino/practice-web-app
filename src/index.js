// Import validation logic from other files
import { handleSubmit as handleRegisterSubmit } from './registerUser';
//import { handleSubmit as handleLoginSubmit } from './loginUser.js';

// Event listeners for form submissions
document.getElementById("registerForm").addEventListener("submit", handleRegisterSubmit);
//document.getElementById("loginForm").addEventListener("submit", handleLoginSubmit);

//basig login auth logic
//const galileoEmail = 'galileo@email.com'
//getStoredTeachers(galileoEmail);
