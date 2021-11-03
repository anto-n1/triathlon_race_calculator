/**
 * verification.js : verify all things (abstract to improve)
 */

/**
 * Input strings verifications
 */

// Verify the number in mn:sec entered by the user
// Return true or false
function verify_input_pace_mn_sec(input, sport) {

    switch (sport) {
        case "swim":
            regex = new RegExp("^[0]?[0-3][:][0-5][0-9]$");

            if (regex.test(input)) {

                var first_part = input.split(":").shift();
                var second_part = input.split(":").pop();

                first_part = parseInt(first_part);
                second_part = parseInt(second_part);

                if ( (first_part == 0) && (second_part < 45)) {
                    return false;
                } else if ( (first_part >= 3) && (second_part > 0) ) {
                    return false;
                } else {
                    return true;
                }

            } else{
                return false;
            }

        case "bike":
            //regex = new RegExp("^[1-5][0-9][.|,]?[0-9]?$"); If I want to accept comma or dot
            regex = new RegExp("^[1-5][0-9][.]?[0-9]?$");

            if (regex.test(input)) {

                if (input < 15) {
                    return false;
                } else if (input > 50) {
                    return false;
                } else if (input.slice(-1) == ".") {
                    return false;
                } else {
                    return true;
                }
            } else{
                return false;
            }

        case "transition":
            regex = new RegExp("^[0-9]?[0-9][:][0-5][0-9]$");

            if (regex.test(input)) {

                var first_part = input.split(":").shift();
                var second_part = input.split(":").pop();

                first_part = parseInt(first_part);
                second_part = parseInt(second_part);

                if ( (first_part >= 10) && (second_part > 0) ) {
                    return false;
                } else if (first_part > 10) {
                    return false; 
                } else if (second_part > 59) {
                    return false;
                } else {
                    return true;
                }

            } else{
                return false;
            }
        case "run":
            regex = new RegExp("^[0-9]?[0-8][:][0-5][0-9]$");

            if (regex.test(input)) {

                var first_part = input.split(":").shift();
                var second_part = input.split(":").pop();

                first_part = parseInt(first_part);
                second_part = parseInt(second_part);

                if ( (first_part < 2) && (second_part < 40) ) {
                    return false;
                } else if ( (first_part >= 8) && (second_part > 0) ) {
                    return false;
                } else {
                    return true;
                }

            } else{
                return false;
            }
        default:
            console.log("Bad type.")
            return false;
    }
    
}

// Verify that input distances are in good format
// Parameter input is the distance
function verify_input_distance(input) {
    regex = new RegExp("^[0-9.]*$");
    //regex = new RegExp("^[0-9.|,]*$"); // If I want to accept comma or dot

    // Verify also it don't finish with a point
    if ( (regex.test(input)) && (input.slice(-1) != ".") ) {
        return true;
    } else {
        return false;
    }
    
}

/**
 * CSS changes
 */

var hexa_white = "#ffffff"
var hexa_black = "#000000"
var hexa_green = "#50C878"
var hexa_red = "#ff4d4d"
var hexa_blue = "#4682b4"
var hexa_orange = "#edc298"

// Text color become green
function change_css_green_text(element) {
    document.getElementById(element).style.color = hexa_green;
}

// Text color become red
function change_css_red_text(element) {
    document.getElementById(element).style.color = hexa_red; 
}

function change_css_black_text(element) {
    if (document.documentElement.getAttribute("theme") == "dark") {
        document.getElementById(element).style.color = hexa_white; 
    } else {
        document.getElementById(element).style.color = hexa_black; 
    }
}

function change_css_white_text(element) {
    document.getElementById(element).style.color = hexa_white;
}

// Text color become green then black
function change_css_green_then_black_text(element) {
    document.getElementById(element).style.color = hexa_green;
    // Reuse black text color after 2 sec in green
    setTimeout(function () {
        if (document.documentElement.getAttribute("theme") == "dark") {
            document.getElementById(element).style.color = hexa_white;
        } else {
            document.getElementById(element).style.color = hexa_black;
        }
    }, 400);
}

// Text color become black
function change_css_black_text(element) {
    if (document.documentElement.getAttribute("theme") == "dark") {
        document.getElementById(element).style.color = hexa_white;
    } else {
        document.getElementById(element).style.color = hexa_black;
    }
}

// Text color become black
function change_css_black_text_no_verif(element) {
        document.getElementById(element).style.color = hexa_black;
}



// Bottom line become green then blue
function change_css_green_then_blue_bottom_line(element) {
    document.getElementById(element).style.borderBottom = "2px solid " + hexa_green;
    // Reuse black text color after 2 sec in green
    setTimeout(function () {
        if (document.documentElement.getAttribute("theme") == "dark") {
            document.getElementById(element).style.borderBottom = "1px solid " + hexa_orange;
        } else {
            document.getElementById(element).style.borderBottom = "1px solid " + hexa_blue;
        }
    }, 400);
}

// Bottom line become red
function change_css_red_bottom_line(element) {
    document.getElementById(element).style.borderBottom = "2px solid " + hexa_red; 
}

// Bottom line become blue
function change_css_blue_bottom_line(element) {
    if (document.documentElement.getAttribute("theme") == "dark") {
        document.getElementById(element).style.borderBottom = "1px solid " + hexa_orange; 
    } else {
        document.getElementById(element).style.borderBottom = "1px solid " + hexa_blue; 
    }
}

function change_css_blue_bottom_line_no_verif(element) {
    document.getElementById(element).style.borderBottom = "1px solid " + hexa_blue;  
}

function change_css_orange_bottom_line(element) {
    document.getElementById(element).style.borderBottom = "1px solid " + hexa_orange; 
}