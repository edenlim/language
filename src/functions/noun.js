export function nominativRules(object){
  const {gender,noun,adjective,article} = object
  console.log(gender, noun, adjective, article)
  let articleWord

  if(article){
    if(gender === 'male'){
      articleWord = 'der'
    } else if (gender === 'female'){
      articleWord = 'die'
    } else if (gender === 'neutral'){
      articleWord = 'das'
    }
  }

  const adjectiveWord = adjective + 'e'
  return `${articleWord} ${adjectiveWord} ${noun}`
}
