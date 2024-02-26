function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('Karachi');
describe_city('Makkah', 'Saudia Arabia');
describe_city('New Delhi', 'India');
describe_city('Beijing', 'China');
