function preload()
{
img = laodImage('https://govalleykids.com/wp-content/uploads/2020/04/Birthdays.jpg')
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
}

function draw()
{
    image(img, 0, 0, 640, 480);
}