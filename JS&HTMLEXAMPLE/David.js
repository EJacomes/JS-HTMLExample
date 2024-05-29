function SumOfRandomNums()
{
    let Roll1 = Math.floor(Math.random() * 10);

    let Roll2 = Math.floor(Math.random() * 10);

    let Total = Roll1 + Roll2;

    document.getElementById('another-p').innerHTML = Total;
}

const button2 = document.getElementById('another-button');
if (button2)
    {
        button2.addEventListener('click', SumOfRandomNums);
    }