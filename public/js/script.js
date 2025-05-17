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


function requestDeviceOrientation()
{
    if ('DeviceOrientationEvent' in window)
    {
        window.addEventListener('deviceorientation', handleOrientation)
    }
    else 
    {
        alert('not supported')
        window.addEventListener('deviceorientation', handleOrientation)
    }
}