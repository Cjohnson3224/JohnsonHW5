/*


   Planisphere Script
   Author: Craig Johnson JR
   Date: April 4th, 2024  

*/

// 1
var timeStr = Time.toLocaleString();

// 2 
document.getElementById("timestamp").innerHTML = timeStr;

// 3
var thisHour = Time.getHours();

// 4
var thisMonth = Time.getMonth();

// 5
var mapNum = (2 * thisMonth + thisHour) % 24;

// 6
var imgStr = "<img src='sd_skyMap" + mapNum + ".png' />";

// 7
var planisphereElement = document.getElementById("planisphere");
planisphereElement.insertAdjacentHTML("afterBegin", imgStr);

// 10
var Time = new Date();

// Create image element
var imgElement = document.createElement("img");
imgElement.src = 'sd_skyMap' + mapNum + '.png';

// Insert the image element 
planisphereElement.insertBefore(imgElement, planisphereElement.firstChild);
