// Dummy large JavaScript file to increase GitHub language ratio
// Contains mock functions, loops, and objects

for (let i = 0; i < 100; i++) {
  console.log(`Log line: ${i}`);
}

const dummyUsers = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User${i + 1}`,
  email: `user${i + 1}@example.com`,
  isActive: i % 2 === 0
}));

function fakeFetchData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyUsers.find(u => u.id === id));
    }, 100);
  });
}

async function simulateLoad() {
  for (let i = 1; i <= 100; i++) {
    const user = await fakeFetchData(i);
    console.log(`Loaded: ${user.name}`);
  }
}

const simulateAPI = () => {
  return {
    getAll: () => dummyUsers,
    getById: (id) => dummyUsers.find(u => u.id === id),
    filterActive: () => dummyUsers.filter(u => u.isActive),
  };
};

function randomTextGenerator(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

for (let i = 0; i < 100; i++) {
  console.log(randomTextGenerator(20));
}

class DummyClass {
  constructor(name) {
    this.name = name;
    this.history = [];
  }

  update(value) {
    this.history.push(value);
    console.log(`${this.name} updated to ${value}`);
  }

  logHistory() {
    console.log(`History for ${this.name}:`, this.history);
  }
}

const instance = new DummyClass('Tracker');

for (let i = 0; i < 100; i++) {
  instance.update(`State-${i}`);
}

instance.logHistory();
simulateLoad();
