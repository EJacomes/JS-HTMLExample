function ChangeColor()
{
    const Colors = ["Red", "Green", "White", "Blue", "Orange", "Black", "Yellow", "Purple", "Brown", "Gray", "Pink", "Violet", "Magenta", "Cream", "Gold", "Tan", "Teal", "Cyan", "Peach", "Indigo", "Ruby", "Rose", "Turquoise"];

    let ColorWanted; 

    let ColorSelected = document.getElementById("AskToChange").value; 

    console.log(ColorSelected);

    //place for loop that compares user input to the list with the input and the list selecation being all caps

    for (let i = 0; i < Colors.length; i++)
        {
            if (ColorSelected.toUpperCase() == (Colors[i]).toUpperCase())
                {
                    ColorWanted = Colors[i];
                }
        }

    document.body.style.backgroundColor = ColorWanted;
}

const Button4 = document.getElementById("ColorButton");

if (Button4)
    {
        Button4.addEventListener('click', ChangeColor);
    }