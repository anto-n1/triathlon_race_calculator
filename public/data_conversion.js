/**
 * data_conversion.js : (abstract to improve)
 */


/**
 * Swim calculation
 */

// Get swimming pace in seconds for 100 m
function get_swim_pace_sec() {
    var slider_swim = document.getElementById("slider_swim");
    return slider_swim.value;
};

// Get swimming pace in minutes:seconds for 100 m
function get_swim_pace_mn_sec() {

    var pace_sec = get_swim_pace_sec();

    var pace_mn = Math.floor(pace_sec / 60);
    var pace_sec = pace_sec % 60;

    pace_sec = two_decimals(pace_sec);

    pace = (pace_mn + ":" + pace_sec);
    return pace;
};

// Get swim distance in meters
function get_swim_distance() {
    var distance_swim = document.getElementById("input_distance_swim");
    return distance_swim.value
}

// Return time of swimming in seconds
function get_swim_time_sec() {

    var pace = get_swim_pace_sec();
    var distance = get_swim_distance() / 100;

    var time = distance * pace;

    return time;
}

// Return time of swimming in format hour:minutes:seconds
function get_swim_time_hr_mn_sec() {

    var time_sec = get_swim_time_sec();
    var time = secondes_to_hr_mn_sec(time_sec);
    return time;
}

/**
 * Bike calculation
 */

// Get cycling pace in km/h
function get_bike_pace_km_h() {
    var slider_bike = document.getElementById("slider_bike");
    return slider_bike.value
};

// Get cycling distance in km
function get_bike_distance() {
    var distance_bike = document.getElementById("input_distance_bike");
    return distance_bike.value
}

// Return time of cycling in seconds
function get_bike_time_sec() {

    var pace = get_bike_pace_km_h();
    var distance = get_bike_distance();
    var time_hour = distance / pace;
    var time_sec = hour_to_sec(time_hour);
    return time_sec;
}

// Return time of cycling in hr:mn:sec
function get_bike_time_hr_mn_sec() {

    var time_sec = get_bike_time_sec();
    var time = secondes_to_hr_mn_sec(time_sec);

    return time;
}

// Return time of running in format hour:minutes:seconds
function get_run_time_hr_mn_sec() {

    var time_sec = get_run_time_sec();
    var time = secondes_to_hr_mn_sec(time_sec);

    return time;
}

/**
 * Run calculation
 */

// Get running pace in seconds for 1 km
function get_run_pace_sec() {
    var slider_run = document.getElementById("slider_run");
    return slider_run.value
};

// Get running pace in minutes:seconds for 1 km
// Return a string
function get_run_pace_mn_sec() {

    var pace_sec = get_run_pace_sec();

    var pace_mn = Math.floor(pace_sec / 60);
    var pace_sec = pace_sec % 60;

    pace_sec = two_decimals(pace_sec);

    pace = (pace_mn + ":" + pace_sec);

    return pace;
};

// Get running pace in kilometres/hour
function get_run_pace_kmh() {

    var pace_sec = get_run_pace_sec();

    var pace_kmh = 3600 / pace_sec;

    pace_kmh = pace_kmh.toFixed(2);

    return pace_kmh;
};

// Get run distance in meters
function get_run_distance() {
    var distance = document.getElementById("input_distance_run");
    return distance.value
}

// Return time of run in seconds
function get_run_time_sec() {

    var pace = get_run_pace_sec();
    var distance = get_run_distance();

    var time = distance * pace;

    return time;
}

/**
 * Transitions calculation
 */

// Get transition time in seconds
// Parameter is id of element on HTML page
function get_transition_time_sec(transition) {
    var slider_transition = document.getElementById(transition);
    return slider_transition.value
};

// Get transition pace in minutes:seconds
// Parameter is id of element on HTML page
function get_transition_time_mn_sec(transition) {

    var pace_sec = get_transition_time_sec(transition);

    var pace_mn = Math.floor(pace_sec / 60);
    var pace_sec = pace_sec % 60;

    pace_sec = two_decimals(pace_sec);

    pace = (pace_mn + ":" + pace_sec);

    return pace;
};

/**
 * Total time
 */

function get_total_time() {

    let time_swim = parseInt(get_swim_time_sec(), 10);
    let time_bike = parseInt(get_bike_time_sec(), 10);
    let time_run = parseInt(get_run_time_sec(), 10);
    let time_t1 = parseInt(get_transition_time_sec("slider_t1"), 10);
    let time_t2 = parseInt(get_transition_time_sec("slider_t2"), 10);

    var seconds = time_swim + time_bike + time_run + time_t1 + time_t2;
    var total = secondes_to_hr_mn_sec(seconds);

    return total;
}

/**
 * Conversions
 */

// Convert from mn:sec to seconds
function mn_sec_to_sec(mn_sec) {

    first_part = mn_sec.split(":").shift();
    second_part = mn_sec.split(":").pop();

    first_part = parseInt(first_part);
    second_part = parseInt(second_part);
    seconds = first_part * 60 + second_part;

    return seconds;
}

// Convert from hour to seconds
function hour_to_sec(hour) {

    seconds = hour * 3600;

    return seconds;
}

// Convert from secondes to houres:minutes:secondes
function secondes_to_hr_mn_sec(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    var hours = Math.floor(sec / 3600); // get hours
    var minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    var seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return hours + ':' + minutes + ':' + seconds; // Return in hr:mn:sec
}

/**
 * Display numbers
 */

// If number has only one number, add a 0 before
// Return a string
function two_decimals(number) {
    if (number.toString().length <= 1) {
        number = ("0" + number);
        return number;
    } else {
        return number;
    }
}

/* Replace comma by a point in number
function replace_comma_by_dot(number) {
    number = String(number).replace(",", ".");
    return number;
}*/