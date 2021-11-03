/**
 * display.js : do stuff for sliders (abstract to improve)
 */


/**
 * Apply CSS on input distances if bad format.
 * 
 * @param {String} inpout_sport "input_distance_swim", "input_distance_run", "input_distance_bike"
 */
function apply_css_input_distance(inpout_sport) {

    input = document.getElementById(inpout_sport);
    value_distance = input.value; // Get input value
    text_color = input.style.color;

    // The string is empty if it is the first change in the input
    // If it is empty, we define the color to black because we know that there is no mistake before
    if (text_color == "") {
        text_color = "black";
    }

    if (verify_input_distance(value_distance)) { // If type is OK
        if (text_color != "black") { // If there is no error (we know because text input is black, no red)
            change_css_green_then_blue_bottom_line(inpout_sport);
            change_css_green_then_black_text(inpout_sport);
        }
    } else {
        change_css_red_bottom_line(inpout_sport);
        change_css_red_text(inpout_sport);
    }

}

/**
 * Change the level of slider when user change input and change CSS if input is not in good format
 */
function apply_css_input_pace_swim_and_apply_on_slider() {

    var slider = document.getElementById("slider_swim");
    var input = document.getElementById("input_swim");
    var pace_value = input.value;

    var text_color = input.style.color;

    if (text_color == "") {
        text_color = "black";
    }

    if (verify_input_pace_mn_sec(pace_value, "swim")) { // If type is OK

        // Apply on slider
        seconds = mn_sec_to_sec(pace_value); // Convert from mn:sec to sec
        slider.value = seconds; // Apply on slider

        // Apply CSS
        if (text_color != "black") {
            change_css_green_then_blue_bottom_line("input_swim");
            change_css_green_then_black_text("input_swim");
        }

    } else {
        change_css_red_text("input_swim");
        change_css_red_bottom_line("input_swim");
    }

}

/**
 * Change the level of slider when user change input and change CSS if input is not in good format
 */
function apply_css_input_pace_t1_and_apply_on_slider() {

    var slider = document.getElementById("slider_t1");
    var input = document.getElementById("input_t1");
    var pace_value = input.value;

    var text_color = input.style.color;

    if (text_color == "") {
        text_color = "black";
    }

    if (verify_input_pace_mn_sec(pace_value, "transition")) { // If type is OK

        // Apply on slider
        seconds = mn_sec_to_sec(pace_value); // Convert from mn:sec to sec
        slider.value = seconds; // Apply on slider

        // Apply CSS
        if (text_color != "black") {
            change_css_green_then_blue_bottom_line("input_t1");
            change_css_green_then_black_text("input_t1");
        }

    } else {
        change_css_red_text("input_t1");
        change_css_red_bottom_line("input_t1");
    }
}

/**
 * Change the level of slider when user change input and change CSS if input is not in good format
 */
function apply_css_input_pace_bike_and_apply_on_slider() {

    var slider = document.getElementById("slider_bike");
    var input = document.getElementById("input_bike");
    var pace_value = input.value;

    var text_color = input.style.color;

    if (text_color == "") {
        text_color = "black";
    }

    if (verify_input_pace_mn_sec(pace_value, "bike")) { // If type is OK

        slider.value = pace_value; // Apply on slider

        // Apply CSS
        if (text_color != "black") {
            change_css_green_then_blue_bottom_line("input_bike");
            change_css_green_then_black_text("input_bike");
        }

    } else {
        change_css_red_text("input_bike");
        change_css_red_bottom_line("input_bike");
    }

}

/**
 * Change the level of slider when user change input and change CSS if input is not in good format
 */
function apply_css_input_pace_t2_and_apply_on_slider() {

    var slider = document.getElementById("slider_t2");
    var input = document.getElementById("input_t2");
    var pace_value = input.value;

    var text_color = input.style.color;

    if (text_color == "") {
        text_color = "black";
    }

    if (verify_input_pace_mn_sec(pace_value, "transition")) { // If type is OK

        // Apply on slider
        seconds = mn_sec_to_sec(pace_value); // Convert from mn:sec to sec
        slider.value = seconds; // Apply on slider

        // Apply CSS
        if (text_color != "black") {
            change_css_green_then_blue_bottom_line("input_t2");
            change_css_green_then_black_text("input_t2");
        }

    } else {
        change_css_red_text("input_t2");
        change_css_red_bottom_line("input_t2");
    }
}

