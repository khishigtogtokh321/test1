function generateCV(){
    const image_select = document.getElementById("image_select");
    const student_code = document.getElementById("student_code");
    const hutulbur = document.getElementById("hutulbur");
    const angi = document.getElementById("angi");
    const urgiin_owog = document.getElementById("urgiin_owog");
    const owog = document.getElementById("owog");
    const fname = document.getElementById("fname");
    const number = document.getElementById("number");
    const gender = document.getElementById("gender");
    const phone_number = document.getElementById("phone_number");
    const email_address = document.getElementById("email_address");
    const facebook_address = document.getElementById("facebook_address");
    const home_address = document.getElementById("home_address");
    const bolowsrol = document.getElementById("bolowsrol");
    const family = document.getElementById("family");
    const ambul_ner = document.getElementById("ambul_ner");
    const sadan = document.getElementById("sadan");
    const ambul_name = document.getElementById("ambul_name");
    const sadan_turul = document.getElementById("sadan_turul");
    const ambulner = document.getElementById("ambulner");
    const skill1 = document.getElementById("skill1");
    const level1 = document.getElementById("level1");
    const skill2 = document.getElementById("skill2");
    const level2 = document.getElementById("level2");
    const skill3 = document.getElementById("skill3");
    const level3 = document.getElementById("level3");
    const ajil_turshlaga = document.getElementById("ajiliin turshlaga");
    const unshih_angli = document.getElementById("unshih_angli");
    const yrih_angli = document.getElementById("yrih_angli");
    const bicih_angli = document.getElementById("bicih_angli");
    const unshih_oros = document.getElementById("unshih oros");
    const yrih_oros = document.getElementById("yrih oros").value;
    const bicih_oros = document.getElementById("bicih oros").value;
    const hobi = document.getElementById("hobi").value;
    const aviyas = document.getElementById("aviyas").value;
    const shagnal1 = document.getElementById("shagnal1").value;
    const uramshuulal1 = document.getElementById("uramshuulal 1").value;
    const shagnal2 = document.getElementById("shagnal2").value;
    const uramshuulal2 = document.getElementById("uramshuulal 2").value;
    
   

    const result = "<table border='1' cellpadding='5'>" +
    "<tr><td><strong>Нэр</strong></td><td>" + fname + "</td></tr>" +
    "<tr><td><strong>Имэйл</strong></td><td>" + email_address + "</td></tr>" +
    "<tr><td><strong>Утас</strong></td><td>" + phone_number + "</td></tr>" +
    "<tr><td><strong>Мэргэжил</strong></td><td>" + hutulbur + "</td></tr>" +
  "</table>";

    document.getElementById("cvDisplay").innerHTML = result;

}



