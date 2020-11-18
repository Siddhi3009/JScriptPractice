function CheckNameUsingRegex(name)
{
    let nameRegex = new RegExp(/^[A-Z][a-z]{2,}$/);
    if(nameRegex.test(name))
    console.log("Valid name");
    else
    console.log("Invalid name");
}
CheckNameUsingRegex("Indal");