/**
 * Change the level of slider when user change input and change CSS if input is not in good format
 */
function apply_css_input_pace_run_and_apply_on_slider() {

    var slider = document.getElementById("slider_run");
    var input = document.getElementById("input_run");
    var pace_value = input.value;

    var text_color = input.style.color;

    if (text_color == "") {
        text_color = "black";
    }

    if (verify_input_pace_mn_sec(pace_value, "run")) { // If type is OK

        // Apply on slider
        seconds = mn_sec_to_sec(pace_value); // Convert from mn:sec to sec
        slider.value = seconds; // Apply on slider

        // Apply CSS
        if (text_color != "black") {
            change_css_green_then_blue_bottom_line("input_run");
            change_css_green_then_black_text("input_run");
        }

    } else {
        change_css_red_text("input_run");
        change_css_red_bottom_line("input_run");
    }

}

/**
 * Change image Ko-fi button on hover
 */
function on_hover() {
    if (document.documentElement.getAttribute("theme") == "dark") {
        document.getElementById("buy_me_a_coffee_img").setAttribute("src", "buy_me_a_coffee_hover_dark.png");
    } else {
        document.getElementById("buy_me_a_coffee_img").setAttribute("src", "buy_me_a_coffee_hover_light.png");
    }
}

/**
 * Reload original image Ko-fi button when mouse is not on button anymore
 */
function off_hover() {
    document.getElementById("buy_me_a_coffee_img").setAttribute("src", "buy_me_a_coffee.png");
}

// Preload images for ko-fi when hover
var img = new Image();
img.src = "buy_me_a_coffee_hover_dark.png";
var img = new Image();
img.src = "buy_me_a_coffee_hover_light.png";

