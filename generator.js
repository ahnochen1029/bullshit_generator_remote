function collection_Trash(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// function collectionPhrase(array) {
//   const index = Math.floor(Math.random() * array.length)
//   return array[index]
// }

function generateTrash(options) {
  //define things user might want
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']




  // create a collection to store things user picked up
  const job = options.jobs
  let collection_task = []
  switch (job) {
    case 'engineer':
      collection_task = task.engineer
      break
    case 'designer':
      collection_task = task.designer
      break
    case 'entrepreneur':
      collection_task = task.entrepreneur
      break
  }

  // start generating
  let collection = []
  collection = collection_Trash(collection_task) + collection_Trash(phrase)

  // return the generated 
  switch (job) {
    case 'engineer':
      return `身為一個工程師${collection}`
    case 'designer':
      return `身為一個設計師${collection}`
    case 'entrepreneur':
      return `身為一個創業家${collection}`
    default:
      return '身為一個使用者點個職業很簡單吧'
  }

}
module.exports = generateTrash


