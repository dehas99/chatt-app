const express = require(`express`);
const app = express();
const cors = require(`cors`);
app.use(cors({ origin: `*` }));
app.use(express.json());

const mongoose = require(`mongoose`);
mongoose.connect(
  `mongodb+srv://deeq:deeq@cluster0.4cjyw1n.mongodb.net/?retryWrites=true&w=majority`
);

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model(`Message`, messageSchema);
app.get(`/messages`, async (req, res) => {
  const messages = await Message.find();
  res.send(messages);
});

app.post(`/message`, async (req, res) => {
  console.log(req.body);
  const { message } = req.body;
  await Message.create({ message: message });
  res.send(`ok`);
});
app.listen(3000);
