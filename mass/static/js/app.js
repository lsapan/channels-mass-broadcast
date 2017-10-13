var targetSockets = 200
var numSockets = 0
var connectedSockets = 0

const updateConnectedSockets = function(amount) {
    connectedSockets += amount
    $('#connected').text(connectedSockets)
}

const createSocket = function(id) {
    // Connect to the test WebSocket
    const webSocketBridge = new channels.WebSocketBridge()
    webSocketBridge.connect('/test/')

    // Set up event listeners
    webSocketBridge.socket.addEventListener('open', function() {
        updateConnectedSockets(1)
        console.log(`Socket ${id} up`)
    })

    webSocketBridge.socket.addEventListener('close', function() {
        updateConnectedSockets(-1)
        console.warn(`Socket ${id} down`)
    })

    webSocketBridge.listen(function(data) {
        console.log(`Message ${data} received`)
    })
}

// Create a new socket every 50ms up to targetSockets
const interval = setInterval(() => {
    if (numSockets < targetSockets) {
        createSocket(numSockets)
        numSockets += 1
    } else {
        clearInterval(interval)
        $('#status').text('The test has started. Please check out the JavaScript console to view the results.')
    }
}, 50)
