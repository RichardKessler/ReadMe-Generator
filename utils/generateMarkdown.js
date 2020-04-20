// A function that takes the data values of the user inputs and enters them into the README file with a good structure
// The GitHub section gets the avatar of the user when they enter their GitHub Username
function generateMarkdown(data) {
    const kebalCaseTitle = data.title.toLowerCase().split(" ").join("-");
    const userAvatar = `https://github.com/${data.github}.png?size=200`;
    const projectURL = `https://github.com/${data.github}/${kebalCaseTitle}`;
    const licenseBadge = `https://img.shields.io/github/license/${data.github}/${kebalCaseTitle}`;
    const repoSize = `https://img.shields.io/github/repo-size/${data.github}/${kebalCaseTitle}?color=Green&style=plastic`;
    const mainLang = `https://img.shields.io/github/languages/top/${data.github}/${kebalCaseTitle}?color=blueviolet&style=plastic`;
    const languageTypes = `https://img.shields.io/github/languages/count/${data.github}/${kebalCaseTitle}?color=red&style=plastic`;

    return `
# ${data.title}

[![GitHub license](${licenseBadge})](${projectURL})
[![GitHub Repo](${repoSize})](${projectURL})
[![Main Repo Language](${mainLang})](${projectURL})
[![Repo Languages](${languageTypes})](${projectURL})

# Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Licnese](#license)
* [Contributers](#contributers)
* [Testing](#testing)


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
 ![Image description](${userAvatar})
`;
}

module.exports = generateMarkdown;