const express = require('express');

const router = express.Router();
const ChatList = require('../models/chatList');

router.post('/chatlist', (req, res) => {
  const { chatlist } = req.body;
  const newUser = { chatlist };
  ChatList.create(newUser, (err, addUser) => {
    if (err) {
      console.log(err);
    } else {
      console.log(addUser);
      res.json({ chatlist: addUser.chatlist, id: addUser.id });
    }
  });
});

router.get('/chatlist', (req, res) => {
  ChatList.find({}, (err, allChat) => {
    if (err) {
      console.log(err);
    } else {
      res.json(allChat);
    }
  });
});

module.exports = router;
