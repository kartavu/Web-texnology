import Message from '../models/Message.js';

// Добавьте эту функцию, если её нет
export const likeMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.json(message);
  } catch (error) {
    res.status(404).json({ message: 'Message not found' });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chatType: req.query.type })
      .populate('author', 'username')
      .sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createMessage = async (req, res) => {
  try {
    const message = new Message({
      text: req.body.text,
      author: req.user.id,
      chatType: req.body.chatType || 'main'
    });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};