// Wait for loading all page
window.addEventListener("DOMContentLoaded", (event) => {

    /**
     * Switch between metric and imperial units
     */

    var select = document.getElementById("unit_distances");

    var distance_unit_swim = document.getElementById("distance_unit_swim");
    var speed_unit_swim = document.getElementById("speed_unit_swim");
    var distance_unit_bike = document.getElementById("distance_unit_bike");
    var speed_unit_bike = document.getElementById("speed_unit_bike");
    var distance_unit_run = document.getElementById("distance_unit_run");
    var speed_unit_run = document.getElementById("speed_unit_run");
    var speed_unit_run_2 = document.getElementById("speed_unit_run_2");

    if ((sessionStorage.getItem("unit") == null) || (sessionStorage.getItem("unit") == "metric")) {

        sessionStorage.setItem("unit", "metric"); // By default : metric
        select.selectedIndex = "0"; // Apply value on select button

        distance_unit_swim.innerHTML = "m";
        speed_unit_swim.innerHTML = "mn:s/100m";
        distance_unit_bike.innerHTML = "km";
        speed_unit_bike.innerHTML = "km/h";
        distance_unit_run.innerHTML = "km";
        speed_unit_run.innerHTML = "mn:s/km";
        speed_unit_run_2.innerHTML = "km/h";

    } else if (sessionStorage.getItem("unit") == "imperial") {

        sessionStorage.setItem("unit", "imperial");
        select.selectedIndex = "1"; // Apply value on select button

        distance_unit_swim.innerHTML = "y";
        distance_unit_bike.innerHTML = "mi";
        distance_unit_run.innerHTML = "mi";
        speed_unit_swim.innerHTML = "mn:s/100y";
        speed_unit_bike.innerHTML = "mi/h";
        speed_unit_run.innerHTML = "mn:s/mi";
        speed_unit_run_2.innerHTML = "mi/h";
    }

    select.addEventListener("change", (event) => {

        if (select.value == "imperial") {

            sessionStorage.setItem("unit", "imperial");
            select.selectedIndex = "1"; // Apply value on select button

            distance_unit_swim.innerHTML = "y";
            distance_unit_bike.innerHTML = "mi";
            distance_unit_run.innerHTML = "mi";
            speed_unit_swim.innerHTML = "mn:s/100y";
            speed_unit_bike.innerHTML = "mi/h";
            speed_unit_run.innerHTML = "mn:s/mi";
            speed_unit_run_2.innerHTML = "mi/h";
        } else {

            sessionStorage.setItem("unit", "metric");
            select.selectedIndex = "0"; // Apply value on select button

            distance_unit_swim.innerHTML = "m";
            distance_unit_bike.innerHTML = "km";
            distance_unit_run.innerHTML = "km";
            speed_unit_swim.innerHTML = "mn:s/100m";
            speed_unit_bike.innerHTML = "km/h";
            speed_unit_run.innerHTML = "mn:s/km";
            speed_unit_run_2.innerHTML = "km/h";
        }
    });

    // Element in page where swimming time is displayed
    var value_time_total = document.getElementById("display_time_total");
    value_time_total.innerHTML = get_total_time();

    /**
     * Swim events updates
     */

    // Swimming slider input
    var slider_swim = document.getElementById("slider_swim");

    // Swimming distance input
    var input_distance_swim = document.getElementById("input_distance_swim");

    // Swimming pace input
    var input_pace_swim = document.getElementById("input_swim");

    // Element in page where swimming time is displayed
    var value_time_swim = document.getElementById("display_time_swim");

    // Display default value for swimming time on page
    // When arriving on page : display data
    value_time_swim.innerHTML = get_swim_time_hr_mn_sec(); // Display swim time
    input_pace_swim.value = get_swim_pace_mn_sec(); // Display input swim pace with data slider

    // If slider change : apply changes on all component
    slider_swim.addEventListener("input", function () {

        // Display changes in realtime when the slider moves
        slider_swim.oninput = function () {

            if (isNaN(input_distance_swim.value)) { // If input distance is not a number, print an error message

                value_time_swim.innerHTML = "Input error";
                value_time_total.innerHTML = "Input error, please verify your swimming distance.";
                input_pace_swim.value = get_swim_pace_mn_sec(); // Display input pace value anyway

            } else { // Else (if distance is a number)

                change_css_black_text("input_swim"); // Apply good CSS because slider data is trusted
                change_css_blue_bottom_line("input_swim");

                input_pace_swim.value = get_swim_pace_mn_sec();
                value_time_swim.innerHTML = get_swim_time_hr_mn_sec(); // Display swim time
                value_time_total.innerHTML = get_total_time(); // Display total time
            }
        }
    });

    // If input pace change : apply on all components
    input_pace_swim.addEventListener("input", function () {

        if (verify_input_pace_mn_sec(input_pace_swim.value, "swim")) { // If type is OK
            value_time_swim.innerHTML = get_swim_time_hr_mn_sec(); // Display swim time
            value_time_total.innerHTML = get_total_time(); // Display total time
        } else {
            value_time_swim.innerHTML = "Input error";
            value_time_total.innerHTML = "Input error, please verify your swimming pace.";
        }

    });

    // If input distance change : apply on all components
    input_distance_swim.addEventListener("input", function () {

        if (verify_input_distance(input_distance_swim.value)) { // If type is OK
            value_time_swim.innerHTML = get_swim_time_hr_mn_sec(); // Display swim time
            value_time_total.innerHTML = get_total_time(); // Display total time
        } else {
            value_time_swim.innerHTML = "Input error";
            value_time_total.innerHTML = "Input error, please verify your swimming distance.";
        }

    });

    /**
     * Transition 1 events updates
     */

    // Transition 1 slider
    var slider_t1 = document.getElementById("slider_t1");

    // Element in page where run time is displayed
    var value_time_t1 = document.getElementById("display_time_t1");

    // Pace of run input
    var input_time_t1 = document.getElementById("input_t1");

    // Display default value for transition 1 time on page
    // When arriving on page : display data
    value_time_t1.innerHTML = get_transition_time_mn_sec("slider_t1"); // Display transition 1 time
    input_time_t1.value = get_transition_time_mn_sec("slider_t1"); // Display input run pace with data slider

    // If slider change : apply changes on all component
    slider_t1.addEventListener("input", function () {

        // Display changes in realtime when the slider moves
        slider_t1.oninput = function () {

            change_css_black_text("input_t1"); // Apply good CSS because slider data is trusted
            change_css_blue_bottom_line("input_t1");

            input_time_t1.value = get_transition_time_mn_sec("slider_t1");
            value_time_t1.innerHTML = get_transition_time_mn_sec("slider_t1"); // Display run time
            value_time_total.innerHTML = get_total_time(); // Display total time
        }
    });

    // If input pace change : apply on all components
    input_time_t1.addEventListener("input", function () {
        if (verify_input_pace_mn_sec(input_time_t1.value, "transition")) { // If type is OK
            value_time_t1.innerHTML = get_transition_time_mn_sec("slider_t1");
            value_time_total.innerHTML = get_total_time(); // Display total time

        } else {
            value_time_t1.innerHTML = "Input error";
            value_time_total.innerHTML = "Input error, please verify your transition 1 pace.";
        }
    });

    /**
     * Bike events updates
     */

    // bike input
    var slider_bike = document.getElementById("slider_bike");

    // Distance of bike input
    var input_distance_bike = document.getElementById("input_distance_bike");

    // Element in page where bike time is displayed
    var value_time_bike = document.getElementById("display_time_bike");

    // Pace of bike input
    var input_pace_bike = document.getElementById("input_bike");

    // Display default value for cycling time on page
    // When arriving on page : display data
    value_time_bike.innerHTML = get_bike_time_hr_mn_sec(); // Display bike time
    input_pace_bike.value = get_bike_pace_km_h(); // Display input bike pace with data slider

    // If slider change : apply changes on all component
    slider_bike.addEventListener("input", function () {

        // Display changes in realtime when the slider moves
        slider_bike.oninput = function () {

            if (isNaN(input_distance_bike.value)) { // If input distance is not a number, print an error message

                value_time_bike.innerHTML = "Input error";
                value_time_total.innerHTML = "Input error, please verify your cycling distance.";
                input_pace_bike.value = get_bike_pace_km_h();

            } else {

                input_pace_bike.value = get_bike_pace_km_h();
                value_time_bike.innerHTML = get_bike_time_hr_mn_sec(); // Display bike time
                value_time_total.innerHTML = get_total_time(); // Display total time

                change_css_black_text("input_bike"); // Apply good CSS because slider data is trusted
                change_css_blue_bottom_line("input_bike");
            }

        }
    });

    // If input pace change : apply on all components
    input_pace_bike.addEventListener("input", function () {
        if (verify_input_pace_mn_sec(input_pace_bike.value, "bike")) { // If type is OK
            value_time_bike.innerHTML = get_bike_time_hr_mn_sec(); // Display bike time
            value_time_total.innerHTML = get_total_time(); // Display total time

        } else {
            value_time_bike.innerHTML = "Input error";
            value_time_total.innerHTML = "Input error, please verify your cycling pace.";
        }
    });

    // If input distance change : apply on all components
    input_distance_bike.addEventListener("input", function () {
        if (verify_input_distance(input_distance_bike.value)) { // If type is OK
            value_time_bike.innerHTML = get_bike_time_hr_mn_sec(); // Display bike time
            value_time_total.innerHTML = get_total_time(); // Display total time

        } else {
            value_time_bike.innerHTML = "Input error";
            value_time_total.innerHTML = "Input error, please verify your cycling distance.";
        }
    });

    /**
     * Transition 2 events updates
     */

    // Transition 2 slider
    var slider_t2 = document.getElementById("slider_t2");

    // Element in page where run time is displayed
    var value_time_t2 = document.getElementById("display_time_t2");

    // Pace of run input
    var input_time_t2 = document.getElementById("input_t2");

    // Display default value for transition 1 time on page
    // When arriving on page : display data
    value_time_t2.innerHTML = get_transition_time_mn_sec("slider_t2"); // Display transition 1 time
    input_time_t2.value = get_transition_time_mn_sec("slider_t2"); // Display input run pace with data slider

    // If slider change : apply changes on all component
    slider_t2.addEventListener("input", function () {

        // Display changes in realtime when the slider moves
        slider_t2.oninput = function () {

            change_css_black_text("input_t1"); // Apply good CSS because slider data is trusted
            change_css_blue_bottom_line("input_t1");

            input_time_t2.value = get_transition_time_mn_sec("slider_t2");
            value_time_t2.innerHTML = get_transition_time_mn_sec("slider_t2"); // Display run time
            value_time_total.innerHTML = get_total_time(); // Display total time
        }
    });

    // If input pace change : apply on all components
    input_time_t2.addEventListener("input", function () {
        if (verify_input_pace_mn_sec(input_time_t2.value, "transition")) { // If type is OK
            value_time_t2.innerHTML = get_transition_time_mn_sec("slider_t2"); // Display run time
            value_time_total.innerHTML = get_total_time(); // Display total time

        } else {
            value_time_t2.innerHTML = "Input error";
            value_time_total.innerHTML = "Input error, please verify your transition 2 pace.";
        }
    });

    /**
     * Run events updates
     */

    // run input
    var slider_run = document.getElementById("slider_run");

    // Distance of run input
    var input_distance_run = document.getElementById("input_distance_run");

    // Element in page where run time is displayed
    var value_time_run = document.getElementById("display_time_run");

    // Pace of run input
    var input_pace_run = document.getElementById("input_run");

    // Pace of run km/h
    var display_pace_run_km_h = document.getElementById("display_run_value_kmh");

    // Display default value for run time on page
    // When arriving on page : display data
    value_time_run.innerHTML = get_run_time_hr_mn_sec(); // Display run time
    input_pace_run.value = get_run_pace_mn_sec(); // Display input run pace with data slider
    display_pace_run_km_h.innerHTML = get_run_pace_kmh(); // Display run pace in km/h

    // If slider change : apply changes on all component
    slider_run.addEventListener("input", function () {

        // Display changes in realtime when the slider moves
        slider_run.oninput = function () {

            if (isNaN(input_distance_run.value)) { // If input distance is not a number, print an error message

                value_time_run.innerHTML = "Input error";
                value_time_total.innerHTML = "Input error, please verify your running distance.";

                display_pace_run_km_h.innerHTML = get_run_pace_kmh(); // Display run pace in km/h
                input_pace_run.value = get_run_pace_mn_sec();

            } else {

                input_pace_run.value = get_run_pace_mn_sec();
                value_time_run.innerHTML = get_run_time_hr_mn_sec(); // Display run time
                display_pace_run_km_h.innerHTML = get_run_pace_kmh(); // Display run pace in km/h
                value_time_total.innerHTML = get_total_time(); // Display total time

                change_css_black_text("input_run"); // Apply good CSS because slider data is trusted
                change_css_blue_bottom_line("input_run");
            }
        }
    });

    // If input pace change : apply on all components
    input_pace_run.addEventListener("input", function () {

        if (verify_input_pace_mn_sec(input_pace_run.value, "run")) { // If type is OK

            value_time_run.innerHTML = get_run_time_hr_mn_sec(); // Display run time
            display_pace_run_km_h.innerHTML = get_run_pace_kmh(); // Display run pace in km/h
            value_time_total.innerHTML = get_total_time(); // Display total time

        } else {
            value_time_run.innerHTML = "Input error";
            value_time_total.innerHTML = "Input error, please verify your running pace.";
        }
    });

    // If input distance change : apply on all components
    input_distance_run.addEventListener("input", function () {

        if (verify_input_distance(input_distance_run.value)) { // If type is OK
            value_time_run.innerHTML = get_run_time_hr_mn_sec(); // Display run time
            display_pace_run_km_h.innerHTML = get_run_pace_kmh(); // Display run pace in km/h
            value_time_total.innerHTML = get_total_time(); // Display total time

        } else {
            value_time_run.innerHTML = "Input error";
            value_time_total.innerHTML = "Input error, please verify your running distance.";
        }
    });

    /**
     * Distances buttons
     * When the user click on a distance button, input distances and times have to
     * change to match the distance value
     */

    button_distance_super_sprint = document.getElementById("choose_distances_super_sprint");
    button_distance_sprint = document.getElementById("choose_distances_sprint");
    button_distance_olympic = document.getElementById("choose_distances_olympic");
    button_distance_half_ironman = document.getElementById("choose_distances_half_ironman");
    button_distance_ironman = document.getElementById("choose_distances_ironman");
    button_distance_choice = document.getElementById("choose_distances_choice");

    // When click on super sprint distance button
    button_distance_super_sprint.addEventListener("click", function () {
        if (sessionStorage.getItem("unit") == "imperial") {
            input_distance_swim.value = "410";
            input_distance_bike.value = "6.2";
            input_distance_run.value = "1.5";
        } else {
            input_distance_swim.value = "400";
            input_distance_bike.value = "10";
            input_distance_run.value = "2.5";
        }
        value_time_swim.innerHTML = get_swim_time_hr_mn_sec(); // Display swimming time
        value_time_bike.innerHTML = get_bike_time_hr_mn_sec(); // Display cycling time
        value_time_run.innerHTML = get_run_time_hr_mn_sec(); // Display running time
        value_time_total.innerHTML = get_total_time(); // Display total time
        // TODO : Add change css input distances
    });

    // When click on sprint distance button
    button_distance_sprint.addEventListener("click", function () {
        if (sessionStorage.getItem("unit") == "imperial") {
            input_distance_swim.value = "820";
            input_distance_bike.value = "12.4";
            input_distance_run.value = "3.1";
        } else {
            input_distance_swim.value = "750";
            input_distance_bike.value = "20";
            input_distance_run.value = "5";
        }
        value_time_swim.innerHTML = get_swim_time_hr_mn_sec(); // Display swimming time
        value_time_bike.innerHTML = get_bike_time_hr_mn_sec(); // Display cycling time
        value_time_run.innerHTML = get_run_time_hr_mn_sec(); // Display running time
        value_time_total.innerHTML = get_total_time(); // Display total time
    });

    // When click on olympic distance button
    button_distance_olympic.addEventListener("click", function () {
        if (sessionStorage.getItem("unit") == "imperial") {
            input_distance_swim.value = "1640";
            input_distance_bike.value = "24.9";
            input_distance_run.value = "6.2";
        } else {
            input_distance_swim.value = "1500";
            input_distance_bike.value = "40";
            input_distance_run.value = "10";
        }
        value_time_swim.innerHTML = get_swim_time_hr_mn_sec(); // Display swimming time
        value_time_bike.innerHTML = get_bike_time_hr_mn_sec(); // Display cycling time
        value_time_run.innerHTML = get_run_time_hr_mn_sec(); // Display running time
        value_time_total.innerHTML = get_total_time(); // Display total time
    });

    // When click on half ironman distance button
    button_distance_half_ironman.addEventListener("click", function () {
        if (sessionStorage.getItem("unit") == "imperial") {
            input_distance_swim.value = "2078";
            input_distance_bike.value = "55.9";
            input_distance_run.value = "13.1";
        } else {
            input_distance_swim.value = "1900";
            input_distance_bike.value = "90";
            input_distance_run.value = "21.1";
        }
        value_time_swim.innerHTML = get_swim_time_hr_mn_sec(); // Display swimming time
        value_time_bike.innerHTML = get_bike_time_hr_mn_sec(); // Display cycling time
        value_time_run.innerHTML = get_run_time_hr_mn_sec(); // Display running time
        value_time_total.innerHTML = get_total_time(); // Display total time
    });

    // When click on ironman distance button
    button_distance_ironman.addEventListener("click", function () {
        if (sessionStorage.getItem("unit") == "imperial") {
            input_distance_swim.value = "4156";
            input_distance_bike.value = "112";
            input_distance_run.value = "26.2";
        } else {
            input_distance_swim.value = "3800";
            input_distance_bike.value = "180";
            input_distance_run.value = "42.2";
        }
        value_time_swim.innerHTML = get_swim_time_hr_mn_sec(); // Display swimming time
        value_time_bike.innerHTML = get_bike_time_hr_mn_sec(); // Display cycling time
        value_time_run.innerHTML = get_run_time_hr_mn_sec(); // Display running time
        value_time_total.innerHTML = get_total_time(); // Display total time
    });

    // When click on "choose your distances" distance button
    button_distance_choice.addEventListener("click", function () {
        input_distance_swim.value = "";
        input_distance_bike.value = "";
        input_distance_run.value = "";
        value_time_swim.innerHTML = get_swim_time_hr_mn_sec(); // Display empty swimming time
        value_time_bike.innerHTML = get_bike_time_hr_mn_sec(); // Display empty cycling time
        value_time_run.innerHTML = get_run_time_hr_mn_sec(); // Display empty running time
        value_time_total.innerHTML = get_total_time(); // Display total time
    });

    /**
      * Switch between light and dark mode
      */

    var theme_switcher = document.getElementById("toggle");

    if (sessionStorage.getItem("theme") == "dark") {
        theme_switcher.checked = true;
    } else {
        theme_switcher.checked = false;
    }

    // Check to see if Media-Queries are supported
    if (window.matchMedia) {
        // If user hasn't choose his own theme
        if (!(sessionStorage.getItem("toogle_changed"))) {

            // If actuel theme is black, then apply black theme
            if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.setAttribute("theme", "dark");
                theme_switcher.checked = true;
            }

            // Watch for changes in OS dark or light mode and apply it in real time
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', e => {
                document.documentElement.setAttribute("theme", e.matches ? "dark" : "light");
                theme_switcher.checked = e.matches ? true : false;
            });

            // If dark mode is activated manually
            if (sessionStorage.getItem("theme") == "dark") {
                document.documentElement.setAttribute("theme", "dark");
                theme_switcher.checked = true;
            }
        } else {
            document.documentElement.setAttribute("theme", sessionStorage.getItem("theme"));
        }
    }

    // Button switcher     
    var switch_to_theme = "";
    // When our button gets clicked
    theme_switcher.onclick = function () {
        // Get the current selected theme, on the first run
        // it should be `light`
        var current_theme = document.documentElement.getAttribute("theme");

        if (current_theme == "dark") {
            // We apply light theme
            // If we dont re-apply on each input, there are problems when changing theme...
            change_css_blue_bottom_line_no_verif("input_distance_run");
            change_css_blue_bottom_line_no_verif("input_distance_bike");
            change_css_blue_bottom_line_no_verif("input_distance_swim");
            change_css_blue_bottom_line_no_verif("input_run");
            change_css_blue_bottom_line_no_verif("input_bike");
            change_css_blue_bottom_line_no_verif("input_swim");
            change_css_blue_bottom_line_no_verif("input_t1");
            change_css_blue_bottom_line_no_verif("input_t2");

            change_css_black_text_no_verif("input_distance_swim");
            change_css_black_text_no_verif("input_distance_bike");
            change_css_black_text_no_verif("input_distance_run");
            change_css_black_text_no_verif("input_swim");
            change_css_black_text_no_verif("input_bike");
            change_css_black_text_no_verif("input_run");
            change_css_black_text_no_verif("input_t1");
            change_css_black_text_no_verif("input_t2");

            switch_to_theme = "light";

            sessionStorage.setItem("theme", "light");

        } else {
            // We apply dark theme
            change_css_orange_bottom_line("input_distance_run");
            change_css_orange_bottom_line("input_distance_bike");
            change_css_orange_bottom_line("input_distance_swim");
            change_css_orange_bottom_line("input_swim");
            change_css_orange_bottom_line("input_bike");
            change_css_orange_bottom_line("input_run");
            change_css_orange_bottom_line("input_t1");
            change_css_orange_bottom_line("input_t2");

            change_css_white_text("input_distance_swim");
            change_css_white_text("input_distance_bike");
            change_css_white_text("input_distance_run");
            change_css_white_text("input_swim");
            change_css_white_text("input_bike");
            change_css_white_text("input_run");
            change_css_white_text("input_t1");
            change_css_white_text("input_t2");

            switch_to_theme = "dark";

            sessionStorage.setItem("theme", "dark");
        }
        sessionStorage.setItem("toogle_changed", true);

        // Set our currenet theme to the new one
        document.documentElement.setAttribute("theme", switch_to_theme);
    }

    /**
     * Browser language - used to know what language use to display units
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var language = urlParams.get('lang')

    sessionStorage.setItem("lang", language);
    console.log("La langue avant est  : " + sessionStorage.getItem("lang"));

    // Know the language
    if (sessionStorage.getItem("lang") == "null") {
        language = navigator.language;
        sessionStorage.setItem("lang", language);
        console.log("La langue est 1 : " + sessionStorage.getItem("lang"));
    }

    document.getElementById("language_en_button").addEventListener("click", function () {
        language = "en";
        sessionStorage.setItem("lang", language);
        console.log("La langue est 2 : " + sessionStorage.getItem("lang"));
    });

    document.getElementById("language_fr_button").addEventListener("click", function () {
        language = "fr";
        sessionStorage.setItem("lang", language);
        console.log("La langue est 3 : " + sessionStorage.getItem("lang"));
    });

    //console.log("La langue est 2 : " + sessionStorage.getItem("lang"));*/

});
