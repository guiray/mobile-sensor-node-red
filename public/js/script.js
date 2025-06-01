// Connect to node-red websocket
const ws_URL = `wss://${window.location.hostname}:1880/ws/accelerometer`;
let socket = new WebSocket(ws_URL);

socket.onopen = function()
{
    alert('Connected to Node-Red');
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
    console.log(e)

    let x = e.beta
    let y = e.gamma
    let z = e.alpha

    document.getElementById('rotationX').textContent = x;
    document.getElementById('rotationY').textContent = y;
    document.getElementById('rotationZ').textContent = z;
}




