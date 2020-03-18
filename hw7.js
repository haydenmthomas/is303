function nameParser(name)
{
    nameArray = name.toLowerCase().replace(/ +/g, "").split("");
    return nameArray;
}


function loveGame()
{
    var iFactor = 1;
    var iPower;
    var sLovePhrase = document.getElementById("lovePhrase").value.toLowerCase().replace(/ +/g, "");
    var iLoveCount = 0;
    //line below calls the nameparser function to split the name into an array of lowercase letters w/out spaces
    var nameArrayOne = nameParser(document.getElementById("personOne").value);
    var nameArrayTwo = nameParser(document.getElementById("personTwo").value);

    alert(nameArrayOne);

    for (var iCount = 0; iCount < nameArrayOne.length; iCount++)
    {
        if (sLovePhrase.includes(nameArrayOne[iCount]))
        {
            iLoveCount++;
        }
    }
    for (var iCount = 0; iCount < nameArrayTwo.length; iCount++)
    {
        if (sLovePhrase.includes(nameArrayTwo[iCount]))
        {
            iLoveCount++;
        }
    }
    if (document.getElementById("communicate").checked)
    {
        iFactor = iFactor + 0.25;
    }
    if (document.getElementById("notSelfish").checked)
    {
        iFactor = iFactor + 0.25;
    }
    if (document.getElementById("serve").checked)
    {
        iFactor = iFactor + 0.25;
    }
    if (document.getElementById("bestFriend").checked)
    {
        iFactor = iFactor + 0.25;
    }
    if (document.getElementById("god").checked)
    {
        iFactor = iFactor + 0.5;
    }

    iPower = Math.ceil(((iLoveCount / sLovePhrase.length) * 22) * iFactor);

    alert(iLoveCount);
    alert(iPower);

    if(iPower >= 100)
    {
        document.getElementById("output").innerHTML = "Perfect Match";
    }
    else if(iPower >= 85)
    {
        document.getElementById("output").innerHTML = "Get Married";

    }
    else if(iPower >= 70)
    {
        document.getElementById("output").innerHTML = "Might Work";

    }
    else
    {
        document.getElementById("output").innerHTML = "Keep Looking";
    }
    
    document.querySelector('.loveHeart').getSVGDocument().getElementById('loveHeart').setAttribute("data-value", iPower);
    return false;
    
}



function loveReset()
{
    document.getElementById("lovePhrase").value = "";
    document.getElementById("lovePhrase").focus();
    document.getElementById("personOne").value = "";
    document.getElementById("personTwo").value = "";
    document.getElementById("communicate").checked = false;
    document.getElementById("notSelfish").checked = false;
    document.getElementById("serve").checked = false;
    document.getElementById("bestFriend").checked = false;
    document.getElementById("god").checked = false;
    document.getElementById("LoveHeart").value = 0;    
}

function drawBar()
{
    var heart = new ldHeart("loveHeart");
    var heart2 = document.getElementsId("loveHeart").ldHeart;
    heart.set("iPower")
}
