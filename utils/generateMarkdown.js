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