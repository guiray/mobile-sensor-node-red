// Connect to node-red websocket
const ws_URL = `wss://${window.location.hostname}:1880/ws/accelerometer`;
let socket = new WebSocket(ws_URL);

socket.onopen = function()
{
    //alert('Connected to Node-Red');
}

function requestDeviceOrientation()
{
    if ('DeviceOrientationEvent' in window)
    {
        window.addEventListener('deviceorientation', handleOrientation)
    }
    else 
    {
        alert('not supported')
    }
}

function handleOrientation(e)
{
    //console.log(e)

    let x = parseFloat(e.beta.toFixed(2));
    let y = parseFloat(e.gamma.toFixed(2));
    let z = parseFloat(e.alpha.toFixed(2));

    document.getElementById('rotationX').textContent = x;
    document.getElementById('rotationY').textContent = y;
    document.getElementById('rotationZ').textContent = z;

    socket.send(JSON.stringify({
        type: "sensor-data",
        x: x,
        y: y,
        z: z,
        timestamp: Date.now()
    }));
}

function requestSaveValues()
{
    socket.send(JSON.stringify({
        type: "save-request",
        timestamp: Date.now()
    }));
}


