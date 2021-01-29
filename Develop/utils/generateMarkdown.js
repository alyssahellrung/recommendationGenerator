function generateMarkdown(data) {
  return `
  To Whom it May Concern:

  My name is ${data.name}. ${data.introduction} I am writing to give you an honest recommendation for ${data.recname}. ${data.history}
  
  ${data.evaluation}

  In summary, ${data.conclusion} I ${data.rating} ${data.recname} for this position, and I wish ${data.pronoun} luck.

  Thank you for your consideration,
  ${data.name}, ${data.title}
  `;
}

module.exports = generateMarkdown;