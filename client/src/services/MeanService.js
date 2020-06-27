const address = 'http://localhost:4000';
const module = 'mean';
const route = `${address}/${module}`;

async function createMean(meanName) {
    return fetch(`${route}`, {
        method: 'POST',
        body: JSON.stringify({ name: meanName }),
        headers: { 'content-type': 'application/json' },
    });
}

exports.createMean = createMean;
