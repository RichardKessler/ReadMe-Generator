function generateMarkdown(data) {
    return `
# ${data.title}
# ${data.description}
# ${data.installation}
# ${data.usage}
# ${data.license}
# ${data.contributers}
# ${data.testing}
`;
}
console.log(generateMarkdown);

module.exports = generateMarkdown;