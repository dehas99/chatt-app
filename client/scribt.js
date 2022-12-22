async function getMessages() {
  const response = await fetch(`http://localhost:3000/messages`);
  const data = await response.json();
  const list = document.getElementById(`list`);
  console.log(data);
  list.innerHTML;
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement(`li`);
    li.innerText = data[i].message;
    list.appendChild(li);
  }
}
getMessages();

const input = document.getElementById(`input`);
const btn = document.getElementById(`btn`);
btn.addEventListener(`click`, async () => {
  await fetch("http://localhost:3000/message", {
    body: JSON.stringify({
      message: input.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  getMessages();
});
