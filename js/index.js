const rsvpForm = document.querySelector("#rsvp-form");
const responseBtns = document.querySelectorAll("input[name=attending]");
const MAXRETRIES = 3;
const messages = {
	ERROR: "Oops! Something is wrong, contact Ben and yell at him.",
	RETRYING: "Retrying...",
	SUBMITTING: "Submitting form...",
	SUCCESS: "Form submitted successfully!",
};

responseBtns?.forEach((btn) =>
	btn.addEventListener("click", () => hideNonRequiredFields(btn.form, btn.id)),
);

rsvpForm.addEventListener("submit", async (e) => {
	e.preventDefault();

	const { SUBMITTING, SUCCESS, ERROR } = messages;

	const submitter = e.submitter;
	submitter.focus();

	const form = e.target;
	const formData = new FormData(form);

	createMessage(form, SUBMITTING);
	disableFormFields(form, true);

	try {
		await sendForm(formData, MAXRETRIES);
		createMessage(form, SUCCESS);
		disableFormFields(form, false);
	} catch (error) {
		console.error(error);
		createMessage(form, ERROR);
		disableFormFields(form, false);
	}
});

async function sendForm(formData, retries) {
	const searchParams = new URLSearchParams(formData);
	try {
		// const response = await fetch("http://localhost:3000/api/rsvps", { // local testing
		const response = await fetch("/api/rsvps", {
			method: "POST",
			body: searchParams,
		});

		if (!response.ok) {
			throw new Error(`Server responded with status ${response.status}`);
		}

		return true;
	} catch (error) {
		if (retries > 0) {
			console.warn(`Retrying form submission ${retries} retries left... `);
			await delay(1000);

			return sendForm(formData, retries - 1);
		} else {
			throw error;
		}
	}
}

function createMessage(parentNode, message) {
	const messageEl = document.createElement("code");
	messageEl.classList.add("text-center");
	messageEl.textContent = message;
	parentNode.appendChild(messageEl);
	setTimeout(() => {
		parentNode.removeChild(messageEl);
	}, 5000);
}

function hideNonRequiredFields(form, id) {
	id === "no"
		? form.classList.add("declined")
		: form.classList.remove("declined");
}

function disableFormFields(form, bool) {
	Array.from(form.elements).forEach((field) => (field.disabled = bool));
}

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
