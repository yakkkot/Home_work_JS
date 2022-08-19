// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let Classes = []
function searchClass(element) {
        if(element.className){
            for (const classElement of element.className.split(' ')) {
                if(!Classes.includes(classElement)){
                    Classes.push(classElement);
                }
            }
        }
    if (element.children.length) {
        for (const dytyna of element.children) {
            searchClass(dytyna);
        }
    }
}
searchClass(document.body)
console.log(Classes)