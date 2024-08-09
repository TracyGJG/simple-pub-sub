import pubSubHub from './pub-sub-hub.js';

const PUB_SUB_HUB = pubSubHub();

PUB_SUB_HUB.subscribe('Topic A', (topic, data) => {
  console.log(`1) Topic: ${topic}, Data: ${data}`);
});
PUB_SUB_HUB.subscribe('Topic A', (topic, data) => {
  console.log(`2) Topic: ${topic}, Data: ${data}`);
});
PUB_SUB_HUB.subscribe('Topic B', (topic, data) => {
  console.log(`3) Topic: ${topic}, Data: ${data}`);
});

PUB_SUB_HUB.publish('Topic A', 'ONE');
PUB_SUB_HUB.publish('Topic B', 'TWO');
