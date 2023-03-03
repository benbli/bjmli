// TODO:
// - create mutation observer to listen to all events, create store, pass actions
// if (element === #button) // do something
// if (element === [button1, button2]) // do something
// can scroll/intersection observer be used here as well?

const dialog = document.querySelector("#dialog");
const dialogBtn = document.querySelector("#dialog-btn");
dialogBtn?.addEventListener(
	"click",
	(e) => {
		dialog.showModal();
	},
	false,
);

const dialogLinks = dialog?.querySelectorAll("a");
dialogLinks?.forEach((link) =>
	link.addEventListener(
		"click",
		(e) => {
			dialog?.close();
		},
		false,
	),
);

// const rsvpForm = document.querySelector("#rsvp-form")
// rsvpForm.addEventListener("submit", async (e) => {
// 	e.preventDefault()
// 	try {
// 		const formData = new FormData(rsvpForm)
// 		const jsonData = formatAsJson(formData)
// 		console.log(jsonData)
// 		const url = "/api/rsvps"
// 		const options = {
// 			method: "POST",
// 			body: jsonData,
// 			headers: {
// 				"Content-Type": "application/json",
// 				Accept: "application/json",
// 			},
// 		}
// 		const response = await fetch(url, options)
// 		console.log(response.json())
// 	} catch (error) {
// 		throw new Error(error)
// 	}
// })

// function formatAsJson(formData) {
// 	const formEntries = Object.fromEntries(formData.entries())
// 	return JSON.stringify(formEntries)
// }

// const menu = document.querySelector("#hamburger")
// menu?.addEventListener("click", (e) => {
// 	menu.classList.toggle("open")
// })
