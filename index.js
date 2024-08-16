import pubSubHub from './pub-sub-hub.js';

// Establish a model instance.
const PUB_SUB_HUB = pubSubHub();

// Subscribe to 'Topic A'
PUB_SUB_HUB.subscribe('Topic A', (topic, data) => {
  console.log(`1) Topic: ${topic}, Data: ${data}`);
});

// Subscribe to 'Topic B'
PUB_SUB_HUB.subscribe('Topic B', (topic, data) => {
  console.log(`2) Topic: ${topic}, Data: ${data}`);
});

// Subscribe to 'Topic B' a second time.
PUB_SUB_HUB.subscribe('Topic B', (topic, data) => {
  console.log(`3) Topic: ${topic}, Data: ${data}`);
});

// Publish a message on Topic A. This is forwarded to a single subscriber.
PUB_SUB_HUB.publish('Topic A', 'ONE');

// Publish a message on Topic B. This is forwarded to two subscribers.
PUB_SUB_HUB.publish('Topic B', 'TWO');
