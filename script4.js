function calculateSolarPower() {
    var panelPower = document.getElementById("panelPower").value;
    var panelNumber = document.getElementById("panelNumber").value;
    var sunlightHours = document.getElementById("sunlightHours").value;
    
    var totalPower = panelPower * panelNumber * sunlightHours;
    
    document.getElementById("result").innerHTML = "Total Solar Power Generated: " + totalPower + " Watt-hours per day";
  }
// code by vinay