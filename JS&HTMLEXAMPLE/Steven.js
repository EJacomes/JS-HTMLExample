function goHome()
{
    let HomeMessage = "Steven is back home!";
    document.getElementById('home').innerHTML = HomeMessage;
}

const button3 = document.getElementById('ButtonThree');

if (button3)
    {
        button3.addEventListener('click', goHome);
    }

//click should be click not Click