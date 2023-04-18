export default function createErrorMessage(){
const errorMessage = document.createElement('div');
errorMessage.textContent = 'Please add task description.';
errorMessage.style.color = 'red';
errorMessage.id = 'error-message';
return errorMessage;
}