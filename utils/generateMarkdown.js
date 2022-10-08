//function created to extract the badge for the license
function renderLicenseBadge(license) {
    let licenseBadge = '';
      if (license === 'Apache') {
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
      } else if (license === 'GNU-v3') {
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
      } else if (license === 'MIT') {
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
      } else if (license === 'BSD 2-Clause') {
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`
      } else if (license === 'BSD 3-Clause') {
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
      } else if (license === 'Boost') {
        licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
      } else if (license === 'Creative Commons') {
        licenseBadge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`
      } else if (license === 'IBM') {
        licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
      } else {
        licenseBadge = ''
      }
    return licenseBadge;
  
    //I tried using the ternary operator instead of the if /else statement but could not make it work
    // return licenseBadge = [0] ? `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    //      : licenseBadge = [1] ? `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    //      : licenseBadge = [2] ? `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    //      : licenseBadge = [3] ? `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`
    //      : licenseBadge = [4] ? `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
    //      : licenseBadge = [5] ? `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
    //      : licenseBadge = [6] ? `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`
    //      : licenseBadge = [7] ? `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
    //      : "";
}

//function created to extract the link for the license
function renderLicense(license) {
      let licenseLink = '';
      if (license === 'Apache') {
        licenseLink = `(https://opensource.org/licenses/Apache-2.0)`
      } else if (license === 'GNU-v3') {
        licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
      } else if (license === 'MIT') {
        licenseLink = `(https://opensource.org/licenses/MIT)`
      } else if (license === 'BSD 2-Clause') {
        licenseLink = `(https://opensource.org/licenses/BSD-2-Clause)`
      } else if (license === 'BSD 3-Clause') {
        licenseLink = `(https://opensource.org/licenses/BSD-3-Clause)`
      } else if (license === 'Boost') {
        licenseLink = `(https://www.boost.org/LICENSE_1_0.txt)`
      } else if (license === 'Creative Commons') {
        licenseLink = `(http://creativecommons.org/publicdomain/zero/1.0/)`
      } else if (license === 'IBM') {
        licenseLink = `(https://opensource.org/licenses/IPL-1.0)`
      } else {
        licenseLink = ''
      }
    return licenseLink;

      //I tried using the ternary operator instead of the if /else statement but could not make it work
      //  return licenseLink = [0] ? `(https://opensource.org/licenses/Apache-2.0)`
      //       : licenseLink = [1] ? `(https://www.gnu.org/licenses/gpl-3.0)`
      //       : licenseLink = [2] ? `(https://opensource.org/licenses/MIT)`
      //       : licenseLink = [3] ? `(https://opensource.org/licenses/BSD-2-Clause)`
      //       : licenseLink = [4] ? `(https://opensource.org/licenses/BSD-3-Clause)`
      //       : licenseLink = [5] ? `(https://www.boost.org/LICENSE_1_0.txt)`
      //       : licenseLink = [6] ? `(http://creativecommons.org/publicdomain/zero/1.0/)`
      //       : licenseLink = [7] ? `(https://opensource.org/licenses/IPL-1.0)`
      //       : "";
}

// Function to generate markdown for README
// This is basically the Readme file layout + inserted literals to connect index.js to markdown file
function generateMarkdown(data) {
return `# ${data.title}
### ${renderLicenseBadge(data.license)} 
### Description
> #### ${data.description}
## Table of Contents
- [Project Name](#project_name)
- [How to install it](#installation)
- [Running Tests](#tests)
- [How to use](#usage)
- [Report issues](#issues)
- [Questions](#username)
- [How to make contributions](#contributions)
- [Credits](#credits)
- [License](#license)
### Project Name
> ${data.project_name}
### Installation
> ${data.installation}
### Tests
> ${data.tests}
### Usage
> ${data.usage}
### Questions
Contact me with questions via [GitHub](https://github.com/${data.username}) or send an email to: ${data.email}
### Report Issues
> ${data.issues}
### Contributions
> ${data.contributions}
### Credits
> ${data.credits}
### License
> ${renderLicense(data.license)}`
}

module.exports = generateMarkdown;
