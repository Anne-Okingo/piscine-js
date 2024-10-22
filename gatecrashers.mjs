import { createServer } from 'http';
import { writeFile } from 'fs/promises';
import { Buffer } from 'buffer';

// The list of best friends with access
const authorizedUsers = {
    'Caleb_Squires': 'abracadabra',
    'Tyrique_Dalton': 'abracadabra',
    'Rahima_Young': 'abracadabra'
};

// Function to parse Basic Authentication header
function parseAuthHeader(authHeader) {
    // Expected format: 'Basic base64encodedString'
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');
    return { username, password };
}

// Create the HTTP server
const server = createServer(async (req, res) => {
    const { method, url, headers } = req;

    // Check for authorization
    const authHeader = headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Basic ')) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Authorization Required' }));
        return;
    }

    // Parse credentials from the authorization header
    const { username, password } = parseAuthHeader(authHeader);

    // Check if the credentials are valid
    if (!authorizedUsers[username] || authorizedUsers[username] !== password) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Authorization Required' }));
        return;
    }

    // Handle only POST requests
    if (method === 'POST') {
        const guestName = url.slice(1); // Extract the guest name from the URL

        let body = '';

        // Collect the data from the request body
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', async () => {
            try {
                const guestData = JSON.parse(body);

                // Write the JSON data to a file named after the guest
                const filePath = `./guests/${guestName}.json`;
                await writeFile(filePath, JSON.stringify(guestData, null, 2));

                // Respond with the guest data as JSON
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(guestData));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid JSON format' }));
            }
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Method Not Allowed' }));
    }
});

// Start the server and listen on port 5000
server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
