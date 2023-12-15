// filename: complexCode.js
// This code demonstrates a complex implementation of a chat application using JavaScript.

// Helper functions
function generateMessageId() {
  return Math.floor(Math.random() * 1000000);
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

// Classes
class User {
  constructor(username) {
    this.username = username;
  }
}

class Message {
  constructor(user, content) {
    this.id = generateMessageId();
    this.user = user;
    this.content = content;
    this.timestamp = new Date();
  }
}

class ChatRoom {
  constructor() {
    this.users = new Map();
    this.messages = [];
  }

  addUser(user) {
    this.users.set(user.username, user);
  }

  removeUser(username) {
    this.users.delete(username);
  }

  sendMessage(user, content) {
    if (!this.users.has(user.username)) {
      console.error(`User ${user.username} is not part of this chat room.`);
      return;
    }

    const message = new Message(user, content);
    this.messages.push(message);
  }

  getMessages() {
    return this.messages;
  }
}

// Usage
const chatRoom = new ChatRoom();

const user1 = new User('John');
const user2 = new User('Emma');

chatRoom.addUser(user1);
chatRoom.addUser(user2);

chatRoom.sendMessage(user1, 'Hello, Emma!');
chatRoom.sendMessage(user2, 'Hey, John!');

console.log('Messages in the chat room:');
chatRoom.getMessages().forEach(message => {
  const formattedDate = formatDate(message.timestamp);
  console.log(`[${formattedDate}] ${message.user.username}: ${message.content}`);
});
