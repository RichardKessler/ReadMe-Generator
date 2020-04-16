// A function that takes the data values of the user inputs and enters them into the README file with a good structure
// The GitHub section gets the avatar of the user when they enter their GitHub Username
function generateMarkdown(data) {
    return `
# Title
${data.title}

# Description
 ${data.description}

# Installation
 ${data.installation}

# Usage
 ${data.usage}

# License
 ${data.license}

# Contibuters
 ${data.contributers}

# Testing
 ${data.testing}

 # GitHub
 ![Image description](https://avatars.githubusercontent.com/${data.github}?size=100)
`;
}

module.exports = generateMarkdown;