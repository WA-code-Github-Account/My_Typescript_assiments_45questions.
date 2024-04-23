//Written by: Taha Ahmed
// Roll No. : 00298983


// Set describe_city Fucntion
function describe_city(cityName: string, country: string = 'Default Country.\n') {
    console.log(`\n${cityName} is in ${country}\n`);
  }
  
  // Result
  describe_city('Karachi', 'Pakistan.');
  describe_city('Dubai', 'UAE.');
  describe_city('London');