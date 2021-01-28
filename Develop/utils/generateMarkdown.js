function generateMarkdown(data) {
  return `
  To Whom it May Concern:
  ${data.introduction}
  ${data.history}
  ${data.evaluation}
  ${data.conclusion}
  ${data.rating}
  ${data.name}
  
  
  `;
}

module.exports = generateMarkdown;